import { fetchSafe } from './fetch.polyfill';

const USER_AGENTS: string[] = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Safari/605.1.15'
];

const defaultHeaders = {
  'User-Agent': USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)],
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'Accept-Language': 'cs,en;q=0.9,en-US;q=0.8',
  'Upgrade-Insecure-Requests': '1',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-User': '?1'
};

export const fetchPage = async (url: string, optionsRequest?: RequestInit): Promise<string> => {
  try {
    const mergedHeaders = new Headers(defaultHeaders);
    if (optionsRequest?.headers) {
      const reqHeaders = new Headers(optionsRequest.headers);
      reqHeaders.forEach((value, key) => mergedHeaders.set(key, value));
    }
    const { headers: _, ...restOptions } = optionsRequest || {};

    const response = await fetchSafe(url, { credentials: 'omit', ...restOptions, headers: mergedHeaders });
    if (response.status >= 400 && response.status < 600) {
      throw new Error(`node-csfd-api: Bad response ${response.status} for url: ${url}`);
    }
    return await response.text();
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(String(e));
    }
    return 'Error';
  }
};
