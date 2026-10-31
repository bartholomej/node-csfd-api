import { describe, expect, test } from 'vitest';
import { creatorUrl, movieUrl, searchUrl, userProfileUrl, userRatingsUrl } from '../src/vars';

describe('Vars User Profile', () => {
  test('Assemble userProfileUrl', () => {
    expect(userProfileUrl('912-bart')).toBe('https://www.csfd.cz/uzivatel/912-bart/prehled/');
    expect(userProfileUrl(912)).toBe('https://www.csfd.cz/uzivatel/912/prehled/');
  });
  test('Assemble userProfileUrl in other languages', () => {
    expect(userProfileUrl(912, { language: 'en' })).toBe(
      'https://www.csfd.cz/en/uzivatel/912/prehled/'
    );
    expect(userProfileUrl(912, { language: 'sk' })).toBe(
      'https://www.csfd.cz/sk/uzivatel/912/prehled/'
    );
  });
});

describe('Vars User Ratings', () => {
  test('Assemble User rating url', () => {
    const url = userRatingsUrl('912-bart');
    expect(url).toBe('https://www.csfd.cz/uzivatel/912-bart/hodnoceni/');
  });
  test('Assemble User rating. Page 2', () => {
    const url = userRatingsUrl('912-bart', 2);
    expect(url).toBe('https://www.csfd.cz/uzivatel/912-bart/hodnoceni/?page=2');
  });
});

describe('Vars Movies', () => {
  test('Assemble movieUrl', () => {
    const url = movieUrl(535121, {});
    expect(url).toBe('https://www.csfd.cz/film/535121/prehled/');
  });
});

describe('Vars Search', () => {
  test('Assemble searchUrl', () => {
    const url = searchUrl('matrix', {});
    expect(url).toBe('https://www.csfd.cz/hledat/?q=matrix');
  });
});

describe('Vars Creator', () => {
  test('Assemble creatorUrl', () => {
    const url = creatorUrl('1', {});
    expect(url).toBe('https://www.csfd.cz/tvurce/1');
  });
});
