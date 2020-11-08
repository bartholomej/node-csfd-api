export const userRatingsUrl = (user: string | number): string =>
  `https://www.csfd.cz/uzivatel/${encodeURIComponent(user)}/hodnoceni/`;

export const movieUrl = (movie: string | number): string =>
  `https://www.csfd.cz/film/${encodeURIComponent(movie)}`;
