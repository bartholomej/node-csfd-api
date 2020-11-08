import fetch from 'cross-fetch';
import { userRatingsUrl } from '../vars';

export const fetchUserRatings = async (user: string | number): Promise<string> => {
  const url = userRatingsUrl(user);
  const response = await fetch(url);
  return await response.text();
};
