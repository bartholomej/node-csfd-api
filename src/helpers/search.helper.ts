import { CSFDColorRating, CSFDFilmTypes } from 'interfaces/global';
import { Colors } from 'interfaces/user-ratings.interface';
import { HTMLElement } from 'node-html-parser';
import { parseColor, parseIdFromUrl } from './global.helper';

export const getId = (el: HTMLElement): number => {
  const url = el.querySelector('td.name .film-title-name').attributes.href;
  return parseIdFromUrl(url);
};

export const getType = (el: HTMLElement): CSFDFilmTypes => {
  const type = el.querySelectorAll('.film-title-info .info')[1];
  return (type?.innerText.replace(/[{()}]/g, '') || 'film') as CSFDFilmTypes;
};

export const getTitle = (el: HTMLElement): string => {
  return el.querySelector('.film-title-name').text;
};

export const getYear = (el: HTMLElement): string => {
  return el.querySelectorAll('.film-title-info .info')[0]?.innerText.replace(/[{()}]/g, '');
};

export const getUrl = (el: HTMLElement): string => {
  return el.querySelector('.film-title-name').attributes.href;
};

export const getColorRating = (el: HTMLElement): CSFDColorRating => {
  return parseColor(el.querySelector('.article-header i.icon').classNames.pop() as Colors);
};

export const getPoster = (el: HTMLElement): string => {
  return el.querySelector('img').attributes.src;
};

export const getOrigins = (el: HTMLElement): string[] => {
  const originsRaw = el.querySelector('.article-content p .info').text;
  const origins = originsRaw?.split(', ');
  origins.pop();
  return origins;
};
