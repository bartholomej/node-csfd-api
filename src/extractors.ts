import { HTMLElement } from 'node-html-parser';
import { CSFDFilmTypes } from './interfaces';

export const getRating = (el: HTMLElement): number => {
  const ratingText = el.querySelector('td .rating').attributes.alt;
  return ratingText ? ratingText.length : 0;
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

export const getQuality = (el: HTMLElement): number => {
  return +el.querySelector('td a.film').classNames[1].slice(1, 2);
};

export const getDate = (el: HTMLElement): string => {
  return el.querySelectorAll('td')[2].rawText;
};

export const getUrl = (el: HTMLElement): string => {
  console.log(el.querySelector('td a.film'));
  return 'https://www.csfd.cz'; // TODO
};
