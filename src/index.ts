import { CSFDFilmTypes } from './interfaces/global';
import { CSFDUserRatings } from './interfaces/user-ratings';
import { UserRatingsScraper } from './services/user-ratings';

export class Csfd {
  constructor(private userRatingsService: UserRatingsScraper) {}

  public async userRatings(
    user: string | number,
    config?: {
      includesOnly?: CSFDFilmTypes[];
      excludes?: CSFDFilmTypes[];
    }
  ): Promise<CSFDUserRatings[]> {
    return this.userRatingsService.userRatings(user, config);
  }
}

const userRatingsScraper = new UserRatingsScraper();
export const csfd = new Csfd(userRatingsScraper);
