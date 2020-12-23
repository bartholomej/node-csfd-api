import fetch from 'cross-fetch';
import { movieUrl, userRatingsUrl } from '../vars';

export const fetchUserRatings = async (user: string | number): Promise<string> => {
  const url = userRatingsUrl(user);
  const response = await fetch(url);
  return await response.text();
};

export const fetchMovie = async (movieId: number): Promise<string> => {
  const url = movieUrl(+movieId);
  const response = await fetch(url);
  return await response.text();
};
