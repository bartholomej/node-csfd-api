import { readFileSync } from 'fs';
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

const response = readFileSync(`${__dirname}/mocks/userRatings.html`, 'utf8');
const items = parse(response);
const movies: HTMLElement[] = items.querySelectorAll('.ui-table-list tbody tr');

describe('Get Ratings', () => {
  test('First rating', () => {
    const movie = getUserRating(movies[0]);
    expect(movie).toEqual<CSFDStars>(4);
  });
  test('Last rating', () => {
    const movie = getUserRating(movies[movies.length - 1]);
    expect(movie).toEqual<CSFDStars>(3);
  });
  test('Zero Rating', () => {
    const movie = getUserRating(movies[35]);
    expect(movie).toEqual<CSFDStars>(0);
  });
});

describe('Get ID', () => {
  test('First ID', () => {
    const movie = getId(movies[0]);
    expect(movie).toEqual<number>(824918);
  });
  test('Last ID', () => {
    const movie = getId(movies[movies.length - 1]);
    expect(movie).toEqual<number>(58782);
  });
});

describe('Get type', () => {
  test('Film', () => {
    const movie = getType(movies[0]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  test('TV series', () => {
    const movie = getType(movies[6]);
    expect(movie).toEqual<CSFDFilmTypes>('TV seriál');
  });
  test('Episode', () => {
    const movie = getType(movies[8]);
    expect(movie).toEqual<CSFDFilmTypes>('epizoda');
  });
  test('TV film', () => {
    const movie = getType(movies[15]);
    expect(movie).toEqual<CSFDFilmTypes>('TV film');
  });
  test('Student film', () => {
    const movie = getType(movies[21]);
    expect(movie).toEqual<CSFDFilmTypes>('studentský film');
  });
  test('Season', () => {
    const movie = getType(movies[39]);
    expect(movie).toEqual<CSFDFilmTypes>('série');
  });
});

describe('Get title', () => {
  test('First title', () => {
    const movie = getTitle(movies[0]);
    expect(movie).toEqual<string>('Oeconomia');
  });
  test('Last title', () => {
    const movie = getTitle(movies[movies.length - 1]);
    expect(movie).toEqual<string>('Mission: Impossible - Fallout');
  });
});

describe('Get year', () => {
  test('First year', () => {
    const movie = getYear(movies[0]);
    expect(movie).toEqual<number>(2020);
  });
  test('Last year', () => {
    const movie = getYear(movies[movies.length - 1]);
    expect(movie).toEqual<number>(2018);
  });
});

describe('Get color rating', () => {
  test('Black', () => {
    const movie = getColorRating(movies[35]);
    expect(movie).toEqual<CSFDColorRating>('bad');
  });
  test('Gray', () => {
    const movie = getColorRating(movies[49]);
    expect(movie).toEqual<CSFDColorRating>('unknown');
  });
  test('Blue', () => {
    const movie = getColorRating(movies[4]);
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
    expect(movie).toEqual<string>('08.11.2020');
  });
  test('Last date', () => {
    const movie = getDate(movies[movies.length - 1]);
    expect(movie).toEqual<string>('11.11.2019');
  });
});

describe('Get Url', () => {
  test('First url', () => {
    const movie = getUrl(movies[0]);
    expect(movie).toEqual<string>('https://www.csfd.cz/film/824918-oeconomia/');
  });
  test('Last url', () => {
    const movie = getUrl(movies[movies.length - 1]);
    expect(movie).toEqual<string>('https://www.csfd.cz/film/58782-mission-impossible-fallout/');
  });
});
