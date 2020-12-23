export const userRatingsUrl = (user: string | number): string =>
  `https://new.csfd.cz/uzivatel/${encodeURIComponent(user)}/hodnoceni/`;

export const movieUrl = (movie: number): string =>
  `https://new.csfd.cz/film/${encodeURIComponent(movie)}`;
