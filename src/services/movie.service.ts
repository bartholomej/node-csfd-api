import { HTMLElement, parse } from 'node-html-parser';
import { fetchPage } from '../fetchers';
import {
  getColorRating,
  getDescriptions,
  getDirectors,
  getDuration,
  getGenres,
  getGroup,
  getOrigins,
  getOtherTitles,
  getPoster,
  getRating,
  getTitle,
  getType,
  getVods,
  getYear
} from '../helpers/movie.helper';
import { CSFDFilmTypes } from '../interfaces/global';
import { CSFDMovie } from '../interfaces/movie.interface';
import { movieUrl } from '../vars';

export class MovieScraper {
  private film: CSFDMovie;

  public async movie(movieId: number): Promise<CSFDMovie> {
    const url = movieUrl(+movieId);
    const response = await fetchPage(url);

    const movieHtml = parse(response);

    const pageClasses = movieHtml.querySelector('.page-content').classNames;
    // const asideNode = movieHtml.querySelector('.box-rating-container');
    const movieNode = movieHtml.querySelector('.main-movie-profile');
    const buttonsNode = movieHtml.querySelectorAll('.box-buttons')[0];
    this.buildMovie(+movieId, movieNode, buttonsNode, pageClasses);
    return this.film;
  }

  private buildMovie(
    movieId: number,
    el: HTMLElement,
    elButtons: HTMLElement,
    pageClasses: string[]
  ) {
    this.film = {
      id: movieId,
      title: getTitle(el),
      year: getYear(el),
      duration: getDuration(el),
      descriptions: getDescriptions(el),
      genres: getGenres(el),
      type: getType(el) as CSFDFilmTypes,
      url: movieUrl(movieId),
      origins: getOrigins(el),
      colorRating: getColorRating(pageClasses),
      rating: getRating(el),
      otherTitles: getOtherTitles(el),
      poster: getPoster(el),
      creators: {
        directors: getDirectors(el),
        writers: getGroup(el, 'Scénář'),
        cinematography: getGroup(el, 'Kamera'),
        music: getGroup(el, 'Hudba'),
        actors: getGroup(el, 'Hrají'),
        basedOn: getGroup(el, 'Předloha'),
        producers: getGroup(el, 'Produkce'),
        filmEditing: getGroup(el, 'Střih'),
        costumeDesign: getGroup(el, 'Kostýmy'),
        productionDesign: getGroup(el, 'Scénografie')
      },
      vod: getVods(elButtons)
    };
  }
}
