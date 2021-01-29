import { CSFDFilmTypes } from 'interfaces/global';
import { CSFDSearch, CSFDSearchMovie } from 'interfaces/search.interface';
import { HTMLElement, parse } from 'node-html-parser';
import { fetchSearch } from '../fetchers';
import { parseColor, parseIdFromUrl } from '../helpers/global.helper';
import { Colors } from '../interfaces/user-ratings.interface';

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
      const colorClass = m.querySelector('.article-header i.icon').classNames.pop() as Colors;
      const url = m.querySelector('.film-title-name').attributes.href;

      const movie: CSFDSearchMovie = {
        id: parseIdFromUrl(url),
        title: m.querySelector('.film-title-name').text,
        year: m.querySelectorAll('.film-title-info .info')[0]?.innerText.replace(/[{()}]/g, ''),
        url: `https://www.csfd.cz${url}`,
        type: m
          .querySelectorAll('.film-title-info .info')[1]
          ?.innerText.replace(/[{()}]/g, '') as CSFDFilmTypes,
        colorRating: parseColor(colorClass),
        poster: m.querySelector('img').attributes.src,
        origins: m.querySelector('.article-content .info').text?.split(','),
        creators: null
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
