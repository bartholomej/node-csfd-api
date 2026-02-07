import { HTMLElement } from 'node-html-parser';
import { CSFDCreatorScreening } from '../dto/creator';
import { CSFDColorRating } from '../dto/global';
import { CSFDColors } from '../dto/user-ratings';
import { addProtocol, parseColor, parseIdFromUrl } from './global.helper';

const getCreatorColorRating = (el: HTMLElement | null): CSFDColorRating => {
  const classes: string[] = el?.classNames.split(' ') ?? [];
  const last = classes[classes.length - 1] as CSFDColors | undefined;
  return parseColor(last);
};

export const getCreatorId = (url: string | null | undefined): number | null => {
  return url ? parseIdFromUrl(url) : null;
};

export const getCreatorName = (el: HTMLElement | null): string | null => {
  const h1 = el?.querySelector('h1');
  return h1?.innerText?.trim() ?? null;
};

export const getCreatorBirthdayInfo = (
  el: HTMLElement | null
): { birthday: string; age: number; birthPlace: string } => {
  const infoBlock = el.querySelector('.creator-profile-details p');
  const text = infoBlock?.innerHTML.trim();
  const birthPlaceRow = infoBlock?.querySelector('.info-place')?.innerText.trim();
  const ageRow = infoBlock?.querySelector('.info')?.innerText.trim();

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

export const getCreatorBio = (el: HTMLElement | null): string | null => {
  const p = el?.querySelector('.article-content p');
  const first = p?.text?.trim().split('\n')[0]?.trim();
  return first || null;
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

const parseBirthPlace = (text: string): string => text.trim().replace(/<br>/g, '').trim();

export const getCreatorFilms = (el: HTMLElement | null): CSFDCreatorScreening[] => {
  const filmNodes = el?.querySelectorAll('.updated-box')?.[0]?.querySelectorAll('table tr') ?? [];
  let yearCache: number | null = null;

  const films = filmNodes.map((filmNode) => {
    const id = getCreatorId(filmNode.querySelector('td.name .film-title-name')?.attributes?.href);
    const title = filmNode.querySelector('.name')?.text?.trim();
    const yearText = filmNode.querySelector('.year')?.text?.trim();
    const year = yearText ? +yearText : null;
    const colorRating = getCreatorColorRating(filmNode.querySelector('.name .icon'));

    // Cache year from previous film because there is a gap between movies with same year
    if (typeof year === 'number' && !isNaN(year)) {
      yearCache = +year;
    }

    const finalYear = year ?? yearCache;
    if (id != null && title && finalYear != null) {
      return { id, title, year: finalYear, colorRating };
    }
    return null;
  });
  // Remove empty objects
  const filmsUnique = films.filter(Boolean) as CSFDCreatorScreening[];
  return filmsUnique;
};
