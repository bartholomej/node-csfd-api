import { csfd } from '../src';
import { fetchPage } from '../src/fetchers';
import { CSFDCreatorScreening } from '../src/interfaces/creator.interface';
import { movieUrl, userRatingsUrl } from '../src/vars';

const badId = 999999999999999;

// User Ratings
describe('Fetch rating page', () => {
  test('Fetch `912-bart` user', async () => {
    const movies = await csfd.userRatings('912-bart');
    expect(movies.map((x) => x.title)).toEqual(expect.arrayContaining(['Palm Springs']));
    expect(movies.length).toEqual(50);
  });
});

describe('Fetch rating page 2', () => {
  test('Fetch `912-bart` user – page 2', async () => {
    const url = userRatingsUrl(912, 2);
    const html = await fetchPage(url);
    expect(html).toContain('Jak Bůh hledal Karla');
  });
});

// Movie
describe('Live: Movie page', () => {
  test('Fetch `10135-forrest-gump` movie', async () => {
    const movie = await csfd.movie(10135);
    expect(movie.title).toEqual<string>('Forrest Gump');
    expect(movie.rating).toBeGreaterThan(90);
    expect(movie.creators.directors[0].name).toEqual('Robert Zemeckis');
    expect(movie.origins[0]).toEqual<string>('USA');
  });
  test('Fetch `71924-kralovstvi` serial years', async () => {
    const movie = await csfd.movie(71924);
    expect(movie.year).toEqual<string>('1994–1997');
    expect(movie.title).toEqual<string>('Království');
  });
});

// Search
describe('Live: Search', () => {
  test('Search matrix', async () => {
    const search = await csfd.search('matrix');
    const matrix = search.movies.find((x) => x.title === 'The Matrix');
    expect(matrix?.year).toEqual<string>('1999');
    expect(matrix?.creators?.directors.map((x) => x.name)).toEqual<string[]>(
      expect.arrayContaining(['Lilly Wachowski'])
    );
  });
});

// Creator
describe('Live: Creator page', () => {
  test('Fetch `2018-jan-werich` creator', async () => {
    const creator = await csfd.creator(2018);
    expect(creator.name).toEqual<string>('Jan Werich');
    expect(creator.birthday).toEqual('06.02.1905');
    expect(creator.birthplace).toEqual('Praha, Čechy, Rakousko-Uhersko');
    expect(creator.films.find((film) => film.title === 'Hej-rup!')).toEqual<CSFDCreatorScreening>({
      id: 3106,
      title: 'Hej-rup!',
      year: 1934,
      colorRating: 'good'
    });
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
