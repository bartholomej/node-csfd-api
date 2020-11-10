import { CSFDColorRating } from 'interfaces/global';
import {
  CSFDCreator,
  CSFDCreatorGroups,
  CSFDGenres,
  CSFDOtherTitles
} from 'interfaces/movie.interface';
import { HTMLElement } from 'node-html-parser';
import { parseIdFromUrl } from './global.helper';

export const getId = (el: HTMLElement): number => {
  const url = el.querySelector('.navigation a').attributes.href;
  return parseIdFromUrl(url);
};

export const getTitle = (el: HTMLElement): string => {
  return el.querySelector('h1').innerText.split(`(`)[0].trim();
};

export const getGenres = (el: HTMLElement): CSFDGenres[] => {
  const genresRaw = el.querySelector('.genre').text;
  return genresRaw.split(' / ') as CSFDGenres[];
};

export const getOrigins = (el: HTMLElement): string[] => {
  const originsRaw = el.querySelector('.origin').text;
  const origins = originsRaw.split(',')[0];
  return origins.split(' / ');
};

export const getColorRating = (bodyClasses: string[]): CSFDColorRating => {
  const colorRatingClass = bodyClasses.find((cls) => cls.includes('th'));
  switch (colorRatingClass) {
    case 'th-0':
      return 'unknown';
    case 'th-1':
      return 'good';
    case 'th-2':
      return 'average';
    case 'th-3':
      return 'bad';
    default:
      return 'unknown';
  }
};

export const getRating = (el: HTMLElement): number => {
  const ratingRaw = el.querySelector('#rating .average').text;
  if (ratingRaw !== '') {
    return +ratingRaw.replace(/%/g, '');
  } else {
    return null;
  }
};

export const getYear = (el: HTMLElement): string | number => {
  return el.querySelector('.origin span').innerText;
};

export const getOtherTitles = (el: HTMLElement): CSFDOtherTitles[] => {
  const namesNode = el.querySelectorAll('ul.names li');
  return namesNode.map((el) => {
    const country = el.querySelector('img').attributes.alt;
    const title = el.querySelector('h3').text;
    if (country && title) {
      return {
        country,
        title
      };
    } else {
      return null;
    }
  });
};

export const getPoster = (el: HTMLElement): string => {
  return el.querySelector('#poster img').attributes.src;
};

export const getDescriptions = (el: HTMLElement): string[] => {
  return el.querySelectorAll('#plots ul li').map((desc) => desc.text.trim());
};

export const getDirectors = (el: HTMLElement): CSFDCreator[] => {
  const creators = el.querySelectorAll('.creators span');
  const directorsSpan = creators.filter((creator) => creator.attributes.itemprop === 'director')[0];
  return (directorsSpan && parsePeople(directorsSpan)) || [];
};

export const parsePeople = (el: HTMLElement): CSFDCreator[] => {
  const people = el.querySelectorAll('a');
  return people.map((person) => {
    return {
      id: parseIdFromUrl(person.attributes.href),
      name: person.innerText.trim(),
      url: `https://www.csfd.cz${person.attributes.href}`
    };
  });
};

export const getGroup = (el: HTMLElement, group: CSFDCreatorGroups): CSFDCreator[] => {
  const creators = el.querySelectorAll('.creators h4');
  const element = creators.filter((elem) => elem.text.trim().includes(group))[0];
  if (element?.parentNode) {
    return parsePeople(element.parentNode as HTMLElement);
  } else {
    return [];
  }
};

export const getType = (el: HTMLElement): string => {
  const type = el.querySelector('.film-type');
  return type?.innerText?.replace(/[{()}]/g, '') || 'film';
};
