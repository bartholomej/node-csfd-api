import fetch from 'cross-fetch';
import { parse } from 'node-html-parser';
import { getDate, getQuality, getRating, getTitle, getType, getUrl, getYear } from './extractors';
import { CSFDResult } from './interfaces';
import { userRatingsUrl } from './vars';

export class Csfd {
  private async fetchUserRatings(user: string | number): Promise<string> {
    const url = userRatingsUrl(user);
    const response = await fetch(url);
    return await response.text();
  }

  public async userRatings(user: string | number): Promise<CSFDResult[]> {
    const films: CSFDResult[] = [];
    const response = await this.fetchUserRatings(user);

    const items = parse(response);
    const movies = items.querySelectorAll('.ui-table-list tbody tr');

    for (const el of movies) {
      films.push({
        title: getTitle(el),
        year: getYear(el),
        type: getType(el),
        rating: getRating(el),
        url: getUrl(el),
        date: getDate(el),
        quality: getQuality(el)
      });
    }
    return films;
  }
}
