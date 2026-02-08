import { HTMLElement, parse } from 'node-html-parser';
import { flatten, safeParse } from 'valibot';
import { CSFDColorRating, CSFDStars } from '../dto/global';
import { CSFDUserRatingConfig, CSFDUserRatings } from '../dto/user-ratings';
import { CSFDUserRatingsSchema } from '../dto/user-ratings.schema';
import { fetchPage } from '../fetchers';
import { sleep } from '../helpers/global.helper';
import {
  getUserRating,
  getUserRatingColorRating,
  getUserRatingDate,
  getUserRatingId,
  getUserRatingTitle,
  getUserRatingType,
  getUserRatingUrl,
  getUserRatingYear
} from '../helpers/user-ratings.helper';
import { CSFDOptions } from '../types';
import { userRatingsUrl } from '../vars';

export class UserRatingsScraper {
  public async userRatings(
    user: string | number,
    config?: CSFDUserRatingConfig,
    options?: CSFDOptions
  ): Promise<CSFDUserRatings[]> {
    let allMovies: CSFDUserRatings[] = [];
    const pageToFetch = config?.page || 1;
    const url = userRatingsUrl(user, pageToFetch > 1 ? pageToFetch : undefined, {
      language: options?.language
    });
    const response = await fetchPage(url, { ...options?.request });
    const items = parse(response);
    const movies = items.querySelectorAll('#snippet--ratings table tr');

    // Get number of pages
    const pagesNode = items.querySelector('.pagination');
    const pages = +pagesNode?.childNodes[pagesNode.childNodes.length - 4].rawText || 1;

    allMovies = this.getPage(config, movies);

    if (config?.allPages) {
      console.log('User', user, url);
      console.log('Fetching all pages', pages);
      for (let i = 2; i <= pages; i++) {
        console.log('Fetching page', i, 'out of', pages, '...');
        const url = userRatingsUrl(user, i, { language: options?.language });
        const response = await fetchPage(url, { ...options?.request });

        const items = parse(response);
        const movies = items.querySelectorAll('#snippet--ratings table tr');
        allMovies = [...allMovies, ...this.getPage(config, movies)];

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
    const films: CSFDUserRatings[] = [];
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
      const type = getUserRatingType(el);

      let shouldProcess = true;

      // Filtering includesOnly
      if (config?.includesOnly?.length) {
        if (!config.includesOnly.some((include) => type === include)) {
          shouldProcess = false;
        }
        // Filter excludes
      } else if (config?.excludes?.length) {
        if (config.excludes.some((exclude) => type === exclude)) {
          shouldProcess = false;
        }
      }

      if (shouldProcess) {
        const item = this.buildUserRatings(el);
        const result = safeParse(CSFDUserRatingsSchema, item);
        if (result.success) {
          films.push(result.output as CSFDUserRatings);
        } else {
          console.warn(
            `Skipping invalid user rating. Title: ${item.title}, ID: ${item.id}`,
            JSON.stringify(flatten(result.issues))
          );
        }
      }
    }
    return films;
  }

  private buildUserRatings(el: HTMLElement): CSFDUserRatings {
    return {
      id: getUserRatingId(el),
      title: getUserRatingTitle(el),
      year: getUserRatingYear(el),
      type: getUserRatingType(el),
      url: getUserRatingUrl(el),
      colorRating: getUserRatingColorRating(el) as CSFDColorRating,
      userDate: getUserRatingDate(el),
      userRating: getUserRating(el) as CSFDStars
    };
  }
}
