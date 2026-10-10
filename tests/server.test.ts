import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { csfd } from '../src';
import { createApp } from '../src/bin/server-app';
import { CsfdError, type CsfdErrorReason } from '../src/errors';

const app = createApp({ apiKeyName: 'x-api-key' });

beforeEach(() => {
  vi.spyOn(console, 'log').mockImplementation(() => undefined);
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('REST server', () => {
  test('root lists the endpoints', async () => {
    const res = await app.request('/');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.name).toBe('node-csfd-api');
    expect(body.links).toContain('/movie/:id');
  });

  test('movie accepts a slug, a trailing slash and a language', async () => {
    const spy = vi.spyOn(csfd, 'movie').mockResolvedValue({ id: 10135 } as never);
    const res = await app.request('/movie/10135-forrest-gump/?language=en');
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ id: 10135 });
    expect(spy).toHaveBeenCalledWith(10135, { language: 'en' });
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

  test('invalid ID returns 400', async () => {
    const res = await app.request('/movie/abc');
    expect(res.status).toBe(400);
    expect(await res.json()).toMatchObject({ error: 'ID_INVALID' });
  });

  test.each(['/movie', '/movie/', '/user-ratings/'])(
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

describe('REST server with API keys', () => {
  const secured = createApp({ apiKey: 'one, two', apiKeyName: 'x-api-key' });

  test('rejects a missing key, also on unknown routes', async () => {
    for (const url of ['/', '/nope']) {
      const res = await secured.request(url);
      expect(res.status).toBe(401);
      expect(await res.json()).toMatchObject({ error: 'API_KEY_MISSING' });
    }
  });

  test('rejects an invalid key', async () => {
    const res = await secured.request('/', { headers: { 'x-api-key': 'three' } });
    expect(res.status).toBe(401);
    expect(await res.json()).toMatchObject({ error: 'API_KEY_INVALID' });
  });

  test('accepts any configured key, header name is case-insensitive', async () => {
    const res = await secured.request('/', { headers: { 'X-API-Key': ' two ' } });
    expect(res.status).toBe(200);
  });

  test('a key list of only separators still locks the server', async () => {
    const locked = createApp({ apiKey: ' , ', apiKeyName: 'x-api-key' });
    const res = await locked.request('/', { headers: { 'x-api-key': 'anything' } });
    expect(res.status).toBe(401);
  });
});
