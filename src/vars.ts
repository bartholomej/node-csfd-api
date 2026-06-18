import { CSFDCinemaPeriod } from './dto/cinema';
import { extractId } from './helpers/global.helper';
import { CSFDLanguage } from './types';

export const LIB_PREFIX = '[node-csfd-api]';

type Options = {
  language?: CSFDLanguage;
};

// Language to domain mapping
const LANGUAGE_DOMAIN_MAP: Record<CSFDLanguage, string> = {
  cs: 'https://www.csfd.cz',
  en: 'https://www.csfd.cz/en',
  sk: 'https://www.csfd.cz/sk',
};

let BASE_URL = LANGUAGE_DOMAIN_MAP.cs;

export const getBaseUrl = (): string => BASE_URL;
export const setBaseUrl = (language: CSFDLanguage): void => {
  BASE_URL = getUrlByLanguage(language);
};

export const getUrlByLanguage = (language?: CSFDLanguage): string => {
  if (language && language in LANGUAGE_DOMAIN_MAP) {
    return LANGUAGE_DOMAIN_MAP[language];
  }
  return BASE_URL;
};

// User URLs
export const userUrl = (user: string | number, options: Options): string => {
  const id = extractId(user) || user;
  return `${getUrlByLanguage(options?.language)}/uzivatel/${encodeURIComponent(id)}`;
};

export const userRatingsUrl = (user: string | number, page?: number, options: Options = {}): string =>
  `${userUrl(user, options)}/hodnoceni/${page ? '?page=' + page : ''}`;
export const userReviewsUrl = (user: string | number, page?: number, options: Options = {}): string =>
  `${userUrl(user, options)}/recenze/${page ? '?page=' + page : ''}`;

// Movie URLs
export const movieUrl = (movie: number | string, options: Options): string => {
  const id = extractId(movie) || movie;
  return `${getUrlByLanguage(options?.language)}/film/${encodeURIComponent(id)}/prehled/`;
};
// Creator URLs
export const creatorUrl = (creator: number | string, options: Options): string => {
  const id = extractId(creator) || creator;
  return `${getUrlByLanguage(options?.language)}/tvurce/${encodeURIComponent(id)}`;
};

// Cinema URLs
export const cinemasUrl = (district: number | string, period: CSFDCinemaPeriod, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/kino/?period=${period}&district=${district}`;

// Search URLs
export const searchUrl = (text: string, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/hledat/?q=${encodeURIComponent(text)}`;