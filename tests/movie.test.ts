import { HTMLElement, parse } from 'node-html-parser';
import { getColor } from '../src/helpers/global.helper';
import {
  getBoxMovies,
  getColorRating,
  getDescriptions,
  getDirectors,
  getDuration,
  getGenres,
  getGroup,
  getId,
  getOrigins,
  getPoster,
  getPremieres,
  getRandomPhoto,
  getRating,
  getRatingCount,
  getTitle,
  getTitlesOther,
  getTrivia,
  getType,
  getVods,
  getYear
} from '../src/helpers/movie.helper';
import { CSFDColorRating } from '../src/interfaces/global';
import {
  CSFDCreator,
  CSFDMovieListItem,
  CSFDPremiere,
  CSFDTitlesOther,
  CSFDVod
} from '../src/interfaces/movie.interface';
import { movieMock } from './mocks/movie1.html';
import { movieMockBlank } from './mocks/movie2.html';
import { seriesMock } from './mocks/series1.html';

const movieHtml = parse(movieMock);

const pageClasses = movieHtml.querySelector('.page-content').classNames.split(' ');
const asideNode = movieHtml.querySelector('.aside-movie-profile');
const movieNode = movieHtml.querySelector('.main-movie-profile');

const movieHtmlBlank = parse(movieMockBlank);

const pageClassesBlank = movieHtmlBlank.querySelector('.page-content').classNames.split(' ');
const asideNodeBlank = movieHtmlBlank.querySelector('.aside-movie-profile');
const movieNodeBlank: HTMLElement = movieHtmlBlank.querySelector('.main-movie-profile');

const seriesHtml = parse(seriesMock);

const seriesNode: HTMLElement = seriesHtml.querySelector('.main-movie-profile');
const asideNodeSeries = seriesHtml.querySelector('.aside-movie-profile');

const emptyHtmlNode = movieHtml.querySelector('.page-footer'); // some random node

// const bodyClassesSeries = seriesHtml.querySelector('.page-content').classNames;

describe('Get ID', () => {
  test('Movie ID', () => {
    const movie = getId(movieNode);
    expect(movie).toEqual<number>(535121);
  });
});

describe('Get Movie Title', () => {
  test('Movie title', () => {
    const movie = getTitle(movieNode);
    expect(movie).toEqual<string>('Na špatné straně');
  });
  test('Series title', () => {
    const movie = getTitle(seriesNode);
    expect(movie).toEqual<string>('Království');
  });
});

describe('Get Poster', () => {
  test('Movie poster', () => {
    const movie = getPoster(movieNode);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/cache/resized/w1080/files/images/film/posters/163/579/163579352_bf8737.jpg'
    );
  });
  test('Movie Blank poster', () => {
    const movie = getPoster(movieNodeBlank);
    expect(movie).toEqual<string>(null);
  });
  test('Movie empty node', () => {
    const movie = getPoster(emptyHtmlNode);
    expect(movie).toEqual<string>(null);
  });
});

describe('Get Movie photo', () => {
  test('Movie photo', () => {
    const movie = getRandomPhoto(movieNode);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/cache/resized/w1326/files/images/film/photos/162/980/162980090_bbffbb.jpg'
    );
  });
  test('Movie Blank photo', () => {
    const movie = getRandomPhoto(movieNodeBlank);
    expect(movie).toEqual<string>(null);
  });
  test('Movie Series photo', () => {
    const movie = getRandomPhoto(seriesNode);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/cache/resized/w1326/files/images/film/photos/158/804/158804662_de9ba6.jpg'
    );
  });
  test('Movie empty node', () => {
    const movie = getRandomPhoto(emptyHtmlNode);
    expect(movie).toEqual<string>(null);
  });
});

describe('Get Movie trivia', () => {
  test('Movie trivia', () => {
    const movie = getTrivia(movieNode);
    expect(movie).toEqual<string[]>([
      'Když Henry (Tory Kittles) se svým mladším bratrem Ethanem (Myles Truitt) hrají na konzoly PS4 fiktivní hru „Shotgun Safari“, nemají ani zapnuté joysticky.(SeBig)',
      'Ve filmu se střídají pro různé záběry dvě auta, Melovo Chevrolet je buď model Caprice ročník 1986 anebo model Impala ročník 1980. Při závěrečné scéně je v jednom záběru auto schované v garáži bílé SUV Dodge Durango, ale jinak je to Chevrolet Tahoe. Dvě úplně jiná auta.(350cuiV8)',
      'Počas rozhovorov (čas 00:24:30 - 00:36:35) medzi Brettom (Mel Gibson), Anthonym (Vince Vaughn) a Calvertom (Don Johnson) ich odznaky, ktoré hodili na stôl, menia pozíciu medzi jednotlivými scénami.(BOURQUE)'
    ]);
  });
  test('Movie Blank trivia', () => {
    const movie = getTrivia(movieNodeBlank);
    expect(movie).toEqual<string>(null);
  });
  test('Movie Series trivia', () => {
    const movie = getTrivia(seriesNode);
    expect(movie).toEqual<string[]>([
      'Údajne sa plánovala i tretia séria seriálu, plány však narušila predčasná smrť niektorých hlavných hercov.(misterz)',
      'Jméno postavy, Stig Helmer, je převzato od postavy Stig-Helmer Olsson ze švédské komediální filmové série Sällskapsresan od Lasse Áberga, která byla svého času považována za symbol švédské tuposti a přísnosti.(TomikZlesa)',
      'Herci, kteří se v seriálu objevili jako umývači nádobí, nedokázali své dialogy řádně vyslovovat, a tak museli být předabováni.(HellFire)'
    ]);
  });
  test('Movie empty node', () => {
    const movie = getTrivia(emptyHtmlNode);
    expect(movie).toEqual<string>(null);
  });
});

describe('Get Duration', () => {
  test('Duration', () => {
    const movie = getDuration(movieNode);
    expect(movie).toEqual<number>(159);
  });
  test('Duration Blank', () => {
    const movie = getDuration(movieNodeBlank);
    expect(movie).toEqual<number>(null);
  });
  test('Duration Series', () => {
    const movie = getDuration(seriesNode);
    expect(movie).toEqual<number>(560);
  });
});

describe('Get VOD', () => {
  test('Get vods movie', () => {
    const movie = getVods(asideNode);
    expect(movie).toEqual<CSFDVod[]>([
      { title: 'Aerovod', url: 'https://aerovod.cz/katalog/na-spatne-strane' },
      // { title: 'Voyo', url: 'https://voyo.nova.cz/filmy/4604-na-spatne-strane' },
      {
        title: 'DVD',
        url: 'https://www.martinus.cz/?uItem=619199'
      }
      // {
      //   title: 'IMDb',
      //   url: 'https://www.imdb.com/title/tt6491178/combined'
      // }
    ]);
  });
  test('Get vods series', () => {
    const movie = getVods(asideNodeSeries);
    expect(movie).toEqual<CSFDVod[]>([]);
  });
  test('Get vods blank', () => {
    const movie = getVods(asideNodeBlank);
    expect(movie).toEqual<CSFDVod[]>([]);
  });
});

// TODO
// describe('Get additional info', () => {
//   test('Get tags', () => {
//     const item = getTags(movieNode);
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

describe('Get titlesOther', () => {
  test('Titles Other', () => {
    const movie = getTitlesOther(movieNode);
    expect(movie).toEqual<CSFDTitlesOther[]>([
      { country: 'USA', title: 'Dragged Across Concrete' },
      { country: 'Kanada', title: 'Dragged Across Concrete' },
      { country: 'Slovensko', title: 'Na zlej strane' },
      { country: 'Velká Británie', title: 'Dragged Across Concrete' },
      { country: 'Austrálie', title: 'Dragged Across Concrete' }
    ]);
  });
  test('Titles Other Blank', () => {
    const movie = getTitlesOther(movieNodeBlank);
    expect(movie).toEqual<CSFDTitlesOther[]>([]);
  });
});

describe('Get origins', () => {
  test('Origins', () => {
    const movie = getOrigins(movieNode);
    expect(movie).toEqual<string[]>(['USA', 'Kanada']);
  });
  test('Origins Series', () => {
    const movie = getOrigins(seriesNode);
    expect(movie).toEqual<string[]>(['Dánsko', 'Francie', 'Německo', 'Švédsko']);
  });
});

describe('Get descriptions', () => {
  test('descriptions', () => {
    const movie = getDescriptions(movieNode);
    expect(movie).toEqual<string[]>([
      'Otupělý policejní veterán Ridgeman (Mel Gibson) a jeho náladový mladší kolega Anthony (Vince Vaughn) jsou suspendováni ze služby poté, co do médií unikne videozáznam jejich svérázných metod. Bez prostředků a velkých šancí se oba zatrpklí vojáci vydají do kriminálního podsvětí, aby učinili spravedlnosti zadost. Mezitím je v jiné části města propuštěn z vězení mladý zločinec Henry Jones a zjišťuje, že jeho matce a postiženému bratrovi hrozí vystěhování. Ve snaze najít způsob, jak jim pomoci, se obrátí na kamaráda z dětství jménem Biscuit, který ho představí nelítostnému kriminálnímu bossovi, jehož ambiciózní plány jej postaví do přímého konfliktu s oběma policejními odpadlíky.(HBO Europe)'
    ]);
  });
  test('Description blank', () => {
    const movie = getDescriptions(movieNodeBlank);
    expect(movie).toEqual<string[]>([]);
  });
});

describe('Get genres', () => {
  test('Genres', () => {
    const movie = getGenres(movieNode);
    expect(movie).toEqual<string[]>(['Krimi', 'Drama', 'Thriller']);
  });
  test('Genres Series', () => {
    const movie = getGenres(seriesNode);
    expect(movie).toEqual<string[]>(['Drama', 'Horor', 'Mysteriózní', 'Komedie']);
  });
});

describe('Get type', () => {
  test('Type', () => {
    const movie = getType(movieNode);
    expect(movie).toEqual<string>('film');
  });
  test('Type Series', () => {
    const movie = getType(seriesNode);
    expect(movie).toEqual<string>('TV seriál');
  });
});

describe('Get year', () => {
  test('Year', () => {
    const movie = getYear(movieNode);
    expect(movie).toEqual<string | number>('2018');
  });
  test('Year Series', () => {
    const movie = getYear(seriesNode);
    expect(movie).toEqual<string | number>('1994–1997');
  });
});

describe('Get rating count', () => {
  test('Rating count', () => {
    const movie = getRatingCount(asideNode);
    expect(movie).toBeGreaterThan(6468);
  });
  test('Rating count', () => {
    const movie = getRatingCount(asideNodeSeries);
    expect(movie).toBeGreaterThan(4450);
  });
  test('Rating count blank', () => {
    const movie = getRatingCount(asideNodeBlank);
    expect(movie).toEqual(null);
  });
});

describe('Get ratings', () => {
  test('Rating', () => {
    const movie = getRating(movieNode);
    expect(movie).toEqual<number>(72);
  });
  test('Color Rating', () => {
    const movie = getColorRating(pageClasses);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
  test('Blank Rating', () => {
    const movie = getColorRating(pageClassesBlank);
    expect(movie).toEqual<CSFDColorRating>('unknown');
  });
  test('Bad Rating', () => {
    const rating = getColor('nothing!');
    expect(rating).toEqual<CSFDColorRating>('unknown');
  });
  test('Bad Rating', () => {
    const rating = getColor('page-grey');
    expect(rating).toEqual<CSFDColorRating>('bad');
  });
  test('Bad Rating', () => {
    const rating = getColor('page-blue');
    expect(rating).toEqual<CSFDColorRating>('average');
  });
});

describe('Get people', () => {
  test('directors', () => {
    const movie = getDirectors(movieNode);
    expect(movie).toEqual<CSFDCreator[]>([
      {
        id: 87470,
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }
    ]);
  });
  test('Screenwriters', () => {
    const movie = getGroup(movieNode, 'Scénář');
    expect(movie.slice(0, 1)).toEqual<CSFDCreator[]>([
      {
        id: 87470,
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }
    ]);
  });
  test('Music composers', () => {
    const movie = getGroup(movieNode, 'Hudba');
    expect(movie.slice(0, 1)).toEqual<CSFDCreator[]>([
      { id: 203209, name: 'Jeff Herriott', url: 'https://www.csfd.cz/tvurce/203209-jeff-herriott/' }
    ]);
  });
  test('Actors', () => {
    const movie = getGroup(movieNode, 'Hrají');
    expect(movie.slice(0, 1)).toEqual<CSFDCreator[]>([
      {
        id: 1,
        name: 'Mel Gibson',
        url: 'https://www.csfd.cz/tvurce/1-mel-gibson/'
      }
    ]);
  });
  test('Based on', () => {
    const movie = getGroup(movieNode, 'Předloha');
    expect(movie.slice(0, 1)).toEqual<CSFDCreator[]>([]);
  });

  describe('Get premieres', () => {
    test('Get movie premiere', () => {
      const movie = getPremieres(asideNode);
      expect(movie).toEqual<CSFDPremiere[]>([
        { company: 'Magic Box', country: 'Česko', date: '07.08.2019', format: 'Na DVD' },
        { company: 'Magic Box', country: 'Česko', date: '07.08.2019', format: 'Na Blu-ray' },
        { company: 'Lionsgate US', country: 'USA', date: '22.03.2019', format: 'V kinech' }
      ]);
    });
    test('Get series premiere', () => {
      const movie = getPremieres(asideNodeSeries);
      expect(movie).toEqual<CSFDPremiere[]>([
        { company: 'Levné knihy', country: 'Česko', date: '22.12.2010', format: 'Na DVD' },
        { company: 'Danmarks Radio', country: 'Dánsko', date: '24.11.1994', format: 'V TV' },
        { company: 'SVT', country: 'Švédsko', date: '04.03.1995', format: 'V TV' }
      ]);
    });
    test('Get blank premiere', () => {
      const movie = getPremieres(asideNodeBlank);
      expect(movie).toEqual<CSFDPremiere[]>([]);
    });
  });

  // TODO get movies with related box
  describe('Get related', () => {
    test('Get movie related', () => {
      const movie = getBoxMovies(asideNode, 'Související');
      expect(movie).toEqual<CSFDMovieListItem[]>([]);
    });
    test('Get series related', () => {
      const movie = getBoxMovies(asideNodeSeries, 'Související');
      expect(movie).toEqual<CSFDMovieListItem[]>([
        {
          id: 116244,
          title: 'Královská nemocnice',
          url: 'https://www.csfd.cz/film/116244-kralovska-nemocnice/'
        }
      ]);
    });
    test('Get blank related', () => {
      const movie = getBoxMovies(asideNodeBlank, 'Související');
      expect(movie).toEqual<CSFDMovieListItem[]>([]);
    });
  });

  // TODO get movies with similar box
  describe('Get similar', () => {
    test('Get movie similar', () => {
      const movie = getBoxMovies(asideNode, 'Podobné');
      expect(movie).toEqual<CSFDMovieListItem[]>([]);
    });
    test('Get series similar', () => {
      const movie = getBoxMovies(asideNodeSeries, 'Podobné');
      expect(movie).toEqual<CSFDMovieListItem[]>([]);
    });
    test('Get blank similar', () => {
      const movie = getBoxMovies(asideNodeBlank, 'Podobné');
      expect(movie).toEqual<CSFDMovieListItem[]>([]);
    });
  });
});
