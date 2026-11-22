import { describe, expect, test } from 'vitest';
import {
  chartUrl,
  cinemasUrl,
  creatorUrl,
  movieUrl,
  searchUrl,
  userProfileUrl,
  userRatingsUrl
} from '../src/vars';

describe('Vars Charts', () => {
  test('Assemble chartUrl', () => {
    expect(chartUrl('movies', 'best')).toBe('https://www.csfd.cz/zebricky/filmy/nejlepsi/');
    expect(chartUrl('series', 'controversial', 200)).toBe(
      'https://www.csfd.cz/zebricky/serialy/nejrozporuplnejsi/?from=200'
    );
  });
  test('Assemble chartUrl in other languages', () => {
    expect(chartUrl('movies', 'worst', 0, { language: 'en' })).toBe(
      'https://www.csfd.cz/en/zebricky/filmy/nejhorsi/'
    );
  });
});

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

describe('Vars Cinemas', () => {
  test('Assemble cinemasUrl', () => {
    expect(cinemasUrl(1, 'today', {})).toBe('https://www.csfd.cz/kino/?period=today&district=1');
  });
  test('Assemble cinemasUrl with a film filter on the district path', () => {
    expect(cinemasUrl(1, 'all', {}, [1529647, 1708383])).toBe(
      'https://www.csfd.cz/kino/1/?period=all&films%5B0%5D=1529647&films%5B1%5D=1708383'
    );
  });
  test('Assemble cinemasUrl without films like before', () => {
    expect(cinemasUrl(55, 'week', { language: 'en' }, [])).toBe(
      'https://www.csfd.cz/en/kino/?period=week&district=55'
    );
  });
});
