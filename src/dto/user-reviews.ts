import { CSFDFilmTypes, CSFDScreening, CSFDStars } from './global';

export interface CSFDUserReviews extends CSFDScreening {
  userRating: CSFDStars;
  userDate: string; // TODO datetime
  text: string;
  poster: string;
}

export interface CSFDUserReviewsConfig {
  includesOnly?: CSFDFilmTypes[];
  excludes?: CSFDFilmTypes[];
  /**
   * Fetch all ratings. (Warning: Use it wisely. Can be detected and banned. Consider using it together with `allPagesDelay` attribute)
   */
  allPages?: boolean;
  /**
   * Delay on each page request. In milliseconds
   */
  allPagesDelay?: number;
  /**
   * Specific page number to fetch (e.g., 2 for second page)
   */
  page?: number;
}
