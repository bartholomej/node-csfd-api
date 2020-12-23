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
  const url = el.querySelector('.tabs .tab-nav-list a').attributes.href;
  return parseIdFromUrl(url);
};

export const getTitle = (el: HTMLElement): string => {
  return el.querySelector('h1').innerText.split(`(`)[0].trim();
};

export const getGenres = (el: HTMLElement): CSFDGenres[] => {
  const genresRaw = el.querySelector('.genres').text;
  return genresRaw.split(' / ') as CSFDGenres[];
};

export const getOrigins = (el: HTMLElement): string[] => {
  const originsRaw = el.querySelector('.origin').text;
  const origins = originsRaw.split(',')[0];
  return origins.split(' / ');
};

export const getColorRating = (bodyClasses: string[]): CSFDColorRating => {
  switch (bodyClasses[1]) {
    case 'page-lightgrey':
      return 'unknown';
    case 'page-red':
      return 'good';
    case 'page-blue':
      return 'average';
    case 'page-grey':
      return 'bad';
    default:
      return 'unknown';
  }
};

export const getRating = (el: HTMLElement): number => {
  const ratingRaw = el.querySelector('.rating-average').text;
  const rating = +ratingRaw?.replace(/%/g, '').trim();
  if (Number.isInteger(rating)) {
    return rating;
  } else {
    return null;
  }
};

export const getYear = (el: HTMLElement): string | number => {
  return el.querySelector('.origin span').innerText;
};

export const getOtherTitles = (el: HTMLElement): CSFDOtherTitles[] => {
  const namesNode = el.querySelectorAll('.film-names li');
  return namesNode.map((el) => {
    const country = el.querySelector('img.flag').attributes.alt;
    const title = el.text.trim().split('\n')[0];
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
  return el.querySelector('.film-posters img').attributes.src;
};

export const getDescriptions = (el: HTMLElement): string[] => {
  // TODO more plots
  return [
    el
      .querySelector('.body--plots .plot-preview p')
      .text.trim()
      .replace(/(\r\n|\n|\r|\t)/gm, '')
  ];
};

export const getDirectors = (el: HTMLElement): CSFDCreator[] => {
  const creators = el.querySelectorAll('.creators span');
  const directorsSpan = creators.filter((creator) => creator.attributes.itemprop === 'director')[0];
  return (directorsSpan && parsePeople(directorsSpan)) || [];
};

export const parsePeople = (el: HTMLElement): CSFDCreator[] => {
  const people = el.querySelectorAll('a');
  return (
    people
      // Filter out "more" links
      .filter((x) => x.classNames.length === 0)
      .map((person) => {
        return {
          id: parseIdFromUrl(person.attributes.href),
          name: person.innerText.trim(),
          url: `https://www.csfd.cz${person.attributes.href}`
        };
      })
  );
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

export const getBoxContent = (el: HTMLElement, box: string): HTMLElement => {
  const headers = el.querySelectorAll('section.box .box-header h3');
  return headers.find((header) => header.text.trim().includes(box));
};

export const getTags = (el: HTMLElement): string[] => {
  // const tagsRaw = getBoxContent(el, 'Tagy');
  const tagsRaw = el.querySelectorAll('.tags .content a');
  return tagsRaw.map((elem) => elem.text.trim());
};
