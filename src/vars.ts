export const userRatingsUrl = (user: string | number, page?: number): string =>
  `https://new.csfd.cz/uzivatel/${encodeURIComponent(user)}/hodnoceni/${
    page ? '?page=' + page : ''
  }`;

export const movieUrl = (movie: number): string =>
  `https://new.csfd.cz/film/${encodeURIComponent(movie)}`;

export const searchUrl = (text: string): string =>
  `https://new.csfd.cz/hledat/?q=${encodeURIComponent(text)}`;
