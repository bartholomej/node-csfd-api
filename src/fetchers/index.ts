import { createAnubisClient } from '../anubis';
import { LIB_PREFIX } from '../vars';
import { fetchSafe } from './fetch.polyfill';

interface BrowserProfile {
  'User-Agent': string;
  'Sec-Ch-Ua': string;
  'Sec-Ch-Ua-Platform': string;
}

const browserProfiles: BrowserProfile[] = [
  // Chrome 131 / Windows
  {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Sec-Ch-Ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'Sec-Ch-Ua-Platform': '"Windows"'
  },
  // Chrome 130 / Windows
  {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    'Sec-Ch-Ua': '"Google Chrome";v="130", "Chromium";v="130", "Not_A Brand";v="24"',
    'Sec-Ch-Ua-Platform': '"Windows"'
  },
  // Chrome 131 / macOS
  {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Sec-Ch-Ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'Sec-Ch-Ua-Platform': '"macOS"'
  },
  // Chrome 130 / macOS
  {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    'Sec-Ch-Ua': '"Google Chrome";v="130", "Chromium";v="130", "Not_A Brand";v="24"',
    'Sec-Ch-Ua-Platform': '"macOS"'
  },
  // Edge 131 / Windows
  {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
    'Sec-Ch-Ua': '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'Sec-Ch-Ua-Platform': '"Windows"'
  },
  // Edge 130 / Windows
  {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
    'Sec-Ch-Ua': '"Microsoft Edge";v="130", "Chromium";v="130", "Not_A Brand";v="24"',
    'Sec-Ch-Ua-Platform': '"Windows"'
  }
];

const randomProfile = (): BrowserProfile =>
  browserProfiles[Math.floor(Math.random() * browserProfiles.length)];

const baseHeaders = {
  Accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'Accept-Language': 'cs-CZ,cs;q=0.9,en-US;q=0.8,en;q=0.7',
  'Accept-Encoding': 'gzip, deflate, br',
  'Cache-Control': 'max-age=0',
  Connection: 'keep-alive',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-User': '?1',
  'Upgrade-Insecure-Requests': '1'
};

const anubis = createAnubisClient({ fetch: fetchSafe });

/**
 * The cached Anubis cookie, so it can be persisted between runs. Anubis binds
 * it to the client IP for a week, so it is only reusable from the same address.
 */
export const getAnubisCookie = (): string | null => anubis.getCookie();

/** Seed the cookie cache, e.g. from a previous run or a per-tenant store. */
export const setAnubisCookie = (cookie: string | null): void => anubis.setCookie(cookie);

/** Forget the cookie so the next request solves a fresh challenge. */
export const resetAnubisCookie = (): void => anubis.reset();

const buildHeaders = (optionsRequest?: RequestInit): Headers => {
  const mergedHeaders = new Headers({ ...baseHeaders, ...randomProfile() });

  // Merge any custom headers provided in the function arguments
  if (optionsRequest?.headers) {
    const reqHeaders = new Headers(optionsRequest.headers);
    reqHeaders.forEach((value, key) => mergedHeaders.set(key, value));
  }

  const cookie = anubis.getCookie();
  if (cookie) {
    const existing = mergedHeaders.get('Cookie');
    mergedHeaders.set('Cookie', existing ? `${cookie}; ${existing}` : cookie);
  }

  return mergedHeaders;
};

export const fetchPage = async (url: string, optionsRequest?: RequestInit): Promise<string> => {
  try {
    const { headers: _, ...restOptions } = optionsRequest || {};
    // Stay credential-less by default so no ambient session rides along; only
    // runtimes that hide Set-Cookie need their jar, and only once detected.
    const doFetch = () =>
      fetchSafe(url, {
        credentials: anubis.usesPlatformCookieJar() ? 'include' : 'omit',
        ...restOptions,
        headers: buildHeaders(optionsRequest)
      });

    let response = await doFetch();
    if (!response.ok) {
      throw new Error(`node-csfd-api: Bad response ${response.status} for url: ${url}`);
    }

    let html = await response.text();

    if (anubis.isChallenge(html)) {
      const passed = await anubis.pass(
        html,
        response.headers,
        url,
        new Headers({ ...baseHeaders, ...randomProfile() })
      );
      if (passed) {
        response = await doFetch();
        if (!response.ok) {
          throw new Error(`node-csfd-api: Bad response ${response.status} for url: ${url}`);
        }
        html = await response.text();
      }
      // Fail loudly rather than let the interstitial reach the parsers, where
      // it would silently look like a page with no results.
      if (anubis.isChallenge(html)) {
        throw new Error(
          `node-csfd-api: Anubis challenge could not be solved for url: ${url}. You may be rate-limited or blocked by ČSFD.`
        );
      }
    }

    return html;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(LIB_PREFIX, e.message);
    } else {
      console.error(LIB_PREFIX, String(e));
    }
    return 'Error';
  }
};
