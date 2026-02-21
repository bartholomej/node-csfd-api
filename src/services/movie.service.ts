import { HTMLElement, parse } from 'node-html-parser';
import { CSFDFilmTypes } from '../dto/global';
import { CSFDMovie } from '../dto/movie';
import { fetchPage } from '../fetchers';
import {
  getLocalizedCreatorLabel,
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
  MovieJsonLd
} from '../helpers/movie.helper';
import { CSFDOptions } from '../types';
import { movieUrl } from '../vars';

export class MovieScraper {
  public async movie(movieId: number, options?: CSFDOptions): Promise<CSFDMovie> {
    const id = Number(movieId);
    if (isNaN(id)) {
      throw new Error('node-csfd-api: movieId must be a valid number');
    }
    const url = movieUrl(id, { language: options?.language });
    const response = await fetchPage(url, { ...options?.request });

    const movieHtml = parse(response);

    const pageClasses = movieHtml.querySelector('.page-content').classNames.split(' ');
    const asideNode = movieHtml.querySelector('.aside-movie-profile');
    const movieNode = movieHtml.querySelector('.main-movie-profile');
    const jsonLdString = movieHtml.querySelector('script[type="application/ld+json"]').innerText;
    let jsonLd: MovieJsonLd | null = null;
    try {
      jsonLd = JSON.parse(jsonLdString);
    } catch (e) {
      // ignore
    }
    return this.buildMovie(
      +movieId,
      movieNode,
      asideNode,
      pageClasses,
      jsonLd || jsonLdString,
      options
    );
  }

  private buildMovie(
    movieId: number,
    el: HTMLElement,
    asideEl: HTMLElement,
    pageClasses: string[],
    jsonLd: MovieJsonLd | string,
    options: CSFDOptions
  ): CSFDMovie {
    return {
      id: movieId,
      title: getMovieTitle(el),
      year: getMovieYear(jsonLd),
      duration: getMovieDuration(jsonLd, el),
      descriptions: getMovieDescriptions(el),
      genres: getMovieGenres(el),
      type: getMovieType(el) as CSFDFilmTypes,
      url: movieUrl(movieId, { language: options?.language }),
      origins: getMovieOrigins(el),
      colorRating: getMovieColorRating(pageClasses),
      rating: getMovieRating(asideEl),
      ratingCount: getMovieRatingCount(asideEl),
      titlesOther: getMovieTitlesOther(el),
      poster: getMoviePoster(el),
      photo: getMovieRandomPhoto(el),
      trivia: getMovieTrivia(el),
      creators: {
        directors: getMovieGroup(el, getLocalizedCreatorLabel(options?.language, 'directors')),
        writers: getMovieGroup(el, getLocalizedCreatorLabel(options?.language, 'writers')),
        cinematography: getMovieGroup(
          el,
          getLocalizedCreatorLabel(options?.language, 'cinematography')
        ),
        music: getMovieGroup(el, getLocalizedCreatorLabel(options?.language, 'music')),
        actors: getMovieGroup(el, getLocalizedCreatorLabel(options?.language, 'actors')),
        basedOn: getMovieGroup(el, getLocalizedCreatorLabel(options?.language, 'basedOn')),
        producers: getMovieGroup(el, getLocalizedCreatorLabel(options?.language, 'producers')),
        filmEditing: getMovieGroup(el, getLocalizedCreatorLabel(options?.language, 'filmEditing')),
        costumeDesign: getMovieGroup(
          el,
          getLocalizedCreatorLabel(options?.language, 'costumeDesign')
        ),
        productionDesign: getMovieGroup(
          el,
          getLocalizedCreatorLabel(options?.language, 'productionDesign')
        )
      },
      vod: getMovieVods(asideEl),
      tags: getMovieTags(asideEl),
      premieres: getMoviePremieres(asideEl),
      related: getMovieBoxMovies(asideEl, 'Související'),
      similar: getMovieBoxMovies(asideEl, 'Podobné')
    };
  }
}
