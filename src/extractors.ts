import { HTMLElement } from 'node-html-parser';
import { CSFDFilmOverallRating, CSFDFilmTypes, CSFDStars } from './interfaces';

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

export const getOverallRating = (el: HTMLElement): CSFDFilmOverallRating => {
  return +el.querySelector('td a.film').classNames[1].slice(1, 2) as CSFDFilmOverallRating;
};

export const getDate = (el: HTMLElement): string => {
  return el.querySelectorAll('td')[2].rawText;
};

export const getUrl = (el: HTMLElement): string => {
  const url = el.querySelector('td a.film')?.rawAttributes.href;
  return `https://www.csfd.cz${url}`;
};
