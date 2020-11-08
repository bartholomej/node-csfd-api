import { readFileSync } from 'fs';
import { HTMLElement, parse } from 'node-html-parser';
import { CSFDFilmOverallRating, CSFDFilmTypes, CSFDStars } from '../src/interfaces/global';
import {
  getDate,
  getOverallRating,
  getRating,
  getTitle,
  getType,
  getUrl,
  getYear
} from '../src/scrapers/user-ratings';

const response = readFileSync(`${__dirname}/mocks/userRatings.html`, 'utf8');
const items = parse(response);
const movies: HTMLElement[] = items.querySelectorAll('.ui-table-list tbody tr');

describe('Get Ratings', () => {
  test('First rating', () => {
    const movie = getRating(movies[0]);
    expect(movie).toEqual<CSFDStars>(4);
  });
  test('Last rating', () => {
    const movie = getRating(movies[movies.length - 1]);
    expect(movie).toEqual<CSFDStars>(3);
  });
  test('Zero Rating', () => {
    const movie = getRating(movies[35]);
    expect(movie).toEqual<CSFDStars>(0);
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

describe('Get overall rating', () => {
  test('Black', () => {
    const movie = getOverallRating(movies[35]);
    expect(movie).toEqual<CSFDFilmOverallRating>(3);
  });
  test('Gray', () => {
    const movie = getOverallRating(movies[49]);
    expect(movie).toEqual<CSFDFilmOverallRating>(0);
  });
  test('Blue', () => {
    const movie = getOverallRating(movies[4]);
    expect(movie).toEqual<CSFDFilmOverallRating>(2);
  });
  test('Red', () => {
    const movie = getOverallRating(movies[0]);
    expect(movie).toEqual<CSFDFilmOverallRating>(1);
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
