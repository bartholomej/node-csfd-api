import { CSFDMovie } from 'interfaces/movie';
import { CSFDFilmTypes } from './interfaces/global';
import { CSFDUserRatings } from './interfaces/user-ratings';
import { MovieScraper } from './services/movie';
import { UserRatingsScraper } from './services/user-ratings';

export class Csfd {
  constructor(private userRatingsService: UserRatingsScraper, private movieService: MovieScraper) {}

  public async userRatings(
    user: string | number,
    config?: {
      includesOnly?: CSFDFilmTypes[];
      excludes?: CSFDFilmTypes[];
    }
  ): Promise<CSFDUserRatings[]> {
    return this.userRatingsService.userRatings(user, config);
  }

  public async movie(movie: string | number): Promise<CSFDMovie> {
    return this.movieService.movie(movie);
  }
}

const movieScraper = new MovieScraper();
const userRatingsScraper = new UserRatingsScraper();
export const csfd = new Csfd(userRatingsScraper, movieScraper);
