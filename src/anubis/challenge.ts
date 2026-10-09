import { DEFAULT_TIME_BUDGET_MS, solveProofOfWork } from './proof-of-work';

// Anubis (BotStopper by Techaro) is a proof-of-work anti-bot interstitial:
// instead of the page it serves an HTML challenge that a browser solves in
// JavaScript. This module replicates the protocol so a plain `fetch` can earn
// the auth cookie. See: https://github.com/TecharoHQ/anubis

const AUTH_COOKIE_NAME = 'techaro.lol-anubis-auth';
const VERIFY_COOKIE_NAME = 'techaro.lol-anubis-cookie-verification';
const PASS_CHALLENGE_PATH = '/.within.website/x/cmd/anubis/api/pass-challenge';

// Anubis picks a challenge method per request. The SHA-256 ones make the client
// burn CPU; `metarefresh` instead makes it sit out a declared delay. Anything
// else (e.g. `preact`) needs a real JS runtime and must fail immediately rather
// than burn the whole time budget computing a hash nobody asked for.
const PROOF_OF_WORK_ALGORITHMS = ['fast', 'slow'];
const METAREFRESH_ALGORITHM = 'metarefresh';

// Anubis states the wait in a `Refresh` header or its `<meta>` twin. This is
// only the fallback for a page that omits both, where the exchange URL has to
// be rebuilt from the challenge anyway.
const DEFAULT_METAREFRESH_DELAY_MS = 2000;

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

// Since v1.27 Anubis suffixes its cookie names per instance, e.g.
// `techaro.lol-anubis-auth-6b097436`, so the bare name is only a prefix.
const isCookieNamed = (pair: string, name: string): boolean => {
  const separator = pair.indexOf('=');
  const key = pair.slice(0, separator);
  return (
    separator > 0 && separator < pair.length - 1 && (key === name || key.startsWith(`${name}-`))
  );
};

const readCookie = (headers: Headers, name: string): string | null => {
  if (typeof headers.getSetCookie !== 'function') {
    return null;
  }
  const cookie = headers
    .getSetCookie()
    .map((entry) => entry.split(';', 1)[0])
    .find((pair) => isCookieNamed(pair, name));
  return cookie ?? null;
};

// Set-Cookie is a forbidden response header outside Node, so seeing none on a
// response that certainly carried them means the runtime (browser, React
// Native) is hiding them and keeping the cookies in its own jar instead.
const hidesSetCookie = (headers: Headers): boolean =>
  typeof headers.getSetCookie !== 'function' || headers.getSetCookie().length === 0;

const REFRESH_HEADER_DIRECTIVE = /^\s*(\d+)\s*;\s*url=(.+)$/i;
const REFRESH_META_DIRECTIVE =
  /<meta[^>]+http-equiv=["']?refresh["']?[^>]*content=["'](\d+)[^;]*;\s*url=([^"'>]+)/i;

interface RefreshDirective {
  delayMs: number;
  url: string;
}

/**
 * The `<delay>; url=<target>` directive Anubis serves with a metarefresh
 * challenge. It arrives as a `Refresh` header on some responses and as its
 * `<meta http-equiv>` equivalent on others, so both are read.
 */
const readRefreshDirective = (html: string, headers: Headers): RefreshDirective | null => {
  const directive =
    headers.get('refresh')?.match(REFRESH_HEADER_DIRECTIVE) ?? html.match(REFRESH_META_DIRECTIVE);
  if (!directive) {
    return null;
  }
  return {
    delayMs: Number(directive[1]) * 1000,
    // Inside a meta attribute the query separators arrive HTML-escaped.
    url: directive[2].trim().replace(/&amp;/g, '&')
  };
};

const wait = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const proofOfWorkPassUrl = async (
  url: string,
  { id, randomData }: ParsedChallenge['challenge'],
  difficulty: number,
  timeBudgetMs: number
): Promise<string | null> => {
  const startedAt = Date.now();
  const solution = await solveProofOfWork(randomData, difficulty, timeBudgetMs);
  if (!solution) {
    return null;
  }

  const passUrl = new URL(PASS_CHALLENGE_PATH, url);
  passUrl.searchParams.set('id', id);
  passUrl.searchParams.set('response', solution.hash);
  passUrl.searchParams.set('nonce', String(solution.nonce));
  passUrl.searchParams.set('redir', url);
  passUrl.searchParams.set('elapsedTime', String(Date.now() - startedAt));
  return passUrl.toString();
};

/**
 * Metarefresh asks for patience rather than hashes: Anubis hands over the
 * exchange URL up front but answers it with 403 until the delay it declared has
 * actually elapsed, so the wait is the whole proof.
 */
const metarefreshPassUrl = async (
  url: string,
  { id, randomData }: ParsedChallenge['challenge'],
  directive: RefreshDirective | null,
  timeBudgetMs: number
): Promise<string | null> => {
  const delayMs = directive?.delayMs ?? DEFAULT_METAREFRESH_DELAY_MS;
  // Waiting longer than the caller allowed is worse than not passing at all.
  if (delayMs > timeBudgetMs) {
    return null;
  }

  // Anubis' own URL is authoritative, so it is preferred over rebuilding one.
  let passUrl: URL;
  if (directive) {
    passUrl = new URL(directive.url, url);
  } else {
    passUrl = new URL(PASS_CHALLENGE_PATH, url);
    passUrl.searchParams.set('challenge', randomData);
    passUrl.searchParams.set('id', id);
    passUrl.searchParams.set('redir', url);
  }

  await wait(delayMs);
  return passUrl.toString();
};

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
    const reissuedHtml = await reissued.text();

    // Credentials change the answer: the jar may already hold a valid auth
    // cookie, in which case this sails straight past Anubis. There is then no
    // challenge left to solve — only a request worth retrying with the jar.
    if (!isAnubisChallenge(reissuedHtml)) {
      return { cookie: null, platformCookieJar };
    }

    html = reissuedHtml;
    headers = reissued.headers;
  }

  const parsed = parseChallenge(html);
  if (!parsed) {
    return null;
  }

  const { challenge, rules } = parsed;
  let passUrl: string | null = null;
  if (PROOF_OF_WORK_ALGORITHMS.includes(rules.algorithm)) {
    passUrl = await proofOfWorkPassUrl(url, challenge, rules.difficulty, timeBudgetMs);
  } else if (rules.algorithm === METAREFRESH_ALGORITHM) {
    passUrl = await metarefreshPassUrl(
      url,
      challenge,
      readRefreshDirective(html, headers),
      timeBudgetMs
    );
  }
  if (!passUrl) {
    return null;
  }

  // Anubis requires the verification cookie it set on the interstitial as proof
  // that cookies work; on a jar runtime the runtime itself attaches it.
  const passHeaders = new Headers(requestHeaders);
  const verifyCookie = readCookie(headers, VERIFY_COOKIE_NAME);
  if (verifyCookie) {
    passHeaders.set('Cookie', verifyCookie);
  }

  // `redirect: 'manual'` stops fetch from following the 302 to `redir`, which
  // would discard the Set-Cookie we need to read off this very response.
  const response = await fetch(passUrl, {
    method: 'GET',
    credentials: platformCookieJar ? 'include' : 'omit',
    redirect: 'manual',
    headers: passHeaders
  });

  const authCookie = readCookie(response.headers, AUTH_COOKIE_NAME);
  if (authCookie) {
    return { cookie: authCookie, platformCookieJar };
  }

  // No cookie in hand. A runtime that lets us read Set-Cookie would have shown
  // it, so this is a failed exchange; only a jar runtime can have passed while
  // keeping the cookie to itself.
  if (!platformCookieJar) {
    return null;
  }

  // A 302 to `redir` is Anubis' success signal, and the jar has just stored the
  // cookie off it. Browsers report the unfollowed redirect as `opaqueredirect`.
  if (response.status === 302 || response.type === 'opaqueredirect') {
    return { cookie: null, platformCookieJar };
  }

  // React Native ignores `redirect: 'manual'` and follows the 302 itself, so
  // what we hold is the page we were after — proof enough, unless Anubis is
  // still challenging us.
  if (response.ok) {
    const body = await response.text();
    return body && !isAnubisChallenge(body) ? { cookie: null, platformCookieJar } : null;
  }

  return null;
};
