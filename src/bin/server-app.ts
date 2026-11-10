import type { HttpBindings } from '@hono/node-server';
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import {
  isJSONRPCErrorResponse,
  isJSONRPCRequest,
  isJSONRPCResultResponse
} from '@modelcontextprotocol/sdk/types.js';
import type { CallToolResult, RequestId } from '@modelcontextprotocol/sdk/types.js';
import { Hono } from 'hono';
import type { Context } from 'hono';
import { timingSafeEqual } from 'hono/utils/buffer';
import type { ContentfulStatusCode } from 'hono/utils/http-status';
import { csfd, CsfdError } from '..';
import type { CsfdErrorReason } from '..';
import packageJson from '../../package.json' with { type: 'json' };
import type { CSFDChartCategory, CSFDChartType } from '../dto/chart';
import type { CSFDFilmTypes } from '../dto/global';
import { extractId } from '../helpers/global.helper';
import type { CSFDLanguage } from '../types';
import { createMcpServer, TOOL_ERROR_REASON } from './mcp-app';

const LOG_COLORS = {
  info: '\x1b[36m', // cyan
  warn: '\x1b[33m', // yellow
  error: '\x1b[31m', // red
  success: '\x1b[32m', // green
  reset: '\x1b[0m'
} as const;

const LOG_SYMBOLS = {
  info: 'ℹ️',
  warn: '⚠️',
  error: '❌',
  success: '✅'
} as const;

const LOG_PADDED_SEVERITY = {
  info: 'INFO   ',
  warn: 'WARN   ',
  error: 'ERROR  ',
  success: 'SUCCESS'
} as const;

type Severity = Exclude<keyof typeof LOG_COLORS, 'reset'>;

enum Errors {
  API_KEY_MISSING = 'API_KEY_MISSING',
  API_KEY_INVALID = 'API_KEY_INVALID',
  ID_MISSING = 'ID_MISSING',
  ID_INVALID = 'ID_INVALID',
  MOVIE_FETCH_FAILED = 'MOVIE_FETCH_FAILED',
  CREATOR_FETCH_FAILED = 'CREATOR_FETCH_FAILED',
  SEARCH_FETCH_FAILED = 'SEARCH_FETCH_FAILED',
  USER_FETCH_FAILED = 'USER_FETCH_FAILED',
  USER_RATINGS_FETCH_FAILED = 'USER_RATINGS_FETCH_FAILED',
  USER_REVIEWS_FETCH_FAILED = 'USER_REVIEWS_FETCH_FAILED',
  CINEMAS_FETCH_FAILED = 'CINEMAS_FETCH_FAILED',
  CHART_INVALID = 'CHART_INVALID',
  CHART_FETCH_FAILED = 'CHART_FETCH_FAILED',
  MCP_TOOL_FAILED = 'MCP_TOOL_FAILED',
  PAGE_NOT_FOUND = 'PAGE_NOT_FOUND',
  TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS'
}

type ErrorLog = {
  error: keyof typeof Errors | null;
  message: string;
};

type AppEnv = { Bindings: HttpBindings; Variables: { start: number } };
type AppContext = Context<AppEnv>;

export enum Endpoint {
  MOVIE = '/movie/:id',
  CREATOR = '/creator/:id',
  SEARCH = '/search/:query',
  USER = '/user/:id',
  USER_RATINGS = '/user-ratings/:id',
  USER_REVIEWS = '/user-reviews/:id',
  CINEMAS = '/cinemas',
  CHART = '/chart/:type/:category',
  MCP = '/mcp'
}

const CHART_TYPES: readonly CSFDChartType[] = ['movies', 'series'];
const CHART_CATEGORIES: readonly CSFDChartCategory[] = [
  'best',
  'worst',
  'favorite',
  'controversial'
];

export type ServerOptions = {
  apiKey?: string;
  apiKeyName: string;
};

export const isSupportedLanguage = (value: unknown): value is CSFDLanguage =>
  value === 'cs' || value === 'en' || value === 'sk';

export const parseApiKeys = (apiKey?: string): string[] =>
  apiKey
    ? apiKey
        .split(/[,;\s]+/)
        .map((k) => k.trim())
        .filter(Boolean)
    : [];

/**
 * Optimized logging function.
 * Uses global constants to avoid memory reallocation on every request.
 */
function logMessage(severity: Severity, log: ErrorLog, c?: AppContext) {
  const time = new Date().toISOString();
  let reqInfo = '';
  let reqIp = '';
  let duration = '';
  if (c) {
    const { pathname, search } = new URL(c.req.url);
    reqInfo = `${c.req.method}: ${pathname}${search}`;
    reqIp = c.req.header('x-forwarded-for') || c.env?.incoming?.socket.remoteAddress || '';
    const start = c.get('start');
    duration = start === undefined ? '' : ` | ${Math.round(performance.now() - start)} ms`;
  }

  const msg = `${LOG_COLORS[severity]}[${LOG_PADDED_SEVERITY[severity]}]${LOG_COLORS.reset} ${time} | IP: ${reqIp}${duration} ${LOG_SYMBOLS[severity]} ${log.error ? log.error + ':' : ''} ${log.message} 🔗 ${reqInfo}`;

  const logSuccessEnabled = process.env.VERBOSE === 'true';

  if (severity === 'success') {
    if (logSuccessEnabled) {
      console.log(msg);
    }
  } else if (severity === 'error') {
    console.error(msg);
  } else if (severity === 'warn') {
    console.warn(msg);
  } else {
    console.log(msg);
  }
}

function logSuccess(c: AppContext, subject: string, language?: CSFDLanguage) {
  logMessage(
    'success',
    { error: null, message: `${subject}${language ? ` [${language}]` : ''}` },
    c
  );
}

const STATUS_BY_REASON: Record<CsfdErrorReason, ContentfulStatusCode> = {
  'not-found': 404,
  blocked: 503,
  http: 502,
  network: 502
};

const BEARER_TOKEN = /^Bearer\s+(\S+)\s*$/i;

async function isValidKey(candidates: string[], keys: string[]): Promise<boolean> {
  const checks = candidates.flatMap((candidate) =>
    keys.map((key) => timingSafeEqual(candidate, key))
  );
  return (await Promise.all(checks)).some(Boolean);
}

function unauthorized(c: AppContext, log: ErrorLog, challenge: string) {
  logMessage('error', log, c);
  c.header('WWW-Authenticate', challenge);
  return c.json(log, 401);
}

const isCsfdErrorReason = (value: unknown): value is CsfdErrorReason =>
  typeof value === 'string' && Object.hasOwn(STATUS_BY_REASON, value);

function toolErrorStatus(reason: unknown): number {
  // Our tools always tag their errors, so an untagged one is the SDK rejecting an unknown tool or bad arguments
  if (reason === undefined) {
    return 400;
  }
  return isCsfdErrorReason(reason) ? STATUS_BY_REASON[reason] : 500;
}

function logToolCalls(transport: WebStandardStreamableHTTPServerTransport, c: AppContext) {
  const calls = new Map<RequestId, string>();

  const receive = transport.onmessage;
  transport.onmessage = (message, extra) => {
    if (isJSONRPCRequest(message) && message.method === 'tools/call') {
      const { name, arguments: args } = message.params ?? {};
      calls.set(message.id, `MCP ${String(name)} ${JSON.stringify(args ?? {})}`);
    }
    receive?.(message, extra);
  };

  const send = transport.send.bind(transport);
  transport.send = (message, options) => {
    const isResponse = isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message);
    const subject = isResponse && message.id !== undefined ? calls.get(message.id) : undefined;
    if (subject) {
      if (isJSONRPCErrorResponse(message)) {
        const log = {
          error: Errors.MCP_TOOL_FAILED,
          message: `${subject}: ${message.error.message}`
        };
        logMessage('warn', log, c);
      } else if (isJSONRPCResultResponse(message) && message.result.isError) {
        const result = message.result as CallToolResult;
        const text = result.content
          .flatMap((item) => (item.type === 'text' ? [item.text] : []))
          .join(' ');
        const status = toolErrorStatus(result._meta?.[TOOL_ERROR_REASON]);
        logMessage(
          status < 500 ? 'warn' : 'error',
          { error: Errors.MCP_TOOL_FAILED, message: `${subject}: ${text}` },
          c
        );
      } else {
        logSuccess(c, subject);
      }
    }
    return send(message, options);
  };
}

function invalidId(c: AppContext) {
  const log: ErrorLog = {
    error: Errors.ID_INVALID,
    message: `Invalid ID: ${c.req.param('id')}. Use a numeric ID, a slug like 10135-forrest-gump or a ČSFD URL.`
  };
  logMessage('warn', log, c);
  return c.json(log, 400);
}

function respondWithError(c: AppContext, code: Errors, subject: string, error: unknown) {
  const status = error instanceof CsfdError ? STATUS_BY_REASON[error.reason] : 500;
  const log: ErrorLog = {
    error: code,
    message: `Failed to fetch ${subject} data: ${error}`
  };
  logMessage(status < 500 ? 'warn' : 'error', log, c);
  return c.json(log, status);
}

function languageParam(c: AppContext): CSFDLanguage | undefined {
  const language = c.req.query('language');
  return isSupportedLanguage(language) ? language : undefined;
}

function userListOptions(c: AppContext) {
  const { allPages, allPagesDelay, excludes, includesOnly, page } = c.req.query();
  return {
    allPages: allPages === 'true',
    allPagesDelay: allPagesDelay ? +allPagesDelay : undefined,
    excludes: excludes ? (excludes.split(',') as CSFDFilmTypes[]) : undefined,
    includesOnly: includesOnly ? (includesOnly.split(',') as CSFDFilmTypes[]) : undefined,
    page: page ? +page : undefined
  };
}

export function createApp({ apiKey, apiKeyName }: ServerOptions) {
  const apiKeys = parseApiKeys(apiKey);
  // Hono is strict by default; existing clients call /movie/123/ with a trailing slash
  const app = new Hono<AppEnv>({ strict: false });

  const realm = `Bearer realm="${packageJson.name}"`;

  app.use(async (c, next) => {
    c.set('start', performance.now());
    await next();
  });

  app.use(async (c, next) => {
    if (!apiKey) {
      return next();
    }
    const candidates = [
      c.req.header(apiKeyName)?.trim(),
      BEARER_TOKEN.exec(c.req.header('authorization') ?? '')?.[1]
    ].filter((value): value is string => Boolean(value));

    if (candidates.length === 0) {
      return unauthorized(
        c,
        {
          error: Errors.API_KEY_MISSING,
          message: `Missing API key. Send it as "Authorization: Bearer <key>" or in the "${apiKeyName}" header.`
        },
        realm
      );
    }

    if (!(await isValidKey(candidates, apiKeys))) {
      return unauthorized(
        c,
        { error: Errors.API_KEY_INVALID, message: 'Invalid API key.' },
        `${realm}, error="invalid_token"`
      );
    }
    return next();
  });

  app.get('/', (c) => {
    logMessage('info', { error: null, message: '/' });
    return c.json({
      name: packageJson.name,
      version: packageJson.version,
      docs: packageJson.homepage,
      links: Object.values(Endpoint)
    });
  });

  app.on(
    'GET',
    ['/movie', '/creator', '/search', '/user', '/user-ratings', '/user-reviews'],
    (c) => {
      const log: ErrorLog = {
        error: Errors.ID_MISSING,
        message: `ID is missing. Provide ID like this: ${c.req.path}/1234`
      };
      logMessage('warn', log, c);
      return c.json(log, 404);
    }
  );

  app.get(Endpoint.MOVIE, async (c) => {
    const id = extractId(c.req.param('id'));
    if (id === null) {
      return invalidId(c);
    }
    const language = languageParam(c);

    try {
      const movie = await csfd.movie(id, { language });
      logSuccess(c, `${Endpoint.MOVIE}: ${c.req.param('id')}`, language);
      return c.json(movie);
    } catch (error) {
      return respondWithError(c, Errors.MOVIE_FETCH_FAILED, 'movie', error);
    }
  });

  app.get(Endpoint.CREATOR, async (c) => {
    const id = extractId(c.req.param('id'));
    if (id === null) {
      return invalidId(c);
    }
    const language = languageParam(c);

    try {
      const result = await csfd.creator(id, { language });
      logSuccess(c, `${Endpoint.CREATOR}: ${c.req.param('id')}`, language);
      return c.json(result);
    } catch (error) {
      return respondWithError(c, Errors.CREATOR_FETCH_FAILED, 'creator', error);
    }
  });

  app.get(Endpoint.SEARCH, async (c) => {
    const query = c.req.param('query');
    const language = languageParam(c);

    try {
      const result = await csfd.search(query, { language });
      logSuccess(c, `${Endpoint.SEARCH}: ${query}`, language);
      return c.json(result);
    } catch (error) {
      return respondWithError(c, Errors.SEARCH_FETCH_FAILED, 'search', error);
    }
  });

  app.get(Endpoint.USER, async (c) => {
    const id = extractId(c.req.param('id'));
    if (id === null) {
      return invalidId(c);
    }
    const language = languageParam(c);

    try {
      const result = await csfd.user(id, { language });
      logSuccess(c, `${Endpoint.USER}: ${c.req.param('id')}`, language);
      return c.json(result);
    } catch (error) {
      return respondWithError(c, Errors.USER_FETCH_FAILED, 'user', error);
    }
  });

  app.get(Endpoint.USER_RATINGS, async (c) => {
    const id = extractId(c.req.param('id'));
    if (id === null) {
      return invalidId(c);
    }
    const language = languageParam(c);

    try {
      const result = await csfd.userRatings(id, userListOptions(c), { language });
      logSuccess(c, `${Endpoint.USER_RATINGS}: ${c.req.param('id')}`, language);
      return c.json(result);
    } catch (error) {
      return respondWithError(c, Errors.USER_RATINGS_FETCH_FAILED, 'user-ratings', error);
    }
  });

  app.get(Endpoint.USER_REVIEWS, async (c) => {
    const id = extractId(c.req.param('id'));
    if (id === null) {
      return invalidId(c);
    }
    const language = languageParam(c);

    try {
      const result = await csfd.userReviews(id, userListOptions(c), { language });
      logSuccess(c, `${Endpoint.USER_REVIEWS}: ${c.req.param('id')}`, language);
      return c.json(result);
    } catch (error) {
      return respondWithError(c, Errors.USER_REVIEWS_FETCH_FAILED, 'user-reviews', error);
    }
  });

  app.get(Endpoint.CINEMAS, async (c) => {
    const language = languageParam(c);

    try {
      const result = await csfd.cinema(1, 'today', { language });
      logSuccess(c, Endpoint.CINEMAS, language);
      return c.json(result);
    } catch (error) {
      return respondWithError(c, Errors.CINEMAS_FETCH_FAILED, 'cinemas', error);
    }
  });

  app.get(Endpoint.CHART, async (c) => {
    const type = c.req.param('type') as CSFDChartType;
    const category = c.req.param('category') as CSFDChartCategory;
    if (!CHART_TYPES.includes(type) || !CHART_CATEGORIES.includes(category)) {
      const log: ErrorLog = {
        error: Errors.CHART_INVALID,
        message: `Unknown chart: ${type}/${category}. Use /chart/${CHART_TYPES.join('|')}/${CHART_CATEGORIES.join('|')}.`
      };
      logMessage('warn', log, c);
      return c.json(log, 400);
    }
    const limit = Number(c.req.query('limit'));
    const language = languageParam(c);

    try {
      const result = await csfd.chart(
        type,
        category,
        { limit: Number.isInteger(limit) && limit > 0 ? limit : undefined },
        { language }
      );
      logSuccess(c, `/chart/${type}/${category}`, language);
      return c.json(result);
    } catch (error) {
      return respondWithError(c, Errors.CHART_FETCH_FAILED, 'chart', error);
    }
  });

  app.post(Endpoint.MCP, async (c) => {
    // Stateless: a fresh MCP server per request, so there are no sessions to keep or expire
    const server = createMcpServer();
    const transport = new WebStandardStreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
      enableJsonResponse: true
    });
    await server.connect(transport);
    logToolCalls(transport, c);
    try {
      return await transport.handleRequest(c.req.raw);
    } finally {
      await server.close();
    }
  });

  // GET would open a notification stream that a per-request server never writes to
  app.on(['GET', 'DELETE'], Endpoint.MCP, (c) => {
    c.header('Allow', 'POST');
    return c.json(
      { jsonrpc: '2.0', error: { code: -32000, message: 'Method not allowed.' }, id: null },
      405
    );
  });

  app.notFound((c) => {
    const log: ErrorLog = {
      error: Errors.PAGE_NOT_FOUND,
      message: 'The requested endpoint could not be found.'
    };
    logMessage('warn', log, c);
    return c.json(log, 404);
  });

  return app;
}
