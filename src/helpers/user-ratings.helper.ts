import type { HTMLElement } from 'node-html-parser';
import type { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../dto/global';
import type { CSFDColors } from '../dto/user-ratings';
import { parseColor, parseDate, parseFilmType, parseIdFromUrl, parseStars } from './global.helper';

export const getUserRatingId = (el: HTMLElement): number => {
  const url = el.querySelector('td.name .film-title-name').attributes.href;
  return parseIdFromUrl(url);
};

export const getUserRating = (el: HTMLElement): CSFDStars =>
  parseStars(el.querySelector('td.star-rating-only .stars'));

export const getUserRatingType = (el: HTMLElement): CSFDFilmTypes => {
  const typeNode = el.querySelector('td.name .film-title-info .info ~ .info');
  return parseFilmType(typeNode ? typeNode.text : 'film');
};

export const getUserRatingTitle = (el: HTMLElement): string => {
  return el.querySelector('td.name .film-title-name').text;
};

export const getUserRatingYear = (el: HTMLElement): number | null => {
  const yearNode = el.querySelector('td.name .film-title-info .info');
  return yearNode ? +yearNode.text || null : null;
};

export const getUserRatingColorRating = (el: HTMLElement): CSFDColorRating => {
  const color = parseColor(
    el.querySelector('td.name .icon').classNames.split(' ').pop() as CSFDColors
  );
  return color;
};

export const getUserRatingDate = (el: HTMLElement): string => {
  const date = el.querySelector('td.date-only').text.trim();
  return parseDate(date);
};

export const getUserRatingUrl = (el: HTMLElement): string => {
  const url = el.querySelector('td.name .film-title-name').attributes.href;
  return `https://www.csfd.cz${url}`;
};
