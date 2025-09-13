import { CSFDScreening } from './global';
import { CSFDMovieCreator } from './movie';

export interface CSFDSearch {
  movies: CSFDSearchMovie[];
  tvSeries: CSFDSearchMovie[];
  creators: CSFDSearchCreator[];
  users: CSFDSearchUser[];
}

export interface CSFDSearchMovie extends CSFDScreening {
  poster: string;
  origins: string[];
  creators: CSFDSearchCreators;
}

export interface CSFDSearchUser {
  id: number;
  user: string;
  userRealName: string;
  avatar: string;
  url: string;
}

export interface CSFDSearchCreator extends CSFDMovieCreator {
  image: string;
}

export interface CSFDSearchCreators {
  directors: CSFDMovieCreator[];
  actors: CSFDMovieCreator[];
}
