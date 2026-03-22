import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import { CSFDColorRating, CSFDFilmTypes } from '../src/dto/global';
import {
  CSFDMovieCreator,
  CSFDMovieListItem,
  CSFDParent,
  CSFDPremiere,
  CSFDTitlesOther,
  CSFDVod,
  MovieJsonLd
} from '../src/dto/movie';
import { getColor } from '../src/helpers/global.helper';
import {
  getEpisodeCode,
  getLocalizedCreatorLabel,
  getMovieBoxMovies,
  getMovieColorRating,
  getMovieCreators,
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
  getMovieTags,
  getMovieTitle,
  getMovieTitlesOther,
  getMovieTrivia,
  getMovieType,
  getMovieVods,
  getMovieYear,
  getSeasonOrEpisodeParent,
  getSeriesAndSeasonTitle
} from '../src/helpers/movie.helper';
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

const getJsonLd = (node: HTMLElement): MovieJsonLd | null => {
  const json = node.querySelector('script[type="application/ld+json"]')?.innerText;
  try {
    return json ? JSON.parse(json) : null;
  } catch (e) {
    return null;
  }
};

const getMovie = (
  node: HTMLElement
): { pClasses: string[]; aside: HTMLElement; pNode: HTMLElement; jsonLd: MovieJsonLd | null } => {
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
      '//image.pmgstatic.com/cache/resized/w1326/files/images/film/photos/163/416/163416560_e04248.jpg'
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
      'Celosvětová premiéra proběhla 3. září 2018 na Mezinárodním filmovém festivalu v Benátkách.(BMW12)',
      'Režisér S. Craig Zahler původně napsal scénář pro věk hlavních postav 30 a 50 let. Poté našel pro roli mladšího policisty Lurasettiho svého oblíbeného herce Vinceho a hledal vhodného partnera. Když se dohodl s Mel Gibsonem na obsazení role Ridgemana, musel přepsat role do věku postav 40 a 60 let.(Tonula)',
      'Počas rozhovorov (čas 00:24:30 - 00:36:35) medzi Brettom (Mel Gibson), Anthonym (Vince Vaughn) a Calvertom (Don Johnson) ich odznaky, ktoré hodili na stôl, menia pozíciu medzi jednotlivými scénami.(BOURQUE)'
    ]);
  });
  test('Movie Blank trivia', () => {
    const movie = getMovieTrivia(movieNodeBlank);
    expect(movie).toEqual(null);
  });
  test('Movie Series trivia', () => {
    const movie = getMovieTrivia(seriesNode);
    expect(movie).toEqual<string[]>([
      'Ernst-Hugo Järegård (Stig Helmer) se právě díky roli v seriálu v Dánsku výrazně zviditelnil a byl dokonce považován za nový sexuální symbol.(TomikZlesa)',
      'Plánovanú 3. sériu narušila predčasná smrť niektorých hlavných hercov, ale po 25 rokoch predsa len vznikla.(misterz)',
      'Když nastane stav beztíže, jako hudební podkres hraje Bachovo „Preludium F moll“. Tento hudební motiv, spolu se záběrem na vznášejícího se Pontopidana (Lars Mikkelsen), je jednoznačným odkazem na podobnou scénu se stavem beztíže z filmu Solaris (1972).(Kaleidoskop)'
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
  test('Empty node', () => {
    const movie = getMovieDuration(null as any, emptyHtmlNode as any);
    expect(movie).toEqual(null);
  });
});

describe('Get VOD', () => {
  test('Get vods movie', () => {
    const movie = getMovieVods(asideNode);
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
      }
    ]);
  });
  test('Get vods series', () => {
    const movie = getMovieVods(asideNodeSeries);
    expect(movie).toEqual<CSFDVod[]>([
      {
        title: 'KVIFF.TV',
        url: 'https://kviff.tv/katalog/kralovstvi-cast-prvni-nenebeske-zastupy'
      }
    ]);
  });
  test('Get vods rich', () => {
    const movie = getMovieVods(asideNodeRich);
    expect(movie.length).toEqual<number>(8);
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

describe('Get additional info', () => {
  test('Get tags', () => {
    const item = getMovieTags(asideNode);
    expect(item).toEqual(expect.arrayContaining(['město', 'sledování', 'banka']));
  });
});

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
      'Hlavním hrdinou je hobit Frodo Pytlík, který se ve své vlastní domovině zvané Středozemě dostal do samotného centra bitvy mytických proporcí. Bude muset během svého putování prokázat, že moc přátelství a individuální odvahy dokáže úspěšně čelit i těm nejničivějším silám temnoty. Frodova dobrodružství odstartuje dar jeho příbuzného Bilba. Od něj získá magický prsten, který Froda postaví do soboje se silami zla reprezentovanými krutovládcem Sauronem. Ten touží za každou cenu získat prsten, protože je pro něj zdrojem neomezené moci, jedině s jeho pomocí se mu může podařit zotročit lid Středozemě a stát se jeho neomezeným pánem. Ve snaze čelit Sauronovým temným plánům, se musí Frodo spojit se několika dalšími bytostmi. Vytvoří s nimi takzvané Společenstvo složené z jeho přátel, čaroděje, elfa, trpaslíka a dalších pomocníků, se kterými se vydá na cestu na jejímž konci doufají, že se jim podaří prsten jednou provždy zničit. Jejich cesta však prokáže, že nejenom magické prsteny, ale také sounáležitost všech živých bytostí mohou dokázat netušené věci. Musí však čelit nejen nebezpečím, která na ně číhají na územích ovládaných Sauronem, ale i rozkladné moci samotného prstenu.(oficiální text distributora)',
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
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  test('Type Rich', () => {
    const movie = getMovieType(movieNodeRich);
    expect(movie).toEqual<CSFDFilmTypes>('film');
  });
  test('Type Series', () => {
    const movie = getMovieType(seriesNode);
    expect(movie).toEqual<CSFDFilmTypes>('series');
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
describe('Get parent', () => {
  test('For movie returns null (no parent links in HTML)', () => {
    const parent = getSeasonOrEpisodeParent(movieNode);
    expect(parent).toBeNull();
  });

  test('For series returns null (no parent links in HTML)', () => {
    const parent = getSeasonOrEpisodeParent(seriesNode);
    expect(parent).toBeNull();
  });

  test('Season HTML with parent links returns series parent', () => {
    const html = parse(`
      <div class="film-header">
        <h1>
          <a href="/film/12345-some-series/prehled/">Some Series</a>
           - Season 1
        </h1>
      </div>
    `);
    const parent = getSeasonOrEpisodeParent(html as any);
    expect(parent).toEqual<CSFDParent>({
      series: { id: 12345, title: 'Some Series' },
      season: null
    });
  });

  test('Episode HTML with series and season parent links', () => {
    const html = parse(`
      <div class="film-header">
        <h2>
          <a href="/film/12345-some-series/prehled/">Some Series</a>
          <a href="/film/12345-some-series/67890-season-1/prehled/">Season 1</a>
        </h2>
      </div>
    `);
    const parent = getSeasonOrEpisodeParent(html as any);
    expect(parent).toEqual<CSFDParent>({
      series: { id: 12345, title: 'Some Series' },
      season: { id: 67890, title: 'Season 1' }
    });
  });

  test('No parent links returns null', () => {
    const html = parse('<div></div>');
    const result = getSeasonOrEpisodeParent(html as any);
    expect(result).toBeNull();
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
  const group = getMovieCreators(movieNode);
  test('directors', () => {
    expect(group.directors.slice(0, 1)).toEqual<CSFDMovieCreator[]>([
      {
        id: 87470,
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/prehled/'
      }
    ]);
  });
  test('Screenwriters', () => {
    expect(group.writers.slice(0, 1)).toEqual<CSFDMovieCreator[]>([
      {
        id: 87470,
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/prehled/'
      }
    ]);
  });
  test('Music composers', () => {
    expect(group.music.slice(0, 1)).toEqual<CSFDMovieCreator[]>([
      {
        id: 203209,
        name: 'Jeff Herriott',
        url: 'https://www.csfd.cz/tvurce/203209-jeff-herriott/prehled/'
      }
    ]);
  });
  test('Actors', () => {
    expect(group.actors.slice(0, 1)).toEqual<CSFDMovieCreator[]>([
      {
        id: 1,
        name: 'Mel Gibson',
        url: 'https://www.csfd.cz/tvurce/1-mel-gibson/prehled/'
      }
    ]);
  });
  test('Based on', () => {
    expect(group.basedOn).toEqual<CSFDMovieCreator[]>([]);
  });

  test('Sound', () => {
    expect(group.sound.slice(0, 1)).toEqual<CSFDMovieCreator[]>([
      {
        id: 905286,
        name: 'Daniel Brennan',
        url: 'https://www.csfd.cz/tvurce/905286-daniel-brennan/prehled/'
      }
    ]);
  });

  test('Group not found should return empty array', () => {
    const creators = getMovieGroup(movieNode, 'NeexistujiciSkupina:' as any);
    expect(creators).toEqual([]);
  });
  describe('Get premieres', () => {
    test('Get movie premiere', () => {
      const movie = getMoviePremieres(asideNode);
      expect(movie).toEqual<CSFDPremiere[]>([
        { company: 'Magic Box', country: 'Česko', date: '2019-08-07', format: 'Na DVD' },
        { company: 'Magic Box', country: 'Česko', date: '2019-08-07', format: 'Na Blu-ray' },
        { company: 'Lionsgate US', country: 'USA', date: '2019-03-22', format: 'V kinech' }
      ]);
    });
    test('Get series premiere', () => {
      const movie = getMoviePremieres(asideNodeSeries);
      expect(movie).toEqual<CSFDPremiere[]>([
        {
          company: 'Aerofilms',
          country: 'Česko',
          date: '2022-09-26',
          format: 'V kinech'
        },
        { company: 'Levné knihy', country: 'Česko', date: '2010-12-22', format: 'Na DVD' },
        { company: 'Danmarks Radio', country: 'Dánsko', date: '1994-11-24', format: 'V TV' },
        { company: 'arte', country: 'Německo', date: '1995-03-11', format: 'V TV' },
        { company: 'SVT', country: 'Švédsko', date: '1995-03-04', format: 'V TV' }
      ]);
    });
    test('Get other movie premiere', () => {
      const movie = getMoviePremieres(asideNode4);
      expect(movie).toEqual<CSFDPremiere[]>([
        {
          country: 'Česko',
          format: 'Na DVD',
          date: '2013-06-20',
          company: 'Bontonfilm'
        },
        {
          country: 'Česko',
          format: 'Na DVD',
          date: '2010-05-21',
          company: 'dvdcom'
        },
        {
          country: 'Česko',
          format: 'Na DVD',
          date: '2004-05-01',
          company: 'Bontonfilm'
        },
        {
          country: 'Česko',
          format: 'Na Blu-ray',
          date: '2011-12-07',
          company: 'Bontonfilm'
        },
        {
          country: 'USA',
          format: 'V kinech',
          date: '2001-07-27',
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
          url: 'https://www.csfd.cz/film/116244-kralovska-nemocnice/prehled/'
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

  describe('Localized Creator Label', () => {
    test('Default (cs) labels', () => {
      expect(getLocalizedCreatorLabel('cs', 'directors')).toEqual('Režie');
      expect(getLocalizedCreatorLabel(undefined, 'actors')).toEqual('Hrají');
    });

    test('English (en) labels', () => {
      expect(getLocalizedCreatorLabel('en', 'directors')).toEqual('Directed by');
      expect(getLocalizedCreatorLabel('en', 'actors')).toEqual('Cast');
    });

    test('Slovak (sk) labels', () => {
      expect(getLocalizedCreatorLabel('sk', 'directors')).toEqual('Réžia');
      expect(getLocalizedCreatorLabel('sk', 'actors')).toEqual('Hrajú');
    });

    test('Fallback to CS for unknown lang', () => {
      expect(getLocalizedCreatorLabel('fr', 'directors')).toEqual('Režie');
    });
  });
});

describe('Get Series and Season Title', () => {
  test('With series and season', () => {
    const html = parse('<h1>Series Name - Season 1</h1>');
    const result = getSeriesAndSeasonTitle(html as any);
    expect(result).toEqual({ seriesName: 'Series Name', seasonName: 'Season 1' });
  });

  test('Only series name', () => {
    const html = parse('<h1>Movie Name</h1>');
    const result = getSeriesAndSeasonTitle(html as any);
    expect(result).toEqual({ seriesName: 'Movie Name', seasonName: null });
  });

  test('No title element', () => {
    const html = parse('<div></div>');
    const result = getSeriesAndSeasonTitle(html as any);
    expect(result).toEqual({ seriesName: null, seasonName: null });
  });
});

describe('Get Episode Code', () => {
  test('With code', () => {
    const html = parse('<div class="film-header-name"><h1>Episode Name (S01E01)</h1></div>');
    const result = getEpisodeCode(html as any);
    expect(result).toEqual('S01E01');
  });

  test('Without code', () => {
    const html = parse('<div class="film-header-name"><h1>Episode Name</h1></div>');
    const result = getEpisodeCode(html as any);
    expect(result).toBeNull();
  });

  test('No header', () => {
    const html = parse('<div></div>');
    const result = getEpisodeCode(html as any);
    expect(result).toBeNull();
  });
});
