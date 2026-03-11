import { gotScraping } from 'got-scraping';

export const fetchPage = async (url: string, optionsRequest?: RequestInit): Promise<string> => {
  try {
    // Convert Fetch API headers to a standard object format expected by got-scraping
    const customHeaders: Record<string, string> = {};
    if (optionsRequest?.headers) {
      const reqHeaders = new Headers(optionsRequest.headers);
      reqHeaders.forEach((value, key) => {
        customHeaders[key] = value;
      });
    }

    // Execute the request with advanced fingerprint masking
    const response = await gotScraping({
      url,
      method:
        (optionsRequest?.method as 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD') || 'GET',
      headers: customHeaders
      // got-scraping automatically handles HTTP/2 and realistic browser behavior
      // It also throws an HTTPError on 4xx/5xx statuses by default
    });

    return response.body;
  } catch (e: unknown) {
    if (e instanceof Error) {
      // Log detailed error message including the failed URL
      console.error(`node-csfd-api: Error fetching ${url} - ${e.message}`);
    } else {
      console.error(String(e));
    }
    return 'Error';
  }
};
