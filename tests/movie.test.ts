import { readFileSync } from 'fs';
import { HTMLElement, parse } from 'node-html-parser';
import {
  getDescriptions,
  getDirectors,
  getGenres,
  getGroup,
  getOrigins,
  getOtherTitles,
  getPoster,
  getTitle,
  getType,
  getYear
} from '../src/helpers/movie.helper';
import { CSFDCreators, CSFDOtherTitles } from '../src/interfaces/movie.interface';

const response = readFileSync(`${__dirname}/mocks/movie1.html`, 'utf8');
const movieNode = parse(response);
const moviePage: HTMLElement = movieNode.querySelector('#pg-web-film');

describe('Get Movie', () => {
  test('Movie title', () => {
    const movie = getTitle(moviePage);
    expect(movie).toEqual<string>('Na špatné straně');
  });
});

// poster?: string;
// otherTitles?: OtherTitles[];
// origins?: string[];
// descriptions?: string[];
// directors?: CSFDCreators[];
// actors?: CSFDCreators[];
// basedOn?: CSFDCreators[];
// writers?: CSFDCreators[];
// music?: CSFDCreators[];
// producers?: CSFDCreators[];
// genres: string[]; // TODO listo of genres(?)

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
      '//img.csfd.cz/files/images/film/posters/163/579/163579352_bf8737.jpg?h180'
    );
  });
});

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
      'Otupělý policejní veterán Ridgeman (Mel Gibson) a jeho náladový mladší kolega Anthony (Vince Vaughn) jsou suspendováni ze služby poté, co do médií unikne videozáznam jejich svérázných metod. Bez prostředků a velkých šancí se oba zatrpklí vojáci vydají do kriminálního podsvětí, aby učinili spravedlnosti zadost. Mezitím je v jiné části města propuštěn z vězení mladý zločinec Henry Jones a zjišťuje, že jeho matce a postiženému bratrovi hrozí vystěhování. Ve snaze najít způsob, jak jim pomoci, se obrátí na kamaráda z dětství jménem Biscuit, který ho představí nelítostnému kriminálnímu bossovi, jehož ambiciózní plány jej postaví do přímého konfliktu s oběma policejními odpadlíky.(HBO Europe)',
      'Dva až příliš horliví policisté jsou za překročení rámce svých povinností suspendováni ze služby. To jim ovšem nebrání, aby ve svém boji s podsvětím pokračovali na vlastní pěst a učinili spravedlnosti zadost. Krimi thriller s notnou dávkou násilí překračuje hranice žánru a poukazuje na problematiku přehnané politické korektnosti, která je v současném světě dovedena až ad absurdum.(Febiofest)',
      'Brett je policajt tesne pred dôchodkom. So svojím mladším kolegom to pri jednom záťahu proti zločincom trochu preženú s násilím a nanešťastie sú pritom nakrútení. Výsledkom je šesťtýždňová nútená suspenzácia, ktorá ich pripraví o dosť peňazí. Nahnevaní na systém, ale stále rozhodnutí pokračovať v boji s podsvetím, sa rozhodnú zarobiť si peniaze inak. Plán je jednoduchý – okradnúť partiu zlodejov krátko po tom, ako vylúpi banku. Žiaľ, to čo vyzerá spočiatku jednoducho, sa v realite veľmi rýchlo skomplikuje a vidina ľahkého zárobku sa mení na jednu z najťažších výziev ich života. Po westerne a variácii na grindhouse si režisér tentoraz berie na paškál subžáner tzv. heist filmu, pričom si ho opäť pretvára na svoj obraz. Klasické žánrové formulky získavajú pod jeho taktovkou nové svieže podoby a až tarantinovsko absurdné a krvavé vyústenia.(Art Film Fest)'
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

describe('Get people', () => {
  test('directors', () => {
    const movie = getDirectors(moviePage);
    expect(movie).toEqual<CSFDCreators[]>([
      {
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }
    ]);
  });
  test('Screenwriters', () => {
    const movie = getGroup(moviePage, 'Scénář');
    expect(movie.slice(0, 1)).toEqual<CSFDCreators[]>([
      {
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }
    ]);
  });
  test('Music composers', () => {
    const movie = getGroup(moviePage, 'Hudba');
    expect(movie.slice(0, 1)).toEqual<CSFDCreators[]>([
      { name: 'Jeff Herriott', url: 'https://www.csfd.cz/tvurce/203209-jeff-herriott/' }
    ]);
  });
  test('Actors', () => {
    const movie = getGroup(moviePage, 'Hrají');
    expect(movie.slice(0, 1)).toEqual<CSFDCreators[]>([
      {
        name: 'Mel Gibson',
        url: 'https://www.csfd.cz/tvurce/1-mel-gibson/'
      }
    ]);
  });
  test('Based on', () => {
    const movie = getGroup(moviePage, 'Předloha');
    expect(movie.slice(0, 1)).toEqual<CSFDCreators[]>([]);
  });
});
