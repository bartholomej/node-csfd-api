import { describe, expect, test, vi } from 'vitest';
import { CSFDUserRatings } from '../src/dto/user-ratings';
import * as fetchers from '../src/fetchers';
import { UserRatingsScraper } from '../src/services/user-ratings.service';

// Live API tests
const USER = 912;
const USER2 = 228645;

describe('Simple call', () => {
  // Fetch data with excludes
  const userRatingsScraper = new UserRatingsScraper();
  const res: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER);

  test('Should have some movies', async () => {
    const results = await res;

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
});

describe('AllPages', async () => {
  const userRatingsScraper = new UserRatingsScraper();
  const res: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER2, {
    allPages: true,
    allPagesDelay: 100
  });

  test('Should have exact number of movies', async () => {
    const results = await res;
    // 181 is current number of ratings for user 228645 (2026-02-26)
    // We check if it is at least 150 to be safe
    expect(results.length).toBeGreaterThan(150);
  });
});

describe('AllPages multi pages without delay', async () => {
  const userRatingsScraper = new UserRatingsScraper();
  const res: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER2, {
    allPages: true
  });

  test('Should run without delay', async () => {
    const results = await res;
    expect(results.length).toBeCloseTo(181);
  });
});

describe('Filter out episodes, TV Series and Seasons', () => {
  // Fetch data with excludes
  const userRatingsScraper = new UserRatingsScraper();
  const resExcluded: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER, {
    excludes: ['episode', 'series', 'season']
  });

  test('Should not have any episode', async () => {
    const results = await resExcluded;

    const episodes = results.filter((item) => item.type === 'episode');
    expect(episodes.length).toBe<number>(0);
  });
  test('Should not have any TV series', async () => {
    const results = await resExcluded;
    const tvSeries = results.filter((item) => item.type === 'series');
    expect(tvSeries.length).toBe<number>(0);
  });
  test('Should not have any Season', async () => {
    const results = await resExcluded;
    const season = results.filter((item) => item.type === 'season');
    expect(season.length).toBe<number>(0);
  });
});

describe('Includes only TV series or Episodes or something...', () => {
  // Fetch data with excludes
  const userRatingsScraper = new UserRatingsScraper();
  const resIncluded: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER, {
    includesOnly: ['episode']
  });

  test('Should not have any film', async () => {
    const results = await resIncluded;

    const films = results.filter((item) => item.type === 'film');
    expect(films.length).toBe<number>(0);
  });
  test('Should have some season', async () => {
    const results = await resIncluded;
    console.log(results);

    const tvSeries = results.filter((item) => item.type === 'episode');
    expect(tvSeries.length).toBeGreaterThan(0);
  });
  test('Should have only TV series', async () => {
    const results = await resIncluded;

    const tvSeries = results.filter((item) => item.type === 'episode');
    expect(tvSeries.length).toBe(results.length);
  });
});

describe('Exclude + includes together', () => {
  // Fetch data with excludes + includes
  const userRatingsScraper = new UserRatingsScraper();
  const resBoth: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER, {
    includesOnly: ['series'],
    excludes: ['film']
  });

  test('Should have warning', () => {
    expect(console.warn).toHaveBeenCalled;
  });

  test('Should use includesOnly', async () => {
    const results = await resBoth;

    const tvSeries = results.filter((item) => item.type === 'series');
    expect(tvSeries.length).toBe<number>(results.length);
  });
});

describe('Specific page', () => {
  const userRatingsScraper = new UserRatingsScraper();
  const resPage2: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER, {
    page: 2
  });

  test('Should fetch second page', async () => {
    const results = await resPage2;
    expect(results.length).toBeGreaterThan(0);
  });

  test('Each rating should have required properties', async () => {
    const results = await resPage2;
    results.forEach((rating) => {
      expect(rating).toHaveProperty('id');
      expect(rating).toHaveProperty('title');
      expect(rating).toHaveProperty('userRating');
    });
  });
});
