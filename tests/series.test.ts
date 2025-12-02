import { parse } from 'node-html-parser';
import { beforeAll, describe, expect, test } from 'vitest';
import { CSFDMovie } from '../src/dto/movie';
import { MovieScraper } from '../src/services/movie.service';
import { serie1Season1EpisodeMock } from './mocks/series1-season1-episode.mock';
import { serie1Season1Mock } from './mocks/series1-season1.mock';
import { serie1SeasonsMock } from './mocks/series1-seasons.mock';
import { serie2EpisodesMock } from './mocks/series2-episodes.mock';

/**
 * Helper function to parse mock HTML into CSFDMovie object
 */
function parseMovieMock(mockHtml: string, movieId: number): CSFDMovie {
  const movieHtml = parse(mockHtml);
  const pageClasses = movieHtml.querySelector('.page-content')?.classNames.split(' ') || [];
  const asideNode = movieHtml.querySelector('.aside-movie-profile');
  const movieNode = movieHtml.querySelector('.main-movie-profile');
  const jsonLd = movieHtml.querySelector('script[type="application/ld+json"]')?.innerText || '{}';

  if (!asideNode || !movieNode) {
    throw new Error('Invalid mock HTML structure');
  }

  const scraper = new MovieScraper();
  // Access the private buildMovie method via reflection
  return (scraper as any).buildMovie(movieId, movieNode, asideNode, pageClasses, jsonLd, {});
}

/**
 * Series Pattern 1: Series with Seasons
 * Structure: Series -> Seasons -> Episodes
 * Example: The Simpsons (72489)
 * - Main page shows seasons overview
 * - Season page shows episodes list
 * - Episode page shows individual episode details
 */
describe('Series Pattern 1: Series with Seasons (The Simpsons)', () => {
  describe('Main Series Page - Seasons Overview', () => {
    let movie: CSFDMovie;

    beforeAll(() => {
      movie = parseMovieMock(serie1SeasonsMock, 72489);
    });

    test('Should have correct title', () => {
      expect(movie.title).toBe('Simpsonovi');
    });

    test('Should be type "seriál"', () => {
      expect(movie.type).toBe('seriál');
    });

    test('Should have year range', () => {
      expect(movie.year).toBe(1989);
    });

    test('Should have seasons list', () => {
      expect(movie.seasons).toBeDefined();
      expect(movie.seasons).not.toBeNull();
      expect(movie.seasons!.length).toBeGreaterThan(0);
    });

    test('Should NOT have episodes on main page', () => {
      expect(movie.episodes).toBeNull();
    });

    test('Should have correct season structure', () => {
      const firstSeason = movie.seasons![0];
      expect(firstSeason).toHaveProperty('id');
      expect(firstSeason).toHaveProperty('name');
      expect(firstSeason).toHaveProperty('url');
      expect(firstSeason).toHaveProperty('info');
    });

    test('Should have rating', () => {
      expect(movie.rating).toBeGreaterThan(90);
    });

    test('Should have creators', () => {
      expect(movie.creators.directors.length).toBeGreaterThan(0);
      expect(movie.creators.actors.length).toBeGreaterThan(0);
    });

    test('Should have genres', () => {
      expect(movie.genres).toContain('Animovaný');
      expect(movie.genres).toContain('Komedie');
    });

    test('Should NOT have parent (it is the main series)', () => {
      expect(movie.parent).toBeNull();
    });

    test('Should NOT have episodeCode', () => {
      expect(movie.episodeCode).toBeNull();
    });

    test('Should NOT have seasonName', () => {
      expect(movie.seasonName).toBeNull();
    });
  });

  describe('Season Page - Episodes List', () => {
    let movie: CSFDMovie;

    beforeAll(() => {
      movie = parseMovieMock(serie1Season1Mock, 474212);
    });

    test('Should have correct title with season', () => {
      expect(movie.title).toBe('Simpsonovi');
    });

    test('Should have seasonName', () => {
      expect(movie.seasonName).toBe('Série 1');
    });

    test('Should be type "série"', () => {
      expect(movie.type).toBe('série');
    });

    test('Should have episodes list', () => {
      expect(movie.episodes).toBeDefined();
      expect(movie.episodes).not.toBeNull();
      expect(movie.episodes!.length).toBeGreaterThan(0);
    });

    test('Should have correct episode structure', () => {
      const firstEpisode = movie.episodes![0];
      expect(firstEpisode).toHaveProperty('id');
      expect(firstEpisode).toHaveProperty('name');
      expect(firstEpisode).toHaveProperty('url');
      expect(firstEpisode.name).toContain('Vánoce u Simpsonových');
    });

    test('Should have parent series info', () => {
      expect(movie.parent).toBeDefined();
      expect(movie.parent).not.toBeNull();
      expect(movie.parent!.series).toBeDefined();
      expect(movie.parent!.series.id).toBe(474212);
      expect(movie.parent!.series.name).toBe('Simpsonovi');
      // Season page doesn't have a parent season, only parent series
      expect(movie.parent!.season).toBeNull();
    });

    test('Should NOT have seasons on season page', () => {
      expect(movie.seasons).toBeNull();
    });

    test('Should have rating', () => {
      expect(movie.rating).toBeGreaterThan(85);
    });

    test('Should have year', () => {
      expect(movie.year).toBe(1989);
    });
  });

  describe('Episode Page - Individual Episode', () => {
    let movie: CSFDMovie;

    beforeAll(() => {
      movie = parseMovieMock(serie1Season1EpisodeMock, 474220);
    });

    test('Should have correct title', () => {
      expect(movie.title).toBe('Mluvící hlava');
    });

    test('Should be type "epizoda"', () => {
      expect(movie.type).toBe('epizoda');
    });

    test('Should have episodeCode', () => {
      expect(movie.episodeCode).toBe('S01E08');
    });

    test('Should have parent with both series and season', () => {
      expect(movie.parent).toBeDefined();
      expect(movie.parent).not.toBeNull();

      // Series info
      expect(movie.parent!.series).toBeDefined();
      expect(movie.parent!.series.id).toBe(72489);
      expect(movie.parent!.series.name).toBe('Simpsonovi');

      // Season info
      expect(movie.parent!.season).toBeDefined();
      expect(movie.parent!.season.id).toBe(474212);
      expect(movie.parent!.season.name).toBe('Série 1');
    });

    test('Should have rating', () => {
      expect(movie.rating).toBeGreaterThan(80);
    });

    test('Should have year', () => {
      expect(movie.year).toBe(1990);
    });

    test('Should have duration', () => {
      expect(movie.duration).toBe(22);
    });

    test('Should have creators', () => {
      expect(movie.creators.directors.length).toBeGreaterThan(0);
      expect(movie.creators.actors.length).toBeGreaterThan(0);
    });

    test('Should NOT have seasons', () => {
      expect(movie.seasons).toBeNull();
    });

    test('Should NOT have episodes', () => {
      expect(movie.episodes).toBeNull();
    });

    test('Should have descriptions', () => {
      expect(movie.descriptions.length).toBeGreaterThan(0);
      expect(movie.descriptions[0]).toContain('Bart');
    });
  });
});

/**
 * Series Pattern 2: Series with Direct Episodes
 * Structure: Series -> Episodes (no season grouping)
 * Example: The Curse (1431651)
 * - Main page shows episodes directly
 * - No intermediate season pages
 */
describe('Series Pattern 2: Series with Direct Episodes (The Curse)', () => {
  let movie: CSFDMovie;

  beforeAll(() => {
    movie = parseMovieMock(serie2EpisodesMock, 1431651);
  });

  test('Should have correct title', () => {
    expect(movie.title).toBe('The Curse');
  });

  test('Should be type "seriál"', () => {
    expect(movie.type).toBe('seriál');
  });

  test('Should have year', () => {
    expect(movie.year).toBe(2023);
  });

  test('Should have episodes list directly', () => {
    expect(movie.episodes).toBeDefined();
    expect(movie.episodes).not.toBeNull();
    expect(movie.episodes!.length).toBeGreaterThan(0);
  });

  test('Should have correct episode structure', () => {
    const firstEpisode = movie.episodes![0];
    expect(firstEpisode).toHaveProperty('id');
    expect(firstEpisode).toHaveProperty('name');
    expect(firstEpisode).toHaveProperty('url');
    expect(firstEpisode.name).toContain('Kouzelná země');
  });

  test('Should NOT have seasons', () => {
    expect(movie.seasons).toBeNull();
  });

  test('Should NOT have parent (it is the main series)', () => {
    expect(movie.parent).toBeNull();
  });

  test('Should NOT have episodeCode', () => {
    expect(movie.episodeCode).toBeNull();
  });

  test('Should NOT have seasonName', () => {
    expect(movie.seasonName).toBeNull();
  });

  test('Should have rating', () => {
    expect(movie.rating).toBeGreaterThan(60);
  });

  test('Should have creators', () => {
    expect(movie.creators.directors.length).toBeGreaterThan(0);
    expect(movie.creators.actors.length).toBeGreaterThan(0);
  });

  test('Should have genres', () => {
    expect(movie.genres).toContain('Komedie');
    expect(movie.genres).toContain('Drama');
  });

  test('Should have VOD services', () => {
    expect(movie.vod.length).toBeGreaterThan(0);
  });

  test('Should have descriptions', () => {
    expect(movie.descriptions.length).toBeGreaterThan(0);
  });

  test('Episode info should include episode code', () => {
    const episodes = movie.episodes!;
    const firstEpisode = episodes[0];

    // Check if info contains episode code pattern
    if (firstEpisode.info) {
      expect(firstEpisode.info).toMatch(/E\d+/);
    }
  });
});

/**
 * Cross-pattern validation tests
 */
describe('Series Patterns - Common Validations', () => {
  test('All series should have valid IDs', () => {
    const series1 = parseMovieMock(serie1SeasonsMock, 72489);
    const series2 = parseMovieMock(serie2EpisodesMock, 1431651);

    expect(series1.id).toBeGreaterThan(0);
    expect(series2.id).toBeGreaterThan(0);
  });

  test('All series should have valid URLs', () => {
    const series1 = parseMovieMock(serie1SeasonsMock, 72489);
    const series2 = parseMovieMock(serie2EpisodesMock, 1431651);

    expect(series1.url).toContain('/film/');
    expect(series2.url).toContain('/film/');
  });

  test('Series with seasons should have mutually exclusive seasons/episodes', () => {
    const mainSeries = parseMovieMock(serie1SeasonsMock, 72489);
    const seasonPage = parseMovieMock(serie1Season1Mock, 474212);

    // Main series page should have seasons, not episodes
    expect(mainSeries.seasons).not.toBeNull();
    expect(mainSeries.episodes).toBeNull();

    // Season page should have episodes, not seasons
    expect(seasonPage.episodes).not.toBeNull();
    expect(seasonPage.seasons).toBeNull();
  });

  test('Episode should have parent references', () => {
    const episode = parseMovieMock(serie1Season1EpisodeMock, 474220);

    expect(episode.parent).not.toBeNull();
    expect(episode.parent!.series).toBeDefined();
    expect(episode.parent!.season).toBeDefined();
    expect(episode.episodeCode).not.toBeNull();
  });

  test('Series without seasons should have episodes directly', () => {
    const series = parseMovieMock(serie2EpisodesMock, 1431651);

    expect(series.episodes).not.toBeNull();
    expect(series.seasons).toBeNull();
    expect(series.type).toBe('seriál');
  });
});
