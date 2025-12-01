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
const reviews: HTMLElement[] = items.querySelectorAll('.user-reviews .article');

describe('Get Review Ratings', () => {
  test('First rating', () => {
    const rating = getUserReviewRating(reviews[0]);
    expect(rating).toEqual<CSFDStars>(4);
  });
  test('Second rating', () => {
    const rating = getUserReviewRating(reviews[1]);
    expect(rating).toEqual<CSFDStars>(1);
  });
  test('Third rating', () => {
    const rating = getUserReviewRating(reviews[2]);
    expect(rating).toEqual<CSFDStars>(3);
  });
});

describe('Get Review ID', () => {
  test('First ID', () => {
    const id = getUserReviewId(reviews[0]);
    expect(id).toEqual<number>(1391448);
  });
  test('Second ID', () => {
    const id = getUserReviewId(reviews[1]);
    expect(id).toEqual<number>(1530416);
  });
  test('Third ID', () => {
    const id = getUserReviewId(reviews[2]);
    expect(id).toEqual<number>(1640954);
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
    expect(title).toEqual<string>('Co s Péťou?');
  });
  test('Second title', () => {
    const title = getUserReviewTitle(reviews[1]);
    expect(title).toEqual<string>('Kouzlo derby');
  });
  test('Third title', () => {
    const title = getUserReviewTitle(reviews[2]);
    expect(title).toEqual<string>('13 dní, 13 nocí');
  });
});

describe('Get Review Year', () => {
  test('First year', () => {
    const year = getUserReviewYear(reviews[0]);
    expect(year).toEqual<number>(2025);
  });
  test('Second year', () => {
    const year = getUserReviewYear(reviews[1]);
    expect(year).toEqual<number>(2025);
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
    expect(color).toEqual<CSFDColorRating>('good');
  });
});

describe('Get Review Date', () => {
  test('First date', () => {
    const date = getUserReviewDate(reviews[0]);
    expect(date).toEqual<string>('27.11.2025');
  });
  test('Second date', () => {
    const date = getUserReviewDate(reviews[1]);
    expect(date).toEqual<string>('26.11.2025');
  });
  test('Third date', () => {
    const date = getUserReviewDate(reviews[2]);
    expect(date).toEqual<string>('23.11.2025');
  });
});

describe('Get Review URL', () => {
  test('First url', () => {
    const url = getUserReviewUrl(reviews[0]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1391448-co-s-petou/prehled/');
  });
  test('Second url', () => {
    const url = getUserReviewUrl(reviews[1]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1530416-kouzlo-derby/prehled/');
  });
  test('Third url', () => {
    const url = getUserReviewUrl(reviews[2]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1640954-13-dni-13-noci/prehled/');
  });
});

describe('Get Review Text', () => {
  test('First review has text', () => {
    const text = getUserReviewText(reviews[0]);
    expect(text).toContain('Co s Péťou?');
    expect(text.length).toBeGreaterThan(100);
  });
  test('Second review has text', () => {
    const text = getUserReviewText(reviews[1]);
    expect(text).toContain('Typické kolečkoidní');
    expect(text.length).toBeGreaterThan(100);
  });
  test('Third review has text', () => {
    const text = getUserReviewText(reviews[2]);
    expect(text).toContain('Jestli chceš do ráje');
    expect(text.length).toBeGreaterThan(100);
  });
});

describe('Get Review Poster', () => {
  test('First poster (3x quality)', () => {
    const poster = getUserReviewPoster(reviews[0]);
    expect(poster).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w240h339/files/images/film/posters/170/492/170492173_1l3djd.jpg'
    );
  });
  test('Second poster (3x quality)', () => {
    const poster = getUserReviewPoster(reviews[1]);
    expect(poster).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w240h339/files/images/film/posters/170/230/170230377_cimu90.jpg'
    );
  });
  test('Third poster (3x quality)', () => {
    const poster = getUserReviewPoster(reviews[2]);
    expect(poster).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w240h339/files/images/film/posters/170/342/170342652_c1plu2.jpg'
    );
  });
});
