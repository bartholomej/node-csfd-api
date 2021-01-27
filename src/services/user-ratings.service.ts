import { HTMLElement, parse } from 'node-html-parser';
import { fetchUserRatings } from '../fetchers';
import {
  getColorRating,
  getDate,
  getId,
  getTitle,
  getType,
  getUrl,
  getUserRating,
  getYear,
  sleep
} from '../helpers/user-ratings.helper';
import { CSFDColorRating, CSFDStars } from '../interfaces/global';
import { CSFDUserRatingConfig, CSFDUserRatings } from '../interfaces/user-ratings.interface';

export class UserRatingsScraper {
  private films: CSFDUserRatings[] = [];

  public async userRatings(
    user: string | number,
    config?: CSFDUserRatingConfig
  ): Promise<CSFDUserRatings[]> {
    let allMovies: CSFDUserRatings[] = [];
    const response = await fetchUserRatings(user);
    const items = parse(response);
    const movies = items.querySelectorAll('.box-user-rating .table-container tbody tr');

    // Get number of pages
    const pagesNode = items.querySelector('.pagination');
    const pages = +pagesNode?.childNodes[pagesNode.childNodes.length - 4].rawText || 1;

    allMovies = this.getPage(config, movies);

    if (config?.allPages) {
      console.log('Fetching all pages', pages);
      for (let i = 2; i <= pages; i++) {
        console.log('Fetching page', i, 'out of', pages, '...');
        const response = await fetchUserRatings(user, i);
        const items = parse(response);
        const movies = items.querySelectorAll('.box-user-rating .table-container tbody tr');
        allMovies = [...this.getPage(config, movies)];

        // Sleep
        if (config.allPagesDelay) {
          await sleep(config.allPagesDelay);
        }
      }
      return allMovies;
    }

    return allMovies;
  }

  private getPage(config: CSFDUserRatingConfig, movies: HTMLElement[]) {
    if (config) {
      if (config.includesOnly?.length && config.excludes?.length) {
        console.warn(
          `node-csfd-api:
        You can not use both parameters 'includesOnly' and 'excludes'.
        Parameter 'includesOnly' will be used now:`,
          config.includesOnly
        );
      }
    }

    for (const el of movies) {
      const type = getType(el);

      // Filtering includesOnly
      if (config?.includesOnly?.length) {
        if (config.includesOnly.some((include) => type === include)) {
          this.buildUserRatings(el);
        }
        // Filter exludes
      } else if (config?.excludes?.length) {
        if (!config.excludes.some((exclude) => type === exclude)) {
          this.buildUserRatings(el);
        }
      } else {
        // Without filtering
        this.buildUserRatings(el);
      }
    }
    return this.films;
  }

  private buildUserRatings(el: HTMLElement) {
    this.films.push({
      id: getId(el),
      title: getTitle(el),
      year: getYear(el),
      type: getType(el),
      url: getUrl(el),
      colorRating: getColorRating(el) as CSFDColorRating,
      userDate: getDate(el),
      userRating: getUserRating(el) as CSFDStars
    });
  }
}
