import { HTMLElement, parse } from 'node-html-parser';
import { CSFDFilmTypes } from '../dto/global';
import { CSFDMovie } from '../dto/movie';
import { fetchPage } from '../fetchers';
import {
  getEpisodeNum,
  getMovieBoxMovies,
  getMovieColorRating,
  getMovieDescriptions,
  getMovieDuration,
  getMovieGenres,
  getMovieGroup,
  getMovieOrigins,
  getMoviePoster,
  getMoviePremieres,
  getMovieRandomPhoto,
  getMovieRating,
  getMovieRatingCount,
  getMovieTags,
  getMovieTitle,
  getMovieTitlesOther,
  getMovieTrivia,
  getMovieType,
  getMovieVods,
  getMovieYear,
} from '../helpers/movie.helper';
import { movieUrl } from '../vars';

export class MovieScraper {
  private film: CSFDMovie;

  public async movie(movieId: number): Promise<CSFDMovie> {
    const id = Number(movieId);
    if (isNaN(id)) {
      throw new Error('node-csfd-api: movieId must be a valid number');
    }
    const url = movieUrl(id);
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
      title: getMovieTitle(el),
      year: getMovieYear(jsonLd),
      duration: getMovieDuration(jsonLd, el),
      descriptions: getMovieDescriptions(el),
      genres: getMovieGenres(el),
      type: getMovieType(el) as CSFDFilmTypes,
      episodeNum: getEpisodeNum(el),
      url: movieUrl(movieId),
      origins: getMovieOrigins(el),
      colorRating: getMovieColorRating(pageClasses),
      rating: getMovieRating(asideEl),
      ratingCount: getMovieRatingCount(asideEl),
      titlesOther: getMovieTitlesOther(el),
      poster: getMoviePoster(el),
      photo: getMovieRandomPhoto(el),
      trivia: getMovieTrivia(el),
      creators: {
        directors: getMovieGroup(el, 'Režie'),
        writers: getMovieGroup(el, 'Scénář'),
        cinematography: getMovieGroup(el, 'Kamera'),
        music: getMovieGroup(el, 'Hudba'),
        actors: getMovieGroup(el, 'Hrají'),
        basedOn: getMovieGroup(el, 'Předloha'),
        producers: getMovieGroup(el, 'Produkce'),
        filmEditing: getMovieGroup(el, 'Střih'),
        costumeDesign: getMovieGroup(el, 'Kostýmy'),
        productionDesign: getMovieGroup(el, 'Scénografie')
      },
      vod: getMovieVods(asideEl),
      tags: getMovieTags(asideEl),
      premieres: getMoviePremieres(asideEl),
      related: getMovieBoxMovies(asideEl, 'Související'),
      similar: getMovieBoxMovies(asideEl, 'Podobné')
    };
  }
}
