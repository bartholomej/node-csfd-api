import { beforeAll, describe, expect, test } from 'vitest';
import { csfd } from '../src';
import { CSFDCinema } from '../src/dto/cinema';
import { CSFDCreatorScreening } from '../src/dto/creator';
import { CSFDColorRating, CSFDFilmTypes } from '../src/dto/global';
import { fetchPage } from '../src/fetchers';
import { movieUrl, userRatingsUrl } from '../src/vars';
const badId = 999999999999999;

// User Ratings
describe('Live: Fetch rating page', () => {
  test('Fetch `912-bart` user and check some movie', async () => {
    const MOVIE_NAME = 'Návštěvník';

    const movies = await csfd.userRatings('912-bart');
    const movieSelected = movies.filter((x) => x.title === MOVIE_NAME)[0];
    expect(movies.map((x) => x.title)).toEqual(expect.arrayContaining([MOVIE_NAME]));
    expect(movieSelected?.year).toEqual<number>(2025);
    expect(movieSelected?.type).toEqual<CSFDFilmTypes>('film');
    expect(movieSelected?.userDate).toContain<string>('2025');
    expect(movies.length).toEqual(50);
  });
});

describe('Fetch rating page 2', () => {
  test('Fetch `912-bart` user – page 2 and check html', async () => {
    const url = userRatingsUrl(912, 2);
    const html = await fetchPage(url);
    expect(html).toContain('Můj soused Totoro');
  });
});

// Movie
describe('Live: Movie page', () => {
  test('Fetch `10135-forrest-gump` movie', async () => {
    const movie = await csfd.movie(10135);
    expect(movie.title).toEqual<string>('Forrest Gump');
    expect(movie.rating).toBeGreaterThan(90);
    expect(movie.ratingCount).toBeGreaterThan(100000);
    // More than 10 words in description
    expect(movie.descriptions[0].split(' ').length).toBeGreaterThan(10);
    expect(movie.tags.length).toBeGreaterThan(3);
    expect(movie.year).toEqual(1994);
    expect(movie.type).toEqual<CSFDFilmTypes>('film');
    expect(movie.duration).toBeGreaterThan(140);
    expect(movie.premieres.length).toBeGreaterThan(1);
    expect(movie.colorRating).toEqual<CSFDColorRating>('good');
    expect(movie.creators.directors[0]?.name).toEqual('Robert Zemeckis');
    expect(movie.origins[0]).toEqual<string>('USA');
  });
  test('Fetch `71924-kralovstvi` serial years', async () => {
    const movie = await csfd.movie(71924);
    expect(movie.year).toEqual<number>(1994);
    expect(movie.title).toEqual<string>('Království');
  });
  test('Fetch not number', async () => {
    await expect(csfd.movie('test' as any)).rejects.toThrow(Error);
  });
});

// Search
describe('Live: Search', () => {
  test('Search matrix', async () => {
    const search = await csfd.search('matrix');
    const matrix = search.movies.find((x) => x.title === 'Matrix');
    expect(matrix?.year).toEqual<number>(1999);
    expect(matrix?.creators?.directors.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Lilly Wachowski'])
    );
  });
});

// Search
describe('Live: Cinemas', () => {
  let cinemas: CSFDCinema[]
  beforeAll(async () => {
    cinemas = await csfd.cinema(1, 'today');
  });
  test('Check city', async () => {
    const pragueCinemas = cinemas.filter((x) => x.city.includes('Praha'));
    expect(pragueCinemas.length).toBeGreaterThan(0);
  });
  test('Check screenings', async () => {
    const screenings = cinemas[0].screenings;
    expect(screenings.length).toBeGreaterThan(0);
  });
  test('Check screenings', async () => {
    const film = cinemas[0].screenings[0].films[0];
    expect(film.id).toBeDefined();
    expect(film.meta).toBeDefined();
    expect(film.title).toBeDefined();
    expect(film.url).toContain('/film/');
  });
  test('Check showtimes', async () => {
    const film = cinemas[0].screenings[0].films[1].showTimes[0];
    expect(film).toBeDefined();
  });
});

// Creator    
describe('Live: Creator page', () => {
  test('Fetch `2018-jan-werich` creator', async () => {
    const creator = await csfd.creator(2018);
    expect(creator.name).toEqual<string>('Jan Werich');
    expect(creator.birthday).toEqual('06.02.1905');
    expect(creator.birthplace).toContain('Rakousko-Uhersko');
    expect(creator.birthplace).toContain('Praha');
    expect(creator.films.find((film) => film.title === 'Hej-rup!')).toEqual<CSFDCreatorScreening>({
      id: 3106,
      title: 'Hej-rup!',
      year: 1934,
      colorRating: 'good'
    });
  });
  test('Fetch not number', async () => {
    await expect(csfd.creator('test' as any)).rejects.toThrow(Error);
  });
});

// Edge cases
describe('User page 404', () => {
  test('Fetch error URL', async () => {
    try {
      const url = userRatingsUrl(badId);
      const html = await fetchPage(url);
      expect(html).toBe('Error');
    } catch (e) {
      expect(e).toContain(Error);
    }
  });
});

describe('Movie page 404', () => {
  test('Fetch error URL', async () => {
    try {
      const url = movieUrl(badId);
      const html = await fetchPage(url);
      expect(html).toBe('Error');
    } catch (e) {
      expect(e).toThrow(Error);
    }
  });
});
