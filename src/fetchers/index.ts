import fetch from 'cross-fetch';
import { movieUrl, searchUrl, userRatingsUrl } from '../vars';

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36'
];

const headers = {
  'User-Agent': USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]
};

export const fetchUserRatings = async (
  user: string | number,
  page: number = 1
): Promise<string> => {
  const url = userRatingsUrl(user, page);
  try {
    const response = await fetch(url, { headers });
    if (response.status >= 400 && response.status < 600) {
      throw new Error(`node-csfd-api: Bad response ${response.status} for url: ${url}`);
    }
    return await response.text();
  } catch (e) {
    console.error(e);
    return 'Error';
  }
};

export const fetchMovie = async (movieId: number): Promise<string> => {
  const url = movieUrl(+movieId);
  try {
    const response = await fetch(url, { headers });
    if (response.status >= 400 && response.status < 600) {
      throw new Error(`node-csfd-api: Bad response ${response.status} for url: ${url}`);
    }
    return await response.text();
  } catch (e) {
    console.error(e);
    return 'Error';
  }
};

export const fetchSearch = async (text: string): Promise<string> => {
  const url = searchUrl(text);
  const response = await fetch(url);
  return await response.text();
};
