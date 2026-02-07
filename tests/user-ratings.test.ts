import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../src/dto/global';
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
    const movie = getUserRating(movies[1]);
    expect(movie).toEqual<CSFDStars>(2);
  });
  test('Last rating', () => {
    const movie = getUserRating(movies[movies.length - 1]);
    expect(movie).toEqual<CSFDStars>(3);
  });
  // TODO
  // test('Zero Rating', () => {
  //   const movie = getUserRating(movies[5]);
  //   expect(movie).toEqual<CSFDStars>(0);
  // });
});

describe('Get ID', () => {
  test('First ID', () => {
    const movie = getUserRatingId(movies[0]);
    expect(movie).toEqual<number>(1664563);
  });
  test('Last ID', () => {
    const movie = getUserRatingId(movies[movies.length - 1]);
    expect(movie).toEqual<number>(157850);
  });
});

describe('Get type', () => {
  test('Film', () => {
    const movie = getUserRatingType(movies[0]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  test('TV series', () => {
    const movie = getUserRatingType(movies[8]);
    expect(movie).toEqual<CSFDFilmTypes>('seriál');
  });
  test('Episode', () => {
    const movie = getUserRatingType(movies[10]);
    expect(movie).toEqual<CSFDFilmTypes>('epizoda');
  });
  // test('TV film', () => {
  //   const movie = getUserRatingType(movies[18]);
  //   expect(movie).toEqual<CSFDFilmTypes>('TV film');
  // });
  // test('Pořad', () => {
  //   const movie = getUserRatingType(movies[6]);
  //   expect(movie).toEqual<CSFDFilmTypes>('pořad');
  // });
  // test('Amateur film', () => {
  //   const movie = getUserRatingType(movies[31]);
  //   expect(movie).toEqual<CSFDFilmTypes>('amatérský film');
  // });
  // test('Season', () => {
  //   const movie = getUserRatingType(movies[11]);
  //   expect(movie).toEqual<CSFDFilmTypes>('série');
  // });
});

describe('Get title', () => {
  test('First title', () => {
    const movie = getUserRatingTitle(movies[0]);
    expect(movie).toEqual<string>('Exit 8');
  });
  test('Last title', () => {
    const movie = getUserRatingTitle(movies[movies.length - 1]);
    expect(movie).toEqual<string>('Gå med mig hjem');
  });
});

describe('Get year', () => {
  test('First year', () => {
    const movie = getUserRatingYear(movies[0]);
    expect(movie).toEqual<number>(2025);
  });
  test('Some year', () => {
    const movie = getUserRatingYear(movies[8]);
    expect(movie).toEqual<number>(2025);
  });
  test('Almost last year', () => {
    const movie = getUserRatingYear(movies[movies.length - 1]);
    expect(movie).toEqual<number>(1941);
  });
});

describe('Get color rating', () => {
  // test('Black', () => {
  //   const movie = getUserRatingColorRating(movies[7]);
  //   expect(movie).toEqual<CSFDColorRating>('bad');
  // });
  test('Gray', () => {
    const movie = getUserRatingColorRating(movies[movies.length - 1]);
    expect(movie).toEqual<CSFDColorRating>('unknown');
  });
  test('Blue', () => {
    const movie = getUserRatingColorRating(movies[0]);
    expect(movie).toEqual<CSFDColorRating>('average');
  });
  test('Red', () => {
    const movie = getUserRatingColorRating(movies[2]);
    expect(movie).toEqual<CSFDColorRating>('good');
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
    expect(movie).toEqual<string>('26.01.2026');
  });
  test('Last date', () => {
    const movie = getUserRatingDate(movies[movies.length - 1]);
    expect(movie).toEqual<string>('24.08.2025');
  });
});

describe('Get Url', () => {
  test('First url', () => {
    const movie = getUserRatingUrl(movies[0]);
    expect(movie).toEqual<string>('https://www.csfd.cz/film/1664563-exit-8/prehled/');
  });
  test('Last url', () => {
    const movie = getUserRatingUrl(movies[movies.length - 1]);
    expect(movie).toEqual<string>('https://www.csfd.cz/film/157850-ga-med-mig-hjem/prehled/');
  });
});
