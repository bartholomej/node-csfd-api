import { fetchUserRatings } from '../src/fetchers';

describe('Fetch rating page', () => {
  test('Fetch `912-bart` user', async () => {
    const html = await fetchUserRatings(912);
    expect(html).toContain('Oeconomia');
  });
});
