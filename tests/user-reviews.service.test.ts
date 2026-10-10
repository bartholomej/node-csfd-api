import { afterAll, beforeAll, describe, expect, test, vi, type MockInstance } from 'vitest';
import type { CSFDUserReviews } from '../src/dto/user-reviews';
import * as fetchers from '../src/fetchers';
import { UserReviewsScraper } from '../src/services/user-reviews.service';

// Live API tests
const USER_WITH_REVIEWS = 195357; // verbal - user with many reviews
const USER_WITH_LESS_REVIEWS = 912; // bart - user with less reviews
const USER_WITH_ZERO_REVIEWS = 228645; // user with zero reviews

describe('User Reviews - Simple call', () => {
  const userReviewsScraper = new UserReviewsScraper();
  let res: CSFDUserReviews[];
  beforeAll(async () => {
    res = await userReviewsScraper.userReviews(USER_WITH_REVIEWS);
  });

  test('Should have some reviews', async () => {
    const results = res;
    expect(results.length).toBeGreaterThan(0);
  });

  test('Each review should have required properties', async () => {
    const results = res;
    const firstReview = results[0];

    expect(firstReview).toHaveProperty('id');
    expect(firstReview).toHaveProperty('title');
    expect(firstReview).toHaveProperty('year');
    expect(firstReview).toHaveProperty('type');
    expect(firstReview).toHaveProperty('url');
    expect(firstReview).toHaveProperty('colorRating');
    expect(firstReview).toHaveProperty('userDate');
    expect(firstReview).toHaveProperty('userRating');
    expect(firstReview).toHaveProperty('text');
    expect(firstReview).toHaveProperty('poster');
  });

  test('Review text should not be empty', async () => {
    const results = res;
    const firstReview = results[0];

    expect(firstReview.text.length).toBeGreaterThan(0);
  });

  test('Poster should be a valid URL', async () => {
    const results = res;
    const firstReview = results[0];

    expect(firstReview.poster).toMatch(/^https:\/\//);
  });

  test('Should accept a full profile url', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue('<html><body></body></html>');
    await userReviewsScraper.userReviews('https://www.csfd.cz/uzivatel/228645/hodnoceni/');
    expect(spy.mock.calls[0][0]).toMatch(/\/uzivatel\/228645\//);
    spy.mockRestore();
  });
});

describe('User Reviews - Filter by type', () => {
  const userReviewsScraper = new UserReviewsScraper();
  let resFilmsOnly: CSFDUserReviews[];
  beforeAll(async () => {
    resFilmsOnly = await userReviewsScraper.userReviews(USER_WITH_REVIEWS, {
      includesOnly: ['film']
    });
  });

  test('Should have only films', async () => {
    const results = resFilmsOnly;
    const films = results.filter((item) => item.type === 'film');
    expect(films.length).toBe(results.length);
  });

  test('Should not have any TV series', async () => {
    const results = resFilmsOnly;
    const tvSeries = results.filter((item) => item.type === 'series');
    expect(tvSeries.length).toBe<number>(0);
  });
});

describe('User Reviews - Exclude types', () => {
  const userReviewsScraper = new UserReviewsScraper();
  let resExcluded: CSFDUserReviews[];
  beforeAll(async () => {
    resExcluded = await userReviewsScraper.userReviews(USER_WITH_REVIEWS, {
      excludes: ['film']
    });
  });

  test('Should not have any film', async () => {
    const results = resExcluded;
    const tvSeries = results.filter((item) => item.type === 'film');
    expect(tvSeries.length).toBe<number>(0);
  });
});

describe('User Reviews - AllPages with delay', () => {
  const userReviewsScraper = new UserReviewsScraper();
  let resAllPages: CSFDUserReviews[];
  beforeAll(async () => {
    resAllPages = await userReviewsScraper.userReviews(USER_WITH_LESS_REVIEWS, {
      allPages: true,
      allPagesDelay: 100
    });
  });

  test('Should fetch all pages', async () => {
    const results = resAllPages;
    // User 912 (bart) has less reviews across multiple pages
    expect(results.length).toBeGreaterThan(11);
  });

  test('Each review should have all properties', async () => {
    const results = resAllPages;
    results.forEach((review) => {
      expect(review).toHaveProperty('id');
      expect(review).toHaveProperty('title');
      expect(review).toHaveProperty('text');
      expect(review).toHaveProperty('poster');
    });
  });
});

describe('User Reviews - AllPages multiple pages without delay', () => {
  const userReviewsScraper = new UserReviewsScraper();
  // Using user with less reviews (but >1 page)
  let resAllPages: CSFDUserReviews[];
  beforeAll(async () => {
    resAllPages = await userReviewsScraper.userReviews(USER_WITH_LESS_REVIEWS, {
      allPages: true
    });
  });

  test('Should handle user natively multiple without delay', async () => {
    const results = resAllPages;
    expect(results.length).toBeGreaterThan(11);
  });
});

describe('User Reviews - Exclude + includes together (warning)', () => {
  let warn: MockInstance<typeof console.warn>;
  const userReviewsScraper = new UserReviewsScraper();
  let resBoth: CSFDUserReviews[];
  beforeAll(async () => {
    warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    resBoth = await userReviewsScraper.userReviews(USER_WITH_REVIEWS, {
      includesOnly: ['film'],
      excludes: ['series']
    });
  });
  afterAll(() => warn.mockRestore());

  test('Should have warning', async () => {
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("Both 'includesOnly' and 'excludes'"),
      ['film']
    );
  });

  test('Should use includesOnly (not excludes)', async () => {
    const results = resBoth;
    const films = results.filter((item) => item.type === 'film');
    expect(films.length).toBe(results.length);
  });
});

describe('User Reviews - User with zero reviews', () => {
  const userReviewsScraper = new UserReviewsScraper();
  let resZeroReviews: CSFDUserReviews[];
  beforeAll(async () => {
    resZeroReviews = await userReviewsScraper.userReviews(USER_WITH_ZERO_REVIEWS);
  });

  test('Should return empty array', async () => {
    const results = resZeroReviews;
    expect(results.length).toBe(0);
  });

  test('Should be an array', async () => {
    const results = resZeroReviews;
    expect(Array.isArray(results)).toBe(true);
  });

  test('Should handle zero reviews with allPages gracefully', async () => {
    const resZeroAllPages = await userReviewsScraper.userReviews(USER_WITH_ZERO_REVIEWS, {
      allPages: true
    });
    expect(resZeroAllPages.length).toBe(0);
  });
});

describe('User Reviews - Specific page', () => {
  const userReviewsScraper = new UserReviewsScraper();
  let resPage2: CSFDUserReviews[];
  beforeAll(async () => {
    resPage2 = await userReviewsScraper.userReviews(USER_WITH_REVIEWS, {
      page: 2
    });
  });

  test('Should fetch second page', async () => {
    const results = resPage2;
    expect(results.length).toBeGreaterThan(0);
  });

  test('Each review should have all properties', async () => {
    const results = resPage2;
    results.forEach((review) => {
      expect(review).toHaveProperty('id');
      expect(review).toHaveProperty('title');
      expect(review).toHaveProperty('text');
      expect(review).toHaveProperty('poster');
      expect(review).toHaveProperty('userRating');
    });
  });
});
