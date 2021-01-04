import fetch from 'cross-fetch';
import { movieUrl, userRatingsUrl } from '../vars';

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36'
];

const headers = {
  'User-Agent': USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]
};

export const fetchUserRatings = async (user: string | number, page?: number): Promise<string> => {
  const url = userRatingsUrl(user, page);
  const response = await fetch(url, { headers });
  return await response.text();
};

export const fetchMovie = async (movieId: number): Promise<string> => {
  const url = movieUrl(+movieId);
  const response = await fetch(url, { headers });
  return await response.text();
};
