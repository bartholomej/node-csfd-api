import { CSFDMovie } from './interfaces/movie.interface';
import { CSFDSearch } from './interfaces/search.interface';
import { CSFDUserRatingConfig, CSFDUserRatings } from './interfaces/user-ratings.interface';
import { MovieScraper } from './services/movie.service';
import { SearchScraper } from './services/search.service';
import { UserRatingsScraper } from './services/user-ratings.service';

export class Csfd {
  constructor(
    private userRatingsService: UserRatingsScraper,
    private movieService: MovieScraper,
    private searchService: SearchScraper
  ) {}

  public async userRatings(
    user: string | number,
    config?: CSFDUserRatingConfig
  ): Promise<CSFDUserRatings[]> {
    return this.userRatingsService.userRatings(user, config);
  }

  public async movie(movie: number): Promise<CSFDMovie> {
    return this.movieService.movie(+movie);
  }

  public async search(text: string): Promise<CSFDSearch> {
    return this.searchService.search(text);
  }
}

const movieScraper = new MovieScraper();
const userRatingsScraper = new UserRatingsScraper();
const searchScraper = new SearchScraper();
export const csfd = new Csfd(userRatingsScraper, movieScraper, searchScraper);
