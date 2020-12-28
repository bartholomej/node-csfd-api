import { HTMLElement, parse } from 'node-html-parser';
import {
  getColorRating,
  getDescriptions,
  getDirectors,
  getDuration,
  getGenres,
  getGroup,
  getId,
  getOrigins,
  getOtherTitles,
  getPoster,
  getRating,
  getTitle,
  getType,
  getVods,
  getYear
} from '../src/helpers/movie.helper';
import { CSFDColorRating } from '../src/interfaces/global';
import { CSFDCreator, CSFDOtherTitles, CSFDVod } from '../src/interfaces/movie.interface';
import { movieMock } from './mocks/movie1.html';
import { movieMockBlank } from './mocks/movie2.html';
import { seriesMock } from './mocks/series1.html';

const movieNode = parse(movieMock);
const moviePage: HTMLElement = movieNode.querySelector('.main-movie-profile');
const bodyClasses = movieNode.querySelector('.page-content').classNames;
const buttonsNode = movieNode.querySelectorAll('.box-buttons')[0];

const movieNodeBlank = parse(movieMockBlank);
const moviePageBlank: HTMLElement = movieNodeBlank.querySelector('.main-movie-profile');
const bodyClassesBlank = movieNodeBlank.querySelector('.page-content').classNames;
const buttonsNodeBlank = movieNodeBlank.querySelectorAll('.box-buttons')[0];

const seriesNode = parse(seriesMock);
const seriesPage: HTMLElement = seriesNode.querySelector('.main-movie-profile');
const seriesButtonsNode = seriesPage.querySelectorAll('.box-buttons')[0];
// const bodyClassesSeries = seriesNode.querySelector('.page-content').classNames;

describe('Get ID', () => {
  test('Movie ID', () => {
    const movie = getId(moviePage);
    expect(movie).toEqual<number>(535121);
  });
});

describe('Get Movie Title', () => {
  test('Movie title', () => {
    const movie = getTitle(moviePage);
    expect(movie).toEqual<string>('Na špatné straně');
  });
  test('Series title', () => {
    const movie = getTitle(seriesPage);
    expect(movie).toEqual<string>('Království');
  });
});

describe('Get Poster', () => {
  test('Movie poster', () => {
    const movie = getPoster(moviePage);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/files/images/film/posters/163/579/163579352_bf8737.jpg'
    );
  });
  test('Movie Blank poster', () => {
    const movie = getPoster(moviePageBlank);
    expect(movie).toEqual<string>(null);
  });
});

describe('Get Duration', () => {
  test('Duration', () => {
    const movie = getDuration(moviePage);
    expect(movie).toEqual<number>(159);
  });
  test('Duration Blank', () => {
    const movie = getDuration(moviePageBlank);
    expect(movie).toEqual<number>(null);
  });
  test('Duration Series', () => {
    const movie = getDuration(seriesPage);
    expect(movie).toEqual<number>(560);
  });
});

describe('Get VOD', () => {
  test('Get vods movie', () => {
    const movie = getVods(buttonsNode);
    expect(movie).toEqual<CSFDVod[]>([
      { title: 'HBOGO', url: 'https://hbogo.sk/filmy/na-spatne-strane' },
      {
        title: 'DVD',
        url:
          'https://filmy.heureka.cz/na-spatne-strane-dvd/#utm_source=csfd.cz&utm_medium=cooperation&utm_campaign=csfd_movies_feed'
      },
      {
        title: 'Blu-ray',
        url:
          'https://filmy.heureka.cz/na-spatne-strane-bd/#utm_source=csfd.cz&utm_medium=cooperation&utm_campaign=csfd_movies_feed'
      }
    ]);
  });
  test('Get vods series', () => {
    const movie = getVods(seriesButtonsNode);
    expect(movie).toEqual<CSFDVod[]>([]);
  });
  test('Get vods blank', () => {
    const movie = getVods(buttonsNodeBlank);
    expect(movie).toEqual<CSFDVod[]>([]);
  });
});

// TODO
// describe('Get additional info', () => {
//   test('Get tags', () => {
//     const item = getTags(moviePage);
//     expect(item).toEqual<string[]>([
//       'policie',
//       'zbraně',
//       'město',
//       'zloděj',
//       'rukojmí',
//       'sledování',
//       'podsvětí',
//       'přepadení',
//       'banka'
//     ]);
//   });
// });

describe('Get otherTitles', () => {
  test('otherTitles', () => {
    const movie = getOtherTitles(moviePage);
    expect(movie).toEqual<CSFDOtherTitles[]>([
      { country: 'USA', title: 'Dragged Across Concrete' },
      { country: 'Kanada', title: 'Dragged Across Concrete' },
      { country: 'Slovensko', title: 'Na zlej strane' },
      { country: 'Austrálie', title: 'Dragged Across Concrete' },
      { country: 'Velká Británie', title: 'Dragged Across Concrete' }
    ]);
  });
  test('otherTitles Blank', () => {
    const movie = getOtherTitles(moviePageBlank);
    expect(movie).toEqual<CSFDOtherTitles[]>([]);
  });
});

describe('Get origins', () => {
  test('Origins', () => {
    const movie = getOrigins(moviePage);
    expect(movie).toEqual<string[]>(['USA', 'Kanada']);
  });
  test('Origins Series', () => {
    const movie = getOrigins(seriesPage);
    expect(movie).toEqual<string[]>(['Dánsko', 'Francie', 'Německo', 'Švédsko']);
  });
});

describe('Get descriptions', () => {
  test('descriptions', () => {
    const movie = getDescriptions(moviePage);
    expect(movie).toEqual<string[]>([
      'Otupělý policejní veterán Ridgeman (Mel Gibson) a jeho náladový mladší kolega Anthony (Vince Vaughn) jsou suspendováni ze služby poté, co do médií unikne videozáznam jejich svérázných metod. Bez prostředků a velkých šancí se oba zatrpklí vojáci vydají do kriminálního podsvětí, aby učinili spravedlnosti zadost. Mezitím je v jiné části města propuštěn z vězení mladý zločinec Henry Jones a zjišťuje, že jeho matce a postiženému bratrovi hrozí vystěhování. Ve snaze najít způsob, jak jim pomoci, se obrátí na kamaráda z dětství jménem Biscuit, který ho představí nelítostnému kriminálnímu bossovi, jehož ambiciózní plány jej postaví do přímého konfliktu s oběma policejními odpadlíky.(HBO Europe)'
    ]);
  });
  test('Description blank', () => {
    const movie = getDescriptions(moviePageBlank);
    expect(movie).toEqual<string[]>([]);
  });
});

describe('Get genres', () => {
  test('Genres', () => {
    const movie = getGenres(moviePage);
    expect(movie).toEqual<string[]>(['Krimi', 'Drama', 'Thriller']);
  });
  test('Genres Series', () => {
    const movie = getGenres(seriesPage);
    expect(movie).toEqual<string[]>(['Drama', 'Horor', 'Mysteriózní', 'Komedie']);
  });
});

describe('Get type', () => {
  test('Type', () => {
    const movie = getType(moviePage);
    expect(movie).toEqual<string>('film');
  });
  test('Type Series', () => {
    const movie = getType(seriesPage);
    expect(movie).toEqual<string>('TV seriál');
  });
});

describe('Get year', () => {
  test('Year', () => {
    const movie = getYear(moviePage);
    expect(movie).toEqual<string | number>('2018');
  });
  test('Year Series', () => {
    const movie = getYear(seriesPage);
    expect(movie).toEqual<string | number>('1994–1997');
  });
});

describe('Get ratings', () => {
  test('Rating', () => {
    const movie = getRating(moviePage);
    expect(movie).toEqual<number>(72);
  });
  test('Color Rating', () => {
    const movie = getColorRating(bodyClasses);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
  test('Blank Rating', () => {
    const movie = getColorRating(bodyClassesBlank);
    expect(movie).toEqual<CSFDColorRating>('unknown');
  });
});

describe('Get people', () => {
  test('directors', () => {
    const movie = getDirectors(moviePage);
    expect(movie).toEqual<CSFDCreator[]>([
      {
        id: 87470,
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }
    ]);
  });
  test('Screenwriters', () => {
    const movie = getGroup(moviePage, 'Scénář');
    expect(movie.slice(0, 1)).toEqual<CSFDCreator[]>([
      {
        id: 87470,
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }
    ]);
  });
  test('Music composers', () => {
    const movie = getGroup(moviePage, 'Hudba');
    expect(movie.slice(0, 1)).toEqual<CSFDCreator[]>([
      { id: 203209, name: 'Jeff Herriott', url: 'https://www.csfd.cz/tvurce/203209-jeff-herriott/' }
    ]);
  });
  test('Actors', () => {
    const movie = getGroup(moviePage, 'Hrají');
    expect(movie.slice(0, 1)).toEqual<CSFDCreator[]>([
      {
        id: 1,
        name: 'Mel Gibson',
        url: 'https://www.csfd.cz/tvurce/1-mel-gibson/'
      }
    ]);
  });
  test('Based on', () => {
    const movie = getGroup(moviePage, 'Předloha');
    expect(movie.slice(0, 1)).toEqual<CSFDCreator[]>([]);
  });
});
