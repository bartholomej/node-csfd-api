import { parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import { CSFDColorRating, CSFDFilmTypes } from '../src/dto/global';
import { CSFDMovieCreator } from '../src/dto/movie';
import {
  getCreatorImage,
  getCreatorName,
  getCreatorUrl
} from '../src/helpers/search-creator.helper';
import { getAvatar, getUser, getUserRealName, getUserUrl } from '../src/helpers/search-user.helper';
import {
  getSearchColorRating,
  getSearchOrigins,
  getSearchPoster,
  getSearchTitle,
  getSearchType,
  getSearchUrl,
  getSearchYear,
  parseSearchPeople
} from '../src/helpers/search.helper';
import { searchMock } from './mocks/search.html';

const html = parse(searchMock);
const moviesNode = html.querySelectorAll('.main-movies article');
const usersNode = html.querySelectorAll('.main-users article');
const tvSeriesNode = html.querySelectorAll('.main-series article');
const creatorsNode = html.querySelectorAll('.main-authors article');

describe('Get Movie titles', () => {
  test('First movie', () => {
    const movie = getSearchTitle(moviesNode[0]);
    expect(movie).toEqual<string>('Matrix');
  });
  test('Last movie', () => {
    const movie = getSearchTitle(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<string>('Matrix: Nová návštěva');
  });
  test('Some movie', () => {
    const movie = getSearchTitle(moviesNode[5]);
    expect(movie).toEqual<string>('Generace Matrix');
  });
});

describe('Get Movie years', () => {
  test('First movie', () => {
    const movie = getSearchYear(moviesNode[0]);
    expect(movie).toEqual<number>(1999);
  });
  test('Last movie', () => {
    const movie = getSearchYear(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<number>(2001);
  });
  test('Some movie', () => {
    const movie = getSearchYear(moviesNode[3]);
    expect(movie).toEqual<number>(2019);
  });
});

describe('Get Movie url', () => {
  test('First movie', () => {
    const movie = getSearchUrl(moviesNode[0]);
    expect(movie).toEqual<string>('/film/9499-matrix/prehled/');
  });
  test('Last movie', () => {
    const movie = getSearchUrl(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<string>('/film/17748-matrix-nova-navsteva/prehled/');
  });
  test('Some movie', () => {
    const movie = getSearchUrl(moviesNode[3]);
    expect(movie).toEqual<string>('/film/799868-matrix/prehled/');
  });
});

describe('Get Movie types', () => {
  test('First movie', () => {
    const movie = getSearchType(moviesNode[0]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  test('Last movie', () => {
    const movie = getSearchType(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  test('Some movie', () => {
    const movie = getSearchType(moviesNode[1]);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
});

describe('Get Movie colors', () => {
  test('First movie', () => {
    const movie = getSearchColorRating(moviesNode[0]);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
  test('Last movie', () => {
    const movie = getSearchColorRating(moviesNode[moviesNode.length - 1]);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
  test('Some movie', () => {
    const movie = getSearchColorRating(moviesNode[3]);
    expect(movie).toEqual<CSFDColorRating>('average');
  });
});

describe('Get Movie posters', () => {
  test('First movie', () => {
    const movie = getSearchPoster(moviesNode[0]);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w60h85/files/images/film/posters/000/008/8959_164d69.jpg'
    );
  });
  test('Empty poster', () => {
    const movie = getSearchPoster(moviesNode[3]);
    expect(movie).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
  test('Some movie', () => {
    const movie = getSearchPoster(moviesNode[1]);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w60h85/files/images/film/posters/170/394/170394904_asdf5d.jpg'
    );
  });
});

describe('Get Movie origins', () => {
  test('First movie', () => {
    const movie = getSearchOrigins(moviesNode[0]);
    expect(movie).toEqual<string[]>(['USA']);
  });
  test('Second movie', () => {
    const movie = getSearchOrigins(moviesNode[1]);
    expect(movie).toEqual<string[]>(['USA', 'Austrálie']);
  });
  test('Third movie', () => {
    const movie = getSearchOrigins(moviesNode[2]);
    expect(movie).toEqual<string[]>(['USA', 'Austrálie']);
  });
  test('Some movie', () => {
    const movie = getSearchOrigins(moviesNode[3]);
    expect(movie).toEqual<string[]>(['Slovensko']);
  });
  test('Empty origin', () => {
    const movie = getSearchOrigins(parse('<div></div>'));
    expect(movie).toEqual<string[]>([]);
  });
});

describe('Get Movie creators', () => {
  test('First movie directors', () => {
    const movie = parseSearchPeople(moviesNode[0], 'directors');
    expect(movie).toEqual<CSFDMovieCreator[]>([
      {
        id: 3112,
        name: 'Lilly Wachowski',
        url: 'https://www.csfd.cz/tvurce/3112-lilly-wachowski/prehled/'
      },
      {
        id: 3113,
        name: 'Lana Wachowski',
        url: 'https://www.csfd.cz/tvurce/3113-lana-wachowski/prehled/'
      }
    ]);
  });
  test('Last movie actors', () => {
    const movie = parseSearchPeople(moviesNode[moviesNode.length - 1], 'actors');
    expect(movie).toEqual<CSFDMovieCreator[]>([
      {
        id: 101,
        name: 'Carrie-Anne Moss',
        url: 'https://www.csfd.cz/tvurce/101-carrie-anne-moss/prehled/'
      },
      {
        id: 3134,
        name: 'Woo-ping Yuen',
        url: 'https://www.csfd.cz/tvurce/3134-woo-ping-yuen/prehled/'
      }
    ]);
  });
  // test('Empty actors', () => {
  //   const movie = parseSearchPeople(moviesNode[5], 'actors');
  //   expect(movie).toEqual<CSFDCreator[]>([]);
  // });
});

// TV SERIES

describe('Get TV series titles', () => {
  test('First TV series', () => {
    const movie = getSearchTitle(tvSeriesNode[0]);
    expect(movie).toEqual<string>('Matrix');
  });
  test('Last TV series', () => {
    const movie = getSearchTitle(tvSeriesNode[tvSeriesNode.length - 1]);
    expect(movie).toEqual<string>('Skleněné srdce - Matrix');
  });
  test('Some TV series', () => {
    const movie = getSearchTitle(tvSeriesNode[5]);
    expect(movie).toEqual<string>('Český žurnál - Matrix AB');
  });
});

describe('Get TV series years', () => {
  test('First TV series', () => {
    const movie = getSearchYear(tvSeriesNode[0]);
    expect(movie).toEqual<number>(1993);
  });
  test('Last TV series', () => {
    const movie = getSearchYear(tvSeriesNode[tvSeriesNode.length - 1]);
    expect(movie).toEqual<number>(2025);
  });
  test('Some TV series', () => {
    const movie = getSearchYear(tvSeriesNode[4]);
    expect(movie).toEqual<number>(2021);
  });
});

describe('Get TV series url', () => {
  test('First TV series', () => {
    const movie = getSearchUrl(tvSeriesNode[0]);
    expect(movie).toEqual<string>('/film/72014-matrix/prehled/');
  });
  test('Last TV series', () => {
    const movie = getSearchUrl(tvSeriesNode[tvSeriesNode.length - 1]);
    expect(movie).toEqual<string>('/film/1692043-sklenene-srdce/1713389-matrix/prehled/');
  });
  test('Some TV series', () => {
    const movie = getSearchUrl(tvSeriesNode[4]);
    expect(movie).toEqual<string>('/film/995064-a-glitch-in-the-matrix/prehled/');
  });
});

describe('Get TV series types', () => {
  test('First TV series', () => {
    const movie = getSearchType(tvSeriesNode[0]);
    expect(movie).toEqual<CSFDFilmTypes>('series');
  });
  test('Last TV series', () => {
    const movie = getSearchType(tvSeriesNode[tvSeriesNode.length - 1]);
    expect(movie).toEqual<CSFDFilmTypes>('episode');
  });
  test('Some TV series', () => {
    const movie = getSearchType(tvSeriesNode[1]);
    expect(movie).toEqual<CSFDFilmTypes>('series');
  });
});

describe('Get TV series colors', () => {
  test('First TV series', () => {
    const movie = getSearchColorRating(tvSeriesNode[0]);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
  test('Last TV series', () => {
    const movie = getSearchColorRating(tvSeriesNode[1]);
    expect(movie).toEqual<CSFDColorRating>('average');
  });
  test('Some TV series', () => {
    const movie = getSearchColorRating(tvSeriesNode[3]);
    expect(movie).toEqual<CSFDColorRating>('unknown');
  });
});

describe('Get TV series posters', () => {
  test('Some TV series', () => {
    const movie = getSearchPoster(tvSeriesNode[2]);
    expect(movie).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
  test('Empty poster', () => {
    const movie = getSearchPoster(tvSeriesNode[0]);
    expect(movie).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
});

describe('Get TV series origins', () => {
  test('First TV series', () => {
    const movie = getSearchOrigins(tvSeriesNode[0]);
    expect(movie).toEqual<string[]>(['Kanada']);
  });
  test('Second TV series', () => {
    const movie = getSearchOrigins(tvSeriesNode[1]);
    expect(movie).toEqual<string[]>(['USA']);
  });
  test('Third TV series', () => {
    const movie = getSearchOrigins(tvSeriesNode[2]);
    expect(movie).toEqual<string[]>(['USA', 'Kanada']);
  });
  test('Some TV series', () => {
    const movie = getSearchOrigins(tvSeriesNode[5]);
    expect(movie).toEqual<string[]>(['Česko']);
  });
});

describe('Get TV series creators', () => {
  test('First TV series directors', () => {
    const movie = parseSearchPeople(tvSeriesNode[0], 'directors');
    expect(movie).toEqual<CSFDMovieCreator[]>([
      {
        id: 8877,
        name: 'Allan Eastman',
        url: 'https://www.csfd.cz/tvurce/8877-allan-eastman/prehled/'
      },
      {
        id: 8686,
        name: 'Mario Azzopardi',
        url: 'https://www.csfd.cz/tvurce/8686-mario-azzopardi/prehled/'
      }
    ]);
  });
  test('Last TV series actors', () => {
    const movie = parseSearchPeople(tvSeriesNode[tvSeriesNode.length - 1], 'actors');
    expect(movie).toEqual<CSFDMovieCreator[]>([
      {
        id: 74751,
        name: 'Takeru Sató',
        url: 'https://www.csfd.cz/tvurce/74751-takeru-sato/prehled/'
      },
      {
        id: 604689,
        name: 'Jú Mijazaki',
        url: 'https://www.csfd.cz/tvurce/604689-ju-mijazaki/prehled/'
      }
    ]);
  });
  test('Empty directors', () => {
    const movie = parseSearchPeople(tvSeriesNode[3], 'directors');
    expect(movie).toEqual<CSFDMovieCreator[]>([]);
  });
  test('Empty directors + some actors', () => {
    const movie = parseSearchPeople(tvSeriesNode[3], 'actors');
    const movieDirectors = parseSearchPeople(tvSeriesNode[3], 'directors');
    expect(movie).toEqual<CSFDMovieCreator[]>([
      {
        id: 61834,
        name: 'David Icke',
        url: 'https://www.csfd.cz/tvurce/61834-david-icke/prehled/'
      }
    ]);
    expect(movieDirectors).toEqual<CSFDMovieCreator[]>([]);
  });
});

// USERS

describe('Get Users name', () => {
  test('First user', () => {
    const movie = getUser(usersNode[0]);
    expect(movie).toEqual<string>('Matrix');
  });
  test('Last user', () => {
    const movie = getUser(usersNode[usersNode.length - 1]);
    expect(movie).toEqual<string>('Matrix007');
  });
});

describe('Get Users real name', () => {
  test('Some name', () => {
    const movie = getUserRealName(usersNode[1]);
    expect(movie).toEqual<string>('Matrix 44');
  });
  test('Empty name', () => {
    const movie = getUserRealName(usersNode[0]);
    expect(movie).toEqual(null);
  });
  test('getUserRealName null', () => {
    const movie = getUserRealName(parse('<div></div>'));
    expect(movie).toEqual(null);
  });
});

describe('Get Users avatar', () => {
  test('Some Avatar', () => {
    const movie = getAvatar(usersNode[1]);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w45h60crop/files/images/user/avatars/000/327/327230_b48a6e.jpg'
    );
  });
  test('Empty avatar', () => {
    const movie = getAvatar(usersNode[0]);
    expect(movie).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
});

describe('Get Users url', () => {
  test('First user', () => {
    const movie = getUserUrl(usersNode[0]);
    expect(movie).toEqual<string>('/uzivatel/914271-matrix/prehled/');
  });
});

// CREATORS

describe('Get Creators name', () => {
  test('First creator', () => {
    const creator = getCreatorName(creatorsNode[0]);
    expect(creator).toEqual<string>('Martin Kubíček');
  });
});

describe('Get Creators image', () => {
  test('First creator image', () => {
    const creator = getCreatorImage(creatorsNode[0]);
    expect(creator).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w45h60crop/files/images/creator/photos/158/381/158381769_57dfe6.jpg'
    );
  });
  test('Empty creator image', () => {
    const creator = getCreatorImage(creatorsNode[1]);
    expect(creator).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
});

describe('Get Creators url', () => {
  test('First creator', () => {
    const creator = getCreatorUrl(creatorsNode[0]);
    expect(creator).toEqual<string>('/tvurce/91360-martin-kubicek/prehled/');
  });
});
