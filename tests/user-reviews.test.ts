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
  test('Last rating', () => {
    const rating = getUserReviewRating(reviews[reviews.length - 1]);
    expect(rating).toEqual<CSFDStars>(2);
  });
});

describe('Get ID', () => {
  test('First ID', () => {
    const id = getUserReviewId(reviews[0]);
    expect(id).toEqual<number>(1563295);
  });
  test('Last ID', () => {
    const id = getUserReviewId(reviews[reviews.length - 1]);
    expect(id).toEqual<number>(1558529);
  });
});

describe('Get type', () => {
  test('TV series', () => {
    const type = getUserReviewType(reviews[1]);
    expect(type).toEqual<CSFDFilmTypes>('film');
  });
  test('Episode', () => {
    const type = getUserReviewType(reviews[2]);
    expect(type).toEqual<CSFDFilmTypes>('film');
  });
  test('Film', () => {
    const type = getUserReviewType(reviews[4]);
    expect(type).toEqual<CSFDFilmTypes>('film');
  });
});

describe('Get title', () => {
  test('First title', () => {
    const title = getUserReviewTitle(reviews[0]);
    expect(title).toEqual<string>('Gangy z Birminghamu: Nesmrtelný muž');
  });
  test('Last title', () => {
    const title = getUserReviewTitle(reviews[reviews.length - 1]);
    expect(title).toEqual<string>('Neporazitelní');
  });
});

describe('Get Review Year', () => {
  test('First year', () => {
    const year = getUserReviewYear(reviews[0]);
    expect(year).toBeGreaterThan(1800);
  });
  test('Second year', () => {
    const year = getUserReviewYear(reviews[1]);
    expect(year).toBeGreaterThan(1800);
  });
  test('Third year', () => {
    const year = getUserReviewYear(reviews[2]);
    expect(year).toBeGreaterThan(1800);
  });
});

describe('Get Review Color Rating', () => {
  test('First color', () => {
    const color = getUserReviewColorRating(reviews[0]);
    expect(['good', 'average', 'bad', 'unknown']).toContain(color);
  });
  test('Second color', () => {
    const color = getUserReviewColorRating(reviews[3]);
    expect(['good', 'average', 'bad', 'unknown']).toContain(color);
  });
  test('Third color', () => {
    const color = getUserReviewColorRating(reviews[2]);
    expect(['good', 'average', 'bad', 'unknown']).toContain(color);
  });
});

describe('Get date', () => {
  test('First date', () => {
    const date = getUserReviewDate(reviews[0]);
    expect(date).toEqual<string>('2026-03-23');
  });
  test('Last date', () => {
    const date = getUserReviewDate(reviews[reviews.length - 1]);
    expect(date).toEqual<string>('2026-02-23');
  });
});

describe('Get Url', () => {
  test('First url', () => {
    const url = getUserReviewUrl(reviews[0]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1563295-gangy-z-birminghamu-nesmrtelny-muz/prehled/');
  });
  test('Last url', () => {
    const url = getUserReviewUrl(reviews[reviews.length - 1]);
    expect(url).toEqual<string>('https://www.csfd.cz/film/1558529-neporazitelni/prehled/');
  });
});

describe('Get Review Text', () => {
  test('First review has text', () => {
    const text = getUserReviewText(reviews[0]);
    expect(text.length).toBeGreaterThan(0);
  });
  test('Second review has text', () => {
    const text = getUserReviewText(reviews[1]);
    expect(text.length).toBeGreaterThan(0);
  });
  test('Third review has text', () => {
    const text = getUserReviewText(reviews[2]);
    expect(text.length).toBeGreaterThan(0);
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
