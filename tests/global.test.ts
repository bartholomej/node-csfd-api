import { describe, expect, test } from 'vitest';
import { getDuration } from '../src/helpers/global.helper';

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
    const resolver = getDuration(durationInput);
    expect(resolver).toEqual(result);
  });
});
