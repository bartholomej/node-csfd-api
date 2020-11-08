import { CSFDUserRatings } from '../src/interfaces/user-ratings';
import { UserRatingsScraper } from '../src/services/user-ratings';

// Live API tests
const USER = 912;

describe('Simple call', () => {
  // Fetch data with excludes
  const userRatingsScraper = new UserRatingsScraper();
  const res: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER);

  test('Should have at least one film', async () => {
    const results = await res;

    const films = results.filter((item) => item.type === 'film');
    expect(films.length).toBeGreaterThan(1);
  });
});

describe('Filter out episodes, TV Series and Seasons', () => {
  // Fetch data with excludes
  const userRatingsScraper = new UserRatingsScraper();
  const resExcluded: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER, {
    excludes: ['epizoda', 'TV seriál', 'série']
  });

  test('Should not have any episode', async () => {
    const results = await resExcluded;

    const episodes = results.filter((item) => item.type === 'epizoda');
    expect(episodes.length).toBe<number>(0);
  });
  test('Should not have any TV series', async () => {
    const results = await resExcluded;
    const tvSeries = results.filter((item) => item.type === 'TV seriál');
    expect(tvSeries.length).toBe<number>(0);
  });
  test('Should not have any Season', async () => {
    const results = await resExcluded;
    const season = results.filter((item) => item.type === 'série');
    expect(season.length).toBe<number>(0);
  });
});

describe('Includes only TV series', () => {
  // Fetch data with excludes
  const userRatingsScraper = new UserRatingsScraper();
  const resIncluded: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER, {
    includesOnly: ['TV seriál']
  });

  test('Should not have any film', async () => {
    const results = await resIncluded;

    const films = results.filter((item) => item.type === 'film');
    expect(films.length).toBe<number>(0);
  });
  test('Should have at least one TV series', async () => {
    const results = await resIncluded;

    const tvSeries = results.filter((item) => item.type === 'TV seriál');
    expect(tvSeries.length).toBeGreaterThan(1);
  });
  test('Should have only TV Series', async () => {
    const results = await resIncluded;

    const tvSeries = results.filter((item) => item.type === 'TV seriál');
    expect(tvSeries.length).toBe(results.length);
  });
});

describe('Exclude + includes together', () => {
  // Fetch data with excludes + includes
  const userRatingsScraper = new UserRatingsScraper();
  const resBoth: Promise<CSFDUserRatings[]> = userRatingsScraper.userRatings(USER, {
    includesOnly: ['TV seriál'],
    excludes: ['film']
  });

  test('Should have warning', () => {
    expect(console.warn).toHaveBeenCalled;
  });

  test('Should use includesOnly', async () => {
    const results = await resBoth;

    const tvSeries = results.filter((item) => item.type === 'TV seriál');
    expect(tvSeries.length).toBe<number>(results.length);
  });
});
