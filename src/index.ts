import { CSFDCinema, CSFDCinemaPeriod } from './dto/cinema';
import { CSFDCreator } from './dto/creator';
import { CSFDMovie } from './dto/movie';
import { CSFDSearch } from './dto/search';
import { CSFDUserRatingConfig, CSFDUserRatings } from './dto/user-ratings';
import { CSFDUserReviews, CSFDUserReviewsConfig } from './dto/user-reviews';
import { CinemaScraper } from './services/cinema.service';
import { CreatorScraper } from './services/creator.service';
import { MovieScraper } from './services/movie.service';
import { SearchScraper } from './services/search.service';
import { UserRatingsScraper } from './services/user-ratings.service';
import { UserReviewsScraper } from './services/user-reviews.service';
import { CSFDOptions } from './types';
import { setLanguage } from './vars';

export class Csfd {
  private defaultOptions?: CSFDOptions;

  constructor(
    private userRatingsService: UserRatingsScraper,
    private userReviewsService: UserReviewsScraper,
    private movieService: MovieScraper,
    private creatorService: CreatorScraper,
    private searchService: SearchScraper,
    private cinemaService: CinemaScraper,
    defaultOptions?: CSFDOptions
  ) {
    this.defaultOptions = defaultOptions;
  }

  public setOptions({ request, language }: CSFDOptions): void {
    if (request !== undefined) {
      this.defaultOptions = { ...this.defaultOptions, request };
    }
    if (language !== undefined) {
      setLanguage(language);
    }
  }

  public async userRatings(
    user: string | number,
    config?: CSFDUserRatingConfig,
    options?: CSFDOptions
  ): Promise<CSFDUserRatings[]> {
    const opts = options ?? this.defaultOptions;
    return this.userRatingsService.userRatings(user, config, opts);
  }

  public async userReviews(
    user: string | number,
    config?: CSFDUserReviewsConfig,
    options?: CSFDOptions
  ): Promise<CSFDUserReviews[]> {
    const opts = options ?? this.defaultOptions;
    return this.userReviewsService.userReviews(user, config, opts);
  }

  public async movie(movie: number, options?: CSFDOptions): Promise<CSFDMovie> {
    const opts = options ?? this.defaultOptions;
    return this.movieService.movie(+movie, opts);
  }

  public async creator(creator: number, options?: CSFDOptions): Promise<CSFDCreator> {
    const opts = options ?? this.defaultOptions;
    return this.creatorService.creator(+creator, opts);
  }

  public async search(text: string, options?: CSFDOptions): Promise<CSFDSearch> {
    const opts = options ?? this.defaultOptions;
    return this.searchService.search(text, opts);
  }

  public async cinema(
    district: number | string,
    period: CSFDCinemaPeriod,
    options?: CSFDOptions
  ): Promise<CSFDCinema[]> {
    const opts = options ?? this.defaultOptions;
    return this.cinemaService.cinemas(+district, period, opts);
  }
}

const movieScraper = new MovieScraper();
const userRatingsScraper = new UserRatingsScraper();
const userReviewsScraper = new UserReviewsScraper();
const cinemaScraper = new CinemaScraper();
const creatorScraper = new CreatorScraper();
const searchScraper = new SearchScraper();

export const csfd = new Csfd(
  userRatingsScraper,
  userReviewsScraper,
  movieScraper,
  creatorScraper,
  searchScraper,
  cinemaScraper
);

export type * from './dto';

