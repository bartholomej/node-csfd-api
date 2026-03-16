import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes } from '../dto/global';
import { CSFDMovieCreator } from '../dto/movie';
import { CSFDColors } from '../dto/user-ratings';
import { addProtocol, parseColor, parseFilmType, parseIdFromUrl } from './global.helper';

export const getSearchType = (el: HTMLElement): CSFDFilmTypes => {
  const type = el.querySelectorAll('.film-title-info .info')[1];
  return parseFilmType(type?.innerText?.replace(/[{()}]/g, '')?.trim() || 'film');
};

export const getSearchTitle = (el: HTMLElement): string => {
  return el.querySelector('.film-title-name').text;
};

export const getSearchYear = (el: HTMLElement): number => {
  // Optimization: Use querySelector instead of querySelectorAll(...)[0]
  return +el.querySelector('.film-title-info .info')?.innerText.replace(/[{()}]/g, '');
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

export const parseSearchCreators = (
  el: HTMLElement
): { directors: CSFDMovieCreator[]; actors: CSFDMovieCreator[] } => {
  const creators = {
    directors: [] as CSFDMovieCreator[],
    actors: [] as CSFDMovieCreator[]
  };

  // Optimization: Consolidate repeated DOM traversals for directors and actors into a single pass
  const peopleNodes = el?.querySelectorAll('.article-content p');
  if (!peopleNodes || !peopleNodes.length) return creators;

  for (const node of peopleNodes) {
    const text = node.textContent;
    if (text.includes('Režie:')) {
      const people = node.querySelectorAll('a');
      creators.directors = people.map((person) => ({
        id: parseIdFromUrl(person.attributes.href),
        name: person.innerText.trim(),
        url: `https://www.csfd.cz${person.attributes.href}`
      }));
    } else if (text.includes('Hrají:')) {
      const people = node.querySelectorAll('a');
      creators.actors = people.map((person) => ({
        id: parseIdFromUrl(person.attributes.href),
        name: person.innerText.trim(),
        url: `https://www.csfd.cz${person.attributes.href}`
      }));
    }
  }

  return creators;
};
