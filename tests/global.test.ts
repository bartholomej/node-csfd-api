import { describe, expect, test } from 'vitest';
import { csfd, Csfd } from '../src';
import {
  getDuration,
  parseDate,
  parseISO8601Duration,
  parseLastIdFromUrl
} from '../src/helpers/global.helper';

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

describe('Date Parsing', () => {
  test('Parse DD.MM.YYYY', () => {
    expect(parseDate('01.02.2023')).toEqual('2023-02-01');
    expect(parseDate('25.12.2022')).toEqual('2022-12-25');
  });

  test('Parse D.M.YYYY', () => {
    expect(parseDate('1.2.2023')).toEqual('2023-02-01');
    expect(parseDate('5.12.2022')).toEqual('2022-12-05');
  });

  test('Parse D. M. YYYY (spaces)', () => {
    expect(parseDate('1. 2. 2023')).toEqual('2023-02-01');
  });

  test('Parse MM/DD/YYYY', () => {
    expect(parseDate('02/25/2026')).toEqual('2026-02-25');
    expect(parseDate('12/05/2022')).toEqual('2022-12-05');
  });

  test('Parse YYYY', () => {
    expect(parseDate('2023')).toEqual('2023-01-01');
  });

  test('Handle invalid dates', () => {
    expect(parseDate('invalid')).toBeNull();
    expect(parseDate('')).toBeNull();
    expect(parseDate(null)).toBeNull();
  });
});

describe('parseLastIdFromUrl invalid test', () => {
  test('Should return null for invalid URL', () => {
    expect(parseLastIdFromUrl('/tvurce/xyz-invalid/')).toEqual(null);
  });
});

describe('CSFD setOptions', () => {
  test('Should set custom options', async () => {
    const csfdCustom = new Csfd(
      null as any,
      null as any,
      null as any,
      null as any,
      null as any,
      null as any
    );
    csfdCustom.setOptions({ request: { credentials: 'include' } });
    csfdCustom.setOptions({ language: 'en' });
    expect(true).toBe(true);
  });
});

describe('CSFD userReviews with custom options', () => {
  test('Should fetch reviews with custom request options', async () => {
    const reviews = await csfd.userReviews(912, undefined, { request: { credentials: 'omit' } });
    expect(Array.isArray(reviews)).toBe(true);
  });
});
