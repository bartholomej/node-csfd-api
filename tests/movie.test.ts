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
  getYear
} from '../src/helpers/movie.helper';
import { CSFDColorRating } from '../src/interfaces/global';
import { CSFDCreator, CSFDOtherTitles } from '../src/interfaces/movie.interface';
import { movieMock } from './mocks/movie1.html';

const movieNode = parse(movieMock);
const moviePage: HTMLElement = movieNode.querySelector('.main-movie-profile');
const bodyClasses = movieNode.querySelector('.page-content').classNames;

describe('Get ID', () => {
  test('Movie ID', () => {
    const movie = getId(moviePage);
    expect(movie).toEqual<number>(535121);
  });
});

describe('Get Movie', () => {
  test('Movie title', () => {
    const movie = getTitle(moviePage);
    expect(movie).toEqual<string>('Na špatné straně');
  });
});

describe('Get Movie', () => {
  test('Movie title', () => {
    const movie = getTitle(moviePage);
    expect(movie).toEqual<string>('Na špatné straně');
  });
});

describe('Get Poster', () => {
  test('Movie poster', () => {
    const movie = getPoster(moviePage);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/files/images/film/posters/163/579/163579352_bf8737.jpg'
    );
  });
});

describe('Get Duration', () => {
  test('Duration', () => {
    const movie = getDuration(moviePage);
    expect(movie).toEqual<number>(159);
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
});

describe('Get origins', () => {
  test('origins', () => {
    const movie = getOrigins(moviePage);
    expect(movie).toEqual<string[]>(['USA', 'Kanada']);
  });
});

describe('Get descriptions', () => {
  test('descriptions', () => {
    const movie = getDescriptions(moviePage);
    expect(movie).toEqual<string[]>([
      'Otupělý policejní veterán Ridgeman (Mel Gibson) a jeho náladový mladší kolega Anthony (Vince Vaughn) jsou suspendováni ze služby poté, co do médií unikne videozáznam jejich svérázných metod. Bez prostředků a velkých šancí se oba zatrpklí vojáci vydají do kriminálního podsvětí, aby učinili spravedlnosti zadost. Mezitím je v jiné části města propuštěn z vězení mladý zločinec Henry Jones a zjišťuje, že jeho matce a postiženému bratrovi hrozí vystěhování. Ve snaze najít způsob, jak jim pomoci, se obrátí na kamaráda z dětství jménem Biscuit, který ho představí nelítostnému kriminálnímu bossovi, jehož ambiciózní plány jej postaví do přímého konfliktu s oběma policejními odpadlíky.(HBO Europe)'
    ]);
  });
});

describe('Get genres', () => {
  test('Genres', () => {
    const movie = getGenres(moviePage);
    expect(movie).toEqual<string[]>(['Krimi', 'Drama', 'Thriller']);
  });
});

describe('Get type', () => {
  test('Type', () => {
    const movie = getType(moviePage);
    expect(movie).toEqual<string>('film');
  });
});

describe('Get year', () => {
  test('Year', () => {
    const movie = getYear(moviePage);
    expect(movie).toEqual<string | number>('2018');
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
