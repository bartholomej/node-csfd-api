import fetch from 'cross-fetch';
import { movieUrl, userRatingsUrl } from '../vars';

export const fetchUserRatings = async (user: string | number): Promise<string> => {
  const url = userRatingsUrl(user);
  const response = await fetch(url);
  return await response.text();
};

export const fetchMovie = async (movie: string | number): Promise<string> => {
  const url = movieUrl(movie);
  const response = await fetch(url);
  return await response.text();
};
