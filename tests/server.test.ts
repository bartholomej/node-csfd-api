import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { csfd } from '../src';
import { createApp } from '../src/bin/server-app';
import { CsfdError } from '../src/errors';
import type { CsfdErrorReason } from '../src/errors';

const app = createApp({ apiKeyName: 'x-api-key' });

beforeEach(() => {
  vi.spyOn(console, 'log').mockImplementation(() => undefined);
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
});

describe('REST server', () => {
  test('root lists the endpoints', async () => {
    const res = await app.request('/');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.name).toBe('node-csfd-api');
    expect(body.links).toContain('/movie/:id');
    expect(body.links).toContain('/chart/:type/:category');
  });

  test('movie accepts a slug, a trailing slash and a language', async () => {
    const spy = vi.spyOn(csfd, 'movie').mockResolvedValue({ id: 10135 } as never);
    const res = await app.request('/movie/10135-forrest-gump/?language=en');
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ id: 10135 });
    expect(spy).toHaveBeenCalledWith(10135, { language: 'en' });
  });

  test('logs how long a request took', async () => {
    vi.stubEnv('VERBOSE', 'true');
    vi.spyOn(csfd, 'movie').mockResolvedValue({ id: 10135 } as never);
    await app.request('/movie/10135');
    expect(console.log).toHaveBeenCalledWith(
      expect.stringMatching(/\| \d+ ms ✅ .*\/movie\/:id: 10135 🔗 GET: \/movie\/10135/)
    );

    await app.request('/movie/not-an-id');
    expect(console.warn).toHaveBeenCalledWith(expect.stringMatching(/\| \d+ ms ⚠️ ID_INVALID/));
  });

  test('unsupported language is dropped', async () => {
    const spy = vi.spyOn(csfd, 'creator').mockResolvedValue({ id: 2120 } as never);
    await app.request('/creator/2120?language=de');
    expect(spy).toHaveBeenCalledWith(2120, { language: undefined });
  });

  test('search decodes the query', async () => {
    const spy = vi.spyOn(csfd, 'search').mockResolvedValue({} as never);
    await app.request('/search/forrest%20gump');
    expect(spy).toHaveBeenCalledWith('forrest gump', { language: undefined });
  });

  test('user profile accepts a slug and a language', async () => {
    const spy = vi.spyOn(csfd, 'user').mockResolvedValue({ id: 912 } as never);
    const res = await app.request('/user/912-bart/?language=en');
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ id: 912 });
    expect(spy).toHaveBeenCalledWith(912, { language: 'en' });
  });

  test('user ratings parse list options from the query', async () => {
    const spy = vi.spyOn(csfd, 'userRatings').mockResolvedValue([]);
    await app.request(
      '/user-ratings/912-bart?page=2&allPages=true&allPagesDelay=100&excludes=series,episode&language=sk'
    );
    expect(spy).toHaveBeenCalledWith(
      912,
      {
        allPages: true,
        allPagesDelay: 100,
        excludes: ['series', 'episode'],
        includesOnly: undefined,
        page: 2
      },
      { language: 'sk' }
    );
  });

  test('user reviews accept includesOnly', async () => {
    const spy = vi.spyOn(csfd, 'userReviews').mockResolvedValue([]);
    await app.request('/user-reviews/912?includesOnly=film');
    expect(spy).toHaveBeenCalledWith(
      912,
      expect.objectContaining({ includesOnly: ['film'], allPages: false }),
      { language: undefined }
    );
  });

  test('cinemas return today', async () => {
    const spy = vi.spyOn(csfd, 'cinema').mockResolvedValue([]);
    const res = await app.request('/cinemas');
    expect(res.status).toBe(200);
    expect(spy).toHaveBeenCalledWith(1, 'today', { language: undefined });
  });

  test('chart takes its type, category, limit and language', async () => {
    const spy = vi.spyOn(csfd, 'chart').mockResolvedValue([]);
    const res = await app.request('/chart/series/favorite?limit=150&language=en');
    expect(res.status).toBe(200);
    expect(spy).toHaveBeenCalledWith('series', 'favorite', { limit: 150 }, { language: 'en' });
  });

  test.each(['', '?limit=abc', '?limit=0', '?limit=-5'])(
    'chart with %s leaves the limit to the default',
    async (query) => {
      const spy = vi.spyOn(csfd, 'chart').mockResolvedValue([]);
      await app.request(`/chart/movies/best/${query}`);
      expect(spy).toHaveBeenCalledWith(
        'movies',
        'best',
        { limit: undefined },
        { language: undefined }
      );
    }
  );

  test.each(['/chart/films/best', '/chart/movies/top'])(
    'unknown chart %s returns 400',
    async (url) => {
      const spy = vi.spyOn(csfd, 'chart');
      const res = await app.request(url);
      expect(res.status).toBe(400);
      expect(await res.json()).toMatchObject({ error: 'CHART_INVALID' });
      expect(spy).not.toHaveBeenCalled();
    }
  );

  test('a failed chart maps the error', async () => {
    vi.spyOn(csfd, 'chart').mockRejectedValue(
      new CsfdError('blocked', 'https://www.csfd.cz', 'blocked')
    );
    const res = await app.request('/chart/movies/best');
    expect(res.status).toBe(503);
    expect(await res.json()).toMatchObject({ error: 'CHART_FETCH_FAILED' });
  });

  test('invalid ID returns 400', async () => {
    const res = await app.request('/movie/abc');
    expect(res.status).toBe(400);
    expect(await res.json()).toMatchObject({ error: 'ID_INVALID' });
  });

  test.each(['/movie', '/movie/', '/user/', '/user-ratings/'])(
    'missing ID on %s returns 404',
    async (url) => {
      const res = await app.request(url);
      expect(res.status).toBe(404);
      const body = await res.json();
      expect(body.error).toBe('ID_MISSING');
      expect(body.message).toContain(`${url.replace(/\/$/, '')}/1234`);
    }
  );

  test('unknown route returns 404 JSON', async () => {
    for (const res of [
      await app.request('/nope'),
      await app.request('/movie/10135', { method: 'POST' })
    ]) {
      expect(res.status).toBe(404);
      expect(await res.json()).toMatchObject({ error: 'PAGE_NOT_FOUND' });
    }
  });

  test.each<[CsfdErrorReason, number]>([
    ['not-found', 404],
    ['blocked', 503],
    ['http', 502],
    ['network', 502]
  ])('CsfdError %s maps to %i', async (reason, status) => {
    vi.spyOn(csfd, 'movie').mockRejectedValue(new CsfdError(reason, 'https://www.csfd.cz', reason));
    const res = await app.request('/movie/10135');
    expect(res.status).toBe(status);
    expect(await res.json()).toMatchObject({ error: 'MOVIE_FETCH_FAILED' });
  });

  test('unexpected error returns 500', async () => {
    vi.spyOn(csfd, 'search').mockRejectedValue(new Error('boom'));
    const res = await app.request('/search/matrix');
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({
      error: 'SEARCH_FETCH_FAILED',
      message: 'Failed to fetch search data: Error: boom'
    });
  });
});

const rpc = (id: number, method: string, params: object = {}) => ({
  jsonrpc: '2.0',
  id,
  method,
  params
});

const mcpPost = (target: typeof app, body: object, headers: Record<string, string> = {}) =>
  target.request('/mcp', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json, text/event-stream',
      ...headers
    },
    body: JSON.stringify(body)
  });

describe('MCP over HTTP', () => {
  test('initialize returns the server info', async () => {
    const res = await mcpPost(
      app,
      rpc(1, 'initialize', {
        protocolVersion: '2025-06-18',
        capabilities: {},
        clientInfo: { name: 'test', version: '0' }
      })
    );
    expect(res.status).toBe(200);
    expect((await res.json()).result.serverInfo.name).toBe('node-csfd-api');
  });

  test('lists the tools without a session', async () => {
    const res = await mcpPost(app, rpc(2, 'tools/list'));
    const { result } = await res.json();
    expect(result.tools.map((tool: { name: string }) => tool.name)).toEqual([
      'search',
      'get_movie',
      'get_creator',
      'get_user',
      'get_user_ratings',
      'get_user_reviews',
      'get_cinemas',
      'get_chart'
    ]);
  });

  test('calls a tool', async () => {
    const spy = vi
      .spyOn(csfd, 'movie')
      .mockResolvedValue({ id: 10135, title: 'Forrest Gump' } as never);
    const res = await mcpPost(
      app,
      rpc(3, 'tools/call', { name: 'get_movie', arguments: { id: 10135 } })
    );
    const { result } = await res.json();
    expect(spy).toHaveBeenCalledWith(10135);
    expect(result.structuredContent).toMatchObject({ id: 10135, title: 'Forrest Gump' });
  });

  test('logs a failed tool call', async () => {
    vi.spyOn(csfd, 'movie').mockRejectedValue(
      new CsfdError('blocked', 'https://www.csfd.cz', 'blocked')
    );
    await mcpPost(app, rpc(5, 'tools/call', { name: 'get_movie', arguments: { id: 1 } }));
    expect(console.error).toHaveBeenCalledWith(
      expect.stringMatching(
        /\| \d+ ms ❌ MCP_TOOL_FAILED: MCP get_movie \{"id":1\}: Error retrieving movie details: .*blocked/
      )
    );
  });

  test('logs a successful tool call only when verbose', async () => {
    vi.spyOn(csfd, 'movie').mockResolvedValue({ id: 10135, title: 'Forrest Gump' } as never);
    const call = rpc(6, 'tools/call', { name: 'get_movie', arguments: { id: 10135 } });

    await mcpPost(app, call);
    expect(console.log).not.toHaveBeenCalledWith(expect.stringContaining('MCP get_movie'));

    vi.stubEnv('VERBOSE', 'true');
    await mcpPost(app, call);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringMatching(/\| \d+ ms ✅ +MCP get_movie \{"id":10135\} 🔗 POST: \/mcp/)
    );
  });

  test('does not log other MCP requests', async () => {
    vi.stubEnv('VERBOSE', 'true');
    await mcpPost(app, rpc(7, 'tools/list'));
    expect(console.log).not.toHaveBeenCalledWith(expect.stringContaining('MCP '));
  });

  test('GET is not allowed', async () => {
    const res = await app.request('/mcp');
    expect(res.status).toBe(405);
    expect(res.headers.get('allow')).toBe('POST');
  });

  test('rejects a client that does not accept JSON and event streams', async () => {
    const res = await mcpPost(app, rpc(4, 'tools/list'), { accept: 'application/json' });
    expect(res.status).toBe(406);
  });

  test('works with a real MCP client', async () => {
    vi.spyOn(csfd, 'search').mockResolvedValue({
      movies: [{ id: 9499, title: 'Matrix', year: 1999, poster: 'https://example.com/matrix.jpg' }],
      tvSeries: [],
      creators: [],
      users: []
    } as never);
    const client = new Client({ name: 'test', version: '0' });
    const transport = new StreamableHTTPClientTransport(new URL('http://localhost/mcp'), {
      fetch: (url, init) => app.request(String(url), init)
    });
    await client.connect(transport);
    await client.listTools();
    const result = await client.callTool({ name: 'search', arguments: { query: 'matrix' } });
    expect(result.structuredContent).toMatchObject({ movies: [{ title: 'Matrix' }] });
    await client.close();
  });

  test('root lists the endpoint', async () => {
    const body = await (await app.request('/')).json();
    expect(body.links).toContain('/mcp');
  });
});

describe('REST server with API keys', () => {
  const secured = createApp({ apiKey: 'one, two', apiKeyName: 'x-api-key' });

  test('rejects a missing key, also on unknown routes', async () => {
    for (const url of ['/', '/nope']) {
      const res = await secured.request(url);
      expect(res.status).toBe(401);
      expect(res.headers.get('www-authenticate')).toBe('Bearer realm="node-csfd-api"');
      expect(await res.json()).toMatchObject({ error: 'API_KEY_MISSING' });
    }
  });

  test('protects the MCP endpoint too', async () => {
    expect((await mcpPost(secured, rpc(1, 'tools/list'))).status).toBe(401);
    const res = await mcpPost(secured, rpc(1, 'tools/list'), { authorization: 'Bearer one' });
    expect(res.status).toBe(200);
  });

  test('a real MCP client authenticates with a bearer token', async () => {
    const client = new Client({ name: 'test', version: '0' });
    const transport = new StreamableHTTPClientTransport(new URL('http://localhost/mcp'), {
      fetch: (url, init) => secured.request(String(url), init),
      requestInit: { headers: { Authorization: 'Bearer two' } }
    });
    await client.connect(transport);
    expect((await client.listTools()).tools.length).toBeGreaterThan(0);
    await client.close();
  });

  test('rejects an invalid key', async () => {
    const res = await secured.request('/', { headers: { 'x-api-key': 'three' } });
    expect(res.status).toBe(401);
    expect(res.headers.get('www-authenticate')).toBe(
      'Bearer realm="node-csfd-api", error="invalid_token"'
    );
    expect(await res.json()).toMatchObject({ error: 'API_KEY_INVALID' });
  });

  test('accepts any configured key, header name is case-insensitive', async () => {
    const res = await secured.request('/', { headers: { 'X-API-Key': ' two ' } });
    expect(res.status).toBe(200);
  });

  test('accepts a bearer token, scheme is case-insensitive', async () => {
    for (const authorization of ['Bearer one', 'bearer two']) {
      const res = await secured.request('/', { headers: { authorization } });
      expect(res.status).toBe(200);
    }
  });

  test('rejects an invalid bearer token', async () => {
    const res = await secured.request('/', { headers: { authorization: 'Bearer three' } });
    expect(res.status).toBe(401);
    expect(await res.json()).toMatchObject({ error: 'API_KEY_INVALID' });
  });

  test('other authorization schemes do not count as a key', async () => {
    const res = await secured.request('/', { headers: { authorization: 'Basic one' } });
    expect(res.status).toBe(401);
    expect(await res.json()).toMatchObject({ error: 'API_KEY_MISSING' });
  });

  test('a raw key still works when API_KEY_NAME is authorization', async () => {
    const custom = createApp({ apiKey: 'one', apiKeyName: 'authorization' });
    for (const authorization of ['one', 'Bearer one']) {
      const res = await custom.request('/', { headers: { authorization } });
      expect(res.status).toBe(200);
    }
  });

  test('a key list of only separators still locks the server', async () => {
    const locked = createApp({ apiKey: ' , ', apiKeyName: 'x-api-key' });
    const res = await locked.request('/', { headers: { 'x-api-key': 'anything' } });
    expect(res.status).toBe(401);
  });
});
