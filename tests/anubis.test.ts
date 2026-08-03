import { createHash } from 'node:crypto';
import { describe, expect, test } from 'vitest';
import {
  createAnubisClient,
  isAnubisChallenge,
  passChallenge,
  sha256,
  solveProofOfWork,
  toHex
} from '../src/anubis';

// The pure-JS SHA-256 is what makes the solver portable (Node/browser/RN). Pin
// it to the NIST vectors and cross-check it against node:crypto (available here
// as an independent oracle, though never imported by the library itself).
describe('sha256 (portable pure-JS)', () => {
  test('matches the standard NIST vectors', () => {
    expect(toHex(sha256(''))).toBe(
      'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
    );
    expect(toHex(sha256('abc'))).toBe(
      'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'
    );
  });

  test('matches node:crypto across block boundaries', () => {
    // 55/56/64 bytes exercise the padding edge cases (one vs two blocks).
    for (const input of ['', 'a', 'a'.repeat(55), 'a'.repeat(56), 'a'.repeat(64), 'x'.repeat(200)]) {
      expect(toHex(sha256(input))).toBe(createHash('sha256').update(input).digest('hex'));
    }
  });

  test('matches node:crypto on multi-byte UTF-8', () => {
    const input = 'Ujišťujeme se, že nejste robot! 🤖';
    expect(toHex(sha256(input))).toBe(createHash('sha256').update(input).digest('hex'));
  });
});

// Offline unit tests for the Anubis proof-of-work solver. These pin the
// algorithm to deterministic vectors so a failure means *our* code changed,
// independent of whether the live ČSFD site is reachable or has been altered.

describe('Anubis: solveProofOfWork', () => {
  const DATA = 'node-csfd-api';

  // Precomputed vectors: the solver iterates nonce from 0 upward, so the first
  // valid nonce for a given (data, difficulty) is deterministic.
  const vectors = [
    { difficulty: 1, nonce: 8, hash: '0ca5e234ebe9ed5341e35a02c4ab2d44860cf7c8084c76a0e2b9496536b26554' },
    { difficulty: 2, nonce: 1048, hash: '006fe24fe34772b34e103be62bf4d75718b57c5d87f2e1b83f61709eae986c00' },
    { difficulty: 3, nonce: 8623, hash: '0003be1161d05bf661f70b314a4241b7b80fe851d274db557fec72ad56cfe35e' },
    { difficulty: 4, nonce: 10148, hash: '0000b951efd5c69a4d9fca8263c0c59a7612fc3db11b5a618ab498f5d0be4d3c' }
  ];

  test.each(vectors)(
    'finds the exact nonce/hash for difficulty $difficulty',
    async ({ difficulty, nonce, hash }) => {
      expect(await solveProofOfWork(DATA, difficulty)).toEqual({ nonce, hash });
    }
  );

  test.each(vectors)('the digest actually satisfies difficulty $difficulty', ({ difficulty, nonce, hash }) => {
    // difficulty N leading zero nibbles == N leading '0' hex characters
    expect(hash.startsWith('0'.repeat(difficulty))).toBe(true);
    // and the hash is genuinely sha256(data + nonce)
    expect(createHash('sha256').update(DATA + nonce).digest('hex')).toBe(hash);
  });

  test('difficulty 0 is solved immediately by nonce 0', async () => {
    const result = await solveProofOfWork(DATA, 0);
    expect(result?.nonce).toBe(0);
    expect(result?.hash).toBe(createHash('sha256').update(`${DATA}0`).digest('hex'));
  });

  test('different challenge data yields a different solution', async () => {
    const a = await solveProofOfWork('challenge-a', 2);
    const b = await solveProofOfWork('challenge-b', 2);
    expect(a).not.toEqual(b);
    expect(a?.hash.startsWith('00')).toBe(true);
    expect(b?.hash.startsWith('00')).toBe(true);
  });

  // The solve must not monopolise the thread: a server has to keep serving.
  test('yields to the event loop while searching', async () => {
    let ticks = 0;
    const timer = setInterval(() => ticks++, 1);
    // Difficulty 4 needs ~65k hashes, far past one yield interval.
    await solveProofOfWork('event-loop-probe', 4);
    clearInterval(timer);
    expect(ticks).toBeGreaterThan(0);
  });
});

describe('Anubis: passChallenge guards', () => {
  const challengePage = (algorithm: string) =>
    `<script id="anubis_challenge" type="application/json">${JSON.stringify({
      rules: { algorithm, difficulty: 4 },
      challenge: { id: 'test-id', randomData: 'abc' }
    })}</script>`;

  // A readable Set-Cookie keeps us on the manual (Node) path, so these bail
  // before any request — a fetch that throws proves the network is never hit.
  const nodeHeaders = () =>
    new Headers({ 'set-cookie': 'techaro.lol-anubis-cookie-verification=test-id; Path=/' });
  const forbiddenFetch = () => Promise.reject(new Error('must not reach the network'));

  const attempt = (html: string) =>
    passChallenge({
      html,
      headers: nodeHeaders(),
      url: 'https://www.csfd.cz/film/1/',
      fetch: forbiddenFetch
    });

  test('refuses a challenge method it cannot compute', async () => {
    await expect(attempt(challengePage('metarefresh'))).resolves.toBeNull();
  });

  test('accepts the methods it does implement', async () => {
    // Reaching the network means the guard let it through to the exchange.
    await expect(attempt(challengePage('fast'))).rejects.toThrow('must not reach the network');
  });

  test('refuses an unparseable challenge', async () => {
    await expect(
      attempt('<script id="anubis_challenge" type="application/json">not json</script>')
    ).resolves.toBeNull();
  });
});

// The live site only challenges a fraction of requests, so a green integration
// run can miss the solver entirely. This exercises the whole exchange against a
// stand-in server that validates the proof exactly as Anubis does, offline.
describe('Anubis: challenge exchange', () => {
  const CHALLENGE_ID = '019f8462-2dd6-7755-9d82-de2c14c2d59e';
  const RANDOM_DATA = 'a3f1c908'.repeat(16);
  const DIFFICULTY = 2;
  const PAGE_URL = 'https://example.test/protected/';
  const PASS_PATH = '/.within.website/x/cmd/anubis/api/pass-challenge';
  const AUTH_COOKIE = 'techaro.lol-anubis-auth=header.payload.signature';
  const VERIFY_COOKIE = `techaro.lol-anubis-cookie-verification=${CHALLENGE_ID}`;

  const interstitial = (algorithm = 'fast') =>
    `<html><head><script id="anubis_challenge" type="application/json">${JSON.stringify({
      rules: { algorithm, difficulty: DIFFICULTY },
      challenge: { id: CHALLENGE_ID, randomData: RANDOM_DATA, method: algorithm }
    })}</script></head></html>`;

  const withSetCookie = (...cookies: string[]): Headers => {
    const headers = new Headers();
    cookies.forEach((cookie) => headers.append('set-cookie', cookie));
    return headers;
  };

  /**
   * Stands in for Anubis. `hidesSetCookie` mimics a browser or React Native,
   * where Set-Cookie is stripped from what scripts may read.
   */
  const fakeAnubis = ({ hidesSetCookie = false } = {}) => {
    const calls: { url: URL; init?: RequestInit }[] = [];

    const fetch = async (input: string, init?: RequestInit): Promise<Response> => {
      const url = new URL(input);
      calls.push({ url, init });

      if (url.pathname !== PASS_PATH) {
        return new Response(interstitial(), {
          headers: hidesSetCookie ? new Headers() : withSetCookie(VERIFY_COOKIE)
        });
      }

      // Validate the submitted proof the way the real server would.
      const nonce = url.searchParams.get('nonce') ?? '';
      const claimed = url.searchParams.get('response') ?? '';
      const digest = createHash('sha256').update(RANDOM_DATA + nonce).digest('hex');
      const provenWork = claimed === digest && digest.startsWith('0'.repeat(DIFFICULTY));
      const rightChallenge = url.searchParams.get('id') === CHALLENGE_ID;
      const provenCookies =
        hidesSetCookie || new Headers(init?.headers).get('Cookie') === VERIFY_COOKIE;

      if (!provenWork || !rightChallenge || !provenCookies) {
        return new Response('challenge failed', { status: 403 });
      }
      return new Response(null, {
        status: 302,
        headers: hidesSetCookie ? new Headers({ location: PAGE_URL }) : withSetCookie(AUTH_COOKIE)
      });
    };

    return { fetch, calls, passCalls: () => calls.filter((c) => c.url.pathname === PASS_PATH) };
  };

  test('earns and caches a cookie the server accepts', async () => {
    const server = fakeAnubis();
    const client = createAnubisClient({ fetch: server.fetch });

    // The server only issues the cookie if the proof verifies, so this passing
    // means our hash construction still matches Anubis' own.
    expect(await client.pass(interstitial(), withSetCookie(VERIFY_COOKIE), PAGE_URL)).toBe(true);
    expect(client.getCookie()).toBe(AUTH_COOKIE);
    expect(client.usesPlatformCookieJar()).toBe(false);
  });

  test('submits the parameters Anubis expects', async () => {
    const server = fakeAnubis();
    const client = createAnubisClient({ fetch: server.fetch });
    await client.pass(interstitial(), withSetCookie(VERIFY_COOKIE), PAGE_URL);

    const [call] = server.passCalls();
    expect(call.url.searchParams.get('id')).toBe(CHALLENGE_ID);
    expect(call.url.searchParams.get('redir')).toBe(PAGE_URL);
    expect(Number(call.url.searchParams.get('elapsedTime'))).toBeGreaterThanOrEqual(0);
    expect(new Headers(call.init?.headers).get('Cookie')).toBe(VERIFY_COOKIE);
    // Following the 302 would discard the Set-Cookie we came for.
    expect(call.init?.redirect).toBe('manual');
  });

  test('keeps no cookie when the server rejects the proof', async () => {
    const client = createAnubisClient({
      fetch: async () => new Response('challenge failed', { status: 403 })
    });

    expect(await client.pass(interstitial(), withSetCookie(VERIFY_COOKIE), PAGE_URL)).toBe(false);
    expect(client.getCookie()).toBeNull();
  });

  test('refuses a challenge method it cannot compute without asking the server', async () => {
    const server = fakeAnubis();
    const client = createAnubisClient({ fetch: server.fetch });

    expect(
      await client.pass(interstitial('metarefresh'), withSetCookie(VERIFY_COOKIE), PAGE_URL)
    ).toBe(false);
    expect(server.calls).toHaveLength(0);
  });

  test('concurrent callers share a single proof-of-work', async () => {
    const server = fakeAnubis();
    const client = createAnubisClient({ fetch: server.fetch });

    const results = await Promise.all(
      Array.from({ length: 4 }, () =>
        client.pass(interstitial(), withSetCookie(VERIFY_COOKIE), PAGE_URL)
      )
    );

    expect(results).toEqual([true, true, true, true]);
    expect(server.passCalls()).toHaveLength(1);
  });

  test('hands the cookie to the runtime jar when Set-Cookie is hidden', async () => {
    const server = fakeAnubis({ hidesSetCookie: true });
    const client = createAnubisClient({ fetch: server.fetch });

    expect(await client.pass(interstitial(), new Headers(), PAGE_URL)).toBe(true);
    expect(client.getCookie()).toBeNull();
    expect(client.usesPlatformCookieJar()).toBe(true);

    // The challenge is re-requested with credentials so the jar can store it.
    const reissue = server.calls.find((call) => call.url.pathname !== PASS_PATH);
    expect(reissue?.init?.credentials).toBe('include');
  });
});

describe('Anubis: client', () => {
  test('holds and clears its cookie independently per instance', () => {
    const a = createAnubisClient();
    const b = createAnubisClient();

    a.setCookie('techaro.lol-anubis-auth=token-a');
    expect(a.getCookie()).toBe('techaro.lol-anubis-auth=token-a');
    expect(b.getCookie()).toBeNull();

    a.reset();
    expect(a.getCookie()).toBeNull();
  });

  test('assumes manual cookie handling until told otherwise', () => {
    expect(createAnubisClient().usesPlatformCookieJar()).toBe(false);
  });
});

describe('Anubis: isAnubisChallenge', () => {
  test('detects the embedded challenge script', () => {
    expect(
      isAnubisChallenge('<script id="anubis_challenge" type="application/json">{}</script>')
    ).toBe(true);
  });

  test('detects the interstitial by its asset paths', () => {
    expect(
      isAnubisChallenge('<link href="/.within.website/x/cmd/anubis/static/css/custom.css">')
    ).toBe(true);
  });

  // The library serves cs/en/sk, so detection must not hinge on localised prose.
  test.each([
    ['Czech', '<title>Ujišťujeme se, že nejste robot!</title>'],
    ['English', "<title>Making sure you're not a bot!</title>"]
  ])('detects the %s interstitial via its structure', (_locale, title) => {
    const page = `<html><head>${title}<script id="anubis_challenge" type="application/json">{}</script></head></html>`;
    expect(isAnubisChallenge(page)).toBe(true);
  });

  test('returns false for a normal page', () => {
    expect(isAnubisChallenge('<html><body><h1>BART!</h1></body></html>')).toBe(false);
  });

  // A review quoting the interstitial must not be mistaken for a block.
  test('does not false-positive on user content mentioning the challenge', () => {
    expect(isAnubisChallenge('<p>Hláška "Ujišťujeme se, že nejste robot!" mě dostala</p>')).toBe(
      false
    );
  });
});
