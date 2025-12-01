import { HTMLElement, parse } from 'node-html-parser';
import { CSFDColorRating, CSFDStars } from '../dto/global';
import { CSFDUserReviews, CSFDUserReviewsConfig } from '../dto/user-reviews';
import { fetchPage } from '../fetchers';
import { sleep } from '../helpers/global.helper';
import {
  getUserReviewColorRating,
  getUserReviewDate,
  getUserReviewId,
  getUserReviewPoster,
  getUserReviewRating,
  getUserReviewText,
  getUserReviewTitle,
  getUserReviewType,
  getUserReviewUrl,
  getUserReviewYear
} from '../helpers/user-reviews.helper';
import { CSFDOptions } from '../types';
import { userReviewsUrl } from '../vars';

export class UserReviewsScraper {
  public async userReviews(
    user: string | number,
    config?: CSFDUserReviewsConfig,
    options?: CSFDOptions
  ): Promise<CSFDUserReviews[]> {
    let allReviews: CSFDUserReviews[] = [];
    const pageToFetch = config?.page || 1;
    const url = userReviewsUrl(user, pageToFetch > 1 ? pageToFetch : undefined, options?.language);
    const response = await fetchPage(url, { ...options?.request });
    const items = parse(response);
    const reviews = items.querySelectorAll('.user-reviews .article');

    // Get number of pages
    const pagesNode = items.querySelector('.pagination');
    const pages = +pagesNode?.childNodes[pagesNode.childNodes.length - 4].rawText || 1;

    allReviews = this.getPage(config, reviews);

    if (config?.allPages) {
      console.log('User', user, url);
      console.log('Fetching all pages', pages);
      for (let i = 2; i <= pages; i++) {
        console.log('Fetching page', i, 'out of', pages, '...');
        const url = userReviewsUrl(user, i, options?.language);
        const response = await fetchPage(url, { ...options?.request });

        const items = parse(response);
        const reviews = items.querySelectorAll('.user-reviews .article');
        allReviews = [...allReviews, ...this.getPage(config, reviews)];

        // Sleep
        if (config.allPagesDelay) {
          await sleep(config.allPagesDelay);
        }
      }
      return allReviews;
    }

    return allReviews;
  }

  private getPage(config: CSFDUserReviewsConfig, reviews: HTMLElement[]) {
    const films: CSFDUserReviews[] = [];
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

    for (const el of reviews) {
      const type = getUserReviewType(el);

      // Filtering includesOnly
      if (config?.includesOnly?.length) {
        if (config.includesOnly.some((include) => type === include)) {
          films.push(this.buildUserReviews(el));
        }
        // Filter excludes
      } else if (config?.excludes?.length) {
        if (!config.excludes.some((exclude) => type === exclude)) {
          films.push(this.buildUserReviews(el));
        }
      } else {
        // Without filtering
        films.push(this.buildUserReviews(el));
      }
    }
    return films;
  }

  private buildUserReviews(el: HTMLElement): CSFDUserReviews {
    return {
      id: getUserReviewId(el),
      title: getUserReviewTitle(el),
      year: getUserReviewYear(el),
      type: getUserReviewType(el),
      url: getUserReviewUrl(el),
      colorRating: getUserReviewColorRating(el) as CSFDColorRating,
      userDate: getUserReviewDate(el),
      userRating: getUserReviewRating(el) as CSFDStars,
      text: getUserReviewText(el),
      poster: getUserReviewPoster(el)
    };
  }
}
