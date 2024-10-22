import { describe, expect, test } from 'vitest';
import { CSFDUserRatings } from '../src/interfaces/user-ratings.interface';
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
});

describe('AllPages', () => {
  const userRatingsScraper = new UserRatingsScraper();
  const res: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER2, {
    allPages: true,
    allPagesDelay: 100
  });

  test('Should have exact number of movies', async () => {
    const results = await res;
    expect(results.length).toBeCloseTo(181);
  });
});

describe('Filter out episodes, TV Series and Seasons', () => {
  // Fetch data with excludes
  const userRatingsScraper = new UserRatingsScraper();
  const resExcluded: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER, {
    excludes: ['epizoda', 'seriál', 'série']
  });

  test('Should not have any episode', async () => {
    const results = await resExcluded;

    const episodes = results.filter((item) => item.type === 'epizoda');
    expect(episodes.length).toBe<number>(0);
  });
  test('Should not have any TV series', async () => {
    const results = await resExcluded;
    const tvSeries = results.filter((item) => item.type === 'seriál');
    expect(tvSeries.length).toBe<number>(0);
  });
  test('Should not have any Season', async () => {
    const results = await resExcluded;
    const season = results.filter((item) => item.type === 'série');
    expect(season.length).toBe<number>(0);
  });
});

describe('Includes only TV series or Episodes or something...', () => {
  // Fetch data with excludes
  const userRatingsScraper = new UserRatingsScraper();
  const resIncluded: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER, {
    includesOnly: ['epizoda']
  });

  test('Should not have any film', async () => {
    const results = await resIncluded;

    const films = results.filter((item) => item.type === 'film');
    expect(films.length).toBe<number>(0);
  });
  test('Should have at least one TV series', async () => {
    const results = await resIncluded;
    console.log(results);

    const tvSeries = results.filter((item) => item.type === 'epizoda');
    expect(tvSeries.length).toBeGreaterThan(0);
  });
  test('Should have only TV series', async () => {
    const results = await resIncluded;

    const tvSeries = results.filter((item) => item.type === 'epizoda');
    expect(tvSeries.length).toBe(results.length);
  });
});

describe('Exclude + includes together', () => {
  // Fetch data with excludes + includes
  const userRatingsScraper = new UserRatingsScraper();
  const resBoth: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER, {
    includesOnly: ['seriál'],
    excludes: ['film']
  });

  test('Should have warning', () => {
    expect(console.warn).toHaveBeenCalled;
  });

  test('Should use includesOnly', async () => {
    const results = await resBoth;

    const tvSeries = results.filter((item) => item.type === 'seriál');
    expect(tvSeries.length).toBe<number>(results.length);
  });
});
