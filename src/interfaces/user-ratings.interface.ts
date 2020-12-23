import { CSFDScreening, CSFDStars } from './global';

export interface CSFDUserRatings extends CSFDScreening {
  userRating: CSFDStars;
  userDate: string; // TODO datetime
}

export type Colors = 'lightgrey' | 'blue' | 'red' | 'black';
