import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import { getColor } from '../src/helpers/global.helper';
import {
  getMovieBoxMovies,
  getMovieColorRating,
  getMovieDescriptions,
  getMovieDuration,
  getMovieGenres,
  getMovieGroup,
  getMovieId,
  getMovieOrigins,
  getMoviePoster,
  getMoviePremieres,
  getMovieRandomPhoto,
  getMovieRating,
  getMovieRatingCount,
  getMovieTitle,
  getMovieTitlesOther,
  getMovieTrivia,
  getMovieType,
  getMovieVods,
  getMovieYear
} from '../src/helpers/movie.helper';
import { CSFDColorRating } from '../src/interfaces/global';
import {
  CSFDMovieCreator,
  CSFDMovieListItem,
  CSFDPremiere,
  CSFDTitlesOther,
  CSFDVod
} from '../src/interfaces/movie.interface';
import { movieMock } from './mocks/movie1.html';
import { movieMockBlank } from './mocks/movie2.html';
import { movieMockRich } from './mocks/movie3.html';
import { movieMock4 } from './mocks/movie4.html';
import { seriesMock } from './mocks/series1.html';

const getPageClasses = (node: HTMLElement): string[] => {
  return node.querySelector('.page-content')?.classNames.split(' ') ?? [''];
};

const getAsideNode = (node: HTMLElement): HTMLElement => {
  return node.querySelector('.aside-movie-profile') as HTMLElement;
};

const getNode = (node: HTMLElement): HTMLElement => {
  return node.querySelector('.main-movie-profile') as HTMLElement;
};

const getJsonLd = (node: HTMLElement): string => {
  return node.querySelector('script[type="application/ld+json"]')?.innerText ?? '{}';
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

// Wrong html
const wrongHtml = parse(
  '<div class="film-rating-average"></div><ul class="film-names"><li><img class="flag" /></li></ul>'
);

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

// Movie 4
const movieHtml4 = parse(movieMock4);

const { aside: asideNode4 } = getMovie(movieHtml4);

// Series
const seriesHtml = parse(seriesMock);

const { aside: asideNodeSeries, pNode: seriesNode, jsonLd: seriesJsonLd } = getMovie(seriesHtml);

const emptyHtmlNode = movieHtml.querySelector('.page-footer'); // some random node

describe('Get ID', () => {
  test('Movie ID', () => {
    const movie = getMovieId(movieNode);
    expect(movie).toEqual<number>(535121);
  });
  // test('Empty node', () => {
  //   const movie = getMovieId(emptyHtmlNode);
  //   expect(movie).toEqual<number>(null);
  // });
});

describe('Get Movie Title', () => {
  test('Movie title', () => {
    const movie = getMovieTitle(movieNode);
    expect(movie).toEqual<string>('Na špatné straně');
  });
  test('Series title', () => {
    const movie = getMovieTitle(seriesNode);
    expect(movie).toEqual<string>('Království');
  });
  test('Movie rich title', () => {
    const movie = getMovieTitle(movieNodeRich);
    expect(movie).toEqual<string>('Pán prstenů: Společenstvo Prstenu');
  });
  // test('Empty node', () => {
  //   const movie = getMovieTitle(emptyHtmlNode);
  //   expect(movie).toEqual(null);
  // });
});

describe('Get Poster', () => {
  test('Movie poster', () => {
    const movie = getMoviePoster(movieNode);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w1080/files/images/film/posters/163/579/163579352_bf8737.jpg'
    );
  });
  test('Movie Blank poster', () => {
    const movie = getMoviePoster(movieNodeBlank);
    expect(movie).toEqual(null);
  });
  test('Movie rich poster', () => {
    const movie = getMoviePoster(movieNodeRich);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w1080/files/images/film/posters/158/600/158600806_7b6c15.jpg'
    );
  });
  test('Movie empty node', () => {
    const movie = getMoviePoster(emptyHtmlNode);
    expect(movie).toEqual(null);
  });
});

describe('Get Movie photo', () => {
  test('Movie photo', () => {
    const movie = getMovieRandomPhoto(movieNode);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/cache/resized/w1326/files/images/film/photos/163/416/163416559_60bcbb.jpg'
    );
  });
  test('Movie Blank photo', () => {
    const movie = getMovieRandomPhoto(movieNodeBlank);
    expect(movie).toEqual(null);
  });
  test('Movie Series photo', () => {
    const movie = getMovieRandomPhoto(seriesNode);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/cache/resized/w1326/files/images/film/photos/166/598/166598546_c16928.jpg'
    );
  });
  test('Movie empty node', () => {
    const movie = getMovieRandomPhoto(emptyHtmlNode);
    expect(movie).toEqual(null);
  });
});

describe('Get Movie trivia', () => {
  test('Movie trivia', () => {
    const movie = getMovieTrivia(movieNode);
    expect(movie).toEqual<string[]>([
      'Režisér S. Craig Zahler původně napsal scénář pro věk hlavních postav 30 a 50 let. Poté našel pro roli mladšího policisty Lurasettiho svého oblíbeného herce Vinceho a hledal vhodného partnera. Když se dohodl s Mel Gibsonem na obsazení role Ridgemana, musel přepsat role do věku postav 40 a 60 let.(Tonula)',
      'Ve filmu se střídají pro různé záběry dvě auta, Melovo Chevrolet je buď model Caprice ročník 1986 anebo model Impala ročník 1980. Při závěrečné scéně je v jednom záběru auto schované v garáži bílé SUV Dodge Durango, ale jinak je to Chevrolet Tahoe. Dvě úplně jiná auta.(350cuiV8)',
      'Při přepadení obchodu ve 36. minutě, střelec rozstřílí stojan s chipsy a přitom si můžeme jasně všimnout, že zákazník pohne hlavou, i když ho předtím lupič evidentně zastřelil.(Timak)'
    ]);
  });
  test('Movie Blank trivia', () => {
    const movie = getMovieTrivia(movieNodeBlank);
    expect(movie).toEqual(null);
  });
  test('Movie Series trivia', () => {
    const movie = getMovieTrivia(seriesNode);
    expect(movie).toEqual<string[]>([
      'Herci, kteří se v seriálu objevili jako umývači nádobí, nedokázali své dialogy řádně vyslovovat, a tak museli být předabováni.(HellFire)',
      'Údajne sa plánovala i tretia séria seriálu, plány však narušila predčasná smrť niektorých hlavných hercov.(misterz)',
      'Ernst-Hugo Järegård se právě díky roli v Riget v Dánsku výrazně zviditelnil a byl dokonce považován za nový sexuální symbol.(TomikZlesa)'
    ]);
  });
  test('Movie empty node', () => {
    const movie = getMovieTrivia(emptyHtmlNode);
    expect(movie).toEqual(null);
  });
});

describe('Get Duration', () => {
  test('Duration', () => {
    const movie = getMovieDuration(movieJsonLd, movieNode);
    expect(movie).toEqual<number>(159);
  });
  test('Duration Blank', () => {
    const movie = getMovieDuration(movieBlankJsonLd, movieNodeBlank);
    expect(movie).toEqual(null);
  });
  test('Duration Rich', () => {
    const movie = getMovieDuration(movieRichJsonLd, movieNodeRich);
    expect(movie).toEqual<number>(172);
  });
  test('Duration Series', () => {
    const movie = getMovieDuration(seriesJsonLd, seriesNode);
    expect(movie).toEqual<number>(860);
  });
  // test('Empty node', () => {
  //   const movie = getMovieDuration('bad json', emptyHtmlNode);
  //   expect(movie).toEqual<number>(null);
  // });
});

describe('Get VOD', () => {
  test('Get vods movie', () => {
    const movie = getMovieVods(asideNode);
    expect(movie).toEqual<CSFDVod[]>([
      {
        title: 'Apple TV+',
        url: 'https://tv.apple.com/cz/movie/dragged-across-concrete/umc.cmc.34ihj6x6alpeso7j7lpvamjfb'
      },
      {
        title: 'Voyo',
        url: 'https://voyo.nova.cz/titul/4604-na-spatne-strane'
      },
      { title: 'KVIFF.TV', url: 'https://kviff.tv/katalog/na-spatne-strane' },
      {
        title: 'iTunes',
        url: 'https://itunes.apple.com/cz/movie/dragged-across-concrete/id1469983874'
      },
      {
        title: 'DVD',
        url: 'https://www.martinus.cz/?uItem=619199'
      }
    ]);
  });
  test('Get vods series', () => {
    const movie = getMovieVods(asideNodeSeries);
    expect(movie).toEqual<CSFDVod[]>([
      {
        title: 'KVIFF.TV',
        url: 'https://kviff.tv/katalog/kralovstvi-cast-sedma-gargantua'
      }
    ]);
  });
  test('Get vods rich', () => {
    const movie = getMovieVods(asideNodeRich);
    expect(movie.length).toEqual<number>(11);
  });
  test('Get vods blank', () => {
    const movie = getMovieVods(asideNodeBlank);
    expect(movie).toEqual<CSFDVod[]>([]);
  });
  test('Empty node', () => {
    const movie = getMovieVods(emptyHtmlNode);
    expect(movie).toEqual<CSFDVod[]>([]);
  });
});

// TODO
// describe('Get additional info', () => {
//   test('Get tags', () => {
//     const item = getMovieTags(movieNode);
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
    const movie = getMovieTitlesOther(movieNode);
    expect(movie).toEqual<CSFDTitlesOther[]>([
      { country: 'USA', title: 'Dragged Across Concrete' },
      { country: 'Kanada', title: 'Dragged Across Concrete' },
      { country: 'Slovensko', title: 'Na zlej strane' },
      { country: 'Velká Británie', title: 'Dragged Across Concrete' },
      { country: 'Austrálie', title: 'Dragged Across Concrete' }
    ]);
  });
  test('Titles Other Blank', () => {
    const movie = getMovieTitlesOther(movieNodeBlank);
    expect(movie).toEqual<CSFDTitlesOther[]>([]);
  });
});

describe('Get origins', () => {
  test('Origins', () => {
    const movie = getMovieOrigins(movieNode);
    expect(movie).toEqual<string[]>(['USA', 'Kanada']);
  });
  test('Origins Series', () => {
    const movie = getMovieOrigins(seriesNode);
    expect(movie).toEqual<string[]>(['Dánsko', 'Francie', 'Německo', 'Švédsko']);
  });
});

describe('Get descriptions', () => {
  test('Descriptions', () => {
    const movie = getMovieDescriptions(movieNode);
    expect(movie).toEqual<string[]>([
      'Otupělý policejní veterán Ridgeman (Mel Gibson) a jeho náladový mladší kolega Anthony (Vince Vaughn) jsou suspendováni ze služby poté, co do médií unikne videozáznam jejich svérázných metod. Bez prostředků a velkých šancí se oba zatrpklí vojáci vydají do kriminálního podsvětí, aby učinili spravedlnosti zadost. Mezitím je v jiné části města propuštěn z vězení mladý zločinec Henry Jones a zjišťuje, že jeho matce a postiženému bratrovi hrozí vystěhování. Ve snaze najít způsob, jak jim pomoci, se obrátí na kamaráda z dětství jménem Biscuit, který ho představí nelítostnému kriminálnímu bossovi, jehož ambiciózní plány jej postaví do přímého konfliktu s oběma policejními odpadlíky.(HBO Europe)'
    ]);
  });
  test('Descriptions rich', () => {
    const movie = getMovieDescriptions(movieNodeRich);
    expect(movie).toEqual<string[]>([
      'V dávných dobách byl vykován kouzelný prsten, který vlastnil pán Mordoru Sauron. Jeho moc začal využívat k šíření zla, ale o prsten nakonec v boji přišel, a ten na dlouhá léta zmizel. Nakonec ho našel hobit Bilbo Pytlík, který díky němu přestal stárnout. Na naléhavou žádost čaroděje Gandalfa předá prsten synovci Frodovi. Ten se svými kamarády Samem, Smíškem a Pipinem odcházejí do Hůrky a Gandalf se vydává pro radu za svým učitelem, čarodějem Sarumanem. Ten se však přidal na stranu zla a zajme ho. S pomocí tajemného hraničáře, přezdívaného Chodec, Frodo a jeho kamarádi uniknou jen o vlásek devíti černým jezdcům, kteří vyrazili z Temné věže, aby prsten našli a přinesli svému pánovi Sauronovi. Do Roklinky je svolána velká porada lidí a elfů, která rozhodne, že prsten musí být zničen. To je možné pouze tam, kde byl prsten zrozen, v ohni Hory osudu. Odvážný Frodo se nabídne, že tam prsten odnese. Nebezpečí je však příliš veliké, a tak se mu, jako jeho ochránci, postaví po bok čaroděj Gandalf, trpaslík Gimli, elf Legolas, bojovník Boromir, hobiti Sam, Smíšek a Pipin a také Chodec. Zrodí se Společenstvo Prstenu, které se vydává na nebezpečnou cestu plnou nástrah a nebezpečí.(TV Nova)',
      'Budoucnost civilizace spočívá v osudu Jednoho prstenu, který byl po staletí ztracen. Osud jej však umístil do rukou mladého Hobita jménem Frodo Pytlík, který zdědil Prsten. Když se Frodo stane nositelem prstenu, čeká ho skličující úkol – zničit prsten v ohni Hory Osudu, kde byl vytvořen.(G....)'
    ]);
  });
  test('Description blank', () => {
    const movie = getMovieDescriptions(movieNodeBlank);
    expect(movie).toEqual<string[]>([]);
  });
});

describe('Get genres', () => {
  test('Genres', () => {
    const movie = getMovieGenres(movieNode);
    expect(movie).toEqual<string[]>(['Krimi', 'Drama', 'Thriller']);
  });
  test('Genres rich', () => {
    const movie = getMovieGenres(movieNodeRich);
    expect(movie).toEqual<string[]>(['Fantasy', 'Dobrodružný', 'Akční']);
  });
  test('Genres Series', () => {
    const movie = getMovieGenres(seriesNode);
    expect(movie).toEqual<string[]>(['Drama', 'Horor', 'Mysteriózní', 'Komedie']);
  });
});

describe('Get type', () => {
  test('Type', () => {
    const movie = getMovieType(movieNode);
    expect(movie).toEqual<string>('film');
  });
  test('Type Rich', () => {
    const movie = getMovieType(movieNodeRich);
    expect(movie).toEqual<string>('film');
  });
  test('Type Series', () => {
    const movie = getMovieType(seriesNode);
    expect(movie).toEqual<string>('seriál');
  });
});

describe('Get year', () => {
  test('Year', () => {
    const movie = getMovieYear(movieJsonLd);
    expect(movie).toEqual<number>(2018);
  });
  test('Year', () => {
    const movie = getMovieYear(movieRichJsonLd);
    expect(movie).toEqual<number>(2001);
  });
  test('Year Series', () => {
    const movie = getMovieYear(seriesJsonLd);
    expect(movie).toEqual<number>(1994);
  });
  test('Wrong year', () => {
    const movie = getMovieYear(null as any);
    expect(movie).toEqual(null);
  });
});

describe('Get rating count', () => {
  test('Rating count', () => {
    const movie = getMovieRatingCount(asideNode);
    expect(movie).toBeGreaterThan(6468);
  });
  test('Rating count', () => {
    const movie = getMovieRatingCount(asideNodeSeries);
    expect(movie).toBeGreaterThan(4450);
  });
  test('Rating count rich', () => {
    const movie = getMovieRatingCount(asideNodeRich);
    expect(movie).toBeGreaterThan(100000);
  });
  // TODO get new blank movie
  test('Rating count blank', () => {
    const movie = getMovieRatingCount(asideNodeBlank);
    expect(movie).toEqual(null);
  });
});

describe('Get ratings', () => {
  test('Rating', () => {
    const movie = getMovieRating(movieNode);
    expect(movie).toEqual<number>(72);
  });
  test('Color Rating', () => {
    const movie = getMovieColorRating(pageClasses);
    expect(movie).toEqual<CSFDColorRating>('good');
  });
  test('Blank Rating', () => {
    const movie = getMovieColorRating(pageClassesBlank);
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
    const movie = getMovieGroup(movieNode, 'Režie');
    expect(movie).toEqual<CSFDMovieCreator[]>([
      {
        id: 87470,
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }
    ]);
  });
  test('Screenwriters', () => {
    const movie = getMovieGroup(movieNode, 'Scénář');
    expect(movie.slice(0, 1)).toEqual<CSFDMovieCreator[]>([
      {
        id: 87470,
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }
    ]);
  });
  test('Music composers', () => {
    const movie = getMovieGroup(movieNode, 'Hudba');
    expect(movie.slice(0, 1)).toEqual<CSFDMovieCreator[]>([
      { id: 203209, name: 'Jeff Herriott', url: 'https://www.csfd.cz/tvurce/203209-jeff-herriott/' }
    ]);
  });
  test('Actors', () => {
    const movie = getMovieGroup(movieNode, 'Hrají');
    expect(movie.slice(0, 1)).toEqual<CSFDMovieCreator[]>([
      {
        id: 1,
        name: 'Mel Gibson',
        url: 'https://www.csfd.cz/tvurce/1-mel-gibson/'
      }
    ]);
  });
  test('Based on', () => {
    const movie = getMovieGroup(movieNode, 'Předloha');
    expect(movie.slice(0, 1)).toEqual<CSFDMovieCreator[]>([]);
  });

  describe('Get premieres', () => {
    test('Get movie premiere', () => {
      const movie = getMoviePremieres(asideNode);
      expect(movie).toEqual<CSFDPremiere[]>([
        { company: 'Magic Box', country: 'Česko', date: '07.08.2019', format: 'Na DVD' },
        { company: 'Magic Box', country: 'Česko', date: '07.08.2019', format: 'Na Blu-ray' },
        { company: 'Lionsgate US', country: 'USA', date: '22.03.2019', format: 'V kinech' }
      ]);
    });
    test('Get series premiere', () => {
      const movie = getMoviePremieres(asideNodeSeries);
      expect(movie).toEqual<CSFDPremiere[]>([
        {
          company: 'Aerofilms',
          country: 'Česko',
          date: '26.09.2022',
          format: 'V kinech'
        },
        { company: 'Levné knihy', country: 'Česko', date: '22.12.2010', format: 'Na DVD' },
        { company: 'Danmarks Radio', country: 'Dánsko', date: '24.11.1994', format: 'V TV' },
        { company: 'arte', country: 'Německo', date: '11.03.1995', format: 'V TV' },
        { company: 'SVT', country: 'Švédsko', date: '04.03.1995', format: 'V TV' }
      ]);
    });
    test('Get other movie premiere', () => {
      const movie = getMoviePremieres(asideNode4);
      expect(movie).toEqual<CSFDPremiere[]>([
        {
          country: 'Česko',
          format: 'Na DVD',
          date: '20.06.2013',
          company: 'Bontonfilm'
        },
        {
          country: 'Česko',
          format: 'Na DVD',
          date: '21.05.2010',
          company: 'dvdcom'
        },
        {
          country: 'Česko',
          format: 'Na DVD',
          date: '01.05.2004',
          company: 'Bontonfilm'
        },
        {
          country: 'Česko',
          format: 'Na Blu-ray',
          date: '07.12.2011',
          company: 'Bontonfilm'
        },
        {
          country: 'USA',
          format: 'V kinech',
          date: '27.07.2001',
          company: '20th Century Fox'
        }
      ]);
    });
    test('Get blank premiere', () => {
      const movie = getMoviePremieres(asideNodeBlank);
      expect(movie).toEqual<CSFDPremiere[]>([]);
    });
  });

  // TODO get movies with related box
  describe('Get related', () => {
    test('Get movie related', () => {
      const movie = getMovieBoxMovies(asideNode, 'Související');
      expect(movie).toEqual<CSFDMovieListItem[]>([]);
    });
    test('Get series related', () => {
      const movie = getMovieBoxMovies(asideNodeSeries, 'Související');
      expect(movie).toEqual<CSFDMovieListItem[]>([
        {
          id: 116244,
          title: 'Královská nemocnice',
          url: 'https://www.csfd.cz/film/116244-kralovska-nemocnice/'
        }
      ]);
    });
    test('Get blank related', () => {
      const movie = getMovieBoxMovies(asideNodeBlank, 'Související');
      expect(movie).toEqual<CSFDMovieListItem[]>([]);
    });
  });

  // TODO get movies with similar box
  describe('Get similar', () => {
    test('Get movie similar', () => {
      const movie = getMovieBoxMovies(asideNode, 'Podobné');
      expect(movie).toEqual<CSFDMovieListItem[]>([]);
    });
    test('Get series similar', () => {
      const movie = getMovieBoxMovies(asideNodeSeries, 'Podobné');
      expect(movie).toEqual<CSFDMovieListItem[]>([]);
    });
    test('Get blank similar', () => {
      const movie = getMovieBoxMovies(asideNodeBlank, 'Podobné');
      expect(movie).toEqual<CSFDMovieListItem[]>([]);
    });
  });

  describe('Anomaly detection', () => {
    test('Bad node for rating', () => {
      const movie = getMovieRatingCount(movieNode);
      expect(movie).toEqual<CSFDMovieListItem[]>(null as any);
    });

    test('Wrong rating', () => {
      const movie = getMovieRating(wrongHtml);
      expect(movie).toEqual(null);
    });

    test('Wrong otherTitle', () => {
      const movie = getMovieTitlesOther(wrongHtml);
      expect(movie).toEqual([]);
    });
  });
});
