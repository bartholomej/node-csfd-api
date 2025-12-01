import { CSFDCinemaPeriod } from './dto/cinema';

const BASE_URL = 'https://www.csfd.cz';

// User URLs
export const userUrl = (user: string | number): string =>
  `${BASE_URL}/uzivatel/${encodeURIComponent(user)}`;

export const userRatingsUrl = (user: string | number, page?: number): string =>
  `${userUrl(user)}/hodnoceni/${page ? '?page=' + page : ''}`;

export const userReviewsUrl = (user: string | number, page?: number): string =>
  `${userUrl(user)}/recenze/${page ? '?page=' + page : ''}`;

// Movie URLs
export const movieUrl = (movie: number): string =>
  `${BASE_URL}/film/${encodeURIComponent(movie)}/prehled/`;

// Creator URLs
export const creatorUrl = (creator: number | string): string =>
  `${BASE_URL}/tvurce/${encodeURIComponent(creator)}`;

// Cinema URLs
export const cinemasUrl = (district: number | string, period: CSFDCinemaPeriod): string =>
  `${BASE_URL}/kino/?period=${period}&district=${district}`;

// Search URLs
export const searchUrl = (text: string): string =>
  `${BASE_URL}/hledat/?q=${encodeURIComponent(text)}`;
