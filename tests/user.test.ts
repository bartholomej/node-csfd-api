import { parse } from 'node-html-parser';
import { afterEach, describe, expect, test, vi } from 'vitest';
import * as fetchers from '../src/fetchers';
import {
  getUserAbout,
  getUserAvatar,
  getUserFanclub,
  getUserId,
  getUserLocation,
  getUserMemberSince,
  getUserNick,
  getUserRealName,
  getUserSectionCount
} from '../src/helpers/user.helper';
import { UserScraper } from '../src/services/user.service';
import { userProfileUrl } from '../src/vars';
import { userMock } from './mocks/user.html';

const html = parse(userMock);
const empty = parse(
  '<html><body><div class="user-profile-header"><h1> nobody </h1></div></body></html>'
);

describe('User profile helpers', () => {
  test('ID from the canonical url', () => {
    expect(getUserId(html)).toBe(912);
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

    expect(spy).toHaveBeenCalledWith(userProfileUrl('912-bart'), {});
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
});
