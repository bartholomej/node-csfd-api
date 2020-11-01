export const userRatingsUrl = (user: string | number): string =>
  `https://www.csfd.cz/uzivatel/${encodeURIComponent(user)}/hodnoceni/`;
