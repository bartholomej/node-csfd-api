import { userRatingsUrl } from '../src/vars';

describe('Vars', () => {
  test('Assemble User rating url', () => {
    const url = userRatingsUrl('912-bart');
    expect(url).toBe('https://new.csfd.cz/uzivatel/912-bart/hodnoceni/');
  });
});
