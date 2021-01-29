import { CSFDSearch, CSFDSearchMovie } from 'interfaces/search.interface';
import { HTMLElement, parse } from 'node-html-parser';
import { fetchSearch } from '../fetchers';
import { parseIdFromUrl } from '../helpers/global.helper';
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

export class SearchScraper {
  public async search(text: string): Promise<CSFDSearch> {
    const response = await fetchSearch(text);

    const html = parse(response);
    const moviesNode = html.querySelectorAll('.main-movies article');
    return this.parseSearch(moviesNode);
  }

  private parseSearch(moviesNode: HTMLElement[]) {
    const movies: CSFDSearchMovie[] = [];

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
    const search: CSFDSearch = {
      movies: movies,
      tvSeries: [],
      creators: [],
      users: []
    };
    return search;
  }
}
