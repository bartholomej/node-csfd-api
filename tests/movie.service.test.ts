import { describe, expect, test, vi } from 'vitest';
import { MovieScraper } from '../src/services/movie.service';

import * as fetchers from '../src/fetchers';
import { movieMock } from './mocks/movie1.html';

describe('Movie Service coverage', () => {
  test('Fetch not number directly on service', async () => {
    const movieScraper = new MovieScraper();
    await expect(movieScraper.movie(Number.NaN)).rejects.toThrow('movieId must be a valid number');
  });

  test('JSON-LD parse fails gracefully', async () => {
    const movieScraper = new MovieScraper();

    // Modify movieMock to have an invalid JSON string in the script tag
    const invalidHtml = movieMock.replace(
      '<script type="application/ld+json">',
      '<script type="application/ld+json">{ invalid json {'
    );

    const fetchSpy = vi.spyOn(fetchers, 'fetchPage').mockResolvedValue(invalidHtml);

    // Use an existing movie 535121
    const movie = await movieScraper.movie(535121);
    expect(movie.id).toBe(535121);
    expect(movie.year).toBe(null); // Because jsonLd parsing failed

    fetchSpy.mockRestore();
  });
});
