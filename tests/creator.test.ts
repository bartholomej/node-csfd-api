import { parse } from 'node-html-parser';
import {
  getBio,
  getBirthdayInfo,
  getFilms,
  getName,
  getPhoto
} from '../src/helpers/creator.helper';
import { CSFDCreatorScreening } from '../src/interfaces/creator.interface';
import { actorMock } from './mocks/creator-actor.html';
import { composerMock } from './mocks/creator-composer-empty.html';
import { directorMock } from './mocks/creator-director.html';

const html = parse(directorMock);
const asideNode = html.querySelector('.creator-about');
const filmsNode = html.querySelector('.creator-filmography');

const htmlActor = parse(actorMock);
const asideNodeActor = htmlActor.querySelector('.creator-about');
const filmsNodeActor = htmlActor.querySelector('.creator-filmography');

const htmlComposer = parse(composerMock);
const asideNodeComposer = htmlComposer.querySelector('.creator-about');
const filmsNodeComposer = htmlComposer.querySelector('.creator-filmography');

describe('Creator info', () => {
  test('Name', () => {
    const creator = getName(asideNode);
    expect(creator).toEqual<string>('Quentin Tarantino');
  });

  test('Bio', () => {
    const creator = getBio(asideNode);
    expect(creator).toEqual<string>(
      'Quentin Tarantino se narodil 27. března roku 1963 v americkém Knoxville teprve šestnáctileté Connie Tarantinové. Své jméno Quentin dostal podle matčiny oblíbené televizní postavy Quinta ze seriálu "Gunsmoke". Quentinův otec byl jistý Tony Tarantino, který rodinu opustil když byl Quentin ještě malinký. Jeho dětství a dospívání ovlivnily nejen filmy, ale pop kultura obecně. Televizní seriály, komiksy, populární hudba, to vše jako mladý hltal ve velkém a stále neměl…'
    );
  });

  test('Photo', () => {
    const creator = getPhoto(asideNode);
    expect(creator).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w100h132crop/files/images/creator/photos/164/502/164502788_119691.jpg'
    );
  });
});

describe('Creator birthday info', () => {
  test('Birthday', () => {
    const creator = getBirthdayInfo(asideNode)?.birthday;
    expect(creator).toEqual<string>('27.03.1963');
  });

  test('Birthplace', () => {
    const creator = getBirthdayInfo(asideNode)?.birthPlace;
    expect(creator).toEqual<string>('Knoxville, Tennessee, USA');
  });

  test('Age', () => {
    const creator = getBirthdayInfo(asideNode)?.age;
    expect(creator).toEqual<number>(59);
  });
});

describe("Creator's films", () => {
  test('First film from first section', () => {
    const films = getFilms(filmsNode) as CSFDCreatorScreening[];
    expect(films[0].title).toEqual<string>('Tenkrát v Hollywoodu');
  });

  test('Last film from first section', () => {
    const films = getFilms(filmsNode) as CSFDCreatorScreening[];
    expect(films[films.length - 1].id).toEqual<number>(1051715);
  });

  test('Year second movie', () => {
    const films = getFilms(filmsNode) as CSFDCreatorScreening[];
    expect(films[1].year).toEqual<number>(2015);
  });
});

// actor

describe('Actor info', () => {
  test('Name', () => {
    const creator = getName(asideNodeActor);
    expect(creator).toEqual<string>('Mads Mikkelsen');
  });

  test('Bio', () => {
    const creator = getBio(asideNodeActor);
    expect(creator).toEqual<string>(
      'Dánský herec, celým jménem Mads Dittmann Mikkelsen, se narodil v roce 1965 v kodaňské čtvrti Østerbro. Dříve než se vrhl na hereckou dráhu, pracoval 8 let jako profesionální tanečník. Herecké vzdělání získal Mikkelsen na herecké škole při divadle v Århusu. Školu zakončil v roce 1996. Co se týká soukromého života je Mads Mikkelsen, který za svůj nejoblíbenější film považuje Taxikáře od Martina Scorseseho, od roku 1987 ženatý s dánskou choreografkou Hanne Jacobsen.…'
    );
  });

  test('Photo', () => {
    const creator = getPhoto(asideNodeActor);
    expect(creator).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w100h132crop/files/images/creator/photos/165/098/165098144_9f239a.jpg'
    );
  });
});

describe('Actor birthday info', () => {
  test('Birthday', () => {
    const creator = getBirthdayInfo(asideNodeActor)?.birthday;
    expect(creator).toEqual<string>('22.11.1965');
  });

  test('Birthplace', () => {
    const creator = getBirthdayInfo(asideNodeActor)?.birthPlace;
    expect(creator).toEqual<string>('Østerbro, København, Dánsko');
  });

  test('Age', () => {
    const creator = getBirthdayInfo(asideNodeActor)?.age;
    expect(creator).toEqual<number>(57);
  });
});

describe("Creator's films", () => {
  test('First film from first section', () => {
    const films = getFilms(filmsNodeActor) as CSFDCreatorScreening[];
    expect(films[0].title).toEqual<string>('Dust Bunny');
  });

  test('Last film from first section', () => {
    const films = getFilms(filmsNodeActor) as CSFDCreatorScreening[];
    expect(films[films.length - 1].id).toEqual<number>(88874);
  });

  test('Year second movie', () => {
    const films = getFilms(filmsNodeActor) as CSFDCreatorScreening[];
    expect(films[1].year).toEqual<number>(2023);
  });
});

// composer

describe('Composer info', () => {
  test('Name', () => {
    const creator = getName(asideNodeComposer);
    expect(creator).toEqual<string>('Sven Mikkelsen');
  });

  test('Bio', () => {
    const creator = getBio(asideNodeComposer);
    expect(creator).toEqual<string>('Tento tvůrce zatím nemá přidanou biografii.');
  });

  test('Photo', () => {
    const creator = getPhoto(asideNodeComposer);
    expect(creator).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
});

describe('Composer birthday info', () => {
  test('Birthday', () => {
    const creator = getBirthdayInfo(asideNodeComposer)?.birthday;
    expect(creator).toEqual<string>('');
  });

  test('Birthplace', () => {
    const creator = getBirthdayInfo(asideNodeComposer)?.birthPlace;
    expect(creator).toEqual<string>('');
  });

  test('Birthplace', () => {
    const creator = getBirthdayInfo(asideNodeComposer)?.age;
    expect(creator).toEqual(null);
  });
});

describe("Creator's films", () => {
  test('First film from first section', () => {
    const films = getFilms(filmsNodeComposer) as CSFDCreatorScreening[];
    expect(films[0].title).toEqual<string>('Spolu');
  });
});
