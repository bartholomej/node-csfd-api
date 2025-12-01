import { describe, expect, test } from 'vitest';
import { CSFDUserReviews } from '../src/dto/user-reviews';
import { UserReviewsScraper } from '../src/services/user-reviews.service';

// Live API tests
const USER_WITH_REVIEWS = 195357; // verbal - user with many reviews
const USER_WITH_LESS_REVIEWS = 912; // bart - user with less reviews
const USER_WITH_ZERO_REVIEWS = 228645; // user with zero reviews

describe('User Reviews - Simple call', () => {
  const userReviewsScraper = new UserReviewsScraper();
  const res: Promise<CSFDUserReviews[]> = userReviewsScraper.userReviews(USER_WITH_REVIEWS);

  test('Should have some reviews', async () => {
    const results = await res;
    expect(results.length).toBeGreaterThan(0);
  });

  test('Each review should have required properties', async () => {
    const results = await res;
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
    const results = await res;
    const firstReview = results[0];

    expect(firstReview.text.length).toBeGreaterThan(0);
  });

  test('Poster should be a valid URL', async () => {
    const results = await res;
    const firstReview = results[0];

    expect(firstReview.poster).toMatch(/^https:\/\//);
  });
});

describe('User Reviews - Filter by type', () => {
  const userReviewsScraper = new UserReviewsScraper();
  const resFilmsOnly: Promise<CSFDUserReviews[]> = userReviewsScraper.userReviews(
    USER_WITH_REVIEWS,
    {
      includesOnly: ['film']
    }
  );

  test('Should have only films', async () => {
    const results = await resFilmsOnly;
    const films = results.filter((item) => item.type === 'film');
    expect(films.length).toBe(results.length);
  });

  test('Should not have any TV series', async () => {
    const results = await resFilmsOnly;
    const tvSeries = results.filter((item) => item.type === 'seriál');
    expect(tvSeries.length).toBe<number>(0);
  });
});

describe('User Reviews - Exclude types', () => {
  const userReviewsScraper = new UserReviewsScraper();
  const resExcluded: Promise<CSFDUserReviews[]> = userReviewsScraper.userReviews(
    USER_WITH_REVIEWS,
    {
      excludes: ['seriál']
    }
  );

  test('Should not have any TV series', async () => {
    const results = await resExcluded;
    const tvSeries = results.filter((item) => item.type === 'seriál');
    expect(tvSeries.length).toBe<number>(0);
  });
});

describe('User Reviews - AllPages with delay', () => {
  const userReviewsScraper = new UserReviewsScraper();
  const resAllPages: Promise<CSFDUserReviews[]> = userReviewsScraper.userReviews(
    USER_WITH_LESS_REVIEWS,
    {
      allPages: true,
      allPagesDelay: 100
    }
  );

  test('Should fetch all pages', async () => {
    const results = await resAllPages;
    // User 912 (bart) has less reviews across multiple pages
    expect(results.length).toBeGreaterThan(11);
  });

  test('Each review should have all properties', async () => {
    const results = await resAllPages;
    results.forEach((review) => {
      expect(review).toHaveProperty('id');
      expect(review).toHaveProperty('title');
      expect(review).toHaveProperty('text');
      expect(review).toHaveProperty('poster');
    });
  });
});

describe('User Reviews - Exclude + includes together (warning)', () => {
  const userReviewsScraper = new UserReviewsScraper();
  const resBoth: Promise<CSFDUserReviews[]> = userReviewsScraper.userReviews(USER_WITH_REVIEWS, {
    includesOnly: ['film'],
    excludes: ['seriál']
  });

  test('Should have warning', () => {
    expect(console.warn).toHaveBeenCalled;
  });

  test('Should use includesOnly (not excludes)', async () => {
    const results = await resBoth;
    const films = results.filter((item) => item.type === 'film');
    expect(films.length).toBe(results.length);
  });
});

describe('User Reviews - User with zero reviews', () => {
  const userReviewsScraper = new UserReviewsScraper();
  const resZeroReviews: Promise<CSFDUserReviews[]> =
    userReviewsScraper.userReviews(USER_WITH_ZERO_REVIEWS);

  test('Should return empty array', async () => {
    const results = await resZeroReviews;
    expect(results.length).toBe(0);
  });

  test('Should be an array', async () => {
    const results = await resZeroReviews;
    expect(Array.isArray(results)).toBe(true);
  });
});
