import { beforeEach, describe, expect, test, vi } from 'vitest';
import { CsfdError } from '../src/errors';
import { fetchPage, getAnubisCookie, resetAnubisCookie } from '../src/fetchers';

const fetchSafe = vi.hoisted(() => {
  // tests/setup.ts already loaded the real fetchers, so the mock below would
  // never reach them without a fresh module cache.
  vi.resetModules();
  return vi.fn<(input: string, init?: RequestInit) => Promise<Response>>();
});
vi.mock('../src/fetchers/fetch.polyfill', () => ({ fetchSafe }));

const PAGE_URL = 'https://www.csfd.cz/film/10135/prehled/';
const PAGE = '<html>Forrest Gump</html>';
const VERIFY_COOKIE = 'techaro.lol-anubis-cookie-verification-6b097436=challenge-id';
const AUTH_COOKIE = 'techaro.lol-anubis-auth-6b097436=header.payload.signature';

const INTERSTITIAL = `<html><script id="anubis_challenge" type="application/json">${JSON.stringify({
  rules: { algorithm: 'fast', difficulty: 1 },
  challenge: { id: 'challenge-id', randomData: 'ab'.repeat(64) }
})}</script></html>`;

const withSetCookie = (cookie: string): Headers => {
  const headers = new Headers();
  headers.append('set-cookie', cookie);
  return headers;
};

const challenge = () => new Response(INTERSTITIAL, { headers: withSetCookie(VERIFY_COOKIE) });

const isPassChallenge = (input: string) => input.includes('/api/pass-challenge');

/** Serves the interstitial until the request carries the cookie Anubis issued. */
const fakeCsfd = ({ acceptProof = true } = {}) =>
  fetchSafe.mockImplementation(async (input, init) => {
    const cookie = new Headers(init?.headers).get('Cookie');
    if (isPassChallenge(input)) {
      return acceptProof && cookie === VERIFY_COOKIE
        ? new Response(null, { status: 302, headers: withSetCookie(AUTH_COOKIE) })
        : new Response('challenge failed', { status: 403 });
    }
    return cookie === AUTH_COOKIE ? new Response(PAGE) : challenge();
  });

beforeEach(() => {
  fetchSafe.mockReset();
  resetAnubisCookie();
});

describe('fetchPage: Anubis challenge', () => {
  test('returns the page as is when no challenge is served', async () => {
    fetchSafe.mockImplementation(async () => new Response(PAGE));

    expect(await fetchPage(PAGE_URL)).toBe(PAGE);
    expect(fetchSafe).toHaveBeenCalledOnce();
  });

  test('passes the challenge, retries, and reuses the cookie afterwards', async () => {
    fakeCsfd();

    expect(await fetchPage(PAGE_URL)).toBe(PAGE);
    expect(getAnubisCookie()).toBe(AUTH_COOKIE);
    expect(fetchSafe.mock.calls.map(([input]) => isPassChallenge(input))).toEqual([
      false,
      true,
      false
    ]);

    fetchSafe.mockClear();
    expect(await fetchPage(PAGE_URL)).toBe(PAGE);
    expect(fetchSafe).toHaveBeenCalledOnce();
  });

  test('rejects as `blocked` when the exchange is refused', async () => {
    fakeCsfd({ acceptProof: false });

    const error = await fetchPage(PAGE_URL).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(CsfdError);
    expect((error as CsfdError).reason).toBe('blocked');
    expect(getAnubisCookie()).toBeNull();
  });

  test('keeps a failed exchange as the cause', async () => {
    const failure = new Error('socket hang up');
    fetchSafe.mockImplementation(async (input) =>
      isPassChallenge(input) ? Promise.reject(failure) : challenge()
    );

    const error = (await fetchPage(PAGE_URL).catch((e: unknown) => e)) as CsfdError;
    expect(error.reason).toBe('blocked');
    expect(error.cause).toBe(failure);
  });
});
