import { fetchSafe } from './fetch.polyfill';

const USER_AGENTS: string[] = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36'
];

const defaultHeaders = {
  'User-Agent': USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)],
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
