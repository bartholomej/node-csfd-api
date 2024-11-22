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

export const getName = (el: HTMLElement | null): string => {
  return el.querySelector('h1').innerText.trim();
};

export const getBirthdayInfo = (
  el: HTMLElement | null
): { birthday: string; age: number; birthPlace: string } => {
  const infoBlock = el.querySelector('h1 + p');
  const text = infoBlock?.innerHTML.trim();

  const birthPlaceRow = infoBlock?.querySelector('.info-place')?.innerHTML.trim();
  const ageRow = infoBlock?.querySelector('.info')?.innerHTML.trim();

  let birthday: string = '';

  if (text) {
    const parts = text.split('\n');
    const birthdayRow = parts.find((x) => x.includes('nar.'));
    birthday = birthdayRow ? parseBirthday(birthdayRow) : '';
  }

  const age = ageRow ? +parseAge(ageRow) : null;
  const birthPlace = birthPlaceRow ? parseBirthPlace(birthPlaceRow) : '';

  return { birthday, age, birthPlace };
};

export const getBio = (el: HTMLElement | null): string => {
  return el.querySelector('.article-content p')?.text.trim().split('\n')[0].trim() || null;
};

export const getPhoto = (el: HTMLElement | null): string => {
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

export const getFilms = (el: HTMLElement | null): CSFDCreatorScreening[] => {
  const filmNodes = el.querySelectorAll('.box')[0]?.querySelectorAll('table tr');
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
