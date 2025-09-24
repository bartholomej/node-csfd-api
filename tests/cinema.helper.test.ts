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

  test('getCoords returns null if element is null', () => {
    expect(getCinemaCoords(null)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - latitude is Infinity', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=Infinity,14.4605098">Infinite latitude</a></div>');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - longitude is Infinity', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=50.0779486,Infinity">Infinite longitude</a></div>');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - latitude is -Infinity', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=-Infinity,14.4605098">Negative infinite latitude</a></div>');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - longitude is -Infinity', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=50.0779486,-Infinity">Negative infinite longitude</a></div>');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - latitude is NaN', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=notanumber,14.4605098">NaN latitude</a></div>');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - longitude is NaN', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=50.0779486,notanumber">NaN longitude</a></div>');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if both coordinates are not finite', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=Infinity,NaN">Both invalid</a></div>');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if linkMapsEl exists but has no href attribute', () => {
    const el = parse('<div><a>No href</a></div>');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns valid coordinates for proper format', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=50.1234567,14.9876543">Valid coordinates</a></div>');
    const result = getCinemaCoords(el);
    expect(result).toEqual({
      lat: 50.1234567,
      lng: 14.9876543
    });
  });

  test('getCoords handles negative coordinates correctly', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=-50.1234567,-14.9876543">Negative coordinates</a></div>');
    const result = getCinemaCoords(el);
    expect(result).toEqual({
      lat: -50.1234567,
      lng: -14.9876543
    });
  });

  test('getCoords handles zero coordinates correctly', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=0,0">Zero coordinates</a></div>');
    const result = getCinemaCoords(el);
    expect(result).toEqual({
      lat: 0,
      lng: 0
    });
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
    expect(item[0]?.date).toEqual('pondělí 13.10.2025');
    expect(item[0]?.films[0].title).toEqual('Cizinci: Kapitola 2');
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
