import { Languages } from 'interfaces/global';

export const userRatingsUrl = (user: string | number, page?: number): string =>
  `https://www.csfd.cz/uzivatel/${encodeURIComponent(user)}/hodnoceni/${
    page ? '?page=' + page : ''
  }`;

export const movieUrl = (movie: number, tld: Languages = 'cz'): string =>
  `https://www.csfd.${tld}/film/${encodeURIComponent(movie)}`;

export const searchUrl = (text: string, tld: Languages = 'cz'): string =>
  `https://www.csfd.${tld}/hledat/?q=${encodeURIComponent(text)}`;
