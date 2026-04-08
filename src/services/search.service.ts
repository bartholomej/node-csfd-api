import { HTMLElement, parse } from 'node-html-parser';
import { CSFDSearch, CSFDSearchCreator, CSFDSearchMovie, CSFDSearchUser } from '../dto/search';
import { fetchPage } from '../fetchers';
import { parseIdFromUrl } from '../helpers/global.helper';
import { getCreatorImage, getCreatorName, getCreatorUrl } from '../helpers/search-creator.helper';
import { getAvatar, getUser, getUserRealName, getUserUrl } from '../helpers/search-user.helper';
import {
  getSearchColorRating,
  getSearchOrigins,
  getSearchPoster,
  getSearchTitle,
  getSearchType,
  getSearchUrl,
  getSearchYear,
  parseSearchCreators
} from '../helpers/search.helper';
import { CSFDLanguage, CSFDOptions } from '../types';
import { getUrlByLanguage, searchUrl } from '../vars';

export class SearchScraper {
  public async search(text: string, options?: CSFDOptions): Promise<CSFDSearch> {
    const url = searchUrl(text, { language: options?.language });
    const response = await fetchPage(url, { ...options?.request });

    const html = parse(response);
    const moviesNode = html.querySelectorAll('.main-movies article');
    const usersNode = html.querySelectorAll('.main-users article');
    const tvSeriesNode = html.querySelectorAll('.main-series article');
    const creatorsNode = html.querySelectorAll('.main-authors article');

    return this.parseSearch(moviesNode, usersNode, tvSeriesNode, creatorsNode, options?.language);
  }

  private parseSearch(
    moviesNode: HTMLElement[],
    usersNode: HTMLElement[],
    tvSeriesNode: HTMLElement[],
    creatorsNode: HTMLElement[],
    language?: CSFDLanguage
  ) {
    const baseUrl = getUrlByLanguage(language);

    const movies: CSFDSearchMovie[] = [];
    const users: CSFDSearchUser[] = [];
    const tvSeries: CSFDSearchMovie[] = [];
    const creators: CSFDSearchCreator[] = [];

    const movieMapper = (m: HTMLElement): CSFDSearchMovie => {
      const url = getSearchUrl(m);
      return {
        id: parseIdFromUrl(url),
        title: getSearchTitle(m),
        year: getSearchYear(m),
        url: `${baseUrl}${url}`,
        type: getSearchType(m),
        colorRating: getSearchColorRating(m),
        poster: getSearchPoster(m),
        origins: getSearchOrigins(m),
        creators: parseSearchCreators(m)
      };
    };

    const userMapper = (m: HTMLElement): CSFDSearchUser => {
      const url = getUserUrl(m);
      return {
        id: parseIdFromUrl(url),
        user: getUser(m),
        userRealName: getUserRealName(m),
        avatar: getAvatar(m),
        url: `${baseUrl}${url}`
      };
    };

    const creatorMapper = (m: HTMLElement): CSFDSearchCreator => {
      const url = getCreatorUrl(m);
      return {
        id: parseIdFromUrl(url),
        name: getCreatorName(m),
        image: getCreatorImage(m),
        url: `${baseUrl}${url}`
      };
    };

    movies.push(...moviesNode.map(movieMapper));
    users.push(...usersNode.map(userMapper));
    tvSeries.push(...tvSeriesNode.map(movieMapper));
    creators.push(...creatorsNode.map(creatorMapper));

    const search: CSFDSearch = {
      movies,
      users,
      tvSeries,
      creators
    };
    return search;
  }
}
