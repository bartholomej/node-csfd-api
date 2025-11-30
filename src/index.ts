import { CSFDCinema, CSFDCinemaPeriod } from './dto/cinema';
import { CSFDCreator } from './dto/creator';
import { CSFDMovie } from './dto/movie';
import { CSFDSearch } from './dto/search';
import { CSFDUserRatingConfig, CSFDUserRatings } from './dto/user-ratings';
import { CinemaScraper } from './services/cinema.service';
import { CreatorScraper } from './services/creator.service';
import { MovieScraper } from './services/movie.service';
import { SearchScraper } from './services/search.service';
import { UserRatingsScraper } from './services/user-ratings.service';

export class Csfd {
  private defaultOptionsRequest?: RequestInit;

  constructor(
    private userRatingsService: UserRatingsScraper,
    private movieService: MovieScraper,
    private creatorService: CreatorScraper,
    private searchService: SearchScraper,
    private cinemaService: CinemaScraper,
    defaultOptionsRequest?: RequestInit
  ) {
    this.defaultOptionsRequest = defaultOptionsRequest;
  }

  public setOptions({ optionsRequest }: { optionsRequest: RequestInit }): void {
    this.defaultOptionsRequest = optionsRequest;
  }

  public async userRatings(
    user: string | number,
    config?: CSFDUserRatingConfig,
    optionsRequest?: RequestInit
  ): Promise<CSFDUserRatings[]> {
    const opts = optionsRequest ?? this.defaultOptionsRequest;
    return this.userRatingsService.userRatings(user, config, opts);
  }

  public async movie(movie: number, optionsRequest?: RequestInit): Promise<CSFDMovie> {
    const opts = optionsRequest ?? this.defaultOptionsRequest;
    return this.movieService.movie(+movie, opts);
  }

  public async creator(creator: number, optionsRequest?: RequestInit): Promise<CSFDCreator> {
    const opts = optionsRequest ?? this.defaultOptionsRequest;
    return this.creatorService.creator(+creator, opts);
  }

  public async search(text: string, optionsRequest?: RequestInit): Promise<CSFDSearch> {
    const opts = optionsRequest ?? this.defaultOptionsRequest;
    return this.searchService.search(text, opts);
  }

  public async cinema(
    district: number | string,
    period: CSFDCinemaPeriod,
    optionsRequest?: RequestInit
  ): Promise<CSFDCinema[]> {
    const opts = optionsRequest ?? this.defaultOptionsRequest;
    return this.cinemaService.cinemas(+district, period, opts);
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
