import { parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import { getAvatar, getUser, getUserRealName, getUserUrl } from '../src/helpers/search-user.helper';
import {
  getColorRating,
  getOrigins,
  getPoster,
  getTitle,
  getType,
  getUrl,
  getYear,
  parsePeople
} from '../src/helpers/search.helper';
import { CSFDColorRating, CSFDFilmTypes } from '../src/interfaces/global';
import { CSFDCreator } from '../src/interfaces/movie.interface';
import { searchMock } from './mocks/search.html';

const html = parse(searchMock);
const moviesNode = html.querySelectorAll('.main-movies article');
const usersNode = html.querySelectorAll('.main-users article');
const tvSeriesNode = html.querySelectorAll('.main-series article');

describe('Get Movie titles', () => {
  test('First movie', () => {
    const movie = getTitle(moviesNode[0]);
    expect(movie).toEqual<string>('Matrix');
  });
  test('Last movie', () => {
    const movie = getTitle(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<string>('Matrix hunter');
  });
  test('Some movie', () => {
    const movie = getTitle(moviesNode[5]);
    expect(movie).toEqual<string>('Matrix - Reloaded');
  });
});

describe('Get Movie years', () => {
  test('First movie', () => {
    const movie = getYear(moviesNode[0]);
    expect(movie).toEqual<number>(1999);
  });
  test('Last movie', () => {
    const movie = getYear(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<number>(2004);
  });
  test('Some movie', () => {
    const movie = getYear(moviesNode[3]);
    expect(movie).toEqual<number>(2003);
  });
});

describe('Get Movie url', () => {
  test('First movie', () => {
    const movie = getUrl(moviesNode[0]);
    expect(movie).toEqual<string>('/film/9499-matrix/');
  });
  test('Last movie', () => {
    const movie = getUrl(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<string>('/film/40940-matrix-hunter/');
  });
  test('Some movie', () => {
    const movie = getUrl(moviesNode[4]);
    expect(movie).toEqual<string>('/film/799868-matrix/');
  });
});

describe('Get Movie types', () => {
  test('First movie', () => {
    const movie = getType(moviesNode[0]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  test('Last movie', () => {
    const movie = getType(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  test('Some movie', () => {
    const movie = getType(moviesNode[1]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
});

describe('Get Movie colors', () => {
  test('First movie', () => {
    const movie = getColorRating(moviesNode[0]);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
  test('Last movie', () => {
    const movie = getColorRating(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<CSFDColorRating>('average');
  });
  test('Some movie', () => {
    const movie = getColorRating(moviesNode[4]);
    expect(movie).toEqual<CSFDColorRating>('unknown');
  });
});

describe('Get Movie posters', () => {
  test('First movie', () => {
    const movie = getPoster(moviesNode[0]);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w60h85/files/images/film/posters/000/008/8959_164d69.jpg'
    );
  });
  test('Empty poster', () => {
    const movie = getPoster(moviesNode[4]);
    expect(movie).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
  test('Some movie', () => {
    const movie = getPoster(moviesNode[1]);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w60h85/files/images/film/posters/165/852/165852808_71b2e1.jpg'
    );
  });
});

describe('Get Movie origins', () => {
  test('First movie', () => {
    const movie = getOrigins(moviesNode[0]);
    expect(movie).toEqual<string[]>(['USA']);
  });
  test('Second movie', () => {
    const movie = getOrigins(moviesNode[1]);
    expect(movie).toEqual<string[]>(['USA']);
  });
  test('Third movie', () => {
    const movie = getOrigins(moviesNode[2]);
    expect(movie).toEqual<string[]>(['USA', 'Austrálie']);
  });
  test('Some movie', () => {
    const movie = getOrigins(moviesNode[4]);
    expect(movie).toEqual<string[]>(['Slovensko']);
  });
});

describe('Get Movie creators', () => {
  test('First movie directors', () => {
    const movie = parsePeople(moviesNode[0], 'directors');
    expect(movie).toEqual<CSFDCreator[]>([
      {
        id: 3112,
        name: 'Lilly Wachowski',
        url: 'https://www.csfd.cz/tvurce/3112-lilly-wachowski/'
      },
      {
        id: 3113,
        name: 'Lana Wachowski',
        url: 'https://www.csfd.cz/tvurce/3113-lana-wachowski/'
      }
    ]);
  });
  test('Last movie actors', () => {
    const movie = parsePeople(moviesNode[moviesNode.length - 1], 'actors');
    expect(movie).toEqual<CSFDCreator[]>([
      {
        id: 67747,
        name: "Genevieve O'Reilly",
        url: 'https://www.csfd.cz/tvurce/67747-genevieve-o-reilly/'
      },
      {
        id: 294809,
        name: 'Luoyong Wang',
        url: 'https://www.csfd.cz/tvurce/294809-luoyong-wang/'
      }
    ]);
  });
  test('Empty actors', () => {
    const movie = parsePeople(moviesNode[5], 'actors');
    expect(movie).toEqual<CSFDCreator[]>([]);
  });
});

// TV SERIES

describe('Get TV series titles', () => {
  test('First TV series', () => {
    const movie = getTitle(tvSeriesNode[0]);
    expect(movie).toEqual<string>('Matrix');
  });
  test('Last TV series', () => {
    const movie = getTitle(tvSeriesNode[tvSeriesNode.length - 1]);
    expect(movie).toEqual<string>('Futurama - Skoro poslední přání');
  });
  test('Some TV series', () => {
    const movie = getTitle(tvSeriesNode[5]);
    expect(movie).toEqual<string>('MP4orce - Dungeon Matrix');
  });
});

describe('Get TV series years', () => {
  test('First TV series', () => {
    const movie = getYear(tvSeriesNode[0]);
    expect(movie).toEqual<number>(1993);
  });
  test('Last TV series', () => {
    const movie = getYear(tvSeriesNode[tvSeriesNode.length - 1]);
    expect(movie).toEqual<number>(2012);
  });
  test('Some TV series', () => {
    const movie = getYear(tvSeriesNode[4]);
    expect(movie).toEqual<number>(2020);
  });
});

describe('Get TV series url', () => {
  test('First TV series', () => {
    const movie = getUrl(tvSeriesNode[0]);
    expect(movie).toEqual<string>('/film/72014-matrix/');
  });
  test('Last TV series', () => {
    const movie = getUrl(tvSeriesNode[tvSeriesNode.length - 1]);
    expect(movie).toEqual<string>('/film/77748-futurama/483972-skoro-posledni-prani/');
  });
  test('Some TV series', () => {
    const movie = getUrl(tvSeriesNode[4]);
    expect(movie).toEqual<string>('/film/999565-escape-the-matrix/');
  });
});

describe('Get TV series types', () => {
  test('First TV series', () => {
    const movie = getType(tvSeriesNode[0]);
    expect(movie).toEqual<CSFDFilmTypes>('seriál');
  });
  test('Last TV series', () => {
    const movie = getType(tvSeriesNode[tvSeriesNode.length - 1]);
    expect(movie).toEqual<CSFDFilmTypes>('epizoda');
  });
  test('Some TV series', () => {
    const movie = getType(tvSeriesNode[1]);
    expect(movie).toEqual<CSFDFilmTypes>('epizoda');
  });
});

describe('Get TV series colors', () => {
  test('First TV series', () => {
    const movie = getColorRating(tvSeriesNode[0]);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
  test('Last TV series', () => {
    const movie = getColorRating(tvSeriesNode[3]);
    expect(movie).toEqual<CSFDColorRating>('average');
  });
  test('Some TV series', () => {
    const movie = getColorRating(tvSeriesNode[5]);
    expect(movie).toEqual<CSFDColorRating>('unknown');
  });
});

describe('Get TV series posters', () => {
  test('Some TV series', () => {
    const movie = getPoster(tvSeriesNode[2]);
    expect(movie).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
  test('Empty poster', () => {
    const movie = getPoster(tvSeriesNode[4]);
    expect(movie).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
});

describe('Get TV series origins', () => {
  test('First TV series', () => {
    const movie = getOrigins(tvSeriesNode[0]);
    expect(movie).toEqual<string[]>(['Kanada']);
  });
  test('Second TV series', () => {
    const movie = getOrigins(tvSeriesNode[1]);
    expect(movie).toEqual<string[]>(['Česko']);
  });
  test('Third TV series', () => {
    const movie = getOrigins(tvSeriesNode[2]);
    expect(movie).toEqual<string[]>(['USA', 'Kanada']);
  });
  test('Some TV series', () => {
    const movie = getOrigins(tvSeriesNode[4]);
    expect(movie).toEqual<string[]>(['Velká Británie']);
  });
});

describe('Get TV series creators', () => {
  test('First TV series directors', () => {
    const movie = parsePeople(tvSeriesNode[0], 'directors');
    expect(movie).toEqual<CSFDCreator[]>([
      {
        id: 8877,
        name: 'Allan Eastman',
        url: 'https://www.csfd.cz/tvurce/8877-allan-eastman/'
      },
      {
        id: 8686,
        name: 'Mario Azzopardi',
        url: 'https://www.csfd.cz/tvurce/8686-mario-azzopardi/'
      }
    ]);
  });
  test('Last TV series actors', () => {
    const movie = parsePeople(tvSeriesNode[tvSeriesNode.length - 1], 'actors');
    expect(movie).toEqual<CSFDCreator[]>([
      {
        id: 20335,
        name: 'Billy West',
        url: 'https://www.csfd.cz/tvurce/20335-billy-west/'
      },
      {
        id: 1931,
        name: 'Katey Sagal',
        url: 'https://www.csfd.cz/tvurce/1931-katey-sagal/'
      }
    ]);
  });
  test('Empty actors', () => {
    const movie = parsePeople(tvSeriesNode[5], 'actors');
    expect(movie).toEqual<CSFDCreator[]>([]);
  });
  test('Empty directors + some actors', () => {
    const movie = parsePeople(tvSeriesNode[4], 'actors');
    const movieDirectors = parsePeople(tvSeriesNode[4], 'directors');
    expect(movie).toEqual<CSFDCreator[]>([
      {
        id: 61834,
        name: 'David Icke',
        url: 'https://www.csfd.cz/tvurce/61834-david-icke/'
      }
    ]);
    expect(movieDirectors).toEqual<CSFDCreator[]>([]);
  });
});

// USERS

describe('Get Users name', () => {
  test('First user', () => {
    const movie = getUser(usersNode[0]);
    expect(movie).toEqual<string>('Matrix44');
  });
  test('Last user', () => {
    const movie = getUser(usersNode[usersNode.length - 1]);
    expect(movie).toEqual<string>('Atrix');
  });
});

describe('Get Users real name', () => {
  test('First user', () => {
    const movie = getUserRealName(usersNode[0]);
    expect(movie).toEqual<string>('Matrix 44');
  });
  test('Some name (nothing)', () => {
    const movie = getUserRealName(usersNode[3]);
    expect(movie).toEqual(null);
  });
});

describe('Get Users avatar', () => {
  test('First user', () => {
    const movie = getAvatar(usersNode[0]);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w45h60crop/files/images/user/avatars/000/327/327230_b48a6e.jpg'
    );
  });
  test('Some name (nothing)', () => {
    const movie = getAvatar(usersNode[3]);
    expect(movie).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
});

describe('Get Users url', () => {
  test('First user', () => {
    const movie = getUserUrl(usersNode[0]);
    expect(movie).toEqual<string>('/uzivatel/100416-matrix44/');
  });
});
