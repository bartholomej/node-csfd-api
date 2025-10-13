import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
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
    const movie = getId(movieNode);
    expect(movie).toEqual<number>(535121);
  });
  // test('Empty node', () => {
  //   const movie = getId(emptyHtmlNode);
  //   expect(movie).toEqual<number>(null);
  // });
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
  // test('Empty node', () => {
  //   const movie = getTitle(emptyHtmlNode);
  //   expect(movie).toEqual(null);
  // });
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
    expect(movie).toEqual(null);
  });
  test('Movie rich poster', () => {
    const movie = getPoster(movieNodeRich);
    expect(movie).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w1080/files/images/film/posters/158/600/158600806_7b6c15.jpg'
    );
  });
  test('Movie empty node', () => {
    const movie = getPoster(emptyHtmlNode);
    expect(movie).toEqual(null);
  });
});

describe('Get Movie photo', () => {
  test('Movie photo', () => {
    const movie = getRandomPhoto(movieNode);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/cache/resized/w1326/files/images/film/photos/163/748/163748964_3f9a56.jpg'
    );
  });
  test('Movie Blank photo', () => {
    const movie = getRandomPhoto(movieNodeBlank);
    expect(movie).toEqual(null);
  });
  test('Movie Series photo', () => {
    const movie = getRandomPhoto(seriesNode);
    expect(movie).toEqual<string>(
      '//image.pmgstatic.com/cache/resized/w1326/files/images/film/photos/166/598/166598545_663234.jpg'
    );
  });
  test('Movie empty node', () => {
    const movie = getRandomPhoto(emptyHtmlNode);
    expect(movie).toEqual(null);
  });
});

describe('Get Movie trivia', () => {
  test('Movie trivia', () => {
    const movie = getTrivia(movieNode);
    expect(movie).toEqual<string[]>([
      'Celosvětová premiéra proběhla 3. září 2018 na Mezinárodním filmovém festivalu v Benátkách.(BMW12)',
      'Natáčanie filmu prebiehalo v kanadskom meste Vancouver a začalo 17.7.2017.(MikaelSVK)',
      'Ve filmu zazní píseň „A Better Place For Us“, kterou odehrál jako hudebník režisér S. Craig Zahler.(Rominator)',
    ]);
  });
  test('Movie Blank trivia', () => {
    const movie = getTrivia(movieNodeBlank);
    expect(movie).toEqual(null);
  });
  test('Movie Series trivia', () => {
    const movie = getTrivia(seriesNode);
    expect(movie).toEqual<string[]>([
      "Ernst-Hugo Järegård (Stig Helmer) se právě díky roli v seriálu v Dánsku výrazně zviditelnil a byl dokonce považován za nový sexuální symbol.(TomikZlesa)",
      "Plánovanú 3. sériu narušila predčasná smrť niektorých hlavných hercov, ale po 25 rokoch predsa len vznikla.(misterz)",
      "Když nastane stav beztíže, jako hudební podkres hraje Bachovo „Preludium F moll“. Tento hudební motiv, spolu se záběrem na vznášejícího se Pontopidana (Lars Mikkelsen), je jednoznačným odkazem na podobnou scénu se stavem beztíže z filmu Solaris (1972).(Kaleidoskop)",
    ]);
  });
  test('Movie empty node', () => {
    const movie = getTrivia(emptyHtmlNode);
    expect(movie).toEqual(null);
  });
});

describe('Get Duration', () => {
  test('Duration', () => {
    const movie = getDuration(movieJsonLd, movieNode);
    expect(movie).toEqual<number>(159);
  });
  test('Duration Blank', () => {
    const movie = getDuration(movieBlankJsonLd, movieNodeBlank);
    expect(movie).toEqual(null);
  });
  test('Duration Rich', () => {
    const movie = getDuration(movieRichJsonLd, movieNodeRich);
    expect(movie).toEqual<number>(172);
  });
  test('Duration Series', () => {
    const movie = getDuration(seriesJsonLd, seriesNode);
    expect(movie).toEqual<number>(860);
  });
  // test('Empty node', () => {
  //   const movie = getDuration('bad json', emptyHtmlNode);
  //   expect(movie).toEqual<number>(null);
  // });
});

describe('Get VOD', () => {
  test('Get vods movie', () => {
    const movie = getVods(asideNode);
    expect(movie).toEqual<CSFDVod[]>([
      {
        title: 'Apple TV+',
        url: 'https://srv.clickfuse.com/ads/adclkr.php?id=100006636&url=https%3A//tv.apple.com/cz/movie/dragged-across-concrete/umc.cmc.34ihj6x6alpeso7j7lpvamjfb'
      },
      {
        title: 'KVIFF.TV',
        url: 'https://kviff.tv/katalog/na-spatne-strane'
      },
      {
        title: 'prima+',
        url: 'https://www.iprima.cz/filmy/na-spatne-strane?utm_source=csfd&utm_medium=section_vod&utm_campaign=link_exchange'
      },
      {
        title: 'YouTube Movies',
        url: 'https://www.youtube.com/watch?v=8UGglrPklC4'
      },
      { title: 'DVD', url: 'https://www.martinus.cz/?uItem=619199' },
      { title: 'Blu-ray', url: 'https://www.martinus.cz/?uItem=619213' }
    ]);
  });
  test('Get vods series', () => {
    const movie = getVods(asideNodeSeries);
    expect(movie).toEqual<CSFDVod[]>([
      {
        title: 'Lepší.TV',
        url: 'https://www.lepsi.tv/top_tv/serial/kralovstvi-cast-prvni-online?utm_source=csfd&utm_content=csfd',
      },
      {
        title: 'KVIFF.TV',
        url: 'https://kviff.tv/katalog/kralovstvi-cast-druha-prijd-kralovstvi-tve'
      },
    ]);
  });
  test('Get vods rich', () => {
    const movie = getVods(asideNodeRich);
    expect(movie.length).toEqual<number>(11);
  });
  test('Get vods blank', () => {
    const movie = getVods(asideNodeBlank);
    expect(movie).toEqual<CSFDVod[]>([]);
  });
  test('Empty node', () => {
    const movie = getVods(emptyHtmlNode);
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
      'Hlavním hrdinou je hobit Frodo Pytlík, který se ve své vlastní domovině zvané Středozemě dostal do samotného centra bitvy mytických proporcí. Bude muset během svého putování prokázat, že moc přátelství a individuální odvahy dokáže úspěšně čelit i těm nejničivějším silám temnoty. Frodova dobrodružství odstartuje dar jeho příbuzného Bilba. Od něj získá magický prsten, který Froda postaví do soboje se silami zla reprezentovanými krutovládcem Sauronem. Ten touží za každou cenu získat prsten, protože je pro něj zdrojem neomezené moci, jedině s jeho pomocí se mu může podařit zotročit lid Středozemě a stát se jeho neomezeným pánem. Ve snaze čelit Sauronovým temným plánům, se musí Frodo spojit se několika dalšími bytostmi. Vytvoří s nimi takzvané Společenstvo složené z jeho přátel, čaroděje, elfa, trpaslíka a dalších pomocníků, se kterými se vydá na cestu na jejímž konci doufají, že se jim podaří prsten jednou provždy zničit. Jejich cesta však prokáže, že nejenom magické prsteny, ale také sounáležitost všech živých bytostí mohou dokázat netušené věci. Musí však čelit nejen nebezpečím, která na ně číhají na územích ovládaných Sauronem, ale i rozkladné moci samotného prstenu.(oficiální text distributora)',
      'Budoucnost civilizace spočívá v osudu Jednoho prstenu, který byl po staletí ztracen. Osud jej však umístil do rukou mladého Hobita jménem Frodo Pytlík, který zdědil Prsten. Když se Frodo stane nositelem prstenu, čeká ho skličující úkol – zničit prsten v ohni Hory Osudu, kde byl vytvořen.(G....)'
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
  test('Wrong year', () => {
    const movie = getYear(null as any);
    expect(movie).toEqual(null);
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
      const movie = getPremieres(asideNode4);
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

  describe('Anomaly detection', () => {
    test('Bad node for rating', () => {
      const movie = getRatingCount(movieNode);
      expect(movie).toEqual<CSFDMovieListItem[]>(null as any);
    });

    test('Wrong rating', () => {
      const movie = getRating(wrongHtml);
      expect(movie).toEqual(null);
    });

    test('Wrong otherTitle', () => {
      const movie = getTitlesOther(wrongHtml);
      expect(movie).toEqual([]);
    });
  });
});
