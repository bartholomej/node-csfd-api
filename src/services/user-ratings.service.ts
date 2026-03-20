import { HTMLElement, parse } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../dto/global';
import { CSFDUserRatingConfig, CSFDUserRatings } from '../dto/user-ratings';
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
import { LIB_PREFIX, userRatingsUrl } from '../vars';

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
      for (let i = 2; i <= pages; i++) {
        config.onProgress?.(i, pages);
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
        console.warn(`${LIB_PREFIX} Both 'includesOnly' and 'excludes' were provided. 'includesOnly' takes precedence:`, config.includesOnly);
      }
    }

    const includesSet = config?.includesOnly?.length ? new Set(config.includesOnly) : null;
    const excludesSet = config?.excludes?.length ? new Set(config.excludes) : null;

    for (const el of movies) {
      const type = getUserRatingType(el);

      // Filtering includesOnly
      if (includesSet) {
        if (includesSet.has(type)) {
          films.push(this.buildUserRatings(el, type));
        }
        // Filter excludes
      } else if (excludesSet) {
        if (!excludesSet.has(type)) {
          films.push(this.buildUserRatings(el, type));
        }
      } else {
        // Without filtering
        films.push(this.buildUserRatings(el, type));
      }
    }
    return films;
  }

  private buildUserRatings(el: HTMLElement, type: CSFDFilmTypes): CSFDUserRatings {
    return {
      id: getUserRatingId(el),
      title: getUserRatingTitle(el),
      year: getUserRatingYear(el),
      type,
      url: getUserRatingUrl(el),
      colorRating: getUserRatingColorRating(el) as CSFDColorRating,
      userDate: getUserRatingDate(el),
      userRating: getUserRating(el) as CSFDStars
    };
  }
}
