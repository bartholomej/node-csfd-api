import { parse } from 'node-html-parser';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { csfd, Csfd } from '../src';
import * as fetchers from '../src/fetchers';
import {
  getChartColorRating,
  getChartCount,
  getChartGenres,
  getChartItems,
  getChartOrigins,
  getChartPeople,
  getChartPosition,
  getChartPoster,
  getChartRating,
  getChartTitle,
  getChartUrl,
  getChartYear
} from '../src/helpers/chart.helper';
import { ChartScraper } from '../src/services/chart.service';
import { chartMock } from './mocks/chart.html';
import { chartEnMock } from './mocks/chart-en.html';
import { chartFavoriteMock } from './mocks/chart-favorite.html';

const [first] = getChartItems(parse(chartMock));
const [favorite] = getChartItems(parse(chartFavoriteMock));
const [english] = getChartItems(parse(chartEnMock));
const article = (html: string) => parse(`<article>${html}</article>`).querySelector('article');

// A chart page as ČSFD pages it: `count` places from `from`
const page = (from: number, count: number) =>
  `<div class="charts-article-list">${Array.from(
    { length: count },
    (_, i) =>
      `<article><span class="position">${from + i}</span><a class="film-title-name" href="/film/${from + i}-film/prehled/">Film</a></article>`
  ).join('')}</div>`;
const fromOf = (url: string) => +(new URL(url).searchParams.get('from') ?? 0);
const wholeChart = async (url: string) => {
  const from = fromOf(url);
  if (from >= 1000) return page(1, 99);
  return from ? page(from, from === 900 ? 101 : 100) : page(1, 99);
};

describe('Chart helpers', () => {
  test('Every place on the page', () => {
    expect(getChartItems(parse(chartMock)).map(getChartPosition)).toEqual([1, 2, 3]);
  });

  test('Title, url and year', () => {
    expect(getChartTitle(first)).toBe('Vykoupení z věznice Shawshank');
    expect(getChartUrl(first)).toBe('/film/2294-vykoupeni-z-veznice-shawshank/prehled/');
    expect(getChartYear(first)).toBe(1994);
  });

  test('Poster at the full size', () => {
    expect(getChartPoster(first)).toBe(
      'https://image.pmgstatic.com/cache/resized/w1080/files/images/film/posters/162/505/162505167_735db9.jpg'
    );
  });

  test('Countries and genres apart', () => {
    expect(getChartOrigins(first)).toEqual(['USA']);
    expect(getChartGenres(first)).toEqual(['Drama', 'Krimi']);

    const coproduction = article(
      '<p class="film-origins-genres"><span class="info"><span class="info-country">USA / Velká Británie</span><span class="bullet"></span>Drama, Historický</span></p>'
    );
    expect(getChartOrigins(coproduction)).toEqual(['USA', 'Velká Británie']);
    expect(getChartGenres(coproduction)).toEqual(['Drama', 'Historický']);
  });

  test('Directors and actors', () => {
    expect(getChartPeople(first, 'directors')).toEqual([
      {
        id: 2869,
        name: 'Frank Darabont',
        url: 'https://www.csfd.cz/tvurce/2869-frank-darabont/prehled/'
      }
    ]);
    expect(getChartPeople(first, 'actors').map((actor) => actor.name)).toEqual([
      'Tim Robbins',
      'Morgan Freeman'
    ]);
  });

  test('Directors and actors in English', () => {
    expect(getChartPeople(english, 'directors').map((person) => person.id)).toEqual([2869]);
    expect(getChartPeople(english, 'actors').map((person) => person.id)).toEqual([103, 92]);
  });

  test('Directors and actors in Slovak', () => {
    const slovak = article(
      '<p class="film-creators">Réžia: <a href="/sk/tvorca/1-a/">A</a></p><p class="film-creators">Hrajú: <a href="/sk/tvorca/2-b/">B</a></p>'
    );
    expect(getChartPeople(slovak, 'directors').map((person) => person.name)).toEqual(['A']);
    expect(getChartPeople(slovak, 'actors').map((person) => person.name)).toEqual(['B']);
  });

  test('Rating, its colour and the number of ratings', () => {
    expect(getChartRating(first)).toBe(95.4);
    expect(getChartColorRating(first)).toBe('good');
    expect(getChartCount(first)).toBe(116917);
  });

  test('Rating and count written the English way', () => {
    expect(getChartRating(english)).toBe(95.4);
    expect(getChartCount(english)).toBe(116917);
  });

  test('The favourite chart counts fans and shows no rating', () => {
    expect(getChartRating(favorite)).toBeNull();
    expect(getChartColorRating(favorite)).toBe('unknown');
    expect(getChartCount(favorite)).toBe(18001);
  });

  test('An empty article breaks nothing', () => {
    const empty = article('');
    expect(getChartPosition(empty)).toBeNull();
    expect(getChartUrl(empty)).toBeNull();
    expect(getChartTitle(empty)).toBe('');
    expect(getChartYear(empty)).toBeNull();
    expect(getChartPoster(empty)).toBeNull();
    expect(getChartOrigins(empty)).toEqual([]);
    expect(getChartGenres(empty)).toEqual([]);
    expect(getChartPeople(empty, 'directors')).toEqual([]);
    expect(getChartRating(empty)).toBeNull();
    expect(getChartColorRating(empty)).toBe('unknown');
    expect(getChartCount(empty)).toBeNull();
  });
});

describe('ChartScraper', () => {
  afterEach(() => vi.restoreAllMocks());

  test('Builds each place', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(chartMock);
    const chart = await new ChartScraper().chart('movies', 'best', { limit: 3 });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('https://www.csfd.cz/zebricky/filmy/nejlepsi/', {});
    expect(chart.map((item) => item.title)).toEqual([
      'Vykoupení z věznice Shawshank',
      'Forrest Gump',
      'Zelená míle'
    ]);
    expect(chart[0]).toEqual({
      position: 1,
      id: 2294,
      title: 'Vykoupení z věznice Shawshank',
      year: 1994,
      url: 'https://www.csfd.cz/film/2294/prehled/',
      type: 'film',
      colorRating: 'good',
      poster:
        'https://image.pmgstatic.com/cache/resized/w1080/files/images/film/posters/162/505/162505167_735db9.jpg',
      origins: ['USA'],
      genres: ['Drama', 'Krimi'],
      creators: {
        directors: [
          {
            id: 2869,
            name: 'Frank Darabont',
            url: 'https://www.csfd.cz/tvurce/2869-frank-darabont/prehled/'
          }
        ],
        actors: [
          {
            id: 103,
            name: 'Tim Robbins',
            url: 'https://www.csfd.cz/tvurce/103-tim-robbins/prehled/'
          },
          {
            id: 92,
            name: 'Morgan Freeman',
            url: 'https://www.csfd.cz/tvurce/92-morgan-freeman/prehled/'
          }
        ]
      },
      rating: 95.4,
      ratingCount: 116917,
      fans: null
    });
  });

  test('The first page by default, in one request', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockImplementation(wholeChart);
    const chart = await new ChartScraper().chart('movies', 'best');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(chart.map((item) => item.position)).toEqual(Array.from({ length: 99 }, (_, i) => i + 1));
  });

  test('A hundred places take the second page too', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockImplementation(wholeChart);
    const chart = await new ChartScraper().chart('movies', 'best', { limit: 100 });

    expect(spy.mock.calls.map(([url]) => url)).toEqual([
      'https://www.csfd.cz/zebricky/filmy/nejlepsi/',
      'https://www.csfd.cz/zebricky/filmy/nejlepsi/?from=100'
    ]);
    expect(chart.at(-1).position).toBe(100);
  });

  test('Reads only the pages the limit needs', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockImplementation(wholeChart);
    expect(await new ChartScraper().chart('movies', 'best', { limit: 50 })).toHaveLength(50);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('Ends with the chart, at its thousandth place', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockImplementation(wholeChart);
    const chart = await new ChartScraper().chart('movies', 'best', { limit: 5000 });

    expect(spy).toHaveBeenCalledTimes(10);
    expect(chart).toHaveLength(1000);
    expect(chart.at(-1).position).toBe(1000);
  });

  test('Stops when ČSFD serves the first page again', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(page(1, 99));
    const chart = await new ChartScraper().chart('movies', 'best', { limit: 300 });

    expect(spy).toHaveBeenCalledTimes(2);
    expect(chart).toHaveLength(99);
  });

  test('Stops at an empty page', async () => {
    vi.spyOn(fetchers, 'fetchPage').mockResolvedValue('<html></html>');
    expect(await new ChartScraper().chart('movies', 'best')).toEqual([]);
  });

  test.each([
    ['movies', 'worst', 'https://www.csfd.cz/zebricky/filmy/nejhorsi/'],
    ['movies', 'favorite', 'https://www.csfd.cz/zebricky/filmy/nejoblibenejsi/'],
    ['movies', 'controversial', 'https://www.csfd.cz/zebricky/filmy/nejrozporuplnejsi/'],
    ['series', 'best', 'https://www.csfd.cz/zebricky/serialy/nejlepsi/']
  ] as const)('Fetches the %s %s chart', async (type, category, url) => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(chartMock);
    await new ChartScraper().chart(type, category, { limit: 1 });
    expect(spy).toHaveBeenCalledWith(url, {});
  });

  test('A series chart holds series', async () => {
    vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(chartMock);
    const [item] = await new ChartScraper().chart('series', 'best', { limit: 1 });
    expect(item.type).toBe('series');
  });

  test('The favourite chart has fans instead of ratings', async () => {
    vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(chartFavoriteMock);
    const [item] = await new ChartScraper().chart('movies', 'favorite', { limit: 1 });
    expect(item).toMatchObject({
      id: 10135,
      rating: null,
      ratingCount: null,
      fans: 18001,
      colorRating: 'unknown'
    });
  });

  test.each([
    ['en', 'https://www.csfd.cz/en/zebricky/filmy/nejlepsi/?from=100'],
    ['sk', 'https://www.csfd.cz/sk/zebricky/filmy/nejlepsi/?from=100']
  ] as const)('Fetches the %s chart', async (language, url) => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockImplementation(wholeChart);
    const chart = await new ChartScraper().chart('movies', 'best', { limit: 100 }, { language });
    expect(spy).toHaveBeenLastCalledWith(url, {});
    expect(chart[0].url).toBe(`https://www.csfd.cz/${language}/film/1/prehled/`);
  });

  test('Passes request options to the fetcher', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(chartMock);
    await new ChartScraper().chart(
      'movies',
      'best',
      { limit: 1 },
      { request: { credentials: 'omit' } }
    );
    expect(spy).toHaveBeenCalledWith('https://www.csfd.cz/zebricky/filmy/nejlepsi/', {
      credentials: 'omit'
    });
  });
});

describe('Csfd.chart', () => {
  afterEach(() => vi.restoreAllMocks());

  test('Uses the default options', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(chartMock);
    const client = new Csfd(
      null as any,
      null as any,
      null as any,
      null as any,
      null as any,
      null as any,
      { language: 'sk' }
    );
    await client.chart('movies', 'best', { limit: 1 });
    expect(spy).toHaveBeenCalledWith('https://www.csfd.cz/sk/zebricky/filmy/nejlepsi/', {});
  });
});

describe('Live: charts', () => {
  test('The best films, across the first two pages', async () => {
    const chart = await csfd.chart('movies', 'best', { limit: 101 });
    expect(chart).toHaveLength(101);
    expect(chart.map((item) => item.position)).toEqual(
      Array.from({ length: 101 }, (_, i) => i + 1)
    );
    expect(new Set(chart.map((item) => item.id)).size).toBe(101);
    expect(chart[0].rating).toBeGreaterThan(90);
    expect(chart[0].ratingCount).toBeGreaterThan(50000);
    expect(chart[0].poster).toMatch(/^https:\/\/.*\/w1080\//);
    expect(chart[0].creators.directors.length).toBeGreaterThan(0);
  });

  test('The favourite series', async () => {
    const [item] = await csfd.chart('series', 'favorite', { limit: 1 });
    expect(item).toMatchObject({ position: 1, type: 'series', rating: null, ratingCount: null });
    expect(item.fans).toBeGreaterThan(1000);
  });
});
