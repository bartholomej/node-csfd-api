import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../interfaces/global';
import { parseIdFromUrl } from './global.helper';

export const getId = (el: HTMLElement): number => {
  const url = el.querySelector('td a.film').rawAttributes.href;
  return parseIdFromUrl(url);
};

export const getRating = (el: HTMLElement): CSFDStars => {
  const ratingText = el.querySelector('td .rating').attributes.alt;
  const rating = ratingText ? ratingText.length : 0;
  return rating as CSFDStars;
};

export const getType = (el: HTMLElement): CSFDFilmTypes => {
  const typeText = el.querySelector('td .film-type');
  return (typeText ? typeText.innerText.slice(1, -1) : 'film') as CSFDFilmTypes;
};

export const getTitle = (el: HTMLElement): string => {
  return el.querySelector('td .film').text;
};

export const getYear = (el: HTMLElement): number => {
  return +el.querySelector('td .film-year').innerText.slice(1, -1);
};

export const getColorRating = (el: HTMLElement): CSFDColorRating => {
  return parseColor(+el.querySelector('td a.film').classNames[1].slice(1, 2));
};

export const getDate = (el: HTMLElement): string => {
  return el.querySelectorAll('td')[2].rawText;
};

export const getUrl = (el: HTMLElement): string => {
  const url = el.querySelector('td a.film').rawAttributes.href;
  return `https://www.csfd.cz${url}`;
};

export const parseColor = (quality: number): CSFDColorRating => {
  switch (quality) {
    case 0:
      return 'unknown';
    case 1:
      return 'good';
    case 2:
      return 'average';
    case 3:
      return 'bad';
    default:
      return 'unknown';
  }
};
