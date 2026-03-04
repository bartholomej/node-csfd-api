import { HTMLElement, parse } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../dto/global';
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
    const url = userReviewsUrl(user, pageToFetch > 1 ? pageToFetch : undefined, {
      language: options?.language
    });
    const response = await fetchPage(url, { ...options?.request });
    const items = parse(response);
    const reviews = items.querySelectorAll('.user-tab-reviews .article');

    // Get number of pages
    const pagesNode = items.querySelector('.pagination');
    const pages = +pagesNode?.childNodes[pagesNode.childNodes.length - 4].rawText || 1;

    allReviews = this.getPage(config, reviews);

    if (config?.allPages) {
      for (let i = 2; i <= pages; i++) {
        const url = userReviewsUrl(user, i, { language: options?.language });
        const response = await fetchPage(url, { ...options?.request });

        const items = parse(response);
        const reviews = items.querySelectorAll('.user-tab-reviews .article');
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

    const includesSet = config?.includesOnly?.length ? new Set(config.includesOnly) : null;
    const excludesSet = config?.excludes?.length ? new Set(config.excludes) : null;

    for (const el of reviews) {
      const type = getUserReviewType(el);

      // Filtering includesOnly
      if (includesSet) {
        if (includesSet.has(type)) {
          films.push(this.buildUserReviews(el, type));
        }
        // Filter excludes
      } else if (excludesSet) {
        if (!excludesSet.has(type)) {
          films.push(this.buildUserReviews(el, type));
        }
      } else {
        // Without filtering
        films.push(this.buildUserReviews(el, type));
      }
    }
    return films;
  }

  private buildUserReviews(el: HTMLElement, type: CSFDFilmTypes): CSFDUserReviews {
    return {
      id: getUserReviewId(el),
      title: getUserReviewTitle(el),
      year: getUserReviewYear(el),
      type,
      url: getUserReviewUrl(el),
      colorRating: getUserReviewColorRating(el) as CSFDColorRating,
      userDate: getUserReviewDate(el),
      userRating: getUserReviewRating(el) as CSFDStars,
      text: getUserReviewText(el),
      poster: getUserReviewPoster(el)
    };
  }
}
