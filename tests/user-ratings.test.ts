import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
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
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../src/interfaces/global';
import { userRatingsMock } from './mocks/userRatings.html';

const items = parse(userRatingsMock);
const movies: HTMLElement[] = items.querySelectorAll('.box-user-rating .table-container tbody tr');

describe('Get Ratings', () => {
  test('First rating', () => {
    const movie = getUserRating(movies[0]);
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
    expect(movie).toEqual<number>(1566168);
  });
  test('Last ID', () => {
    const movie = getUserRatingId(movies[movies.length - 1]);
    expect(movie).toEqual<number>(317563);
  });
});

describe('Get type', () => {
  test('Film', () => {
    const movie = getUserRatingType(movies[0]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  // test('TV series', () => {
  //   const movie = getType(movies[23]);
  //   expect(movie).toEqual<CSFDFilmTypes>('seriál');
  // });
  test('Episode', () => {
    const movie = getUserRatingType(movies[2]);
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
    expect(movie).toEqual<string>('100 litraa sahtia');
  });
  test('Last title', () => {
    const movie = getUserRatingTitle(movies[movies.length - 1]);
    expect(movie).toEqual<string>('Vejška');
  });
});

describe('Get year', () => {
  test('First year', () => {
    const movie = getUserRatingYear(movies[0]);
    expect(movie).toEqual<number>(2025);
  });
  test('Some year', () => {
    const movie = getUserRatingYear(movies[7]);
    expect(movie).toEqual<number>(2024);
  });
  test('Almost last year', () => {
    const movie = getUserRatingYear(movies[movies.length - 7]);
    expect(movie).toEqual<number>(2005);
  });
});

describe('Get color rating', () => {
  // test('Black', () => {
  //   const movie = getUserRatingColorRating(movies[7]);
  //   expect(movie).toEqual<CSFDColorRating>('bad');
  // });
  test('Gray', () => {
    const movie = getUserRatingColorRating(movies[0]);
    expect(movie).toEqual<CSFDColorRating>('unknown');
  });
  test('Blue', () => {
    const movie = getUserRatingColorRating(movies[4]);
    expect(movie).toEqual<CSFDColorRating>('average');
  });
  test('Red', () => {
    const movie = getUserRatingColorRating(movies[2]);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
});

describe('Get date', () => {
  test('First date', () => {
    const movie = getUserRatingDate(movies[0]);
    expect(movie).toEqual<string>('13.10.2025');
  });
  test('Last date', () => {
    const movie = getUserRatingDate(movies[movies.length - 1]);
    expect(movie).toEqual<string>('19.06.2025');
  });
});

describe('Get Url', () => {
  test('First url', () => {
    const movie = getUserRatingUrl(movies[0]);
    expect(movie).toEqual<string>('https://www.csfd.cz/film/1566168-100-litraa-sahtia/');
  });
  test('Last url', () => {
    const movie = getUserRatingUrl(movies[movies.length - 1]);
    expect(movie).toEqual<string>('https://www.csfd.cz/film/317563-vejska/');
  });
});
