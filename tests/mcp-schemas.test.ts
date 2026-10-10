import { afterEach, describe, expect, test, vi } from 'vitest';
import { z } from 'zod';
import {
  cinemasOutput,
  creatorOutput,
  movieOutput,
  searchOutput,
  userRatingsOutput,
  userReviewsOutput
} from '../src/bin/mcp-schemas';
import * as fetchers from '../src/fetchers';
import { CinemaScraper } from '../src/services/cinema.service';
import { CreatorScraper } from '../src/services/creator.service';
import { MovieScraper } from '../src/services/movie.service';
import { SearchScraper } from '../src/services/search.service';
import { UserRatingsScraper } from '../src/services/user-ratings.service';
import { UserReviewsScraper } from '../src/services/user-reviews.service';
import { cinemaMock } from './mocks/cinema.html';
import { actorMock } from './mocks/creator-actor.html';
import { composerMock } from './mocks/creator-composer-empty.html';
import { directorMock } from './mocks/creator-director.html';
import { movieMock } from './mocks/movie1.html';
import { movieMockBlank } from './mocks/movie2.html';
import { movieMockRich } from './mocks/movie3.html';
import { movieMock4 } from './mocks/movie4.html';
import { searchMock } from './mocks/search.html';
import { serie1Season1EpisodeMock } from './mocks/series1-season1-episode.mock';
import { serie1Season1Mock } from './mocks/series1-season1.mock';
import { serie1SeasonsMock } from './mocks/series1-seasons.mock';
import { seriesMock } from './mocks/series1.html';
import { serie2EpisodeMock } from './mocks/series2-episode.mock';
import { serie2EpisodesMock } from './mocks/series2-episodes.mock';
import { userRatingsMock } from './mocks/userRatings.html';
import { userReviwsMock } from './mocks/userReviews.html';

// The MCP server rejects any tool result that doesn't match its output schema,
// so a schema drifting away from the scraped data would break the tool.
const serve = (html: string) => vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(html);

const issues = (shape: z.ZodRawShape, data: unknown) =>
  z.object(shape).safeParse(data).error?.issues ?? [];

afterEach(() => {
  vi.restoreAllMocks();
});

describe('MCP output schemas match scraped data', () => {
  test.each([
    ['film', movieMock],
    ['blank film', movieMockBlank],
    ['rich film', movieMockRich],
    ['film 4', movieMock4],
    ['series', seriesMock],
    ['series with seasons', serie1SeasonsMock],
    ['season', serie1Season1Mock],
    ['episode', serie1Season1EpisodeMock],
    ['series without seasons', serie2EpisodesMock],
    ['episode without season', serie2EpisodeMock]
  ])('get_movie: %s', async (_, html) => {
    serve(html);
    expect(issues(movieOutput, await new MovieScraper().movie(1))).toEqual([]);
  });

  test.each([
    ['actor', actorMock],
    ['director', directorMock],
    ['composer without films', composerMock]
  ])('get_creator: %s', async (_, html) => {
    serve(html);
    expect(issues(creatorOutput, await new CreatorScraper().creator(1))).toEqual([]);
  });

  test('search', async () => {
    serve(searchMock);
    expect(issues(searchOutput, await new SearchScraper().search('matrix'))).toEqual([]);
  });

  test('get_user_ratings', async () => {
    serve(userRatingsMock);
    const results = await new UserRatingsScraper().userRatings(1);
    expect(issues(userRatingsOutput, { results })).toEqual([]);
  });

  test('get_user_reviews', async () => {
    serve(userReviwsMock);
    const results = await new UserReviewsScraper().userReviews(1);
    expect(issues(userReviewsOutput, { results })).toEqual([]);
  });

  test('get_cinemas', async () => {
    serve(cinemaMock);
    const results = await new CinemaScraper().cinemas(1, 'today');
    expect(issues(cinemasOutput, { results })).toEqual([]);
  });

  test('a mismatched type is still reported', () => {
    expect(issues(movieOutput, { id: 1, rating: 'high' })).not.toEqual([]);
  });
});
