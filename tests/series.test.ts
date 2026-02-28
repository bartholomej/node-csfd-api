import { HTMLElement, parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import { MovieJsonLd } from '../src/dto/movie';
import {
  getEpisodeCode,
  getMovieCreators,
  getMovieDescriptions,
  getMovieDuration,
  getMovieGenres,
  getMovieRating,
  getMovieType,
  getMovieVods,
  getMovieYear,
  getSeasonOrEpisodeParent,
  getSeasonsOrEpisodes,
  getSeriesAndSeasonTitle
} from '../src/helpers/movie.helper';
import { serie1Season1EpisodeMock } from './mocks/series1-season1-episode.mock';
import { serie1Season1Mock } from './mocks/series1-season1.mock';
import { serie1SeasonsMock } from './mocks/series1-seasons.mock';
import { serie2EpisodeMock } from './mocks/series2-episode.mock';
import { serie2EpisodesMock } from './mocks/series2-episodes.mock';

const getPageClasses = (node: HTMLElement): string[] => {
  return node.querySelector('.page-content')?.classNames.split(' ') ?? [''];
};

const getAsideNode = (node: HTMLElement): HTMLElement => {
  return node.querySelector('.aside-movie-profile') as HTMLElement;
};

const getNode = (node: HTMLElement): HTMLElement => {
  return node.querySelector('.main-movie-profile') as HTMLElement;
};

const getJsonLd = (node: HTMLElement): MovieJsonLd | null => {
  const json = node.querySelector('script[type="application/ld+json"]')?.innerText;
  try {
    return json ? JSON.parse(json) : null;
  } catch (e) {
    return null;
  }
};

const getMovie = (
  node: HTMLElement
): { pClasses: string[]; aside: HTMLElement; pNode: HTMLElement; jsonLd: MovieJsonLd | null } => {
  return {
    pClasses: getPageClasses(node),
    aside: getAsideNode(node),
    pNode: getNode(node),
    jsonLd: getJsonLd(node)
  };
};

// Series Pattern 1: Series with Seasons (The Simpsons)
const serie1SeasonsHtml = parse(serie1SeasonsMock);
const {
  pNode: serie1SeasonsNode,
  aside: serie1SeasonsAside,
  jsonLd: serie1SeasonsJsonLd
} = getMovie(serie1SeasonsHtml);

const serie1Season1Html = parse(serie1Season1Mock);
const { pNode: serie1Season1Node, jsonLd: serie1Season1JsonLd } = getMovie(serie1Season1Html);

const serie1Season1EpisodeHtml = parse(serie1Season1EpisodeMock);
const { pNode: serie1Season1EpisodeNode, jsonLd: serie1Season1EpisodeJsonLd } =
  getMovie(serie1Season1EpisodeHtml);

// Series Pattern 2: Series with Direct Episodes (The Curse)
const serie2EpisodesHtml = parse(serie2EpisodesMock);
const {
  pNode: serie2EpisodesNode,
  aside: serie2EpisodesAside,
  jsonLd: serie2EpisodesJsonLd
} = getMovie(serie2EpisodesHtml);

const serie2EpisodeHtml = parse(serie2EpisodeMock);
const {
  pNode: serie2EpisodeNode,
  aside: serie2EpisodeAside,
  jsonLd: serie2EpisodeJsonLd
} = getMovie(serie2EpisodeHtml);

describe('Get Type', () => {
  test('Series 1 Main', () => {
    expect(getMovieType(serie1SeasonsNode)).toBe('seriál');
  });
  test('Series 1 Season', () => {
    expect(getMovieType(serie1Season1Node)).toBe('série');
  });
  test('Series 1 Episode', () => {
    expect(getMovieType(serie1Season1EpisodeNode)).toBe('epizoda');
  });
  test('Series 2 Main', () => {
    expect(getMovieType(serie2EpisodesNode)).toBe('seriál');
  });
  test('Series 2 Episode', () => {
    expect(getMovieType(serie2EpisodeNode)).toBe('epizoda');
  });
});

describe('Get Seasons or Episodes', () => {
  test('Series 1 Main should have seasons', () => {
    const seasons = getSeasonsOrEpisodes(serie1SeasonsNode);
    expect(seasons).toBeDefined();
    expect(seasons!.length).toBeGreaterThan(0);
    expect(seasons![0]).toHaveProperty('title');
  });
  test('Series 1 Season should have episodes', () => {
    const episodes = getSeasonsOrEpisodes(serie1Season1Node);
    expect(episodes).toBeDefined();
    expect(episodes!.length).toBeGreaterThan(0);
  });
  test('Series 2 Main should have episodes directly', () => {
    const episodes = getSeasonsOrEpisodes(serie2EpisodesNode);
    expect(episodes).toBeDefined();
    expect(episodes!.length).toBeGreaterThan(0);
  });
});

describe('Get Series and Season Title', () => {
  test('Series 1 Season title extraction', () => {
    const result = getSeriesAndSeasonTitle(serie1Season1Node);
    expect(result.seriesName).toBe('Simpsonovi');
    expect(result.seasonName).toBe('Série 1');
  });
});

describe('Get Parent', () => {
  test('Series 1 Episode parent', () => {
    // Assuming title is extracted as Mluvící hlava
    const parent = getSeasonOrEpisodeParent(serie1Season1EpisodeNode, {
      id: 474220,
      title: 'Mluvící hlava'
    });
    expect(parent).toBeDefined();
    expect(parent!.series.title).toBe('Simpsonovi');
    expect(parent!.season!.title).toBe('Série 1');
  });
  test('Series 2 Episode parent', () => {
    const parent = getSeasonOrEpisodeParent(serie2EpisodeNode, {
      id: 1436408,
      title: 'Kouzelná země'
    });
    expect(parent).toBeDefined();
    expect(parent!.series.title).toBe('The Curse');
    expect(parent!.season).toBeNull();
  });
});

describe('Get Episode Code', () => {
  test('Series 1 Episode', () => {
    expect(getEpisodeCode(serie1Season1EpisodeNode)).toBe('S01E08');
  });
  test('Series 2 Episode', () => {
    expect(getEpisodeCode(serie2EpisodeNode)).toBe('E01');
  });
});

describe('Get Year', () => {
  test('Series 1 Main', () => {
    expect(getMovieYear(serie1SeasonsJsonLd)).toBe(1989);
  });
  test('Series 2 Main', () => {
    expect(getMovieYear(serie2EpisodesJsonLd)).toBe(2023);
  });
  test('Episode', () => {
    expect(getMovieYear(serie2EpisodeJsonLd)).toBe(2023);
  });
});

describe('Get Ratings', () => {
  test('Series 1 Main', () => {
    expect(getMovieRating(serie1SeasonsAside)).toBeGreaterThan(90);
  });
  test('Series 2 Main', () => {
    expect(getMovieRating(serie2EpisodesAside)).toBeGreaterThan(60);
  });
});

describe('Get Creators', () => {
  test('Series 1 Main', () => {
    const creators = getMovieCreators(serie1SeasonsNode);
    expect(creators.directors.length).toBeGreaterThan(0);
  });
  test('Series 2 Main', () => {
    const creators = getMovieCreators(serie2EpisodesNode);
    expect(creators.directors.length).toBeGreaterThan(0);
  });
});

describe('Get Genres', () => {
  test('Series 1 Main', () => {
    expect(getMovieGenres(serie1SeasonsNode)).toContain('Animovaný');
  });
  test('Series 2 Main', () => {
    expect(getMovieGenres(serie2EpisodesNode)).toContain('Komedie');
  });
});

describe('Get VOD services', () => {
  test('Series 2 Main', () => {
    expect(getMovieVods(serie2EpisodesAside).length).toBeGreaterThan(0);
  });
});

describe('Get Descriptions', () => {
  test('Series 1 Episode', () => {
    const desc = getMovieDescriptions(serie1Season1EpisodeNode);
    expect(desc.length).toBeGreaterThan(0);
  });
  test('Series 2 Main', () => {
    expect(getMovieDescriptions(serie2EpisodesNode).length).toBeGreaterThan(0);
  });
});

describe('Get Duration', () => {
  test('Series 1 Episode', () => {
    expect(getMovieDuration(serie1Season1EpisodeJsonLd, serie1Season1EpisodeNode)).toBe(22);
  });
  test('Series 2 Episode', () => {
    expect(getMovieDuration(serie2EpisodeJsonLd, serie2EpisodeNode)).toBe(61);
  });
});
