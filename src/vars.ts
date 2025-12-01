import { CSFDCinemaPeriod } from './dto/cinema';
import { CSFDLanguage } from './types';

type Options = {
  language?: CSFDLanguage;
};

// Language to domain mapping
const LANGUAGE_DOMAIN_MAP: Record<CSFDLanguage, string> = {
  cs: 'https://www.csfd.cz',
  en: 'https://www.filmbooster.com',
  sk: 'https://www.csfd.sk',
};

let BASE_URL = LANGUAGE_DOMAIN_MAP.cs;

export const getLanguage = (): string => BASE_URL;
export const setLanguage = (url: string): void => {
  BASE_URL = url;
};

const getUrlByLanguage = (language?: CSFDLanguage): string => {
  if (language && language in LANGUAGE_DOMAIN_MAP) {
    return LANGUAGE_DOMAIN_MAP[language];
  }
  return BASE_URL;
};

// User URLs
export const userUrl = (user: string | number, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/uzivatel/${encodeURIComponent(user)}`;

export const userRatingsUrl = (user: string | number, page?: number, options: Options = {}): string =>
  `${userUrl(user, options)}/hodnoceni/${page ? '?page=' + page : ''}`;
export const userReviewsUrl = (user: string | number, page?: number, options: Options = {}): string =>
  `${userUrl(user, options)}/recenze/${page ? '?page=' + page : ''}`;

// Movie URLs
export const movieUrl = (movie: number, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/film/${encodeURIComponent(movie)}/prehled/`;
// Creator URLs
export const creatorUrl = (creator: number | string, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/tvurce/${encodeURIComponent(creator)}`;

// Cinema URLs
export const cinemasUrl = (district: number | string, period: CSFDCinemaPeriod, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/kino/?period=${period}&district=${district}`;

// Search URLs
export const searchUrl = (text: string, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/hledat/?q=${encodeURIComponent(text)}`;