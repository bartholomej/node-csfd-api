export const userRatingsUrl = (user: string | number, page?: number): string =>
  `https://www.csfd.cz/uzivatel/${encodeURIComponent(user)}/hodnoceni/${
    page ? '?page=' + page : ''
  }`;

export const movieUrl = (movie: number): string =>
  `https://www.csfd.cz/film/${encodeURIComponent(movie)}`;

export const searchUrl = (text: string): string =>
  `https://www.csfd.cz/hledat/?q=${encodeURIComponent(text)}`;
