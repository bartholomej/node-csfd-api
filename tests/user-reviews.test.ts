import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../src/dto/global';
import {
  getUserReviewColorRating,
  getUserReviewDate,
  getUserReviewId,
  getUserReviewPoster,
  getUserReviewRating,
  getUserReviewText,
  getUserReviewTitle,
  getUserReviewType,
  getUserReviewUrl,
  getUserReviewYear
} from '../src/helpers/user-reviews.helper';
import { userReviwsMock } from './mocks/userReviews.html';

const items = parse(userReviwsMock);
const reviews: HTMLElement[] = items.querySelectorAll('.user-tab-reviews .article');

describe('Get Review Ratings', () => {
  test('First rating', () => {
    const rating = getUserReviewRating(reviews[0]);
    expect(rating).toEqual<CSFDStars>(2);
  });
  test('Second rating', () => {
    const rating = getUserReviewRating(reviews[1]);
    expect(rating).toEqual<CSFDStars>(1);
  });
  test('Third rating', () => {
    const rating = getUserReviewRating(reviews[2]);
    expect(rating).toEqual<CSFDStars>(2);
  });
});

describe('Get Review ID', () => {
  test('First ID', () => {
    const id = getUserReviewId(reviews[0]);
    expect(id).toEqual<number>(1622190);
  });
  test('Second ID', () => {
    const id = getUserReviewId(reviews[1]);
    expect(id).toEqual<number>(1485987);
  });
  test('Third ID', () => {
    const id = getUserReviewId(reviews[2]);
    expect(id).toEqual<number>(1559919);
  });
});

describe('Get Review Type', () => {
  test('Film (default)', () => {
    const type = getUserReviewType(reviews[0]);
    expect(type).toEqual<CSFDFilmTypes>('film');
  });
  // TODO: Add test for seriál when available in mock data
});

describe('Get Review Title', () => {
  test('First title', () => {
    const title = getUserReviewTitle(reviews[0]);
    expect(title).toEqual<string>('Nepela');
  });
  test('Second title', () => {
    const title = getUserReviewTitle(reviews[1]);
    expect(title).toEqual<string>('Greenland 2: Útěk');
  });
  test('Third title', () => {
    const title = getUserReviewTitle(reviews[2]);
    expect(title).toEqual<string>('Anakonda');
  });
});

describe('Get Review Year', () => {
  test('First year', () => {
    const year = getUserReviewYear(reviews[0]);
    expect(year).toEqual<number>(2025);
  });
  test('Second year', () => {
    const year = getUserReviewYear(reviews[1]);
    expect(year).toEqual<number>(2026);
  });
  test('Third year', () => {
    const year = getUserReviewYear(reviews[2]);
    expect(year).toEqual<number>(2025);
  });
});

describe('Get Review Color Rating', () => {
  test('Red (good)', () => {
    const color = getUserReviewColorRating(reviews[0]);
    expect(color).toEqual<CSFDColorRating>('good');
  });
  test('Blue (average)', () => {
    const color = getUserReviewColorRating(reviews[1]);
    expect(color).toEqual<CSFDColorRating>('average');
  });
  test('Red (good)', () => {
    const color = getUserReviewColorRating(reviews[2]);
    expect(color).toEqual<CSFDColorRating>('average');
  });
});

describe('Get Review Date', () => {
  test('First date', () => {
    const date = getUserReviewDate(reviews[0]);
    expect(date).toEqual<string>('05.02.2026');
  });
  test('Second date', () => {
    const date = getUserReviewDate(reviews[1]);
    expect(date).toEqual<string>('02.02.2026');
  });
  test('Third date', () => {
    const date = getUserReviewDate(reviews[2]);
    expect(date).toEqual<string>('29.01.2026');
  });
});

describe('Get Review URL', () => {
  test('First url', () => {
    const url = getUserReviewUrl(reviews[0]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1622190-nepela/prehled/');
  });
  test('Second url', () => {
    const url = getUserReviewUrl(reviews[1]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1485987-greenland-2-utek/prehled/');
  });
  test('Third url', () => {
    const url = getUserReviewUrl(reviews[2]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1559919-anakonda/prehled/');
  });
});

describe('Get Review Text', () => {
  test('First review has text', () => {
    const text = getUserReviewText(reviews[0]);
    expect(text).toContain('Když se takhle sejde');
    expect(text.length).toBeGreaterThan(100);
  });
  test('Second review has text', () => {
    const text = getUserReviewText(reviews[1]);
    expect(text).toContain('Ric Pic Čamrda');
    expect(text.length).toBeGreaterThan(100);
  });
  test('Third review has text', () => {
    const text = getUserReviewText(reviews[2]);
    expect(text).toContain('Abych parafrázoval zdejšího');
    expect(text.length).toBeGreaterThan(100);
  });
});

describe('Get Review Poster', () => {
  test('First poster (3x quality)', () => {
    const poster = getUserReviewPoster(reviews[0]);
    expect(poster).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w240h339/files/images/film/posters/170/539/170539540_tvtneq.jpg'
    );
  });
  test('Second poster (3x quality)', () => {
    const poster = getUserReviewPoster(reviews[1]);
    expect(poster).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w240h339/files/images/film/posters/170/852/170852274_cb7ob1.jpg'
    );
  });
  test('Third poster (3x quality)', () => {
    const poster = getUserReviewPoster(reviews[2]);
    expect(poster).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w240h339/files/images/film/posters/170/879/170879888_92gzf0.jpg'
    );
  });
});
