import { parse } from 'node-html-parser';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { csfd, Csfd } from '../src';
import * as fetchers from '../src/fetchers';
import {
  getUserAbout,
  getUserAvatar,
  getUserFanclub,
  getUserId,
  getUserLocation,
  getUserMemberSince,
  getUserNick,
  getUserProfileUrl,
  getUserRealName,
  getUserSectionCount
} from '../src/helpers/user.helper';
import { UserScraper } from '../src/services/user.service';
import { userMock } from './mocks/user.html';

const html = parse(userMock);
const empty = parse(
  '<html><body><div class="user-profile-header"><h1> nobody </h1></div></body></html>'
);
const canonical = (href: string) => parse(`<head><link rel="canonical" href="${href}"></head>`);

describe('User profile helpers', () => {
  test('ID from the canonical url', () => {
    expect(getUserId(html)).toBe(912);
  });

  test.each([
    [
      'cs',
      'https://www.csfd.cz/uzivatel/912-bart/prehled/',
      'https://www.csfd.cz/uzivatel/912-bart/'
    ],
    [
      'en',
      'https://www.csfd.cz/en/user/912-bart/overview/',
      'https://www.csfd.cz/en/user/912-bart/'
    ],
    [
      'sk',
      'https://www.csfd.cz/sk/uzivatel/912-bart/prehlad/',
      'https://www.csfd.cz/sk/uzivatel/912-bart/'
    ]
  ])('Profile url without the overview tab (%s)', (_, href, expected) => {
    expect(getUserProfileUrl(canonical(href))).toBe(expected);
    expect(getUserId(canonical(href))).toBe(912);
  });

  test('Nick, real name and avatar', () => {
    expect(getUserNick(html)).toBe('BART!');
    expect(getUserRealName(html)).toBe('Lukáš Barták');
    expect(getUserAvatar(html)).toBe(
      'https://image.pmgstatic.com/cache/resized/w100h132/files/images/user/avatars/000/281/281554_1c0fef.jpg'
    );
  });

  test('Location and the line under it', () => {
    expect(getUserLocation(html)).toBe('Byen København, Hovedstaden, Dánsko');
    expect(getUserAbout(html)).toBe('Danskjävlar');
  });

  test('Member since, not the last login', () => {
    expect(getUserMemberSince(html)).toBe('2003-03-15');
  });

  test('Ratings and reviews counts', () => {
    expect(getUserSectionCount(html, 'ratings')).toBe(3132);
    expect(getUserSectionCount(html, 'reviews')).toBe(12);
  });

  test('English profile', () => {
    const en = parse(`
      <p class="user-profile-footer">On ČSFD since 03/15/2003 <span>Last login 10/09/2026 08:38</span></p>
      <header class="updated-box-header"><h2>Recent reviews <span class="count">(12)</span></h2>
        <a href="/en/user/912-bart/reviews/">more</a></header>
      <header class="updated-box-header"><h2>Recent ratings <span class="count">(3,132)</span></h2>
        <a href="/en/user/912-bart/ratings/">more</a></header>`);
    expect(getUserMemberSince(en)).toBe('2003-03-15');
    expect(getUserSectionCount(en, 'ratings')).toBe(3132);
    expect(getUserSectionCount(en, 'reviews')).toBe(12);
  });

  test('Fans and points', () => {
    expect(getUserFanclub(html)).toEqual({ fans: 54, points: 31 });
  });

  test('Missing parts are null', () => {
    expect(getUserNick(empty)).toBe('nobody');
    expect(getUserProfileUrl(empty)).toBeNull();
    expect(getUserId(empty)).toBeNull();
    expect(getUserRealName(empty)).toBeNull();
    expect(getUserAvatar(empty)).toBeNull();
    expect(getUserLocation(empty)).toBeNull();
    expect(getUserAbout(empty)).toBeNull();
    expect(getUserMemberSince(empty)).toBeNull();
    expect(getUserSectionCount(empty, 'ratings')).toBeNull();
    expect(getUserFanclub(empty)).toEqual({ fans: null, points: null });
  });
});

describe('UserScraper', () => {
  afterEach(() => vi.restoreAllMocks());

  test('Builds the whole profile', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(userMock);
    const user = await new UserScraper().user('912-bart');

    expect(spy).toHaveBeenCalledWith('https://www.csfd.cz/uzivatel/912-bart/prehled/', {});
    expect(user).toEqual({
      id: 912,
      user: 'BART!',
      userRealName: 'Lukáš Barták',
      avatar:
        'https://image.pmgstatic.com/cache/resized/w100h132/files/images/user/avatars/000/281/281554_1c0fef.jpg',
      url: 'https://www.csfd.cz/uzivatel/912-bart/',
      location: 'Byen København, Hovedstaden, Dánsko',
      about: 'Danskjävlar',
      memberSince: '2003-03-15',
      ratingsCount: 3132,
      reviewsCount: 12,
      fans: 54,
      points: 31
    });
  });

  test('Accepts a profile url', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(userMock);
    await new UserScraper().user('https://www.csfd.cz/uzivatel/912-bart/hodnoceni/');
    expect(spy).toHaveBeenCalledWith('https://www.csfd.cz/uzivatel/912/prehled/', {});
  });

  test.each([
    ['en', 'https://www.csfd.cz/en/uzivatel/912/prehled/'],
    ['sk', 'https://www.csfd.cz/sk/uzivatel/912/prehled/']
  ] as const)('Fetches the %s profile', async (language, expected) => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(userMock);
    await new UserScraper().user(912, { language });
    expect(spy).toHaveBeenCalledWith(expected, {});
  });

  test('Passes request options to the fetcher', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(userMock);
    await new UserScraper().user(912, { request: { credentials: 'omit' } });
    expect(spy).toHaveBeenCalledWith('https://www.csfd.cz/uzivatel/912/prehled/', {
      credentials: 'omit'
    });
  });

  test('Without a canonical link, ID and url come from the input', async () => {
    vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(empty.toString());
    const user = await new UserScraper().user('912-bart', { language: 'en' });
    expect(user.id).toBe(912);
    expect(user.url).toBe('https://www.csfd.cz/en/uzivatel/912-bart/');
  });
});

describe('Csfd.user', () => {
  afterEach(() => vi.restoreAllMocks());

  const instance = () =>
    new Csfd(null as any, null as any, null as any, null as any, null as any, null as any, {
      language: 'sk'
    });

  test('Uses the default options', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(userMock);
    const user = await instance().user(912);
    expect(spy).toHaveBeenCalledWith('https://www.csfd.cz/sk/uzivatel/912/prehled/', {});
    expect(user.id).toBe(912);
  });

  test('Options passed to the call win over the defaults', async () => {
    const spy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(userMock);
    await instance().user(912, { language: 'en' });
    expect(spy).toHaveBeenCalledWith('https://www.csfd.cz/en/uzivatel/912/prehled/', {});
  });
});

describe('Live: user profile', () => {
  test.each([
    ['cs', 'https://www.csfd.cz/uzivatel/912-bart/'],
    ['en', 'https://www.csfd.cz/en/user/912-bart/'],
    ['sk', 'https://www.csfd.cz/sk/uzivatel/912-bart/']
  ] as const)('%s', async (language, url) => {
    const user = await csfd.user(912, { language });
    expect(user).toMatchObject({ id: 912, user: 'BART!', url, memberSince: '2003-03-15' });
    expect(user.ratingsCount).toBeGreaterThan(3000);
    expect(user.reviewsCount).toBeGreaterThan(0);
    expect(user.avatar).toMatch(/^https:\/\//);
  });
});
