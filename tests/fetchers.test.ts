import { beforeAll, describe, expect, test } from 'vitest';
import { csfd } from '../src';
import { CSFDCinema } from '../src/dto/cinema';
import { CSFDCreatorScreening } from '../src/dto/creator';
import { CSFDColorRating, CSFDFilmTypes } from '../src/dto/global';
import { CSFDMovie } from '../src/dto/movie';
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
describe('Live: Movie page. Fetch `10135-forrest-gump`', () => {
  let movie: CSFDMovie = {} as CSFDMovie;
  beforeAll(async () => {
    movie = await csfd.movie(10135);
  });
  test('Title', () => {
    expect(movie.title).toEqual<string>('Forrest Gump');
  });
  test('Rating', () => {
    expect(movie.rating).toBeGreaterThan(90);
  });
  test('Rating count', () => {
    expect(movie.ratingCount).toBeGreaterThan(100000);
  });
  test('Poster', () => {
    expect(movie.poster).toContain('.jpg');
  });
  test('Photo', () => {
    expect(movie.photo).toContain('.jpg');
  });
  test('Descriptions', () => {
    expect(movie.descriptions[0].split(' ').length).toBeGreaterThan(10);
  });
  test('Trivia', () => {
    expect(movie.trivia.length).toBeGreaterThan(2);
  });
  test('Genres', () => {
    expect(movie.genres.length).toBeGreaterThan(2);
  });
  test('Tags', () => {
    expect(movie.tags.length).toBeGreaterThan(3);
  });
  test('Year', () => {
    expect(movie.year).toEqual(1994);
  });
  test('Type', () => {
    expect(movie.type).toEqual<CSFDFilmTypes>('film');
  });
  test('Duration', () => {
    expect(movie.duration).toBeGreaterThan(140);
  });
  test('Premieres', () => {
    expect(movie.premieres.length).toBeGreaterThan(1);
  });
  test('Color Rating', () => {
    expect(movie.colorRating).toEqual<CSFDColorRating>('good');
  });
  test('Directors', () => {
    expect(movie.creators.directors[0]?.name).toEqual('Robert Zemeckis');
  });
  test('Origins', () => {
    expect(movie.origins[0]).toEqual<string>('USA');
  });
  test('VODs', () => {
    expect(movie.vod.length).toBeGreaterThan(0);
  });
  test('Related movies', () => {
    expect(movie.related.length).toBeGreaterThan(0);
  });
  test('Similar movies', () => {
    expect(movie.similar.length).toBeGreaterThan(0);
  });
  test('Other titles', () => {
    expect(movie.titlesOther.length).toBeGreaterThan(2);
  });
  test('Creators: Actors', () => {
    expect(movie.creators.actors.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Tom Hanks', 'Robin Wright'])
    );
  });
  test('Creators: Writers', () => {
    expect(movie.creators.writers.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Eric Roth'])
    );
  });
  test('Creators: Music', () => {
    expect(movie.creators.music.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Alan Silvestri'])
    );
  });
  test('Creators: Cinematography', () => {
    expect(movie.creators.cinematography.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Don Burgess'])
    );
  });
  test('Creators: Based On', () => {
    expect(movie.creators.basedOn.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Winston Groom'])
    );
  });
  test('Creators: Producers', () => {
    expect(movie.creators.producers.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Wendy Finerman'])
    );
  });
  test('Creators: Film Editing', () => {
    expect(movie.creators.filmEditing.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Arthur Schmidt'])
    );
  });
  test('Creators: Costume Design', () => {
    expect(movie.creators.costumeDesign.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Joanna Johnston'])
    );
  });
  test('Creators: Production Design', () => {
    expect(movie.creators.productionDesign.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Rick Carter'])
    );
  });
  test('Creators: No empty groups', () => {
    const creators = movie.creators;
    for (const key in creators) {
      const group = creators[key as keyof typeof creators];
      expect(group).toBeDefined();
      expect(group.length).toBeGreaterThan(0);
    }
  });
});

describe('Live: Tv series', () => {
  let movie: CSFDMovie = {} as CSFDMovie;
  beforeAll(async () => {
    movie = await csfd.movie(71924);
  });
  test('Year', () => {
    expect(movie.year).toEqual<number>(1994);
  });
  test('Type', () => {
    expect(movie.type).toEqual<CSFDFilmTypes>('seriál');
  });
  test('Title', () => {
    expect(movie.title).toEqual<string>('Království');
  });
  test('Duration', () => {
    expect(movie.duration).toBeGreaterThan(50);
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
