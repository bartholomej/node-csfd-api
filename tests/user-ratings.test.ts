import { HTMLElement, parse } from 'node-html-parser';
import {
  getColorRating,
  getDate,
  getId,
  getTitle,
  getType,
  getUrl,
  getUserRating,
  getYear
} from '../src/helpers/user-ratings.helper';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../src/interfaces/global';
import { userRatingsMock } from './mocks/userRatings.html';

const items = parse(userRatingsMock);
const movies: HTMLElement[] = items.querySelectorAll('.box-user-rating .table-container tbody tr');

describe('Get Ratings', () => {
  test('First rating', () => {
    const movie = getUserRating(movies[0]);
    expect(movie).toEqual<CSFDStars>(4);
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
    const movie = getId(movies[0]);
    expect(movie).toEqual<number>(508449);
  });
  test('Last ID', () => {
    const movie = getId(movies[movies.length - 1]);
    expect(movie).toEqual<number>(1040190);
  });
});

describe('Get type', () => {
  test('Film', () => {
    const movie = getType(movies[0]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  test('TV series', () => {
    const movie = getType(movies[1]);
    expect(movie).toEqual<CSFDFilmTypes>('seriál');
  });
  test('Episode', () => {
    const movie = getType(movies[23]);
    expect(movie).toEqual<CSFDFilmTypes>('epizoda');
  });
  // test('TV film', () => {
  //   const movie = getType(movies[21]);
  //   expect(movie).toEqual<CSFDFilmTypes>('TV film');
  // });
  // test('Student film', () => {
  //   const movie = getType(movies[27]);
  //   expect(movie).toEqual<CSFDFilmTypes>('studentský film');
  // });
  test('Season', () => {
    const movie = getType(movies[29]);
    expect(movie).toEqual<CSFDFilmTypes>('série');
  });
});

describe('Get title', () => {
  test('First title', () => {
    const movie = getTitle(movies[0]);
    expect(movie).toEqual<string>('Sebevražedný oddíl');
  });
  test('Last title', () => {
    const movie = getTitle(movies[movies.length - 1]);
    expect(movie).toEqual<string>('Čtvrtá brightonská ulice');
  });
});

describe('Get year', () => {
  test('First year', () => {
    const movie = getYear(movies[0]);
    expect(movie).toEqual<number>(2021);
  });
  test('Some year', () => {
    const movie = getYear(movies[movies.length - 2]);
    expect(movie).toEqual<number>(2020);
  });
  test('Last year', () => {
    const movie = getYear(movies[movies.length - 1]);
    expect(movie).toEqual<number>(2021);
  });
});

describe('Get color rating', () => {
  // test('Black', () => {
  //   const movie = getColorRating(movies[7]);
  //   expect(movie).toEqual<CSFDColorRating>('bad');
  // });
  test('Gray', () => {
    const movie = getColorRating(movies[11]);
    expect(movie).toEqual<CSFDColorRating>('unknown');
  });
  test('Blue', () => {
    const movie = getColorRating(movies[1]);
    expect(movie).toEqual<CSFDColorRating>('average');
  });
  test('Red', () => {
    const movie = getColorRating(movies[0]);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
});

describe('Get date', () => {
  test('First date', () => {
    const movie = getDate(movies[0]);
    expect(movie).toEqual<string>('17.12.2021');
  });
  test('Last date', () => {
    const movie = getDate(movies[movies.length - 1]);
    expect(movie).toEqual<string>('26.08.2021');
  });
});

describe('Get Url', () => {
  test('First url', () => {
    const movie = getUrl(movies[0]);
    expect(movie).toEqual<string>('https://www.csfd.cz/film/508449-sebevrazedny-oddil/');
  });
  test('Last url', () => {
    const movie = getUrl(movies[movies.length - 1]);
    expect(movie).toEqual<string>('https://www.csfd.cz/film/1040190-ctvrta-brightonska-ulice/');
  });
});
