import { CSFDScreening } from './global';
import { CSFDCreator } from './movie.interface';

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

export interface CSFDSearchCreator extends CSFDCreator {
  image: string;
}

export interface CSFDSearchUser extends CSFDSearchCreator {}

export interface CSFDSearchCreators {
  directors: CSFDCreator[];
  actors: CSFDCreator[];
}
