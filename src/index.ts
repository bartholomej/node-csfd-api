import { CSFDCreator } from './interfaces/creator.interface';
import { CSFDMovie } from './interfaces/movie.interface';
import { CSFDSearch } from './interfaces/search.interface';
import { CSFDUserRatingConfig, CSFDUserRatings } from './interfaces/user-ratings.interface';
import { CreatorScraper } from './services/creator.service';
import { MovieScraper } from './services/movie.service';
import { SearchScraper } from './services/search.service';
import { UserRatingsScraper } from './services/user-ratings.service';

export class Csfd {
  constructor(
    private userRatingsService: UserRatingsScraper,
    private movieService: MovieScraper,
    private creatorService: CreatorScraper,
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

  public async creator(creator: number): Promise<CSFDCreator> {
    return this.creatorService.creator(+creator);
  }

  public async search(text: string): Promise<CSFDSearch> {
    return this.searchService.search(text);
  }
}

const movieScraper = new MovieScraper();
const userRatingsScraper = new UserRatingsScraper();
const creatorScraper = new CreatorScraper();
const searchScraper = new SearchScraper();
export const csfd = new Csfd(userRatingsScraper, movieScraper, creatorScraper, searchScraper);
