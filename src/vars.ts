import { CSFDCinemaPeriod } from './dto/cinema';

const DEFAULT_BASE_URL = 'https://www.csfd.cz';

let BASE_URL = DEFAULT_BASE_URL;

export const getBaseUrl = (): string => BASE_URL;
export const setBaseUrl = (url: string): void => {
  BASE_URL = url;
};

// User URLs
export const userUrl = (user: string | number, baseUrl?: string): string =>
  `${baseUrl || BASE_URL}/uzivatel/${encodeURIComponent(user)}`;

export const userRatingsUrl = (user: string | number, page?: number, baseUrl?: string): string =>
  `${userUrl(user, baseUrl)}/hodnoceni/${page ? '?page=' + page : ''}`;

export const userReviewsUrl = (user: string | number, page?: number, baseUrl?: string): string =>
  `${userUrl(user, baseUrl)}/recenze/${page ? '?page=' + page : ''}`;

// Movie URLs
export const movieUrl = (movie: number, baseUrl?: string): string =>
  `${baseUrl || BASE_URL}/film/${encodeURIComponent(movie)}/prehled/`;

// Creator URLs
export const creatorUrl = (creator: number | string, baseUrl?: string): string =>
  `${baseUrl || BASE_URL}/tvurce/${encodeURIComponent(creator)}`;

// Cinema URLs
export const cinemasUrl = (district: number | string, period: CSFDCinemaPeriod, baseUrl?: string): string =>
  `${baseUrl || BASE_URL}/kino/?period=${period}&district=${district}`;

// Search URLs
export const searchUrl = (text: string, baseUrl?: string): string =>
  `${baseUrl || BASE_URL}/hledat/?q=${encodeURIComponent(text)}`;
