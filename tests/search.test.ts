import { parse } from 'node-html-parser';
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

describe('Get Movie titles', () => {
  test('First movie', () => {
    const movie = getTitle(moviesNode[0]);
    expect(movie).toEqual<string>('The Matrix');
  });
  test('Last movie', () => {
    const movie = getTitle(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<string>('Matrix hunter');
  });
  test('Some movie', () => {
    const movie = getTitle(moviesNode[4]);
    expect(movie).toEqual<string>('Matrix: Nová návštěva');
  });
});

describe('Get Movie years', () => {
  test('First movie', () => {
    const movie = getYear(moviesNode[0]);
    expect(movie).toEqual<string>('1999');
  });
  test('Last movie', () => {
    const movie = getYear(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<string>('2004');
  });
  test('Some movie', () => {
    const movie = getYear(moviesNode[4]);
    expect(movie).toEqual<string>('2001');
  });
});

describe('Get Movie url', () => {
  test('First movie', () => {
    const movie = getUrl(moviesNode[0]);
    expect(movie).toEqual<string>('/film/9499-the-matrix/');
  });
  test('Last movie', () => {
    const movie = getUrl(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<string>('/film/40940-matrix-hunter/');
  });
  test('Some movie', () => {
    const movie = getUrl(moviesNode[4]);
    expect(movie).toEqual<string>('/film/17748-matrix-nova-navsteva/');
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
    expect(movie).toEqual<CSFDFilmTypes>('divadelní záznam');
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
    const movie = getColorRating(moviesNode[1]);
    expect(movie).toEqual<CSFDColorRating>('unknown');
  });
});

describe('Get Movie posters', () => {
  test('First movie', () => {
    const movie = getPoster(moviesNode[0]);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/cache/resized/w60h85/files/images/film/posters/000/008/8959_164d69.jpg'
    );
  });
  test('Last movie', () => {
    const movie = getPoster(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/cache/resized/w60h85/files/images/film/posters/161/619/161619026_17b7a1.jpg'
    );
  });
  test('Some movie', () => {
    const movie = getPoster(moviesNode[1]);
    expect(movie).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
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
    expect(movie).toEqual<string[]>(['Slovensko']);
  });
  test('Third movie', () => {
    const movie = getOrigins(moviesNode[2]);
    expect(movie).toEqual<string[]>(['USA', 'Austrálie']);
  });
  test('Some movie', () => {
    const movie = getOrigins(moviesNode[5]);
    expect(movie).toEqual<string[]>(['Singapur']);
  });
});

describe('Get Movie creators', () => {
  test('First movie directors', () => {
    const movie = parsePeople(moviesNode[0], 'director');
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
});

describe('Get Users name', () => {
  test('First user', () => {
    const movie = getUser(usersNode[0]);
    expect(movie).toEqual<string>('matrix');
  });
  test('Last user', () => {
    const movie = getUser(usersNode[usersNode.length - 1]);
    expect(movie).toEqual<string>('MatrixHK');
  });
});

describe('Get Users real name', () => {
  test('First user (nothing)', () => {
    const movie = getUserRealName(usersNode[0]);
    expect(movie).toEqual<string>(null);
  });
  test('Some name', () => {
    const movie = getUserRealName(usersNode[3]);
    expect(movie).toEqual<string>('Manny Negros');
  });
});

describe('Get Users avatar', () => {
  test('First user (nothing)', () => {
    const movie = getAvatar(usersNode[0]);
    expect(movie).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
  test('Some name', () => {
    const movie = getAvatar(usersNode[3]);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/cache/resized/w45h60/files/images/user/avatars/160/991/160991965_f10d9a.jpg'
    );
  });
});

describe('Get Users url', () => {
  test('First user', () => {
    const movie = getUserUrl(usersNode[0]);
    expect(movie).toEqual<string>('/uzivatel/615105-matrix/');
  });
});
