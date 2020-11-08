import { CSFDScreening, CSFDStars } from './global';

export interface CSFDUserRatings extends CSFDScreening {
  rating: CSFDStars;
  date?: string; // TODO datetime
}
