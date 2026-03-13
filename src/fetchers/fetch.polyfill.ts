// Check if `fetch` is available in global scope (nodejs 18+) or in window (browser).
export const fetchSafe =
  (typeof fetch === 'function' && fetch) || // ServiceWorker fetch (Cloud Functions + Chrome extension)
  (typeof global === 'object' && global.fetch) || // Node.js 18+ fetch
  (typeof window !== 'undefined' && window.fetch); // Browser fetch
