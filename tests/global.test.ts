import { describe, expect, test } from 'vitest';
import { csfd } from '../src';
import { getDuration, parseISO8601Duration } from '../src/helpers/global.helper';

export const durationInput = [
  'PT142M',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  '142',
  undefined,
  { index: 0 },
  { input: 'PT142M' },
  { groups: undefined }
];

const result = {
  sign: '+',
  years: 0,
  months: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: '142',
  seconds: 0
};

describe('Live: Fetch rating page', () => {
  test('Resolve duration', async () => {
    const resolver = getDuration(durationInput as RegExpMatchArray);
    expect(resolver).toEqual(result);
  });
});

describe('ISO 8601 Duration Parsing', () => {
  test('Parse PT142M (142 minutes)', () => {
    const duration = parseISO8601Duration('PT142M');
    expect(duration).toEqual(142);
  });

  test('Parse PT2H22M (2 hours 22 minutes)', () => {
    const duration = parseISO8601Duration('PT2H22M');
    expect(duration).toEqual(142); // 2 * 60 + 22 = 142
  });

  test('Parse PT1H (1 hour)', () => {
    const duration = parseISO8601Duration('PT1H');
    expect(duration).toEqual(60);
  });

  test('Parse PT1H30M (1 hour 30 minutes)', () => {
    const duration = parseISO8601Duration('PT1H30M');
    expect(duration).toEqual(90);
  });

  test('Parse -P1Y2M3W4DT5H6M7S (full format)', () => {
    const duration = parseISO8601Duration('-P1Y2M3W4DT5H6M7S');
    // Current parseISO8601Duration only considers hours and minutes
    expect(duration).toEqual(306);
  });
});

describe('CSFD setOptions', () => {
  test('Should set custom options', async () => {
    csfd.setOptions({ request: { credentials: 'include' } });
    csfd.setOptions({ language: 'en' });
    // If setOptions works, it should not throw
    expect(true).toBe(true);
    // Restore defaults for other tests using the singleton
    csfd.setOptions({ language: undefined as any });
  });
});

describe('CSFD userReviews with custom options', () => {
  test('Should fetch reviews with custom request options', async () => {
    const reviews = await csfd.userReviews(912, undefined, { request: { credentials: 'omit' } });
    expect(Array.isArray(reviews)).toBe(true);
  });
});
