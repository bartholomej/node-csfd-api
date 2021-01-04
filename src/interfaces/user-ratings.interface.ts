import { CSFDFilmTypes, CSFDScreening, CSFDStars } from './global';

export interface CSFDUserRatings extends CSFDScreening {
  userRating: CSFDStars;
  userDate: string; // TODO datetime
}

export interface CSFDUserRatingConfig {
  includesOnly?: CSFDFilmTypes[];
  excludes?: CSFDFilmTypes[];
  allPages?: boolean;
}

export type Colors = 'lightgrey' | 'blue' | 'red' | 'grey';
