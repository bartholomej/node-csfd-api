import { CSFDSearch, CSFDSearchMovie } from 'interfaces/search.interface';
import { HTMLElement, parse } from 'node-html-parser';
import { fetchSearch } from '../fetchers';

export class SearchScraper {
  public async search(text: string): Promise<CSFDSearch> {
    const response = await fetchSearch(text);

    const html = parse(response);
    const moviesNode = html.querySelectorAll('.main-movies article');
    return this.parseSearch(moviesNode);
  }

  private parseSearch(moviesNode: HTMLElement[]) {
    const movies: CSFDSearchMovie[] = [];
    moviesNode.map((movie) => {
      const mov: CSFDSearchMovie = {
        id: 1,
        title: movie.querySelector('.film-title-name').text,
        year: 1,
        url: '',
        type: 'film',
        colorRating: 'unknown',
        poster: '',
        origins: [],
        creators: null
      };
      movies.push(mov);
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
