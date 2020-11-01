import fetch from 'cross-fetch';
import { HTMLElement, parse } from 'node-html-parser';
import { getDate, getQuality, getRating, getTitle, getType, getUrl, getYear } from './extractors';
import { CSFDFilmTypes, CSFDUserRatings } from './interfaces';
import { userRatingsUrl } from './vars';

export class Csfd {
  private films: CSFDUserRatings[] = [];
  private async fetchUserRatings(user: string | number): Promise<string> {
    const url = userRatingsUrl(user);
    const response = await fetch(url);
    return await response.text();
  }

  public async userRatings(
    user: string | number,
    config?: {
      includesOnly?: CSFDFilmTypes[];
      excludes?: CSFDFilmTypes[];
    }
  ): Promise<CSFDUserRatings[]> {
    const response = await this.fetchUserRatings(user);

    const items = parse(response);
    const movies = items.querySelectorAll('.ui-table-list tbody tr');

    if (config?.includesOnly?.length && config?.excludes?.length) {
      console.warn(
        `node-csfd-api:
        You can not use both parameters 'includesOnly' and 'excludes'.
        Parameter 'includesOnly' will be used now:`,
        config.includesOnly
      );
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
        // without filtering
        this.buildUserRatings(el);
      }
    }
    return this.films;
  }

  private buildUserRatings(el: HTMLElement) {
    this.films.push({
      title: getTitle(el),
      year: getYear(el),
      type: getType(el),
      rating: getRating(el),
      url: getUrl(el),
      date: getDate(el),
      quality: getQuality(el)
    });
  }
}
