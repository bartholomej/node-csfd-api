import { CSFDCinemaPeriod } from './dto/cinema';
import { CSFDLanguage } from './types';

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
export const userUrl = (user: string | number, language?: CSFDLanguage): string =>
  `${getUrlByLanguage(language)}/uzivatel/${encodeURIComponent(user)}`;

export const userRatingsUrl = (user: string | number, page?: number, language?: CSFDLanguage): string =>
  `${userUrl(user, language)}/hodnoceni/${page ? '?page=' + page : ''}`;

export const userReviewsUrl = (user: string | number, page?: number, language?: CSFDLanguage): string =>
  `${userUrl(user, language)}/recenze/${page ? '?page=' + page : ''}`;

// Movie URLs
export const movieUrl = (movie: number, language?: CSFDLanguage): string =>
  `${getUrlByLanguage(language)}/film/${encodeURIComponent(movie)}/prehled/`;

// Creator URLs
export const creatorUrl = (creator: number | string, language?: CSFDLanguage): string =>
  `${getUrlByLanguage(language)}/tvurce/${encodeURIComponent(creator)}`;

// Cinema URLs
export const cinemasUrl = (district: number | string, period: CSFDCinemaPeriod, language?: CSFDLanguage): string =>
  `${getUrlByLanguage(language)}/kino/?period=${period}&district=${district}`;

// Search URLs
export const searchUrl = (text: string, language?: CSFDLanguage): string =>
  `${getUrlByLanguage(language)}/hledat/?q=${encodeURIComponent(text)}`;
