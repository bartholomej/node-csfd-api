
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import packageJson from './package.json';
import { csfd } from './src';
import { CSFDFilmTypes } from './src/dto/global';

type Severity = 'info' | 'warn' | 'error' | 'success';

function logMessage(severity: Severity, log: ErrorLog, req?: Request) {
  const colors = {
    info: '\x1b[36m',    // cyan
    warn: '\x1b[33m',    // yellow
    error: '\x1b[31m',   // red
    success: '\x1b[32m', // green
    reset: '\x1b[0m'
  };

  const symbols = {
    info: 'ℹ️',
    warn: '⚠️',
    error: '❌',
    success: '✅'
  };

  const time = new Date().toISOString();
  const reqInfo = req
    ? `${req.method}: ${req.originalUrl}`
    : '';
  const reqIp = req ? req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip || req.ips : '';

  const paddedSeverity = {
    info: 'INFO   ',
    warn: 'WARN   ',
    error: 'ERROR  ',
    success: 'SUCCESS'
  };

  const msg = `${colors[severity]}[${paddedSeverity[severity]}]${colors.reset} ${time} | IP: ${reqIp} ${symbols[severity]} ${log.error ? log.error + ':' : ''} ${log.message} 🔗 ${reqInfo}`;
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

enum Errors {
  API_KEY_MISSING = 'API_KEY_MISSING',
  API_KEY_INVALID = 'API_KEY_INVALID',
  ID_MISSING = 'ID_MISSING',
  MOVIE_FETCH_FAILED = 'MOVIE_FETCH_FAILED',
  CREATOR_FETCH_FAILED = 'CREATOR_FETCH_FAILED',
  SEARCH_FETCH_FAILED = 'SEARCH_FETCH_FAILED',
  USER_RATINGS_FETCH_FAILED = 'USER_RATINGS_FETCH_FAILED',
  CINEMAS_FETCH_FAILED = 'CINEMAS_FETCH_FAILED',
  PAGE_NOT_FOUND = 'PAGE_NOT_FOUND',
}

enum Endpoint {
  MOVIE = '/movie/:id',
  CREATOR = '/creator/:id',
  SEARCH = '/search/:query',
  USER_RATINGS = '/user-ratings/:id',
  CINEMAS = '/cinemas'
}

type ErrorLog = {
  error: keyof typeof Errors | null;
  message: string;
}

const app = express();
const port = process.env.PORT || 3000;

// --- Config ---
const API_KEY_NAME = process.env.API_KEY_NAME || 'x-api-key';
const API_KEY = process.env.API_KEY;

// --- Middleware for optional header check ---
app.use((req: Request, res: Response, next: NextFunction): void => {
  if (API_KEY) {
    const apiKey = req.headers[API_KEY_NAME] as string | undefined;
    if (!apiKey) {
      const log: ErrorLog = { error: Errors.API_KEY_MISSING, message: `Missing API key in request header: ${API_KEY_NAME}` };
      logMessage('error', log, req);
      res.status(401).json(log);
      return;
    }
    if (apiKey !== API_KEY) {
      const log: ErrorLog = { error: Errors.API_KEY_INVALID, message: `Invalid API key in request header: ${API_KEY_NAME}` };
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
    homepage: packageJson.homepage,
    links: Object.values(Endpoint)
  });
});

app.get(['/movie/', '/creator/', '/search/', '/user-ratings/'], (req, res) => {
  const log: ErrorLog = { error: Errors.ID_MISSING, message: `ID is missing. Provide ID like this: ${req.url}${req.url.endsWith('/') ? '' : '/'}1234` }
  logMessage('warn', log, req);
  res.status(404).json(log);
});

app.get(Endpoint.MOVIE, async (req, res) => {
  try {
    const movie = await csfd.movie(+req.params.id);
    res.json(movie);
    logMessage('success', { error: null, message: `${Endpoint.MOVIE}: ${req.params.id}` }, req);
  } catch (error) {
    const log: ErrorLog = { error: Errors.MOVIE_FETCH_FAILED, message: 'Failed to fetch movie data: ' + error };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});

app.get(Endpoint.CREATOR, async (req, res) => {
  try {
    const result = await csfd.creator(+req.params.id);
    res.json(result);
    logMessage('success', { error: null, message: `${Endpoint.CREATOR}: ${req.params.id}` }, req);
  } catch (error) {
    const log: ErrorLog = { error: Errors.CREATOR_FETCH_FAILED, message: 'Failed to fetch creator data: ' + error };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});

app.get(Endpoint.SEARCH, async (req, res) => {
  try {
    const result = await csfd.search(req.params.query);
    res.json(result);
    logMessage('success', { error: null, message: `${Endpoint.SEARCH}: ${req.params.query}` }, req);
  } catch (error) {
    const log: ErrorLog = { error: Errors.SEARCH_FETCH_FAILED, message: 'Failed to fetch search data: ' + error };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});

app.get(Endpoint.USER_RATINGS, async (req, res) => {
  const { allPages, allPagesDelay, excludes, includesOnly } = req.query;
  try {
    const result = await csfd.userRatings(req.params.id, {
      allPages: allPages === 'true',
      allPagesDelay: allPagesDelay ? +allPagesDelay : undefined,
      excludes: excludes ? (excludes as string).split(',') as CSFDFilmTypes[] : undefined,
      includesOnly: includesOnly ? (includesOnly as string).split(',') as CSFDFilmTypes[] : undefined
    });
    res.json(result);
    logMessage('success', { error: null, message: `${Endpoint.USER_RATINGS}: ${req.params.id}` }, req);
  } catch (error) {
    const log: ErrorLog = { error: Errors.USER_RATINGS_FETCH_FAILED, message: 'Failed to fetch user-ratings data: ' + error };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});


app.get(Endpoint.CINEMAS, async (req, res) => {
  try {
    const result = await csfd.cinema(1, 'today');
    logMessage('success', { error: null, message: `${Endpoint.CINEMAS}` }, req);
    res.json(result);
  } catch (error) {
    const log: ErrorLog = { error: Errors.CINEMAS_FETCH_FAILED, message: 'Failed to fetch cinemas data: ' + error };
    logMessage('error', log, req);
    res.status(500).json(log);
  }
});

app.use((req, res) => {
  const log: ErrorLog = { error: Errors.PAGE_NOT_FOUND, message: 'The requested endpoint could not be found.' };
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

  console.log(`API is running on: http://localhost:${port}\n`);
  if (!API_KEY) {
    console.log('\x1b[31m%s\x1b[0m', '⚠️ Server is OPEN!\n- Your server will be open to the world and potentially everyone can use it without any restriction.\n- To enable some basic protection, set API_KEY environment variable with a value and provide the same value in request header: ' + API_KEY_NAME);
  } else {
    console.log('\x1b[32m%s\x1b[0m', '✔️ Server is protected (somehow).\n- Your API_KEY is set and will be checked for each request header: ' + API_KEY_NAME);
  }
});
