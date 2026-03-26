import { HTMLElement, parse } from 'node-html-parser';
import { CSFDFilmTypes } from '../dto/global';
import { CSFDMovie, MovieJsonLd } from '../dto/movie';
import { fetchPage } from '../fetchers';
import {
  detectSeasonOrEpisodeListType,
  getEpisodeCode,
  getMovieBoxMovies,
  getMovieColorRating,
  getMovieCreators,
  getMovieDescriptions,
  getMovieDuration,
  getMovieGenres,
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
  getSeasonOrEpisodeParent,
  getSeasonsOrEpisodes,
  getSeriesAndSeasonTitle
} from '../helpers/movie.helper';
import { CSFDOptions } from '../types';
import { LIB_PREFIX, movieUrl } from '../vars';

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
    const jsonLdString = movieHtml.querySelector('script[type="application/ld+json"]')?.textContent;
    let jsonLd: MovieJsonLd | null = null;
    try {
      jsonLd = JSON.parse(jsonLdString);
    } catch (e) {
      console.error(LIB_PREFIX + ' Error parsing JSON-LD', e);
    }
    return this.buildMovie(+movieId, movieHtml, movieNode as HTMLElement, asideNode as HTMLElement, pageClasses, jsonLd, options);
  }

  private buildMovie(
    movieId: number,
    movieHtml: HTMLElement,
    el: HTMLElement,
    asideEl: HTMLElement,
    pageClasses: string[],
    jsonLd: MovieJsonLd | null,
    options: CSFDOptions
  ) {
    const type = getMovieType(el) as CSFDFilmTypes;
    const { seriesName = null, seasonName = null } =
      type === 'season' ? getSeriesAndSeasonTitle(el) : {};
    const seasonOrEpisodeListType = detectSeasonOrEpisodeListType(movieHtml);

    const title = type === 'season' && seriesName ? seriesName : getMovieTitle(el);
    return {
      id: movieId,
      title,
      year: getMovieYear(jsonLd),
      duration: getMovieDuration(jsonLd, el),
      descriptions: getMovieDescriptions(el),
      genres: getMovieGenres(el),
      type,
      url: movieUrl(movieId, { language: options?.language }),
      origins: getMovieOrigins(el),
      colorRating: getMovieColorRating(pageClasses),
      rating: getMovieRating(asideEl),
      ratingCount: getMovieRatingCount(asideEl),
      titlesOther: getMovieTitlesOther(el),
      poster: getMoviePoster(el),
      photo: getMovieRandomPhoto(el),
      trivia: getMovieTrivia(el),
      creators: getMovieCreators(el, options),
      vod: getMovieVods(el),
      tags: getMovieTags(asideEl),
      premieres: getMoviePremieres(asideEl),
      related: getMovieBoxMovies(asideEl, 'Související'),
      similar: getMovieBoxMovies(asideEl, 'Podobné'),
      seasons: seasonOrEpisodeListType === 'seasons' ? getSeasonsOrEpisodes(movieHtml) : null,
      episodes: seasonOrEpisodeListType === 'episodes' ? getSeasonsOrEpisodes(movieHtml) : null,
      parent: type === 'season' || type === 'episode' ? getSeasonOrEpisodeParent(el) : null,
      episodeCode: type === 'episode' ? getEpisodeCode(el) : null,
      seasonName
    };
  }
}
