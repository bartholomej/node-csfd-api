import { CSFDFilmTypes } from 'interfaces/global';
import { CSFDMovie } from 'interfaces/movie';
import { HTMLElement, parse } from 'node-html-parser';
import { fetchUserMovie } from '../fetchers';
import {
  getDescriptions,
  getDirectors,
  getGenres,
  getGroup,
  getOrigins,
  getPoster,
  getTitle,
  getType,
  getYear
} from '../scrapers/movie';
import { movieUrl } from '../vars';

export class MovieScraper {
  private film: CSFDMovie;

  public async movie(movie: string | number): Promise<CSFDMovie> {
    const response = await fetchUserMovie(movie);

    const movieHtml = parse(response);
    const movieNode = movieHtml.querySelector('#pg-web-film');
    this.buildUserRatings(movieNode, movie);
    return this.film;
  }

  private buildUserRatings(el: HTMLElement, movie: string | number) {
    this.film = {
      title: getTitle(el),
      year: getYear(el),
      descriptions: getDescriptions(el),
      genres: getGenres(el),
      type: getType(el) as CSFDFilmTypes,
      url: movieUrl(movie),
      origins: getOrigins(el),
      overallRating: 3, // TODO
      poster: getPoster(el),
      directors: getDirectors(el),
      actors: getGroup(el, 'Hrají'),
      basedOn: getGroup(el, 'Předloha'),
      writers: getGroup(el, 'Scénář'),
      music: getGroup(el, 'Hudba'),
      producers: getGroup(el, 'Producenti')
    };
  }
}
