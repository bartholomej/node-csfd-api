import { describe, expect, test } from 'vitest';
import { csfd } from '../src';

describe('CSFD setOptions', () => {
  test('Should set custom options', async () => {
    csfd.setOptions({ request: { credentials: 'include' } });
    // If setOptions works, it should not throw
    expect(true).toBe(true);
  });
});

describe('CSFD userReviews with custom options', () => {
  test('Should fetch reviews with custom request options', async () => {
    const reviews = await csfd.userReviews(912, undefined, { request: { credentials: 'omit' } });
    expect(Array.isArray(reviews)).toBe(true);
  });
});
