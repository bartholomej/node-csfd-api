import { HTMLElement, parse } from 'node-html-parser';
import { fetchUserRatings } from '../fetchers';
import {
  getColorRating,
  getDate,
  getId,
  getRating,
  getTitle,
  getType,
  getUrl,
  getYear
} from '../helpers/user-ratings.helper';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../interfaces/global';
import { CSFDUserRatings } from '../interfaces/user-ratings.interface';

export class UserRatingsScraper {
  private films: CSFDUserRatings[] = [];

  public async userRatings(
    user: string | number,
    config?: {
      includesOnly?: CSFDFilmTypes[];
      excludes?: CSFDFilmTypes[];
    }
  ): Promise<CSFDUserRatings[]> {
    const response = await fetchUserRatings(user);

    const items = parse(response);
    const movies = items.querySelectorAll('.ui-table-list tbody tr');

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
      date: getDate(el),
      rating: getRating(el) as CSFDStars
    });
  }
}
