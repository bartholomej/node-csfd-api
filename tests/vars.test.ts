import { describe, expect, test } from 'vitest';
import { creatorUrl, movieUrl, searchUrl, userRatingsUrl } from '../src/vars';

describe('Vars User Ratings', () => {
  test('Assemble User rating url', () => {
    const url = userRatingsUrl('912-bart');
    expect(url).toBe('https://www.csfd.cz/uzivatel/912/hodnoceni/');
  });
  test('Assemble User rating. Page 2', () => {
    const url = userRatingsUrl('912-bart', 2);
    expect(url).toBe('https://www.csfd.cz/uzivatel/912/hodnoceni/?page=2');
  });
  test('Assemble User rating with full URL', () => {
    const url = userRatingsUrl('https://www.csfd.cz/uzivatel/912-bart');
    expect(url).toBe('https://www.csfd.cz/uzivatel/912/hodnoceni/');
  });
});

describe('Vars Movies', () => {
  test('Assemble movieUrl', () => {
    const url = movieUrl(535121, {});
    expect(url).toBe('https://www.csfd.cz/film/535121/prehled/');
  });
  test('Assemble movieUrl with full URL', () => {
    const url = movieUrl('https://www.csfd.cz/film/535121-zlatokopky/', {});
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
  test('Assemble creatorUrl with full URL', () => {
    const url = creatorUrl('https://www.csfd.cz/tvurce/1-mel-gibson', {});
    expect(url).toBe('https://www.csfd.cz/tvurce/1');
  });
});
