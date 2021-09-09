export const userRatingsUrl = (user: string | number, page?: number): string =>
  `https://www.csfd.cz/uzivatel/${encodeURIComponent(user)}/hodnoceni/${
    page ? '?page=' + page : ''
  }`;

export const movieUrl = (movie: number): string =>
  `https://www.csfd.cz/film/${encodeURIComponent(movie)}`;

export const creatorUrl = (creator: number | string): string =>
  `https://www.csfd.cz/tvurce/${encodeURIComponent(creator)}`;

export const searchUrl = (text: string): string =>
  `https://www.csfd.cz/hledat/?q=${encodeURIComponent(text)}`;
