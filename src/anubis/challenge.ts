import { DEFAULT_TIME_BUDGET_MS, solveProofOfWork } from './proof-of-work';

// Anubis (BotStopper by Techaro) is a proof-of-work anti-bot interstitial:
// instead of the page it serves an HTML challenge that a browser solves in
// JavaScript. This module replicates the protocol so a plain `fetch` can earn
// the auth cookie. See: https://github.com/TecharoHQ/anubis

const AUTH_COOKIE_NAME = 'techaro.lol-anubis-auth';
const VERIFY_COOKIE_NAME = 'techaro.lol-anubis-cookie-verification';
const PASS_CHALLENGE_PATH = '/.within.website/x/cmd/anubis/api/pass-challenge';

// Anubis also ships non-hashing challenge methods (metarefresh, preact). Only
// its SHA-256 ones are replicated here; anything else must fail immediately
// rather than burn the whole time budget computing a hash nobody asked for.
const SUPPORTED_ALGORITHMS = ['fast', 'slow'];

// Structural markers, deliberately not the localised body text: the
// interstitial is translated, so matching prose would both miss locales and
// risk false positives on user-generated content that quotes it.
const CHALLENGE_MARKERS = ['id="anubis_challenge"', '/.within.website/x/cmd/anubis/'];

export type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;

interface ParsedChallenge {
  rules: { algorithm: string; difficulty: number };
  challenge: { id: string; randomData: string };
}

export interface ChallengeResult {
  /** Cookie to replay, or `null` when the runtime's own cookie jar holds it. */
  cookie: string | null;
  /** True when Set-Cookie was hidden and the runtime now owns the cookie. */
  platformCookieJar: boolean;
}

export interface PassChallengeParams {
  /** Body of the interstitial page that was served instead of the content. */
  html: string;
  /** Response headers that came with it, carrying the verification cookie. */
  headers: Headers;
  /** The URL that was blocked; used as the redirect target after passing. */
  url: string;
  /** Headers to reuse, so the exchange looks like the original request. */
  requestHeaders?: Headers;
  fetch: FetchLike;
  timeBudgetMs?: number;
}

export const isAnubisChallenge = (html: string): boolean =>
  CHALLENGE_MARKERS.some((marker) => html.includes(marker));

const parseChallenge = (html: string): ParsedChallenge | null => {
  const match = html.match(
    /<script id="anubis_challenge" type="application\/json">([\s\S]*?)<\/script>/
  );
  if (!match) {
    return null;
  }
  try {
    return JSON.parse(match[1].trim()) as ParsedChallenge;
  } catch {
    return null;
  }
};

const readCookie = (headers: Headers, name: string): string | null => {
  if (typeof headers.getSetCookie !== 'function') {
    return null;
  }
  const cookie = headers
    .getSetCookie()
    .map((entry) => entry.split(';', 1)[0])
    .find((pair) => pair.startsWith(`${name}=`) && pair.length > name.length + 1);
  return cookie ?? null;
};

// Set-Cookie is a forbidden response header outside Node, so seeing none on a
// response that certainly carried them means the runtime (browser, React
// Native) is hiding them and keeping the cookies in its own jar instead.
const hidesSetCookie = (headers: Headers): boolean =>
  typeof headers.getSetCookie !== 'function' || headers.getSetCookie().length === 0;

/**
 * Solve the challenge on an interstitial page and exchange it for an Anubis
 * auth cookie. Returns `null` if the challenge could not be passed.
 */
export const passChallenge = async ({
  html: challengeHtml,
  headers: challengeHeaders,
  url,
  requestHeaders,
  fetch,
  timeBudgetMs = DEFAULT_TIME_BUDGET_MS
}: PassChallengeParams): Promise<ChallengeResult | null> => {
  let html = challengeHtml;
  let headers = challengeHeaders;
  let platformCookieJar = false;

  // On a cookie-jar runtime the first request was made without credentials, so
  // the jar never stored Anubis' verification cookie. Ask for a fresh challenge
  // with credentials enabled and let the jar keep it this time.
  if (hidesSetCookie(headers)) {
    platformCookieJar = true;
    const reissued = await fetch(url, {
      credentials: 'include',
      redirect: 'manual',
      headers: requestHeaders
    });
    html = await reissued.text();
    headers = reissued.headers;
  }

  const parsed = parseChallenge(html);
  if (!parsed || !SUPPORTED_ALGORITHMS.includes(parsed.rules.algorithm)) {
    return null;
  }

  const { challenge, rules } = parsed;
  const startedAt = Date.now();
  const solution = await solveProofOfWork(challenge.randomData, rules.difficulty, timeBudgetMs);
  if (!solution) {
    return null;
  }

  const passUrl = new URL(PASS_CHALLENGE_PATH, url);
  passUrl.searchParams.set('id', challenge.id);
  passUrl.searchParams.set('response', solution.hash);
  passUrl.searchParams.set('nonce', String(solution.nonce));
  passUrl.searchParams.set('redir', url);
  passUrl.searchParams.set('elapsedTime', String(Date.now() - startedAt));

  // Anubis requires the verification cookie it set on the interstitial as proof
  // that cookies work; on a jar runtime the runtime itself attaches it.
  const passHeaders = new Headers(requestHeaders);
  const verifyCookie = readCookie(headers, VERIFY_COOKIE_NAME);
  if (verifyCookie) {
    passHeaders.set('Cookie', verifyCookie);
  }

  // `redirect: 'manual'` stops fetch from following the 302 to `redir`, which
  // would discard the Set-Cookie we need to read off this very response.
  const response = await fetch(passUrl.toString(), {
    method: 'GET',
    credentials: platformCookieJar ? 'include' : 'omit',
    redirect: 'manual',
    headers: passHeaders
  });

  const authCookie = readCookie(response.headers, AUTH_COOKIE_NAME);
  if (authCookie) {
    return { cookie: authCookie, platformCookieJar };
  }

  // Nothing to read: either the exchange failed, or we are on a runtime that
  // hides Set-Cookie and has already stored the cookie itself. A 302 to `redir`
  // (status 0 / opaqueredirect in browsers) is Anubis' success signal.
  const passed = response.status === 302 || response.type === 'opaqueredirect';
  return passed && !verifyCookie ? { cookie: null, platformCookieJar } : null;
};
