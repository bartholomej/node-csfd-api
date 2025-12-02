import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes } from '../dto/global';
import { CSFDMovieCreator } from '../dto/movie';
import { CSFDColors } from '../dto/user-ratings';
import { addProtocol, parseColor, parseIdFromUrl } from './global.helper';

type Creator = 'Režie:' | 'Hrají:';

export const getSearchType = (el: HTMLElement): CSFDFilmTypes => {
  const type = el.querySelectorAll('.film-title-info .info')[1];
  return (type?.innerText?.replace(/[{()}]/g, '')?.trim() || 'film') as CSFDFilmTypes;
};

export const getSearchTitle = (el: HTMLElement): string => {
  return el.querySelector('.film-title-name').text;
};

export const getSearchYear = (el: HTMLElement): number => {
  return +el.querySelectorAll('.film-title-info .info')[0]?.innerText.replace(/[{()}]/g, '');
};

export const getSearchUrl = (el: HTMLElement): string => {
  return el.querySelector('.film-title-name').attributes.href;
};

export const getSearchColorRating = (el: HTMLElement): CSFDColorRating => {
  return parseColor(
    el.querySelector('.article-header i.icon').classNames.split(' ').pop() as CSFDColors
  );
};

export const getSearchPoster = (el: HTMLElement): string => {
  const image = el.querySelector('img').attributes.src;
  return addProtocol(image);
};

export const getSearchOrigins = (el: HTMLElement): string[] => {
  const originsRaw = el.querySelector('.article-content p .info')?.text;
  if (!originsRaw) return [];
  const originsAll = originsRaw?.split(', ')?.[0];
  return originsAll?.split('/').map((country) => country.trim());
};

export const parseSearchPeople = (el: HTMLElement, type: 'directors' | 'actors'): CSFDMovieCreator[] => {
  let who: Creator;
  if (type === 'directors') who = 'Režie:';
  if (type === 'actors') who = 'Hrají:';

  const peopleNode = Array.from(el && el.querySelectorAll('.article-content p')).find((el) =>
    el.textContent.includes(who)
  );

  if (peopleNode) {
    const people = Array.from(peopleNode.querySelectorAll('a')) as unknown as HTMLElement[];

    return people.map((person) => {
      return {
        id: parseIdFromUrl(person.attributes.href),
        name: person.innerText.trim(),
        url: `https://www.csfd.cz${person.attributes.href}`
      };
    });
  } else {
    return [];
  }
};
