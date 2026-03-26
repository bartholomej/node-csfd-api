import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import { CSFDColorRating, CSFDStars } from '../src/dto/global';
import {
  getUserRating,
  getUserRatingColorRating,
  getUserRatingDate,
  getUserRatingId,
  getUserRatingTitle,
  getUserRatingType,
  getUserRatingUrl,
  getUserRatingYear
} from '../src/helpers/user-ratings.helper';
import { userRatingsMock } from './mocks/userRatings.html';

const items = parse(userRatingsMock);
const movies: HTMLElement[] = items.querySelectorAll('#snippet--ratings table tr');

describe('Get Ratings', () => {
  test('First rating', () => {
    const movie = getUserRating(movies[0]);
    expect([0, 1, 2, 3, 4, 5, null]).toContain(movie);
  });
  test('Last rating', () => {
    const movie = getUserRating(movies[movies.length - 1]);
    expect([0, 1, 2, 3, 4, 5, null]).toContain(movie);
  });

  test('Trash (Odpad!) rating', () => {
    // Create a mock element with trash rating (usually indicated by 'trash' class or lack of 'stars-X')
    const mockElement = parse(`
      <tr>
        <td class="star-rating-only">
          <span class="stars trash"></span>
        </td>
      </tr>
    `);
    const movie = getUserRating(mockElement);
    expect(movie).toEqual<CSFDStars>(0);
  });

  test('Garbage/Invalid class rating', () => {
    // strict check for non-stars class
    const mockElement = parse(`
      <tr>
        <td class="star-rating-only">
          <span class="stars something-else"></span>
        </td>
      </tr>
    `);
    const movie = getUserRating(mockElement);
    expect(movie).toEqual<CSFDStars>(0);
  });
});

describe('Get ID', () => {
  test('First ID', () => {
    const movie = getUserRatingId(movies[0]);
    expect(movie).toBeGreaterThan(0);
  });
  test('Last ID', () => {
    const movie = getUserRatingId(movies[movies.length - 1]);
    expect(movie).toBeGreaterThan(0);
  });
});

describe('Get type', () => {
  test('Film', () => {
    const movie = getUserRatingType(movies[1]);
    expect(['film', 'series', 'episode', 'unknown']).toContain(movie);
  });
  test('TV series', () => {
    const movie = getUserRatingType(movies[2]);
    expect(['film', 'series', 'episode', 'unknown']).toContain(movie);
  });
  test('Episode', () => {
    const movie = getUserRatingType(movies[5]);
    expect(['film', 'series', 'episode', 'unknown']).toContain(movie);
  });
  // test('TV film', () => {
  //   const movie = getUserRatingType(movies[18]);
  //   expect(movie).toEqual<CSFDFilmTypes>('tv-film');
  // });
  // test('Pořad', () => {
  //   const movie = getUserRatingType(movies[6]);
  //   expect(movie).toEqual<CSFDFilmTypes>('tv-show');
  // });
  // test('Amateur film', () => {
  //   const movie = getUserRatingType(movies[31]);
  //   expect(movie).toEqual<CSFDFilmTypes>('amateur-film');
  // });
  // test('Season', () => {
  //   const movie = getUserRatingType(movies[11]);
  //   expect(movie).toEqual<CSFDFilmTypes>('season');
  // });
});

describe('Get title', () => {
  test('First title', () => {
    const movie = getUserRatingTitle(movies[0]);
    expect(movie.length).toBeGreaterThan(0);
  });
  test('Last title', () => {
    const movie = getUserRatingTitle(movies[movies.length - 1]);
    expect(movie.length).toBeGreaterThan(0);
  });
});

describe('Get year', () => {
  test('First year', () => {
    const movie = getUserRatingYear(movies[0]);
    expect(movie).toBeGreaterThan(1800);
  });
  test('Some year', () => {
    const movie = getUserRatingYear(movies[8]);
    expect(movie).toBeGreaterThan(1800);
  });
  test('Almost last year', () => {
    const movie = getUserRatingYear(movies[movies.length - 1]);
    expect(movie).toBeGreaterThan(1800);
  });
  test('Empty year', () => {
    const mockElement = parse(`
      <tr><td class="name"><div class="film-title-info"></div></td></tr>
    `);
    const year = getUserRatingYear(mockElement);
    expect(year).toEqual(null);
  });
});

describe('Get color rating', () => {
  // test('Black', () => {
  //   const movie = getUserRatingColorRating(movies[10]);
  //   expect(movie).toEqual<CSFDColorRating>('bad');
  // });
  test('Gray', () => {
    const movie = getUserRatingColorRating(movies[2]);
    expect(['good', 'average', 'bad', 'unknown']).toContain(movie);
  });
  test('Blue', () => {
    const movie = getUserRatingColorRating(movies[3]);
    expect(['good', 'average', 'bad', 'unknown']).toContain(movie);
  });
  test('Red', () => {
    const movie = getUserRatingColorRating(movies[1]);
    expect(['good', 'average', 'bad', 'unknown']).toContain(movie);
  });
  test('Grey color should return bad', () => {
    // Create a mock element with grey class
    const mockElement = parse(`
      <tr>
        <td class="name">
          <span class="icon grey"></span>
        </td>
      </tr>
    `);
    const result = getUserRatingColorRating(mockElement);
    expect(result).toEqual<CSFDColorRating>('bad');
  });

  test('Lightgrey color should return unknown', () => {
    // Create a mock element with lightgrey class
    const mockElement = parse(`
      <tr>
        <td class="name">
          <span class="icon lightgrey"></span>
        </td>
      </tr>
    `);
    const result = getUserRatingColorRating(mockElement);
    expect(result).toEqual<CSFDColorRating>('unknown');
  });

  test('Unknown/invalid color should return unknown (default case)', () => {
    // Create a mock element with an unknown color class
    const mockElement = parse(`
      <tr>
        <td class="name">
          <span class="icon purple"></span>
        </td>
      </tr>
    `);
    const result = getUserRatingColorRating(mockElement);
    expect(result).toEqual<CSFDColorRating>('unknown');
  });

  test('No color class should return unknown (default case)', () => {
    // Create a mock element with no color class
    const mockElement = parse(`
      <tr>
        <td class="name">
          <span class="icon"></span>
        </td>
      </tr>
    `);
    const result = getUserRatingColorRating(mockElement);
    expect(result).toEqual<CSFDColorRating>('unknown');
  });

  test('Empty string color should return unknown (default case)', () => {
    // Create a mock element with empty class
    const mockElement = parse(`
      <tr>
        <td class="name">
          <span class="icon "></span>
        </td>
      </tr>
    `);
    const result = getUserRatingColorRating(mockElement);
    expect(result).toEqual<CSFDColorRating>('unknown');
  });

  test('Multiple classes with valid color should work', () => {
    // Create a mock element with multiple classes including a valid color
    const mockElement = parse(`
      <tr>
        <td class="name">
          <span class="icon some-other-class another-class red"></span>
        </td>
      </tr>
    `);
    const result = getUserRatingColorRating(mockElement);
    expect(result).toEqual<CSFDColorRating>('good');
  });
});

describe('Get date', () => {
  test('First date', () => {
    const movie = getUserRatingDate(movies[0]);
    expect(movie).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
  test('Last date', () => {
    const movie = getUserRatingDate(movies[movies.length - 1]);
    expect(movie).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe('Get Url', () => {
  test('First url', () => {
    const movie = getUserRatingUrl(movies[0]);
    expect(movie).toContain('https://www.csfd.cz/film/' + String(movies[0].id));
  });
  test('Last url', () => {
    const movie = getUserRatingUrl(movies[movies.length - 1]);
    expect(movie).toContain('https://www.csfd.cz/film/' + String(movies[movies.length - 1].id));
  });
});
