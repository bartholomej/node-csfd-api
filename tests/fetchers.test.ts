import { fetchMovie, fetchUserRatings } from '../src/fetchers';

const badId = 9999999999999999999;

describe('Fetch rating page', () => {
  test('Fetch `912-bart` user', async () => {
    const html = await fetchUserRatings(912);
    expect(html).toContain('Oeconomia');
  });
});

describe('Fetch rating page', () => {
  test('Fetch `535121-na-spatne-strane` movie', async () => {
    const html = await fetchMovie(535121);
    expect(html).toContain('Na špatné straně');
  });
});

describe('User page 404', () => {
  test('Fetch error URL', async () => {
    try {
      const html = await fetchUserRatings(badId);
      expect(html).toBe('Error');
    } catch (e) {
      expect(e).toContain(Error);
    }
  });
});

describe('Movie page 404', () => {
  test('Fetch error URL', async () => {
    try {
      const html = await fetchMovie(badId);
      expect(html).toBe('Error');
    } catch (e) {
      expect(e).toThrow(Error);
    }
  });
});
