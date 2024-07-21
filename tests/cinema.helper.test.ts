import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';

import {
  getCinemaId,
  getCinemaUrl,
  getCoords,
  getGroupedFilmsByDate,
  parseCinema
} from './../src/helpers/cinema.helper';
import { cinemaMock } from './mocks/cinema.html';

const html = parse(cinemaMock);

const contentNode: HTMLElement[] = html.querySelectorAll('#snippet--cinemas section.box');

describe('Cinema info', () => {
  test('cinemaId', () => {
    const item = getCinemaId(contentNode[0]);
    expect(item).toEqual<number>(110);
  });

  test('cinemaUrl 0', () => {
    const item = getCinemaUrl(contentNode[0]);
    expect(item).toEqual<string>('http://www.cinestar.cz/cz/praha5/domu');
  });

  test('cinemaUrl 2', () => {
    const item = getCinemaUrl(contentNode[2]);
    expect(item).toEqual<string>('');
  });

  test('cinemaCoords', () => {
    const item = getCoords(contentNode[2]);
    expect(item).toEqual({
      lat: 50.1000546,
      lng: 14.4301766
    });
  });

  test('parseCinema', () => {
    const item = parseCinema(contentNode[2]);
    expect(item).toEqual({
      city: 'Praha',
      name: 'Bio Oko'
    });
  });
});

describe('Cinema films by date', () => {
  test('getGroupedFilmsByDate', () => {
    const item = getGroupedFilmsByDate(contentNode[2]);
    expect(item[0]?.date).toEqual('sobota 13.01.2024');
    expect(item[0]?.films[0].title).toEqual('Cesta do fantazie');
  });

  test('getFilms', () => {
    const filmNode = contentNode[0].querySelectorAll('.cinema-table tr');

    console.log('aas', filmNode[0].querySelectorAll('.td-title span'));
    const meta = filmNode[0].querySelectorAll('.td-title span')?.map((x) => x.text.trim());
    expect(meta).toEqual({
      city: 'Praha',
      name: 'Bio Oko'
    });
  });
});
