import { HTMLElement } from 'node-html-parser';
import { CSFDCreatorScreening } from '../interfaces/creator.interface';
import { CSFDColorRating } from '../interfaces/global';
import { Colors } from '../interfaces/user-ratings.interface';
import { addProtocol, parseColor, parseIdFromUrl } from './global.helper';

export const getColorRating = (el: HTMLElement): CSFDColorRating => {
  return parseColor(el?.classNames.split(' ').pop() as Colors);
};

export const getId = (url: string): number => {
  if (url) {
    return parseIdFromUrl(url);
  }
  return null;
};

export const getName = (el: HTMLElement): string => {
  return el.querySelector('h1').innerText.trim();
};

export const getBirthdayInfo = (
  el: HTMLElement
): { birthday: string; age: number; birthPlace: string } => {
  const text = el.querySelector('h1 + p').innerHTML.trim();
  const parts = text.split('\n');
  let birthday: string = null;
  let age: number = null;
  let birthPlace: string = null;

  if (parts.length) {
    const birthdayRow = parts.find((x) => x.includes('nar.'));
    const ageRow = parts.find((x) => x.includes('let)'));
    const birthPlaceRow = parts.find((x) => x.includes('<br>')); // Ugly but there is no other way to detect

    birthday = birthdayRow ? parseBirthday(birthdayRow) : null;
    age = ageRow ? +parseAge(ageRow) : null;
    birthPlace = birthPlaceRow ? parseBirthPlace(birthPlaceRow) : null;
  }
  return { birthday, age, birthPlace };
};

export const getBio = (el: HTMLElement): string => {
  return el.querySelector('.article-content p').text.trim().split('\n')[0].trim();
};

export const getPhoto = (el: HTMLElement): string => {
  const image = el.querySelector('img').attributes.src;
  return addProtocol(image);
};

export const parseBirthday = (text: string): any => {
  return text.replace(/nar./g, '').trim();
};

export const parseAge = (text: string): any => {
  return text.trim().replace(/\(/g, '').replace(/let\)/g, '').trim();
};

export const parseBirthPlace = (text: string): any => {
  return text.trim().replace(/<br>/g, '').trim();
};

export const getFilms = (el: HTMLElement): CSFDCreatorScreening[] => {
  const filmNodes = el.querySelectorAll('.box:first-of-type table tr');
  let yearCache: number;
  const films = filmNodes.map((filmNode) => {
    const id = getId(filmNode.querySelector('td.name .film-title-name')?.attributes.href);
    const title = filmNode.querySelector('.name')?.text.trim();
    const year = +filmNode.querySelector('.year')?.text.trim();
    const colorRating = getColorRating(filmNode.querySelector('.name .icon'));

    // Cache year from previous film because there is a gap between movies with same year
    if (year) {
      yearCache = +year;
    }

    if (id && title) {
      return {
        id,
        title,
        year: year || yearCache,
        colorRating
      };
    }
    return {};
  });
  // Remove empty objects
  const filmsUnique = films.filter(
    (value) => Object.keys(value).length !== 0
  ) as CSFDCreatorScreening[];
  return filmsUnique;
};
