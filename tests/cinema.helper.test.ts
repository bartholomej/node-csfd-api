import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import {
  getCinemaAddress,
  getCinemaColorRating,
  getCinemaCoords,
  getCinemaCsfdUrl,
  getCinemaFilms,
  getCinemaHall,
  getCinemaId,
  getCinemaPhone,
  getCinemaSections,
  getCinemaShowings,
  getCinemaTrending,
  getCinemaUrl,
  getCinemaUrlId,
  getGroupedFilmsByDate,
  parseCinema,
  parseMeta
} from './../src/helpers/cinema.helper';
import { cinemaMock } from './mocks/cinema.html';

const html = parse(cinemaMock);

const contentNode: HTMLElement[] = getCinemaSections(html);

describe('Cinema info', () => {
  test('cinemaId', () => {
    const item = getCinemaId(contentNode[0]);
    expect(item).toEqual<number>(110);
  });

  test('getCinemaColorRating', () => {
    const el = parse('<div class="icon red"></div>').querySelector('div');
    expect(getCinemaColorRating(el)).toEqual('good');
    expect(getCinemaColorRating(null)).toEqual('unknown');
    expect(getCinemaColorRating(parse('<div></div>').querySelector('div'))).toEqual('unknown');
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

  test('cinemaUrl 1', () => {
    const item = getCinemaUrl(contentNode[1]);
    expect(item).toEqual<string>('http://www.cinestar.cz/cz/praha9/domu');
  });

  test('cinemaUrl null', () => {
    expect(getCinemaUrl(null)).toEqual<string>('');
  });

  test('cinemaCoords', () => {
    const item = getCinemaCoords(contentNode[2]);
    expect(item).toEqual({
      lat: 50.1000546,
      lng: 14.4301766
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

  test('getCoords returns null if coordinates are not two parts', () => {
    const el = parse('<div><a href="https://maps.google.cz/maps?q=50.123">Just one part</a></div>');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - latitude is Infinity', () => {
    const el = parse(
      '<div><a href="https://maps.google.cz/maps?q=Infinity,14.4605098">Infinite latitude</a></div>'
    );
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - longitude is Infinity', () => {
    const el = parse(
      '<div><a href="https://maps.google.cz/maps?q=50.0779486,Infinity">Infinite longitude</a></div>'
    );
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - latitude is -Infinity', () => {
    const el = parse(
      '<div><a href="https://maps.google.cz/maps?q=-Infinity,14.4605098">Negative infinite latitude</a></div>'
    );
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - longitude is -Infinity', () => {
    const el = parse(
      '<div><a href="https://maps.google.cz/maps?q=50.0779486,-Infinity">Negative infinite longitude</a></div>'
    );
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - latitude is NaN', () => {
    const el = parse(
      '<div><a href="https://maps.google.cz/maps?q=notanumber,14.4605098">NaN latitude</a></div>'
    );
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if coordinates are not finite - longitude is NaN', () => {
    const el = parse(
      '<div><a href="https://maps.google.cz/maps?q=50.0779486,notanumber">NaN longitude</a></div>'
    );
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if both coordinates are not finite', () => {
    const el = parse(
      '<div><a href="https://maps.google.cz/maps?q=Infinity,NaN">Both invalid</a></div>'
    );
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns null if linkMapsEl exists but has no href attribute', () => {
    const el = parse('<div><a>No href</a></div>');
    expect(getCinemaCoords(el)).toBe(null);
  });

  test('getCoords returns valid coordinates for proper format', () => {
    const el = parse(
      '<div><a href="https://maps.google.cz/maps?q=50.1234567,14.9876543">Valid coordinates</a></div>'
    );
    const result = getCinemaCoords(el);
    expect(result).toEqual({
      lat: 50.1234567,
      lng: 14.9876543
    });
  });

  test('getCoords handles negative coordinates correctly', () => {
    const el = parse(
      '<div><a href="https://maps.google.cz/maps?q=-50.1234567,-14.9876543">Negative coordinates</a></div>'
    );
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
    const item = parseCinema(contentNode[5]);
    expect(item).toEqual({
      city: 'Praha',
      name: 'Cinema City Letňany'
    });
  });

  test('parseCinema keeps the branch', () => {
    expect(parseCinema(contentNode[0])).toEqual({
      city: 'Praha',
      name: 'CineStar Praha - Anděl'
    });
  });

  test('cinemaCsfdUrl', () => {
    expect(getCinemaCsfdUrl(contentNode[2])).toEqual(
      'https://www.csfd.cz/kino/1-praha/79-bio-oko/'
    );
    expect(getCinemaCsfdUrl(null)).toEqual('');
  });

  test('cinemaAddress', () => {
    expect(getCinemaAddress(contentNode[0])).toEqual('Radlická 3179/1e, Praha');
    expect(getCinemaAddress(parse('<section><header></header></section>'))).toBeNull();
    expect(getCinemaAddress(null)).toBeNull();
  });

  test('cinemaPhone', () => {
    expect(getCinemaPhone(contentNode[2])).toEqual('233 382 606');
    expect(getCinemaPhone(contentNode[0])).toBeNull();
    expect(getCinemaPhone(null)).toBeNull();
  });
});

describe('Cinema showings', () => {
  const row = (cells: string) =>
    parse(`<table><tr><td class="name"><h3>Film</h3></td>${cells}</tr></table>`).querySelector(
      'tr'
    );

  test('one showing per time, with its ticket link', () => {
    const showings = getCinemaShowings(
      row(
        '<td class="td-time td-buy-ticket"><a href="https://tickets.cinemacity.cz/order/285022?lang=cs">12:00</a> <span class="br"></span> <a href="https://tickets.cinemacity.cz/order/285072?lang=cs">12:30</a></td>'
      )
    );
    expect(showings).toEqual([
      { time: '12:00', ticketUrl: 'https://tickets.cinemacity.cz/order/285022?lang=cs' },
      { time: '12:30', ticketUrl: 'https://tickets.cinemacity.cz/order/285072?lang=cs' }
    ]);
  });

  test('ticket link with an entity in the query', () => {
    const showings = getCinemaShowings(
      row(
        '<td class="td-time td-buy-ticket"><a href="https://websale.cinestar.cz/?eventid=1792056&amp;site=praha5">18:15</a></td>'
      )
    );
    expect(showings).toEqual([
      { time: '18:15', ticketUrl: 'https://websale.cinestar.cz/?eventid=1792056&site=praha5' }
    ]);
  });

  test('two started showings in one hour column', () => {
    const showings = getCinemaShowings(
      row('<td class="td-time td-time-old"> 11:00 <span class="br"></span> 11:40 </td><td> </td>')
    );
    expect(showings).toEqual([
      { time: '11:00', ticketUrl: null },
      { time: '11:40', ticketUrl: null }
    ]);
  });

  test('showTimes are the plain times of the showings', () => {
    const films = getCinemaFilms(
      '',
      parse(
        '<table class="cinema-table"><tr><td class="name"><h3><a href="/film/1529647-hunger-games/prehled/">Hunger Games</a></h3></td><td class="td-time td-time-old"> 11:00 <span class="br"></span> 11:40 </td><td class="td-time td-buy-ticket"><a href="https://tickets.cinemacity.cz/order/1">20:00</a></td></tr></table>'
      )
    );
    expect(films[0].showTimes).toEqual(['11:00', '11:40', '20:00']);
    expect(films[0].showings[2].ticketUrl).toEqual('https://tickets.cinemacity.cz/order/1');
  });

  test('no showings without a row', () => {
    expect(getCinemaShowings(null)).toEqual([]);
  });

  test('ticket link from the mock', () => {
    const row = contentNode[0].querySelectorAll('.cinema-table tr')[0];
    expect(getCinemaShowings(row)).toEqual([
      {
        time: '18:15',
        ticketUrl:
          'https://websale.cinestar.cz/?eventid=1792056&site=praha5&ref=https%3A%2F%2Fwww.csfd.cz%2Fkino%2F1-praha%2F'
      }
    ]);
  });

  test('two showings on sale in one hour column of the mock', () => {
    const films = getGroupedFilmsByDate(contentNode[6])[0].films;
    const film = films.find((item) => item.title === 'Hunger Games: Úsvit sklizně');
    expect(film?.showTimes).toEqual(expect.arrayContaining(['17:30', '17:50']));
    expect(film?.showings.find((showing) => showing.time === '17:50')?.ticketUrl).toEqual(
      'https://tickets.cinemacity.cz/order/287432?lang=cs'
    );
    expect(film?.showTimes.every((time) => /^\d{1,2}:\d{2}$/.test(time))).toBe(true);
  });

  test('most showings in the mock have a ticket link', () => {
    const showings = contentNode.flatMap((cinema) =>
      getGroupedFilmsByDate(cinema).flatMap((day) => day.films.flatMap((film) => film.showings))
    );
    expect(showings.filter((showing) => showing.ticketUrl).length).toBeGreaterThan(200);
  });
});

describe('Cinema halls', () => {
  test('hall from the mock', () => {
    const rows = contentNode[0].querySelectorAll('.cinema-table tr');
    const hall = rows.map((row) => getCinemaHall(row)).find(Boolean);
    expect(hall).toEqual({ type: 'csfd', name: 'ČSFD Sál' });
  });

  test('hall type and name', () => {
    const el = parse(
      '<tr><td class="name with-icon"><h3>Film</h3> <span class="cinema-icon tooltip cinema-icon-4dx" data-tippy-content="4DX sál">4DX sál</span></td></tr>'
    ).querySelector('tr');
    expect(getCinemaHall(el)).toEqual({ type: '4dx', name: '4DX sál' });
  });

  test('regular hall', () => {
    const el = parse('<tr><td class="name"><h3>Film</h3></td></tr>').querySelector('tr');
    expect(getCinemaHall(el)).toBeNull();
    expect(getCinemaHall(null)).toBeNull();
  });
});

describe('Cinema trending', () => {
  const trending = getCinemaTrending(html);

  test('ten films in order', () => {
    expect(trending).toHaveLength(10);
    expect(trending.map((film) => film.position)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('first film', () => {
    expect(trending[0]).toEqual({
      position: 1,
      id: 1529647,
      title: 'Hunger Games: Úsvit sklizně',
      url: 'https://www.csfd.cz/film/1529647-hunger-games-usvit-sklizne/prehled/',
      poster:
        'https://image.pmgstatic.com/cache/resized/w1080/files/images/film/posters/171/825/171825358_j875p8.jpg'
    });
  });

  test('no box, no films', () => {
    expect(getCinemaTrending(parse('<div></div>'))).toEqual([]);
  });
});

describe('Cinema films by date', () => {
  test('getGroupedFilmsByDate. First movie in second cinema', () => {
    const item = getGroupedFilmsByDate(contentNode[1]);
    expect(item[0]?.date).toEqual('neděle 22.11.2026');
    expect(item[0]?.films[0].title).toEqual('Ebenezer: Vánoční koleda');
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
      expect(films[0]).toHaveProperty('showings');
      expect(films[0]).toHaveProperty('hall');
      expect(films[0]).toHaveProperty('meta');
    }
  });

  test('getCinemaFilms without url', () => {
    const table = parse(
      '<table class="cinema-table"><tr><td class="name"><h3>No link</h3></td></tr></table>'
    );
    const films = getCinemaFilms('', table);
    expect(films[0].id).toBeNull();
  });

  test('getSubtitles', () => {
    const filmNode = contentNode[0].querySelectorAll('.cinema-table tr');
    const meta = filmNode[0].querySelector('.td-title span')?.text.trim();
    expect(meta).toEqual('T');
  });

  test('getGroupedFilmsByDate handles missing date', () => {
    // mock DOM with screening but empty text or no firstChild
    const html = `<div class="box-content"></div> <div></div>`;
    const screenings = getGroupedFilmsByDate(parse(html));
    expect(screenings[0].date).toBe(null);
  });
});

describe('parseMeta', () => {
  test('parseMeta converts T and D', () => {
    expect(parseMeta(['T', 'D', 'X'])).toEqual(['subtitles', 'dubbing', 'X']);
  });
  test('parseMeta reads dubbing in 3D, where a comma follows D', () => {
    expect(parseMeta(['D,', '3D'])).toEqual(['dubbing', '3D']);
  });
  test('parseMeta empty array', () => {
    expect(parseMeta([])).toEqual([]);
  });
});
