import { CSFDColorRating } from '../interfaces/global';
import { Colors } from '../interfaces/user-ratings.interface';

export const parseIdFromUrl = (url: string): number => {
  const idSlug = url.split('/')[2];
  const id = idSlug.split('-')[0];
  return +id;
};

export const getColor = (cls: string): CSFDColorRating => {
  switch (cls) {
    case 'page-lightgrey':
      return 'unknown';
    case 'page-red':
      return 'good';
    case 'page-blue':
      return 'average';
    case 'page-grey':
      return 'bad';
    default:
      return 'unknown';
  }
};

export const parseColor = (quality: Colors): CSFDColorRating => {
  switch (quality) {
    case 'lightgrey':
      return 'unknown';
    case 'red':
      return 'good';
    case 'blue':
      return 'average';
    case 'grey':
      return 'bad';
    default:
      return 'unknown';
  }
};
