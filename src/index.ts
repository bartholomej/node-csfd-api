import { CSFDMovie } from './interfaces/movie.interface';
import { CSFDUserRatingConfig, CSFDUserRatings } from './interfaces/user-ratings.interface';
import { MovieScraper } from './services/movie.service';
import { UserRatingsScraper } from './services/user-ratings.service';

export class Csfd {
  constructor(private userRatingsService: UserRatingsScraper, private movieService: MovieScraper) {}

  public async userRatings(
    user: string | number,
    config?: CSFDUserRatingConfig
  ): Promise<CSFDUserRatings[]> {
    return this.userRatingsService.userRatings(user, config);
  }

  public async movie(movie: number): Promise<CSFDMovie> {
    return this.movieService.movie(+movie);
  }
}

const movieScraper = new MovieScraper();
const userRatingsScraper = new UserRatingsScraper();
export const csfd = new Csfd(userRatingsScraper, movieScraper);
