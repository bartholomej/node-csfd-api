import {
  type ChallengeResult,
  type FetchLike,
  isAnubisChallenge,
  passChallenge
} from './challenge';

export interface AnubisClientOptions {
  /** Defaults to the global `fetch`. */
  fetch?: FetchLike;
  /** Give up on a proof-of-work after this long. Defaults to 10 seconds. */
  timeBudgetMs?: number;
}

export interface AnubisClient {
  /** Whether a response body is an Anubis interstitial rather than content. */
  isChallenge(html: string): boolean;
  /**
   * Solve the given interstitial and cache the resulting cookie. Resolves
   * `true` when the request is worth retrying. Concurrent calls share a single
   * proof-of-work, since the cookie they produce is shared anyway.
   */
  pass(html: string, headers: Headers, url: string, requestHeaders?: Headers): Promise<boolean>;
  /** The cached cookie, e.g. to persist between runs. */
  getCookie(): string | null;
  /** Seed the cache from a previous run or a per-tenant store. */
  setCookie(cookie: string | null): void;
  /** Forget the cookie so the next challenge is solved from scratch. */
  reset(): void;
  /** Whether cookies must be left to the runtime rather than sent by hand. */
  usesPlatformCookieJar(): boolean;
}

/**
 * An Anubis-aware cookie holder. Each client keeps its own cookie, so callers
 * with separate egress IPs (Anubis binds the cookie to one) can hold one each.
 */
export const createAnubisClient = (options: AnubisClientOptions = {}): AnubisClient => {
  const doFetch = options.fetch ?? ((input, init) => globalThis.fetch(input, init));
  const timeBudgetMs = options.timeBudgetMs;

  let cookie: string | null = null;
  let platformCookieJar = false;
  let pending: Promise<ChallengeResult | null> | null = null;

  return {
    isChallenge: isAnubisChallenge,
    getCookie: () => cookie,
    setCookie: (value) => {
      cookie = value;
    },
    reset: () => {
      cookie = null;
      pending = null;
    },
    usesPlatformCookieJar: () => platformCookieJar,

    pass: async (html, headers, url, requestHeaders) => {
      if (!pending) {
        pending = passChallenge({
          html,
          headers,
          url,
          requestHeaders,
          fetch: doFetch,
          timeBudgetMs
        }).finally(() => {
          pending = null;
        });
      }

      const result = await pending;
      if (!result) {
        return false;
      }
      cookie = result.cookie;
      platformCookieJar = result.platformCookieJar;
      return true;
    }
  };
};
