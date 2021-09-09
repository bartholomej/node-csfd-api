import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes } from '../interfaces/global';
import { CSFDCreator } from '../interfaces/movie.interface';
import { Colors } from '../interfaces/user-ratings.interface';
import { parseColor, parseIdFromUrl } from './global.helper';

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
  return parseColor(
    el.querySelector('.article-header i.icon').classNames.split(' ').pop() as Colors
  );
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

export const parsePeople = (el: HTMLElement, type: 'director' | 'actors'): CSFDCreator[] => {
  const people = el.querySelectorAll(`.article-content .${type} a`);
  return people.map((person) => {
    return {
      id: parseIdFromUrl(person.attributes.href),
      name: person.innerText.trim(),
      url: `https://www.csfd.cz${person.attributes.href}`
    };
  });
};
