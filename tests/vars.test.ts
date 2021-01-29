import { movieUrl, searchUrl, userRatingsUrl } from '../src/vars';

describe('Vars User Ratings', () => {
  test('Assemble User rating url', () => {
    const url = userRatingsUrl('912-bart');
    expect(url).toBe('https://new.csfd.cz/uzivatel/912-bart/hodnoceni/');
  });
  test('Assemble User rating. Page 2', () => {
    const url = userRatingsUrl('912-bart', 2);
    expect(url).toBe('https://new.csfd.cz/uzivatel/912-bart/hodnoceni/?page=2');
  });
});

describe('Vars Movies', () => {
  test('Assemble movieUrl', () => {
    const url = movieUrl(535121);
    expect(url).toBe('https://new.csfd.cz/film/535121');
  });
});

describe('Vars Search', () => {
  test('Assemble searchUrl', () => {
    const url = searchUrl('matrix');
    expect(url).toBe('https://new.csfd.cz/hledat/?q=matrix');
  });
});
