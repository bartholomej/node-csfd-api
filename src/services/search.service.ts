import { HTMLElement, parse } from 'node-html-parser';
import { CSFDSearch, CSFDSearchMovie, CSFDSearchUser } from '../dto/search';
import { fetchPage } from '../fetchers';
import { parseIdFromUrl } from '../helpers/global.helper';
import { getAvatar, getUser, getUserRealName, getUserUrl } from '../helpers/search-user.helper';
import {
  getSearchColorRating,
  getSearchOrigins,
  getSearchPoster,
  getSearchTitle,
  getSearchType,
  getSearchUrl,
  getSearchYear,
  parseSearchPeople
} from '../helpers/search.helper';
import { CSFDOptions } from '../types';
import { searchUrl } from '../vars';

export class SearchScraper {
  public async search(text: string, options?: CSFDOptions): Promise<CSFDSearch> {
    const url = searchUrl(text, options?.language);
    const response = await fetchPage(url, { ...options?.request });

    const html = parse(response);
    const moviesNode = html.querySelectorAll('.main-movies article');
    const usersNode = html.querySelectorAll('.main-users article');
    const tvSeriesNode = html.querySelectorAll('.main-series article');

    return this.parseSearch(moviesNode, usersNode, tvSeriesNode, options?.language);
  }

  private parseSearch(
    moviesNode: HTMLElement[],
    usersNode: HTMLElement[],
    tvSeriesNode: HTMLElement[],
    language?: string
  ) {
    const movies: CSFDSearchMovie[] = [];
    const users: CSFDSearchUser[] = [];
    const tvSeries: CSFDSearchMovie[] = [];
    const urlPrefix = language || 'https://www.csfd.cz';

    moviesNode.forEach((m) => {
      const url = getSearchUrl(m);

      const movie: CSFDSearchMovie = {
        id: parseIdFromUrl(url),
        title: getSearchTitle(m),
        year: getSearchYear(m),
        url: `${urlPrefix}${url}`,
        type: getSearchType(m),
        colorRating: getSearchColorRating(m),
        poster: getSearchPoster(m),
        origins: getSearchOrigins(m),
        creators: {
          directors: parseSearchPeople(m, 'directors'),
          actors: parseSearchPeople(m, 'actors')
        }
      };
      movies.push(movie);
    });

    usersNode.forEach((m) => {
      const url = getUserUrl(m);

      const user: CSFDSearchUser = {
        id: parseIdFromUrl(url),
        user: getUser(m),
        userRealName: getUserRealName(m),
        avatar: getAvatar(m),
        url: `${urlPrefix}${url}`
      };
      users.push(user);
    });

    tvSeriesNode.forEach((m) => {
      const url = getSearchUrl(m);

      const user: CSFDSearchMovie = {
        id: parseIdFromUrl(url),
        title: getSearchTitle(m),
        year: getSearchYear(m),
        url: `${urlPrefix}${url}`,
        type: getSearchType(m),
        colorRating: getSearchColorRating(m),
        poster: getSearchPoster(m),
        origins: getSearchOrigins(m),
        creators: {
          directors: parseSearchPeople(m, 'directors'),
          actors: parseSearchPeople(m, 'actors')
        }
      };
      tvSeries.push(user);
    });

    const search: CSFDSearch = {
      movies: movies,
      users: users,
      tvSeries: tvSeries,
      creators: []
    };
    return search;
  }
}
