import { LIB_PREFIX } from '../vars';
import { fetchSafe } from './fetch.polyfill';

interface BrowserProfile {
  'User-Agent': string;
  'Sec-Ch-Ua': string;
  'Sec-Ch-Ua-Platform': string;
}

const browserProfiles: BrowserProfile[] = [
  // Googlebot bypasses Anubis
  {
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Sec-Ch-Ua': '',
    'Sec-Ch-Ua-Platform': ''
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

export const fetchPage = async (url: string, optionsRequest?: RequestInit): Promise<string> => {
  try {
    const mergedHeaders = new Headers({ ...baseHeaders, ...randomProfile() });

    // Merge any custom headers provided in the function arguments
    if (optionsRequest?.headers) {
      const reqHeaders = new Headers(optionsRequest.headers);
      reqHeaders.forEach((value, key) => mergedHeaders.set(key, value));
    }

    const { headers: _, ...restOptions } = optionsRequest || {};

    const response = await fetchSafe(url, {
      credentials: 'omit',
      ...restOptions,
      headers: mergedHeaders
    });

    if (!response.ok) {
      throw new Error(`node-csfd-api: Bad response ${response.status} for url: ${url}`);
    }

    const html = await response.text();

    // Quickly check if we hit the trap
    if (
      html.includes("Making sure you're not a bot!") ||
      html.includes('Ujišťujeme se, že nejste robot!')
    ) {
      console.warn('[node-csfd-api] Trap detected. You may be rate-limited or blocked by ČSFD.');
      throw new Error(`node-csfd-api: Anubis anti-bot trap detected. Failed to fetch ${url}`);
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
