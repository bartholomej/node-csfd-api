import { parse } from 'node-html-parser';
import { describe, expect, test } from 'vitest';
import { csfd } from '../src';
import { parseCinema } from '../src/helpers/cinema.helper';
import { getCreatorBirthdayInfo, getCreatorName } from '../src/helpers/creator.helper';
import {
  getMovieCreators,
  getMovieTitle,
  getSeriesAndSeasonTitle
} from '../src/helpers/movie.helper';
import { getUserRealName } from '../src/helpers/search-user.helper';
import { parseSearchPeople } from '../src/helpers/search.helper';

describe('HTML entities are decoded', () => {
  test('Movie title', () => {
    const html = parse('<h1>Hans Zimmer &amp; Friends: Diamond in the Desert</h1>');
    expect(getMovieTitle(html)).toBe('Hans Zimmer & Friends: Diamond in the Desert');
  });

  test('Series and season title', () => {
    const html = parse('<h1>Tom &amp; Jerry - Série 1</h1>');
    expect(getSeriesAndSeasonTitle(html)).toEqual({
      seriesName: 'Tom & Jerry',
      seasonName: 'Série 1'
    });
  });

  test('Movie creators', () => {
    const html = parse(`
      <div class="creators"><div>
        <h4>Režie:</h4>
        <a href="/tvurce/1-sinead-o-connor/">Sinéad O&#039;Connor</a>
      </div></div>`);
    expect(getMovieCreators(html).directors[0].name).toBe("Sinéad O'Connor");
  });

  test('Creator name and birthplace', () => {
    const html = parse(`
      <h1>Sinéad O&#039;Connor</h1>
      <div class="creator-profile-details"><p><span class="info-place">Port of Spain, Trinidad &amp; Tobago</span></p></div>`);
    expect(getCreatorName(html)).toBe("Sinéad O'Connor");
    expect(getCreatorBirthdayInfo(html).birthPlace).toBe('Port of Spain, Trinidad & Tobago');
  });

  test('Search people', () => {
    const html = parse(`
      <div class="article-content"><p>Režie: <a href="/tvurce/1-sinead-o-connor/">Sinéad O&#039;Connor</a></p></div>`);
    expect(parseSearchPeople(html, 'directors')[0].name).toBe("Sinéad O'Connor");
  });

  test('Search user real name', () => {
    const html = parse('<div class="article-content"><p>Sinéad O&#039;Connor</p></div>');
    expect(getUserRealName(html)).toBe("Sinéad O'Connor");
  });

  test('Cinema name', () => {
    const html = parse('<section><header><h2>Brno - Kino Art &amp; Bar</h2></header></section>');
    expect(parseCinema(html)).toEqual({ city: 'Brno', name: 'Kino Art & Bar' });
  });
});

describe('Live: HTML entities are decoded', () => {
  test('Movie title with an ampersand', async () => {
    const movie = await csfd.movie(1634123);
    expect(movie.title).toBe('Hans Zimmer & Friends: Diamond in the Desert');
  });
});
