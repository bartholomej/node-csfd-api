import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import {
  getCinemaCoords,
  getCinemaFilms,
  getCinemaId,
  getCinemaUrl,
  getCinemaUrlId,
  getGroupedFilmsByDate,
  parseCinema,
  parseMeta
} from './../src/helpers/cinema.helper';
import { cinemaMock } from './mocks/cinema.html';

const html = parse(cinemaMock);

const contentNode: HTMLElement[] = html.querySelectorAll('#snippet--cinemas section.box');

describe('Cinema info', () => {
  test('cinemaId', () => {
    const item = getCinemaId(contentNode[0]);
    expect(item).toEqual<number>(110);
  });

  test('getId returns correct id from url', () => {
    // /film/456 should return 456
    expect(getCinemaUrlId('/film/456')).toBe(456);
  });

  test('getId returns null for empty string', () => {
    expect(getCinemaUrlId('')).toBeNull();
  });

  test('cinemaUrl 0', () => {
    const item = getCinemaUrl(contentNode[0]);
    expect(item).toEqual<string>('http://www.cinestar.cz/cz/praha5/domu');
  });

  test('cinemaUrl 2', () => {
    const item = getCinemaUrl(contentNode[2]);
    expect(item).toEqual<string>('http://www.cinemacity.cz');
  });

  test('cinemaCoords', () => {
    const item = getCinemaCoords(contentNode[2]);
    expect(item).toEqual({
      lat: 50.0779486,
      lng: 14.4605098
    });
  });

  test('getCoords returns null if no linkMapsEl', () => {
    // create html element without map link to test the null return
    const el = new HTMLElement('section', {}, '');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('parseCinema', () => {
    const item = parseCinema(contentNode[10]);
    expect(item).toEqual({
      city: 'Praha',
      name: 'Kino Aero'
    });
  });
});

describe('Cinema films by date', () => {
  test('getGroupedFilmsByDate', () => {
    const item = getGroupedFilmsByDate(contentNode[2]);
    expect(item[0]?.date).toEqual('čtvrtek 04.09.2025');
    expect(item[0]?.films[0].title).toEqual('13 dní, 13 nocí');
  });

  test('getFilms returns correct film data', () => {
    const table = contentNode[2].querySelector('.cinema-table');
    const films = getCinemaFilms('', table);
    expect(Array.isArray(films)).toBe(true);
    if (films.length > 0) {
      expect(films[0]).toHaveProperty('id');
      expect(films[0]).toHaveProperty('title');
      expect(films[0]).toHaveProperty('url');
      expect(films[0]).toHaveProperty('colorRating');
      expect(films[0]).toHaveProperty('showTimes');
      expect(films[0]).toHaveProperty('meta');
    }
  });

  test('getSubtitles', () => {
    const filmNode = contentNode[0].querySelectorAll('.cinema-table tr');
    const meta = filmNode[0].querySelector('.td-title span')?.text.trim();
    expect(meta).toEqual('T');
  });
});

describe('parseMeta', () => {
  test('parseMeta converts T and D', () => {
    expect(parseMeta(['T', 'D', 'X'])).toEqual(['subtitles', 'dubbing', 'X']);
  });
  test('parseMeta empty array', () => {
    expect(parseMeta([])).toEqual([]);
  });
});
