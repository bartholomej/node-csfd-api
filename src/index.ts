import { CSFDCinema, CSFDCinemaPeriod } from './dto/cinema';
import { CSFDCreator } from './dto/creator';
import { CSFDMovie } from './dto/movie';
import { CSFDSearch } from './dto/search';
import { CSFDUserRatingConfig, CSFDUserRatings } from './dto/user-ratings';
import { CinemaScraper } from './services/cinema.service.js';
import { CreatorScraper } from './services/creator.service.js';
import { MovieScraper } from './services/movie.service.js';
import { SearchScraper } from './services/search.service.js';
import { UserRatingsScraper } from './services/user-ratings.service.js';

export class Csfd {
  constructor(
    private userRatingsService: UserRatingsScraper,
    private movieService: MovieScraper,
    private creatorService: CreatorScraper,
    private searchService: SearchScraper,
    private cinemaService: CinemaScraper
  ) { }

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

  public async cinema(district: number | string, period: CSFDCinemaPeriod): Promise<CSFDCinema[]> {
    return this.cinemaService.cinemas(+district, period);
  }
}

const movieScraper = new MovieScraper();
const userRatingsScraper = new UserRatingsScraper();
const cinemaScraper = new CinemaScraper();
const creatorScraper = new CreatorScraper();
const searchScraper = new SearchScraper();

export const csfd = new Csfd(
  userRatingsScraper,
  movieScraper,
  creatorScraper,
  searchScraper,
  cinemaScraper
);
export type * from './dto';
