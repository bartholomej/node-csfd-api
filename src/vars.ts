import { CSFDChartCategory, CSFDChartType } from './dto/chart';
import { CSFDCinemaPeriod } from './dto/cinema';
import { CSFDLanguage } from './types';

export const LIB_PREFIX = '[node-csfd-api]';

type Options = {
  language?: CSFDLanguage;
};

// Language to domain mapping
const LANGUAGE_DOMAIN_MAP: Record<CSFDLanguage, string> = {
  cs: 'https://www.csfd.cz',
  en: 'https://www.csfd.cz/en',
  sk: 'https://www.csfd.cz/sk'
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
export const userUrl = (user: string | number, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/uzivatel/${encodeURIComponent(user)}`;

// The profile root 404s for a bare ID, its overview page doesn't
export const userProfileUrl = (user: string | number, options: Options = {}): string =>
  `${userUrl(user, options)}/prehled/`;

export const userRatingsUrl = (
  user: string | number,
  page?: number,
  options: Options = {}
): string => `${userUrl(user, options)}/hodnoceni/${page ? '?page=' + page : ''}`;
export const userReviewsUrl = (
  user: string | number,
  page?: number,
  options: Options = {}
): string => `${userUrl(user, options)}/recenze/${page ? '?page=' + page : ''}`;

// Movie URLs
export const movieUrl = (movie: number, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/film/${encodeURIComponent(movie)}/prehled/`;
// Creator URLs
export const creatorUrl = (creator: number | string, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/tvurce/${encodeURIComponent(creator)}`;

// Cinema URLs
export const cinemasUrl = (
  district: number | string,
  period: CSFDCinemaPeriod,
  options: Options
): string => `${getUrlByLanguage(options?.language)}/kino/?period=${period}&district=${district}`;

// Chart URLs, Czech paths in every language: /en/ and /sk/ redirect them to their own
const CHART_TYPES: Record<CSFDChartType, string> = { movies: 'filmy', series: 'serialy' };
const CHART_CATEGORIES: Record<CSFDChartCategory, string> = {
  best: 'nejlepsi',
  worst: 'nejhorsi',
  favorite: 'nejoblibenejsi',
  controversial: 'nejrozporuplnejsi'
};

export const chartUrl = (
  type: CSFDChartType,
  category: CSFDChartCategory,
  from = 0,
  options: Options = {}
): string =>
  `${getUrlByLanguage(options?.language)}/zebricky/${CHART_TYPES[type]}/${CHART_CATEGORIES[category]}/${from ? `?from=${from}` : ''}`;

// Search URLs
export const searchUrl = (text: string, options: Options): string =>
  `${getUrlByLanguage(options?.language)}/hledat/?q=${encodeURIComponent(text)}`;
