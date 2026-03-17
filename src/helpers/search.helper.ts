import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes } from '../dto/global';
import { CSFDMovieCreator } from '../dto/movie';
import { CSFDColors } from '../dto/user-ratings';
import { addProtocol, parseColor, parseFilmType, parseIdFromUrl } from './global.helper';

type Creator = 'Režie:' | 'Hrají:';

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

export const getSearchCreators = (
  el: HTMLElement
): { directors: CSFDMovieCreator[]; actors: CSFDMovieCreator[] } => {
  const result = { directors: [] as CSFDMovieCreator[], actors: [] as CSFDMovieCreator[] };

  const pNodes = el ? el.querySelectorAll('.article-content p') : [];

  let foundDirectors = false;
  let foundActors = false;

  for (const node of pNodes) {
    if (foundDirectors && foundActors) break;

    const text = node.textContent;
    if (!foundDirectors && text.includes('Režie:')) {
      result.directors = (Array.from(node.querySelectorAll('a')) as unknown as HTMLElement[]).map(
        (person) => {
          return {
            id: parseIdFromUrl(person.attributes.href),
            name: person.innerText.trim(),
            url: `https://www.csfd.cz${person.attributes.href}`
          };
        }
      );
      foundDirectors = true;
    } else if (!foundActors && text.includes('Hrají:')) {
      result.actors = (Array.from(node.querySelectorAll('a')) as unknown as HTMLElement[]).map(
        (person) => {
          return {
            id: parseIdFromUrl(person.attributes.href),
            name: person.innerText.trim(),
            url: `https://www.csfd.cz${person.attributes.href}`
          };
        }
      );
      foundActors = true;
    }
  }

  return result;
};
