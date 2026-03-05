import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../dto/global';
import { CSFDColors } from '../dto/user-ratings';
import { parseColor, parseFilmType, parseIdFromUrl } from './global.helper';

export const getUserRatingId = (el: HTMLElement): number => {
  const url = el.querySelector('td.name .film-title-name').attributes.href;
  return parseIdFromUrl(url);
};

export const getUserRating = (el: HTMLElement): CSFDStars => {
  const ratingText = el.querySelector('td.star-rating-only .stars').classNames.split(' ').pop();

  const rating = ratingText.includes('stars-') ? +ratingText.split('-').pop() : 0;
  return rating as CSFDStars;
};

export const getUserRatingType = (el: HTMLElement): CSFDFilmTypes => {
  const typeNode = el.querySelector('td.name .film-title-info .info ~ .info');

  return parseFilmType(typeNode ? typeNode.text : 'film');
};

export const getUserRatingTitle = (el: HTMLElement): string => {
  return el.querySelector('td.name .film-title-name').text;
};

export const getUserRatingYear = (el: HTMLElement): number => {
  return +el.querySelector('td.name .film-title-info .info')?.text || null;
};

export const getUserRatingColorRating = (el: HTMLElement): CSFDColorRating => {
  const color = parseColor(
    el.querySelector('td.name .icon').classNames.split(' ').pop() as CSFDColors
  );
  return color;
};

export const getUserRatingDate = (el: HTMLElement): string => {
  return el.querySelector('td.date-only').text.trim();
};

export const getUserRatingUrl = (el: HTMLElement): string => {
  const url = el.querySelector('td.name .film-title-name').attributes.href;
  return `https://www.csfd.cz${url}`;
};
