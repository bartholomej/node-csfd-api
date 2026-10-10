import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from 'vitest';
import { createMcpServer } from '../src/bin/mcp-app';
import { movieOutput } from '../src/bin/mcp-schemas';
import * as fetchers from '../src/fetchers';
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

// Results are checked twice: by the server against the zod schema and by the
// client against the JSON Schema it got from tools/list. A real SDK client
// covers both, so a schema either side rejects fails here instead of for users.
const client = new Client({ name: 'test', version: '0' });

beforeAll(async () => {
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  await createMcpServer().connect(serverTransport);
  await client.connect(clientTransport);
  // The client only validates tools it has listed, like every real client does
  await client.listTools();
});

afterAll(async () => {
  await client.close();
});

afterEach(() => {
  vi.restoreAllMocks();
});

const callWith = async (html: string, name: string, args: Record<string, unknown>) => {
  vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(html);
  const result = await client.callTool({ name, arguments: args });
  expect(result.isError).toBeFalsy();
  expect(result.structuredContent).toBeDefined();
};

describe('MCP tools return data their output schema accepts', () => {
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
    await callWith(html, 'get_movie', { id: 1 });
  });

  test.each([
    ['actor', actorMock],
    ['director', directorMock],
    ['composer without films', composerMock]
  ])('get_creator: %s', async (_, html) => {
    await callWith(html, 'get_creator', { id: 1 });
  });

  test('search', async () => {
    await callWith(searchMock, 'search', { query: 'matrix' });
  });

  test('get_user_ratings', async () => {
    await callWith(userRatingsMock, 'get_user_ratings', { user: 1 });
  });

  test('get_user_reviews', async () => {
    await callWith(userReviwsMock, 'get_user_reviews', { user: 1 });
  });

  test('get_cinemas', async () => {
    await callWith(cinemaMock, 'get_cinemas', { district: 1, period: 'today' });
  });

  test('a mismatched type is still reported', () => {
    expect(movieOutput.safeParse({ id: 1, rating: 'high' }).success).toBe(false);
  });
});
