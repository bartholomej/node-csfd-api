import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import packageJson from '../package.json' with { type: 'json' };
import { csfd } from '../src';
import { CSFDFilmTypes } from '../src/dto/global';
import { CSFDLanguage } from '../src/types';

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

type Severity = keyof typeof LOG_COLORS;

enum Errors {
  API_KEY_MISSING = 'API_KEY_MISSING',
  API_KEY_INVALID = 'API_KEY_INVALID',
  ID_MISSING = 'ID_MISSING',
  MOVIE_FETCH_FAILED = 'MOVIE_FETCH_FAILED',
  CREATOR_FETCH_FAILED = 'CREATOR_FETCH_FAILED',
  SEARCH_FETCH_FAILED = 'SEARCH_FETCH_FAILED',
  USER_RATINGS_FETCH_FAILED = 'USER_RATINGS_FETCH_FAILED',
  USER_REVIEWS_FETCH_FAILED = 'USER_REVIEWS_FETCH_FAILED',
  CINEMAS_FETCH_FAILED = 'CINEMAS_FETCH_FAILED',
  PAGE_NOT_FOUND = 'PAGE_NOT_FOUND',
  TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS'
}

type ErrorLog = {
  error: keyof typeof Errors | null;
  message: string;
};

/**
 * Optimized logging function.
 * Uses global constants to avoid memory reallocation on every request.
 */
function logMessage(severity: Severity, log: ErrorLog, req?: Request) {
  const time = new Date().toISOString();
  const reqInfo = req ? `${req.method}: ${req.originalUrl}` : '';
  const reqIp = req
    ? req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip || req.ips
    : '';

  const msg = `${LOG_COLORS[severity]}[${LOG_PADDED_SEVERITY[severity]}]${LOG_COLORS.reset} ${time} | IP: ${reqIp} ${LOG_SYMBOLS[severity]} ${log.error ? log.error + ':' : ''} ${log.message} 🔗 ${reqInfo}`;

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

enum Endpoint {
  MOVIE = '/movie/:id',
  CREATOR = '/creator/:id',
  SEARCH = '/search/:query',
  USER_RATINGS = '/user-ratings/:id',
  USER_REVIEWS = '/user-reviews/:id',
  CINEMAS = '/cinemas'
}

const app = express();
const port = process.env.PORT || 3000;

// --- Config ---
const API_KEY_NAME = process.env.API_KEY_NAME || 'x-api-key';
const API_KEY = process.env.API_KEY;
const RAW_LANGUAGE = process.env.LANGUAGE;

const isSupportedLanguage = (value: unknown): value is CSFDLanguage =>
  value === 'cs' || value === 'en' || value === 'sk';

const BASE_LANGUAGE = isSupportedLanguage(RAW_LANGUAGE) ? RAW_LANGUAGE : undefined;

const API_KEYS_LIST = API_KEY
  ? API_KEY.split(/[,;\s]+/)
      .map((k) => k.trim())
      .filter(Boolean)
  : [];

// Configure base URL if provided
if (BASE_LANGUAGE) {
  csfd.setOptions({ language: BASE_LANGUAGE });
}

// --- Rate Limiting (Commented out as in original) ---
// const limiterMinutes = 15;
// const LIMITER = rateLimit({
//   windowMs: limiterMinutes * 60 * 1000,
//   max: 300, // 300 requests / 15 minutes = average 1 req every 3 seconds
//   standardHeaders: true,
//   legacyHeaders: false,
//   message: {
//     error: Errors.TOO_MANY_REQUESTS,
//     message: `Too many requests from this IP. Please try again after ${limiterMinutes} minutes.`
//   }
// });

// const SPEED_LIMITER = slowDown({
//   windowMs: 5 * 60 * 1000, // 5 minutes
//   delayAfter: 10,          // first 10 requests are free of delay
//   delayMs: (hits) => Math.min(hits * 150, 6000), // each subsequent request is delayed by 150 ms, max 5s delay
// });

// app.use(SPEED_LIMITER);
// app.use(LIMITER);

// --- Middleware for optional header check ---
app.use((req: Request, res: Response, next: NextFunction): void => {
  // If API_KEY is set, it may contain one or more keys separated by comma/semicolon/whitespace.
  if (API_KEY) {
    const apiKey = (req.get(API_KEY_NAME) as string | undefined)?.trim();

    if (!apiKey) {
      const log: ErrorLog = {
        error: Errors.API_KEY_MISSING,
        message: `Missing API key in request header: ${API_KEY_NAME}`
      };
      logMessage('error', log, req);
      res.status(401).json(log);
      return;
    }

    if (!API_KEYS_LIST.includes(apiKey)) {
      const log: ErrorLog = {
        error: Errors.API_KEY_INVALID,
        message: `Invalid API key in request header: ${API_KEY_NAME}`
      };
      logMessage('error', log, req);
      res.status(401).json(log);
      return;
    }
  }
  next();
});

// --- Endpoints ---
app.get('/', (_, res) => {
  logMessage('info', { error: null, message: '/' });
  res.json({
    name: packageJson.name,
    version: packageJson.version,
    docs: packageJson.homepage,
    links: Object.values(Endpoint)
  });
});

app.get(['/movie/', '/creator/', '/search/', '/user-ratings/', '/user-reviews/'], (req, res) => {
  const log: ErrorLog = {
    error: Errors.ID_MISSING,
    message: `ID is missing. Provide ID like this: ${req.url}${req.url.endsWith('/') ? '' : '/'}1234`
  };
  logMessage('warn', log, req);
  res.status(404).json(log);
});

app.get(Endpoint.MOVIE, async (req, res) => {
  const rawLanguage = req.query.language;
  const language = isSupportedLanguage(rawLanguage) ? rawLanguage : undefined;

  try {
    const movie = await csfd.movie(+req.params.id, { language });
    res.json(movie);
    logMessage(
      'success',
      {
        error: null,
        message: `${Endpoint.MOVIE}: ${req.params.id}${language ? ` [${language}]` : ''}`
      },
      req
    );
  } catch (error) {
    const log: ErrorLog = {
      error: Errors.MOVIE_FETCH_FAILED,
      message: 'Failed to fetch movie data: ' + error
    };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});

app.get(Endpoint.CREATOR, async (req, res) => {
  const rawLanguage = req.query.language;
  const language = isSupportedLanguage(rawLanguage) ? rawLanguage : undefined;

  try {
    const result = await csfd.creator(+req.params.id, { language });
    res.json(result);
    logMessage(
      'success',
      {
        error: null,
        message: `${Endpoint.CREATOR}: ${req.params.id}${language ? ` [${language}]` : ''}`
      },
      req
    );
  } catch (error) {
    const log: ErrorLog = {
      error: Errors.CREATOR_FETCH_FAILED,
      message: 'Failed to fetch creator data: ' + error
    };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});

app.get(Endpoint.SEARCH, async (req, res) => {
  const rawLanguage = req.query.language;
  const language = isSupportedLanguage(rawLanguage) ? rawLanguage : undefined;

  try {
    const result = await csfd.search(req.params.query, { language });
    res.json(result);
    logMessage(
      'success',
      {
        error: null,
        message: `${Endpoint.SEARCH}: ${req.params.query}${language ? ` [${language}]` : ''}`
      },
      req
    );
  } catch (error) {
    const log: ErrorLog = {
      error: Errors.SEARCH_FETCH_FAILED,
      message: 'Failed to fetch search data: ' + error
    };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});

app.get(Endpoint.USER_RATINGS, async (req, res) => {
  const { allPages, allPagesDelay, excludes, includesOnly, page } = req.query;
  const rawLanguage = req.query.language;
  const language = isSupportedLanguage(rawLanguage) ? rawLanguage : undefined;

  try {
    const result = await csfd.userRatings(
      req.params.id,
      {
        allPages: allPages === 'true',
        allPagesDelay: allPagesDelay ? +allPagesDelay : undefined,
        excludes: excludes ? ((excludes as string).split(',') as CSFDFilmTypes[]) : undefined,
        includesOnly: includesOnly
          ? ((includesOnly as string).split(',') as CSFDFilmTypes[])
          : undefined,
        page: page ? +page : undefined
      },
      {
        language
      }
    );
    res.json(result);
    logMessage(
      'success',
      {
        error: null,
        message: `${Endpoint.USER_RATINGS}: ${req.params.id}${language ? ` [${language}]` : ''}`
      },
      req
    );
  } catch (error) {
    const log: ErrorLog = {
      error: Errors.USER_RATINGS_FETCH_FAILED,
      message: 'Failed to fetch user-ratings data: ' + error
    };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});

app.get(Endpoint.USER_REVIEWS, async (req, res) => {
  const { allPages, allPagesDelay, excludes, includesOnly, page } = req.query;
  const rawLanguage = req.query.language;
  const language = isSupportedLanguage(rawLanguage) ? rawLanguage : undefined;

  try {
    const result = await csfd.userReviews(
      req.params.id,
      {
        allPages: allPages === 'true',
        allPagesDelay: allPagesDelay ? +allPagesDelay : undefined,
        excludes: excludes ? ((excludes as string).split(',') as CSFDFilmTypes[]) : undefined,
        includesOnly: includesOnly
          ? ((includesOnly as string).split(',') as CSFDFilmTypes[])
          : undefined,
        page: page ? +page : undefined
      },
      {
        language
      }
    );
    res.json(result);
    logMessage(
      'success',
      {
        error: null,
        message: `${Endpoint.USER_REVIEWS}: ${req.params.id}${language ? ` [${language}]` : ''}`
      },
      req
    );
  } catch (error) {
    const log: ErrorLog = {
      error: Errors.USER_REVIEWS_FETCH_FAILED,
      message: 'Failed to fetch user-reviews data: ' + error
    };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});

app.get(Endpoint.CINEMAS, async (req, res) => {
  const rawLanguage = req.query.language;
  const language = isSupportedLanguage(rawLanguage) ? rawLanguage : undefined;

  try {
    const result = await csfd.cinema(1, 'today', { language });
    logMessage(
      'success',
      { error: null, message: `${Endpoint.CINEMAS}${language ? ` [${language}]` : ''}` },
      req
    );
    res.json(result);
  } catch (error) {
    const log: ErrorLog = {
      error: Errors.CINEMAS_FETCH_FAILED,
      message: 'Failed to fetch cinemas data: ' + error
    };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});

app.use((req, res) => {
  const log: ErrorLog = {
    error: Errors.PAGE_NOT_FOUND,
    message: 'The requested endpoint could not be found.'
  };
  logMessage('warn', log, req);
  res.status(404).json(log);
});

// --- Start server ---
app.listen(port, () => {
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
