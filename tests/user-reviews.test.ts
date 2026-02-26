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
    expect(rating).toEqual<CSFDStars>(4);
  });
  // test('Second rating', () => {
  //   const rating = getUserReviewRating(reviews[1]);
  //   expect(rating).toEqual<CSFDStars>(1);
  // });
  // test('Third rating', () => {
  //   const rating = getUserReviewRating(reviews[2]);
  //   expect(rating).toEqual<CSFDStars>(2);
  // });
});

describe('Get Review ID', () => {
  test('Third ID', () => {
    const id = getUserReviewId(reviews[2]);
    expect(id).toEqual<number>(1615728);
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
    const title = getUserReviewTitle(reviews[2]);
    expect(title).toEqual<string>('Pomocnice');
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
    const color = getUserReviewColorRating(reviews[3]);
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
    expect(date).toEqual<string>('2026-02-18');
  });
  test('Second date', () => {
    const date = getUserReviewDate(reviews[1]);
    expect(date).toEqual<string>('2026-02-11');
  });
  test('Third date', () => {
    const date = getUserReviewDate(reviews[2]);
    expect(date).toEqual<string>('2026-02-09');
  });
});

describe('Get Review URL', () => {
  test('First url', () => {
    const url = getUserReviewUrl(reviews[0]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1580030-velky-marty/prehled/');
  });
  test('Second url', () => {
    const url = getUserReviewUrl(reviews[1]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1756070-spalujici-rivalita/prehled/');
  });
  test('Third url', () => {
    const url = getUserReviewUrl(reviews[2]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1615728-pomocnice/prehled/');
  });
});

describe('Get Review Text', () => {
  test('First review has text', () => {
    const text = getUserReviewText(reviews[0]);
    expect(text).toContain('Myslím, že jsme právě svědky pomyslného');
    expect(text.length).toBeGreaterThan(100);
  });
  test('Second review has text', () => {
    const text = getUserReviewText(reviews[1]);
    expect(text).toContain('Jak Jarda');
    expect(text.length).toBeGreaterThan(100);
  });
  test('Third review has text', () => {
    const text = getUserReviewText(reviews[2]);
    expect(text).toContain('Tento p(o/i)čin je de fuckto');
    expect(text.length).toBeGreaterThan(100);
  });
});

describe('Get Review Poster', () => {
  test('First poster (3x quality)', () => {
    const poster = getUserReviewPoster(reviews[0]);
    expect(poster).toContain<string>(
      'https://image.pmgstatic.com/cache/resized/w240h339/files/images/film/posters/'
    );
  });

  test('Missing poster', () => {
    const mockElement = parse(`
      <div class="article"><div class="article-img"></div></div>
    `);
    const poster = getUserReviewPoster(mockElement);
    expect(poster).toEqual(null);
  });

  test('Poster fallback to src', () => {
    const mockElement = parse(`
      <div class="article"><div class="article-img"><img src="//example.com/image.jpg"></div></div>
    `);
    const poster = getUserReviewPoster(mockElement);
    expect(poster).toEqual('https://example.com/image.jpg');
  });
});

describe('Get Review Year edge', () => {
  test('Empty/missing year', () => {
    const mockElement = parse(`
      <div class="article"><div class="film-title-info"></div></div>
    `);
    const year = getUserReviewYear(mockElement);
    expect(year).toEqual(null);
  });
});
