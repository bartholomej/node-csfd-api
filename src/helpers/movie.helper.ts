import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating } from '../interfaces/global';
import {
  CSFDCreator,
  CSFDCreatorGroups,
  CSFDGenres,
  CSFDMovieListItem,
  CSFDPremiere,
  CSFDTitlesOther,
  CSFDVod
} from '../interfaces/movie.interface';
import { getColor, parseIdFromUrl } from './global.helper';

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
  return getColor(bodyClasses[1]);
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
  return el.querySelector('.origin span').innerText.replace(/[{()}]/g, '');
};

export const getDuration = (el: HTMLElement): number => {
  const origin = el.querySelector('.origin').innerText;
  const timeString = origin.split(',');
  if (timeString.length > 2) {
    const timeString2 = timeString.pop().trim();
    const timeRaw = timeString2.split('(')[0].trim();
    const hoursMinsRaw = timeRaw.split('min')[0];
    const hoursMins = hoursMinsRaw.split('h');
    // Resolve hours + minutes format
    const duration = hoursMins.length > 1 ? +hoursMins[0] * 60 + +hoursMins[1] : +hoursMins[0];
    return duration;
  } else {
    return null;
  }
};

export const getTitlesOther = (el: HTMLElement): CSFDTitlesOther[] => {
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
  const poster = el.querySelector('.film-posters img');
  // Resolve empty image
  if (poster.classNames?.includes('empty-image')) {
    return null;
  } else {
    // Full sized image (not thumb)
    return poster.attributes.src.split('?')[0];
  }
};

export const getDescriptions = (el: HTMLElement): string[] => {
  // TODO more plots
  const plot = el
    .querySelector('.body--plots .plot-preview p')
    ?.text.trim()
    .replace(/(\r\n|\n|\r|\t)/gm, '');
  return plot ? [plot] : [];
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
  const type = el.querySelector('.film-header-name .type');
  return type?.innerText?.replace(/[{()}]/g, '') || 'film';
};

export const getVods = (el: HTMLElement): CSFDVod[] => {
  let vods: CSFDVod[] = [];
  if (el) {
    const buttons = el.querySelectorAll('.box-buttons .button');
    const buttonsVod = buttons.filter((x) => !x.classNames.includes('button-social'));
    vods = buttonsVod.map((btn) => {
      return {
        title: btn.text.trim(),
        url: btn.attributes.href
      };
    });
  }
  return vods.length ? vods : [];
};

// Get box content
export const getBoxContent = (el: HTMLElement, box: string): HTMLElement => {
  const headers = el.querySelectorAll('section.box .box-header');
  return headers.find((header) => header.querySelector('h3').text.trim().includes(box))?.parentNode;
};

export const getBoxMovies = (el: HTMLElement, boxName: string): CSFDMovieListItem[] => {
  const movieListItem: CSFDMovieListItem[] = [];
  const box = getBoxContent(el, boxName);
  const movieTitleNodes = box?.querySelectorAll('.article-header .film-title-name');
  if (movieTitleNodes?.length) {
    for (const item of movieTitleNodes) {
      movieListItem.push({
        id: parseIdFromUrl(item.attributes.href),
        title: item.textContent.trim(),
        url: `https://www.csfd.cz${item.attributes.href}`
      });
    }
  }
  return movieListItem;
};

export const getRelated = (el: HTMLElement): CSFDMovieListItem[] => {
  return getBoxMovies(el, 'Související');
};

export const getPremieres = (el: HTMLElement): CSFDPremiere[] => {
  const premieresNode = el.querySelectorAll('.box-premieres li');
  const premiere: CSFDPremiere[] = [];
  for (const premiereNode of premieresNode) {
    const [date, ...company] = premiereNode.querySelector('p + span').attributes.title.split(' ');
    premiere.push({
      country: premiereNode.querySelector('.flag')?.attributes.title || null,
      format: premiereNode.querySelector('p').text.trim().split(' od')[0],
      date,
      company: company.join(' ')
    });
  }
  return premiere;
};

export const getTags = (el: HTMLElement): string[] => {
  const tagsRaw = el.querySelectorAll('.box-content a[href*="/podrobne-vyhledavani/?tag="]');
  return tagsRaw.map((tag) => tag.text);
};
