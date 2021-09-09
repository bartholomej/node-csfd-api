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
    return this.parseSearch(moviesNode, usersNode);
  }

  private parseSearch(moviesNode: HTMLElement[], usersNode: HTMLElement[]) {
    const movies: CSFDSearchMovie[] = [];
    const users: CSFDSearchUser[] = [];

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
          directors: parsePeople(m, 'director'),
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

    const search: CSFDSearch = {
      movies: movies,
      users: users,
      tvSeries: [],
      creators: []
    };
    return search;
  }
}
