import { fetchPage } from '../src/fetchers';
import { movieUrl, searchUrl, userRatingsUrl } from '../src/vars';

const badId = 999999999999999;

// User Ratings
describe('Fetch rating page', () => {
  test('Fetch `912-bart` user', async () => {
    const url = userRatingsUrl(912);
    const html = await fetchPage(url);
    expect(html).toContain('Vlkochodci');
  });
});

describe('Fetch rating page 2', () => {
  test('Fetch `912-bart` user – page 2', async () => {
    const url = userRatingsUrl(912, 2);
    const html = await fetchPage(url);
    expect(html).toContain('Neviditelný');
  });
});

// Movie
describe('Fetch movie page', () => {
  test('Fetch `535121-na-spatne-strane` movie', async () => {
    const url = movieUrl(535121);
    const html = await fetchPage(url);
    expect(html).toContain('Na špatné straně');
  });
});

// Search
describe('Fetch movie page', () => {
  test('Fetch `535121-na-spatne-strane` movie', async () => {
    const url = searchUrl('matrix');
    const html = await fetchPage(url);
    expect(html).toContain('Matrix');
  });
});

// Edge cases
describe('User page 404', () => {
  test('Fetch error URL', async () => {
    try {
      const url = userRatingsUrl(badId);
      const html = await fetchPage(url);
      expect(html).toBe('Error');
    } catch (e) {
      expect(e).toContain(Error);
    }
  });
});

describe('Movie page 404', () => {
  test('Fetch error URL', async () => {
    try {
      const url = movieUrl(badId);
      const html = await fetchPage(url);
      expect(html).toBe('Error');
    } catch (e) {
      expect(e).toThrow(Error);
    }
  });
});
