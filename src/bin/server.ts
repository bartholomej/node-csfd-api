import 'dotenv/config';
import { serve } from '@hono/node-server';
import { csfd } from '..';
import packageJson from '../../package.json' with { type: 'json' };
import { createApp, Endpoint, isSupportedLanguage, parseApiKeys } from './server-app';

const port = Number(process.env.PORT) || 3000;

// --- Config ---
const API_KEY_NAME = process.env.API_KEY_NAME || 'x-api-key';
const API_KEY = process.env.API_KEY;
const RAW_LANGUAGE = process.env.LANGUAGE;

const BASE_LANGUAGE = isSupportedLanguage(RAW_LANGUAGE) ? RAW_LANGUAGE : undefined;

const API_KEYS_LIST = parseApiKeys(API_KEY);

// Configure base URL if provided
if (BASE_LANGUAGE) {
  csfd.setOptions({ language: BASE_LANGUAGE });
}

const app = createApp({ apiKey: API_KEY, apiKeyName: API_KEY_NAME });

// --- Start server ---
serve({ fetch: app.fetch, port }, () => {
  console.log(`
                  _                  __    _               _
                 | |                / _|  | |             (_)
  _ __   ___   __| | ___    ___ ___| |_ __| |   __ _ _ __  _
 | '_ \\ / _ \\ / _\` |/ _ \\  / __/ __|  _/ _\` |  / _\` | '_ \\| |
 | | | | (_) | (_| |  __/ | (__\\__ \\ || (_| | | (_| | |_) | |
 |_| |_|\\___/ \\__,_|\\___|  \\___|___/_| \\__,_|  \\__,_| .__/|_|
                                                    | |
                                                    |_|
`);
  console.log(`node-csfd-api@${packageJson.version}\n`);
  console.log(`Docs: ${packageJson.homepage}`);
  console.log(`Endpoints: ${Object.values(Endpoint).join(', ')}\n`);

  console.log(`API is running on: http://localhost:${port}`);
  if (BASE_LANGUAGE) {
    console.log(`Base language configured: ${BASE_LANGUAGE}\n`);
  }
  if (API_KEYS_LIST.length === 0) {
    console.log(
      '\x1b[31m%s\x1b[0m',
      '⚠️ Server is OPEN!\n- Your server will be open to the world and potentially everyone can use it without any restriction.\n- To enable some basic protection, set API_KEY environment variable (single value or comma-separated list) and provide the same value in request header: ' +
        API_KEY_NAME
    );
  } else {
    console.log(
      '\x1b[32m%s\x1b[0m',
      `✔️ Server is protected (somehow).\n- ${API_KEYS_LIST.length} API key(s) are configured and will be checked for each request header: ${API_KEY_NAME}`
    );
  }
});
