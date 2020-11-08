import { fetchMovie, fetchUserRatings } from '../src/fetchers';

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
