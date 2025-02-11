import { HTMLElement, parse } from 'node-html-parser';
import { fetchPage } from '../fetchers';
import {
  getBoxMovies,
  getColorRating,
  getDescriptions,
  getDuration,
  getGenres,
  getGroup,
  getOrigins,
  getPoster,
  getPremieres,
  getRandomPhoto,
  getRating,
  getRatingCount,
  getTags,
  getTitle,
  getParent,
  getTitlesOther,
  getTrivia,
  getType,
  getEpisodeNum,
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

    const pageClasses = movieHtml.querySelector('.page-content').classNames.split(' ');
    const asideNode = movieHtml.querySelector('.aside-movie-profile');
    const movieNode = movieHtml.querySelector('.main-movie-profile');
    const jsonLd = movieHtml.querySelector('script[type="application/ld+json"]').innerText;
    this.buildMovie(+movieId, movieNode, asideNode, pageClasses, jsonLd);
    return this.film;
  }

  private buildMovie(
    movieId: number,
    el: HTMLElement,
    asideEl: HTMLElement,
    pageClasses: string[],
    jsonLd: string
  ) {
    this.film = {
      id: movieId,
      title: getTitle(el),
      parentId: getParent(el),
      year: getYear(jsonLd),
      duration: getDuration(jsonLd, el),
      descriptions: getDescriptions(el),
      genres: getGenres(el),
      type: getType(el) as CSFDFilmTypes,
      episodeNum: getEpisodeNum(el),
      url: movieUrl(movieId),
      origins: getOrigins(el),
      colorRating: getColorRating(pageClasses),
      rating: getRating(asideEl),
      ratingCount: getRatingCount(asideEl),
      titlesOther: getTitlesOther(el),
      poster: getPoster(el),
      photo: getRandomPhoto(el),
      trivia: getTrivia(el),
      creators: {
        directors: getGroup(el, 'Režie'),
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
      vod: getVods(asideEl),
      tags: getTags(asideEl),
      premieres: getPremieres(asideEl),
      related: getBoxMovies(asideEl, 'Související'),
      similar: getBoxMovies(asideEl, 'Podobné')
    };
  }
}
