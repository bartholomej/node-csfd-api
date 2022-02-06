import { HTMLElement, parse } from 'node-html-parser';
import { getColor } from '../src/helpers/global.helper';
import {
  getBoxMovies,
  getColorRating,
  getDescriptions,
  getDuration,
  getGenres,
  getGroup,
  getId,
  getOrigins,
  getPoster,
  getPremieres,
  getRating,
  getRatingCount,
  getTitle,
  getTitlesOther,
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
import { movieMockRich } from './mocks/movie3.html';
import { seriesMock } from './mocks/series1.html';

const getPageClasses = (node: HTMLElement): string[] => {
  return node.querySelector('.page-content').classNames.split(' ');
};

const getAsideNode = (node: HTMLElement): HTMLElement => {
  return node.querySelector('.aside-movie-profile');
};

const getNode = (node: HTMLElement): HTMLElement => {
  return node.querySelector('.main-movie-profile');
};

const getJsonLd = (node: HTMLElement): string => {
  return node.querySelector('script[type="application/ld+json"]').innerText;
};

const getMovie = (
  node: HTMLElement
): { pClasses: string[]; aside: HTMLElement; pNode: HTMLElement; jsonLd: string } => {
  return {
    pClasses: getPageClasses(node),
    aside: getAsideNode(node),
    pNode: getNode(node),
    jsonLd: getJsonLd(node)
  };
};

// Movie
const movieHtml = parse(movieMock);
const {
  pClasses: pageClasses,
  aside: asideNode,
  pNode: movieNode,
  jsonLd: movieJsonLd
} = getMovie(movieHtml);

// Movie blank
const movieHtmlBlank = parse(movieMockBlank);

const {
  pClasses: pageClassesBlank,
  aside: asideNodeBlank,
  pNode: movieNodeBlank,
  jsonLd: movieBlankJsonLd
} = getMovie(movieHtmlBlank);

// Movie rich
const movieHtmlRich = parse(movieMockRich);

const {
  aside: asideNodeRich,
  pNode: movieNodeRich,
  jsonLd: movieRichJsonLd
} = getMovie(movieHtmlRich);

// Series
const seriesHtml = parse(seriesMock);

const { aside: asideNodeSeries, pNode: seriesNode, jsonLd: seriesJsonLd } = getMovie(seriesHtml);

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
  test('Movie rich title', () => {
    const movie = getTitle(movieNodeRich);
    expect(movie).toEqual<string>('Pán prstenů: Společenstvo Prstenu');
  });
});

describe('Get Poster', () => {
  test('Movie poster', () => {
    const movie = getPoster(movieNode);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w1080/files/images/film/posters/163/579/163579352_bf8737.jpg'
    );
  });
  test('Movie Blank poster', () => {
    const movie = getPoster(movieNodeBlank);
    expect(movie).toEqual<string>(null);
  });
  test('Movie rich poster', () => {
    const movie = getPoster(movieNodeRich);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w1080/files/images/film/posters/158/600/158600806_7b6c15.jpg'
    );
  });
});

describe('Get Duration', () => {
  test('Duration', () => {
    const movie = getDuration(movieJsonLd, movieNode);
    expect(movie).toEqual<number>(159);
  });
  test('Duration Blank', () => {
    const movie = getDuration(movieBlankJsonLd, movieNodeBlank);
    expect(movie).toEqual<number>(null);
  });
  test('Duration Rich', () => {
    const movie = getDuration(movieRichJsonLd, movieNodeRich);
    expect(movie).toEqual<number>(172);
  });
  test('Duration Series', () => {
    const movie = getDuration(seriesJsonLd, seriesNode);
    expect(movie).toEqual<number>(560);
  });
});

describe('Get VOD', () => {
  test('Get vods movie', () => {
    const movie = getVods(asideNode);
    expect(movie).toEqual<CSFDVod[]>([
      { title: 'Aerovod', url: 'https://aerovod.cz/katalog/na-spatne-strane' },
      {
        title: 'iTunes',
        url: 'https://itunes.apple.com/cz/movie/dragged-across-concrete/id1469983874'
      },
      {
        title: 'DVD',
        url: 'https://www.martinus.cz/?uItem=619213'
      }
    ]);
  });
  test('Get vods series', () => {
    const movie = getVods(asideNodeSeries);
    expect(movie).toEqual<CSFDVod[]>([]);
  });
  test('Get vods rich', () => {
    const movie = getVods(asideNodeRich);
    expect(movie.length).toEqual<number>(8);
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
  test('Descriptions', () => {
    const movie = getDescriptions(movieNode);
    expect(movie).toEqual<string[]>([
      'Otupělý policejní veterán Ridgeman (Mel Gibson) a jeho náladový mladší kolega Anthony (Vince Vaughn) jsou suspendováni ze služby poté, co do médií unikne videozáznam jejich svérázných metod. Bez prostředků a velkých šancí se oba zatrpklí vojáci vydají do kriminálního podsvětí, aby učinili spravedlnosti zadost. Mezitím je v jiné části města propuštěn z vězení mladý zločinec Henry Jones a zjišťuje, že jeho matce a postiženému bratrovi hrozí vystěhování. Ve snaze najít způsob, jak jim pomoci, se obrátí na kamaráda z dětství jménem Biscuit, který ho představí nelítostnému kriminálnímu bossovi, jehož ambiciózní plány jej postaví do přímého konfliktu s oběma policejními odpadlíky.(HBO Europe)'
    ]);
  });
  test('Descriptions rich', () => {
    const movie = getDescriptions(movieNodeRich);
    expect(movie).toEqual<string[]>([
      'V dávných dobách byl vykován kouzelný prsten, který vlastnil pán Mordoru Sauron. Jeho moc začal využívat k šíření zla, ale o prsten nakonec v boji přišel, a ten na dlouhá léta zmizel. Nakonec ho našel hobit Bilbo Pytlík, který díky němu přestal stárnout. Na naléhavou žádost čaroděje Gandalfa předá prsten synovci Frodovi. Ten se svými kamarády Samem, Smíškem a Pipinem odcházejí do Hůrky a Gandalf se vydává pro radu za svým učitelem, čarodějem Sarumanem. Ten se však přidal na stranu zla a zajme ho. S pomocí tajemného hraničáře, přezdívaného Chodec, Frodo a jeho kamarádi uniknou jen o vlásek devíti černým jezdcům, kteří vyrazili z Temné věže, aby prsten našli a přinesli svému pánovi Sauronovi. Do Roklinky je svolána velká porada lidí a elfů, která rozhodne, že prsten musí být zničen. To je možné pouze tam, kde byl prsten zrozen, v ohni Hory osudu. Odvážný Frodo se nabídne, že tam prsten odnese. Nebezpečí je však příliš veliké, a tak se mu, jako jeho ochránci, postaví po bok čaroděj Gandalf, trpaslík Gimli, elf Legolas, bojovník Boromir, hobiti Sam, Smíšek a Pipin a také Chodec. Zrodí se Společenstvo Prstenu, které se vydává na nebezpečnou cestu plnou nástrah a nebezpečí.(TV Nova)'
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
  test('Genres rich', () => {
    const movie = getGenres(movieNodeRich);
    expect(movie).toEqual<string[]>(['Fantasy', 'Dobrodružný', 'Akční']);
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
  test('Type Rich', () => {
    const movie = getType(movieNodeRich);
    expect(movie).toEqual<string>('film');
  });
  test('Type Series', () => {
    const movie = getType(seriesNode);
    expect(movie).toEqual<string>('seriál');
  });
});

describe('Get year', () => {
  test('Year', () => {
    const movie = getYear(movieJsonLd);
    expect(movie).toEqual<number>(2018);
  });
  test('Year', () => {
    const movie = getYear(movieRichJsonLd);
    expect(movie).toEqual<number>(2001);
  });
  test('Year Series', () => {
    const movie = getYear(seriesJsonLd);
    expect(movie).toEqual<number>(1994);
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
  test('Rating count rich', () => {
    const movie = getRatingCount(asideNodeRich);
    expect(movie).toBeGreaterThan(100000);
  });
  // TODO get new blank movie
  test('Rating count blank', () => {
    const movie = getRatingCount(asideNodeBlank);
    expect(movie).toEqual(1);
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
    const movie = getGroup(movieNode, 'Režie');
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
