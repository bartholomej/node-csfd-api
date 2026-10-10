import { afterAll, beforeAll, describe, expect, test, vi, type MockInstance } from 'vitest';
import type { CSFDFilmTypes } from '../src/dto/global';
import type { CSFDUserRatings } from '../src/dto/user-ratings';
import * as fetchers from '../src/fetchers';
import { UserRatingsScraper } from '../src/services/user-ratings.service';

// Live API tests
const USER = 912;
const USER2 = 228645;

describe('Simple call', () => {
  // Fetch data with excludes
  const userRatingsScraper = new UserRatingsScraper();
  let res: CSFDUserRatings[];
  beforeAll(async () => {
    res = await userRatingsScraper.userRatings(USER);
  });

  test('Should have some movies', async () => {
    const results = res;

    const films = results.filter((item) => item.type === 'film');
    expect(films.length).toBeGreaterThan(10);
  });

  test('Should handle zero ratings gracefully using mock', async () => {
    const originalFetch = fetchers.fetchPage;
    const spy = vi.spyOn(fetchers, 'fetchPage').mockImplementation((...args) => {
      if (String(args[0]).includes('12345678')) {
        return Promise.resolve('<html><body>No table</body></html>');
      }
      return originalFetch(...args);
    });
    const resZero = await userRatingsScraper.userRatings(12345678, { allPages: true });
    expect(resZero.length).toBe(0);
    spy.mockRestore();
  });

  test('Should accept a full profile url', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue('<html><body></body></html>');
    await userRatingsScraper.userRatings('https://www.csfd.cz/uzivatel/228645/hodnoceni/');
    expect(spy.mock.calls[0][0]).toMatch(/\/uzivatel\/228645\//);
    spy.mockRestore();
  });
});

describe('AllPages', () => {
  const userRatingsScraper = new UserRatingsScraper();
  let res: CSFDUserRatings[];
  beforeAll(async () => {
    res = await userRatingsScraper.userRatings(USER2, {
      allPages: true,
      allPagesDelay: 100
    });
  });

  test('Should have exact number of movies', async () => {
    const results = res;
    // 181 is current number of ratings for user 228645 (2026-02-26)
    // We check if it is at least 150 to be safe
    expect(results.length).toBeGreaterThan(150);
  });
});

describe('AllPages multi pages without delay', () => {
  const userRatingsScraper = new UserRatingsScraper();
  let res: CSFDUserRatings[];
  beforeAll(async () => {
    res = await userRatingsScraper.userRatings(USER2, {
      allPages: true
    });
  });

  test('Should run without delay', async () => {
    const results = res;
    expect(results.length).toBeCloseTo(181);
  });
});

describe('Filter out episodes, TV Series and Seasons', () => {
  // Fetch data with excludes
  const userRatingsScraper = new UserRatingsScraper();
  let resExcluded: CSFDUserRatings[];
  beforeAll(async () => {
    resExcluded = await userRatingsScraper.userRatings(USER, {
      excludes: ['episode', 'series', 'season']
    });
  });

  test('Should not have any episode', async () => {
    const results = resExcluded;

    const episodes = results.filter((item) => item.type === 'episode');
    expect(episodes.length).toBe<number>(0);
  });
  test('Should not have any TV series', async () => {
    const results = resExcluded;
    const tvSeries = results.filter((item) => item.type === 'series');
    expect(tvSeries.length).toBe<number>(0);
  });
  test('Should not have any Season', async () => {
    const results = resExcluded;
    const season = results.filter((item) => item.type === 'season');
    expect(season.length).toBe<number>(0);
  });
});

describe('Includes only TV series or Episodes or something...', () => {
  // All three, since a single type can drop off the user's first page as they rate more.
  const included: CSFDFilmTypes[] = ['series', 'season', 'episode'];
  const userRatingsScraper = new UserRatingsScraper();
  let resIncluded: CSFDUserRatings[];
  beforeAll(async () => {
    resIncluded = await userRatingsScraper.userRatings(USER, {
      includesOnly: included
    });
  });

  test('Should not have any film', async () => {
    const results = resIncluded;

    const films = results.filter((item) => item.type === 'film');
    expect(films.length).toBe<number>(0);
  });
  test('Should have some series, seasons or episodes', async () => {
    const results = resIncluded;
    expect(results.length).toBeGreaterThan(0);
  });
  test('Should have only TV series', async () => {
    const results = resIncluded;
    expect(results.every((item) => included.includes(item.type))).toBe(true);
  });
});

describe('Exclude + includes together', () => {
  let warn: MockInstance<typeof console.warn>;
  // Fetch data with excludes + includes
  const userRatingsScraper = new UserRatingsScraper();
  let resBoth: CSFDUserRatings[];
  beforeAll(async () => {
    warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    resBoth = await userRatingsScraper.userRatings(USER, {
      includesOnly: ['series'],
      excludes: ['film']
    });
  });
  afterAll(() => warn.mockRestore());

  test('Should have warning', async () => {
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("Both 'includesOnly' and 'excludes'"),
      ['series']
    );
  });

  test('Should use includesOnly', async () => {
    const results = resBoth;

    const tvSeries = results.filter((item) => item.type === 'series');
    expect(tvSeries.length).toBe<number>(results.length);
  });
});

describe('Specific page', () => {
  const userRatingsScraper = new UserRatingsScraper();
  let resPage2: CSFDUserRatings[];
  beforeAll(async () => {
    resPage2 = await userRatingsScraper.userRatings(USER, {
      page: 2
    });
  });

  test('Should fetch second page', async () => {
    const results = resPage2;
    expect(results.length).toBeGreaterThan(0);
  });

  test('Each rating should have required properties', async () => {
    const results = resPage2;
    results.forEach((rating) => {
      expect(rating).toHaveProperty('id');
      expect(rating).toHaveProperty('title');
      expect(rating).toHaveProperty('userRating');
    });
  });
});
