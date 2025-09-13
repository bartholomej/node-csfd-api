import { parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import {
  getCreatorBio,
  getCreatorBirthdayInfo,
  getCreatorFilms,
  getCreatorName,
  getCreatorPhoto
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
    const creator = getCreatorName(asideNode);
    expect(creator).toEqual<string>('Quentin Tarantino');
  });

  test('Bio', () => {
    const creator = getCreatorBio(asideNode);
    expect(creator).toEqual<string>(
      'Narodil se teprve šestnáctileté Connii McHugh, která mu dala křestní jméno podle své oblíbené postavy Quinta ze seriálu Gunsmoke. Jeho biologickým otcem byl jistý Tony Tarantino, který rodinu opustil když byl Quentin ještě malinký a nikdy o syna nejevil zájem (přesněji řečeno jen do doby, než se potomek stal slavným – pak se na jeho úspěchu pokoušel parazitovat). Jeho náhradním tatínkem se stal hudebník s československými kořeny, který si Connii vzal a Quentina…'
    );
  });

  test('Photo', () => {
    const creator = getCreatorPhoto(asideNode);
    expect(creator).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w100h132crop/files/images/creator/photos/164/515/164515525_b98f8a.jpg'
    );
  });
});

describe('Creator birthday info', () => {
  test('Birthday', () => {
    const creator = getCreatorBirthdayInfo(asideNode)?.birthday;
    expect(creator).toEqual<string>('27.03.1963');
  });

  test('Birthplace', () => {
    const creator = getCreatorBirthdayInfo(asideNode)?.birthPlace;
    expect(creator).toEqual<string>('Knoxville, Tennessee, USA');
  });

  test('Age', () => {
    const creator = getCreatorBirthdayInfo(asideNode)?.age;
    expect(creator).toEqual<number>(61);
  });
});

describe("Creator's films", () => {
  test('First film from first section', () => {
    const films = getCreatorFilms(filmsNode) as CSFDCreatorScreening[];
    expect(films[0].title).toEqual<string>('The Movie Critic');
  });

  test('Last film from first section', () => {
    const films = getCreatorFilms(filmsNode) as CSFDCreatorScreening[];
    expect(films[films.length - 1].id).toEqual<number>(1051715);
  });

  test('Year second movie', () => {
    const films = getCreatorFilms(filmsNode) as CSFDCreatorScreening[];
    expect(films[1].year).toEqual<number>(2019);
  });
});

// actor

describe('Actor info', () => {
  test('Name', () => {
    const creator = getCreatorName(asideNodeActor);
    expect(creator).toEqual<string>('Mads Mikkelsen');
  });

  test('Bio', () => {
    const creator = getCreatorBio(asideNodeActor);
    expect(creator).toEqual<string>(
      'Dánský herec, celým jménem Mads Dittmann Mikkelsen, se narodil v roce 1965 v kodaňské čtvrti Østerbro. Dříve než se vrhl na hereckou dráhu, pracoval 8 let jako profesionální tanečník. Herecké vzdělání získal Mikkelsen na herecké škole při divadle v Århusu. Školu zakončil v roce 1996. Co se týká soukromého života je Mads Mikkelsen, který za svůj nejoblíbenější film považuje Taxikáře od Martina Scorseseho, od roku 1987 ženatý s dánskou choreografkou Hanne Jacobsen.…'
    );
  });

  test('Photo', () => {
    const creator = getCreatorPhoto(asideNodeActor);
    expect(creator).toEqual<string>(
      'https://image.pmgstatic.com/cache/resized/w100h132crop/files/images/creator/photos/166/233/166233274_298dbd.jpg'
    );
  });
});

describe('Actor birthday info', () => {
  test('Birthday', () => {
    const creator = getCreatorBirthdayInfo(asideNodeActor)?.birthday;
    expect(creator).toEqual<string>('22.11.1965');
  });

  test('Birthplace', () => {
    const creator = getCreatorBirthdayInfo(asideNodeActor)?.birthPlace;
    expect(creator).toEqual<string>('Østerbro, København, Dánsko');
  });

  test('Age', () => {
    const creator = getCreatorBirthdayInfo(asideNodeActor)?.age;
    expect(creator).toEqual<number>(58);
  });
});

describe("Creator's films", () => {
  test('First film from first section', () => {
    const films = getCreatorFilms(filmsNodeActor) as CSFDCreatorScreening[];
    expect(films[0].title).toEqual<string>('The Billion Dollar Spy');
  });

  test('Last film from first section', () => {
    const films = getCreatorFilms(filmsNodeActor) as CSFDCreatorScreening[];
    expect(films[films.length - 1].id).toEqual<number>(88874);
  });

  test('Year second movie', () => {
    const films = getCreatorFilms(filmsNodeActor) as CSFDCreatorScreening[];
    expect(films[1].year).toEqual<number>(2025);
  });
});

// composer

describe('Composer info', () => {
  test('Name', () => {
    const creator = getCreatorName(asideNodeComposer);
    expect(creator).toEqual<string>('Sven Mikkelsen');
  });

  test('Bio', () => {
    const creator = getCreatorBio(asideNodeComposer);
    expect(creator).toEqual<string>(null as any);
  });

  test('Photo', () => {
    const creator = getCreatorPhoto(asideNodeComposer);
    expect(creator).toEqual<string>(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });
});

describe('Composer birthday info', () => {
  test('Birthday', () => {
    const creator = getCreatorBirthdayInfo(asideNodeComposer)?.birthday;
    expect(creator).toEqual<string>('');
  });

  test('Birthplace', () => {
    const creator = getCreatorBirthdayInfo(asideNodeComposer)?.birthPlace;
    expect(creator).toEqual<string>('');
  });

  test('Birthplace', () => {
    const creator = getCreatorBirthdayInfo(asideNodeComposer)?.age;
    expect(creator).toEqual(null);
  });
});

describe("Creator's films", () => {
  test('First film from first section', () => {
    const films = getCreatorFilms(filmsNodeComposer) as CSFDCreatorScreening[];
    expect(films[0].title).toEqual<string>('Spolu');
  });
});
