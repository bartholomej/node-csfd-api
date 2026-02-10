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

export class CsfdError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'CsfdError';
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchPage = async (url: string, optionsRequest?: RequestInit): Promise<string> => {
  const maxRetries = 3;
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const mergedHeaders = new Headers(defaultHeaders);
      if (optionsRequest?.headers) {
        const reqHeaders = new Headers(optionsRequest.headers);
        reqHeaders.forEach((value, key) => mergedHeaders.set(key, value));
      }
      const { headers: _, ...restOptions } = optionsRequest || {};

      const response = await fetchSafe(url, { credentials: 'omit', ...restOptions, headers: mergedHeaders });

      if (response.status >= 400 && response.status < 600) {
        // Do not retry on 4xx errors (client errors)
        if (response.status < 500) {
          throw new CsfdError(`node-csfd-api: Bad response ${response.status} for url: ${url}`, response.status);
        }
        // Throw to trigger catch and retry for 5xx
        throw new CsfdError(`node-csfd-api: Server error ${response.status} for url: ${url}`, response.status);
      }
      return await response.text();
    } catch (e: unknown) {
      const error = e instanceof Error ? e : new Error(String(e));
      lastError = error;

      // Don't retry if it is a 4xx error (which we threw as CsfdError)
      if (error instanceof CsfdError && error.status && error.status >= 400 && error.status < 500) {
        throw error;
      }

      if (attempt === maxRetries) {
        throw error;
      }

      // Exponential backoff: 1s, 2s...
      await sleep(1000 * Math.pow(2, attempt - 1));
    }
  }

  throw lastError || new Error('Unknown error');
};
