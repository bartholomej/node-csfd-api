import { CSFDFilmTypes } from 'interfaces/global';
import { CSFDMovie } from 'interfaces/movie.interface';
import { HTMLElement, parse } from 'node-html-parser';
import { fetchMovie } from '../fetchers';
import {
  getDescriptions,
  getDirectors,
  getGenres,
  getGroup,
  getId,
  getOrigins,
  getOtherTitles,
  getPoster,
  getTitle,
  getType,
  getYear
} from '../helpers/movie.helper';
import { movieUrl } from '../vars';

export class MovieScraper {
  private film: CSFDMovie;

  public async movie(movie: string | number): Promise<CSFDMovie> {
    const response = await fetchMovie(movie);

    const movieHtml = parse(response);
    const movieNode = movieHtml.querySelector('#pg-web-film');
    this.buildMovie(movieNode, movie);
    return this.film;
  }

  private buildMovie(el: HTMLElement, movie: string | number) {
    this.film = {
      id: getId(el),
      title: getTitle(el),
      year: getYear(el),
      descriptions: getDescriptions(el),
      genres: getGenres(el),
      type: getType(el) as CSFDFilmTypes,
      url: movieUrl(movie),
      origins: getOrigins(el),
      colorRating: 'unknown', // TODO
      otherTitles: getOtherTitles(el),
      poster: getPoster(el),
      creators: {
        directors: getDirectors(el),
        writers: getGroup(el, 'Scénář'),
        cinematography: getGroup(el, 'Kamera'),
        music: getGroup(el, 'Hudba'),
        actors: getGroup(el, 'Hrají'),
        basedOn: getGroup(el, 'Předloha'),
        producers: getGroup(el, 'Producenti'),
        filmEditing: getGroup(el, 'Střih'),
        costumeDesign: getGroup(el, 'Kostýmy'),
        productionDesign: getGroup(el, 'Scénografie')
      }
    };
  }
}
