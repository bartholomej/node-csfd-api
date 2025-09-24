import { HTMLElement } from 'node-html-parser';
import { CSFDCreatorScreening } from '../dto/creator';
import { CSFDColorRating } from '../dto/global';
import { Colors } from '../dto/user-ratings';
import { addProtocol, parseColor, parseIdFromUrl } from './global.helper';

const getCreatorColorRating = (el: HTMLElement): CSFDColorRating => {
  return parseColor(el?.classNames.split(' ').pop() as Colors);
};

export const getCreatorId = (url: string): number | null => {
  if (url) {
    return parseIdFromUrl(url);
  }
  return null;
}

export const getCreatorName = (el: HTMLElement | null): string => {
  return el.querySelector('h1').innerText.trim();
};

export const getCreatorBirthdayInfo = (
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

export const getCreatorBio = (el: HTMLElement | null): string => {
  return el.querySelector('.article-content p')?.text.trim().split('\n')[0].trim() || null;
};

export const getCreatorPhoto = (el: HTMLElement | null): string | null => {
  const src = el?.querySelector('img')?.getAttribute('src');
  return src ? addProtocol(src) : null;
};

const parseBirthday = (text: string): string => text.replace(/nar\./g, '').trim();

const parseAge = (text: string): number | null => {
  const digits = text.replace(/[^\d]/g, '');
  return digits ? Number(digits) : null;
};

const parseBirthPlace = (text: string): string =>
  text.trim().replace(/<br>/g, '').trim();


export const getCreatorFilms = (el: HTMLElement | null): CSFDCreatorScreening[] => {
  const filmNodes = el.querySelectorAll('.box')[0]?.querySelectorAll('table tr');
  let yearCache: number;
  const films = filmNodes.map((filmNode) => {
    const id = getCreatorId(filmNode.querySelector('td.name .film-title-name')?.attributes.href);
    const title = filmNode.querySelector('.name')?.text.trim();
    const year = +filmNode.querySelector('.year')?.text.trim();
    const colorRating = getCreatorColorRating(filmNode.querySelector('.name .icon'));

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
