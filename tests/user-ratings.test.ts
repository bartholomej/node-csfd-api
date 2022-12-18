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
    expect(movie).toEqual<number>(1254361);
  });
  test('Last ID', () => {
    const movie = getId(movies[movies.length - 1]);
    expect(movie).toEqual<number>(1169425);
  });
});

describe('Get type', () => {
  test('Film', () => {
    const movie = getType(movies[0]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  test('TV series', () => {
    const movie = getType(movies[23]);
    expect(movie).toEqual<CSFDFilmTypes>('seriál');
  });
  test('Episode', () => {
    const movie = getType(movies[4]);
    expect(movie).toEqual<CSFDFilmTypes>('epizoda');
  });
  // test('TV film', () => {
  //   const movie = getType(movies[18]);
  //   expect(movie).toEqual<CSFDFilmTypes>('TV film');
  // });
  // test('Pořad', () => {
  //   const movie = getType(movies[6]);
  //   expect(movie).toEqual<CSFDFilmTypes>('pořad');
  // });
  test('Amateur film', () => {
    const movie = getType(movies[31]);
    expect(movie).toEqual<CSFDFilmTypes>('amatérský film');
  });
  test('Season', () => {
    const movie = getType(movies[11]);
    expect(movie).toEqual<CSFDFilmTypes>('série');
  });
});

describe('Get title', () => {
  test('First title', () => {
    const movie = getTitle(movies[0]);
    expect(movie).toEqual<string>('Stutz');
  });
  test('Last title', () => {
    const movie = getTitle(movies[movies.length - 1]);
    expect(movie).toEqual<string>('Kouření způsobuje kašel');
  });
});

describe('Get year', () => {
  test('First year', () => {
    const movie = getYear(movies[0]);
    expect(movie).toEqual<number>(2022);
  });
  test('Some year', () => {
    const movie = getYear(movies[7]);
    expect(movie).toEqual<number>(2016);
  });
  test('Almost last year', () => {
    const movie = getYear(movies[movies.length - 7]);
    expect(movie).toEqual<number>(2000);
  });
});

describe('Get color rating', () => {
  // test('Black', () => {
  //   const movie = getColorRating(movies[7]);
  //   expect(movie).toEqual<CSFDColorRating>('bad');
  // });
  // test('Gray', () => {
  //   const movie = getColorRating(movies[29]);
  //   expect(movie).toEqual<CSFDColorRating>('unknown');
  // });
  test('Blue', () => {
    const movie = getColorRating(movies[3]);
    expect(movie).toEqual<CSFDColorRating>('average');
  });
  test('Red', () => {
    const movie = getColorRating(movies[1]);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
});

describe('Get date', () => {
  test('First date', () => {
    const movie = getDate(movies[0]);
    expect(movie).toEqual<string>('16.12.2022');
  });
  test('Last date', () => {
    const movie = getDate(movies[movies.length - 1]);
    expect(movie).toEqual<string>('05.07.2022');
  });
});

describe('Get Url', () => {
  test('First url', () => {
    const movie = getUrl(movies[0]);
    expect(movie).toEqual<string>('https://www.csfd.cz/film/1254361-stutz/');
  });
  test('Last url', () => {
    const movie = getUrl(movies[movies.length - 1]);
    expect(movie).toEqual<string>('https://www.csfd.cz/film/1169425-koureni-zpusobuje-kasel/');
  });
});
