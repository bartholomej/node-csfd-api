import { fetchSafe } from './fetch.polyfill';

import { HeaderGenerator } from 'header-generator';

// Initialize the generator with your preferences
const generator = new HeaderGenerator({
  browsers: [
    { name: 'chrome', minVersion: 143 },
    { name: 'edge', minVersion: 143 }
  ],
  operatingSystems: ['windows', 'macos'],
  devices: ['desktop'],
  locales: ['cs-CZ', 'cs', 'en-US', 'en']
});

// Get a randomized, matching set of headers
const baseHeaders = generator.getHeaders();

export const fetchPage = async (url: string, optionsRequest?: RequestInit): Promise<string> => {
  try {
    const mergedHeaders = new Headers({ ...baseHeaders });

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
    if (html.includes("Making sure you're not a bot!")) {
      console.warn('node-csfd-api: Trap detected.');
    }

    return html;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(String(e));
    }
    return 'Error';
  }
};
