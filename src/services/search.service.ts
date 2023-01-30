import { HTMLElement, parse } from 'node-html-parser';
import { fetchPage } from '../fetchers';
import { parseIdFromUrl } from '../helpers/global.helper';
import { getAvatar, getUser, getUserRealName, getUserUrl } from '../helpers/search-user.helper';
import {
  getColorRating,
  getOrigins,
  getPoster,
  getTitle,
  getType,
  getUrl,
  getYear,
  parsePeople
} from '../helpers/search.helper';
import { CSFDSearch, CSFDSearchMovie, CSFDSearchUser } from '../interfaces/search.interface';
import { searchUrl } from '../vars';

export class SearchScraper {
  public async search(text: string): Promise<CSFDSearch> {
    const url = searchUrl(text);
    const response = await fetchPage(url);

    const html = parse(response);
    const moviesNode = html.querySelectorAll('.main-movies article');
    const usersNode = html.querySelectorAll('.main-users article');
    const tvSeriesNode = html.querySelectorAll('.main-series article');

    return this.parseSearch(moviesNode, usersNode, tvSeriesNode);
  }

  private parseSearch(
    moviesNode: HTMLElement[],
    usersNode: HTMLElement[],
    tvSeriesNode: HTMLElement[]
  ) {
    const movies: CSFDSearchMovie[] = [];
    const users: CSFDSearchUser[] = [];
    const tvSeries: CSFDSearchMovie[] = [];

    moviesNode.map((m) => {
      const url = getUrl(m);

      const movie: CSFDSearchMovie = {
        id: parseIdFromUrl(url),
        title: getTitle(m),
        year: getYear(m),
        url: `https://www.csfd.cz${url}`,
        type: getType(m),
        colorRating: getColorRating(m),
        poster: getPoster(m),
        origins: getOrigins(m),
        creators: {
          directors: parsePeople(m, 'directors'),
          actors: parsePeople(m, 'actors')
        }
      };
      movies.push(movie);
    });

    usersNode.map((m) => {
      const url = getUserUrl(m);

      const user: CSFDSearchUser = {
        id: parseIdFromUrl(url),
        user: getUser(m),
        userRealName: getUserRealName(m),
        avatar: getAvatar(m),
        url: `https://www.csfd.cz${url}`
      };
      users.push(user);
    });

    tvSeriesNode.map((m) => {
      const url = getUrl(m);

      const user: CSFDSearchMovie = {
        id: parseIdFromUrl(url),
        title: getTitle(m),
        year: getYear(m),
        url: `https://www.csfd.cz${url}`,
        type: getType(m),
        colorRating: getColorRating(m),
        poster: getPoster(m),
        origins: getOrigins(m),
        creators: {
          directors: parsePeople(m, 'directors'),
          actors: parsePeople(m, 'actors')
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
