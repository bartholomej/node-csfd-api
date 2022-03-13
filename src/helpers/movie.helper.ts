import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating } from '../interfaces/global';
import {
  CSFDBoxContent,
  CSFDCreator,
  CSFDCreatorGroups,
  CSFDGenres,
  CSFDMovieListItem,
  CSFDPremiere,
  CSFDTitlesOther,
  CSFDVod
} from '../interfaces/movie.interface';
import { addProtocol, getColor, parseIdFromUrl, parseISO8601Duration } from './global.helper';

export const getId = (el: HTMLElement): number => {
  const url = el.querySelector('.tabs .tab-nav-list a').attributes.href;
  return parseIdFromUrl(url);
};

export const getTitle = (el: HTMLElement): string => {
  return el.querySelector('h1').innerText.split(`(`)[0].trim();
};

export const getGenres = (el: HTMLElement): CSFDGenres[] => {
  const genresRaw = el.querySelector('.genres').textContent;
  return genresRaw.split(' / ') as CSFDGenres[];
};

export const getOrigins = (el: HTMLElement): string[] => {
  const originsRaw = el.querySelector('.origin').textContent;
  const origins = originsRaw.split(',')[0];
  return origins.split(' / ');
};

export const getColorRating = (bodyClasses: string[]): CSFDColorRating => {
  return getColor(bodyClasses[1]);
};

export const getRating = (el: HTMLElement): number => {
  const ratingRaw = el.querySelector('.film-rating-average').textContent;
  const rating = +ratingRaw?.replace(/%/g, '').trim();
  if (Number.isInteger(rating)) {
    return rating;
  } else {
    return null;
  }
};

export const getRatingCount = (el: HTMLElement): number => {
  const ratingCountRaw = el.querySelector('.box-rating-container .counter')?.textContent;
  const ratingCount = +ratingCountRaw?.replace(/[(\s)]/g, '');
  if (Number.isInteger(ratingCount)) {
    return ratingCount;
  } else {
    return null;
  }
};

export const getYear = (el: string): number => {
  try {
    const jsonLd = JSON.parse(el);
    return +jsonLd.dateCreated;
  } catch (error) {
    console.error('node-csfd-api: Error parsing JSON-LD', error);
    return null;
  }
};

export const getDuration = (jsonLdRaw: string, el: HTMLElement): number => {
  let duration = null;
  try {
    const jsonLd = JSON.parse(jsonLdRaw);
    duration = jsonLd.duration;
    return parseISO8601Duration(duration);
  } catch (error) {
    const origin = el.querySelector('.origin').innerText;
    const timeString = origin.split(',');
    if (timeString.length > 2) {
      // Get last time elelment
      const timeString2 = timeString.pop().trim();
      // Clean it
      const timeRaw = timeString2.split('(')[0].trim();
      // Split by minutes and hours
      const hoursMinsRaw = timeRaw.split('min')[0];
      const hoursMins = hoursMinsRaw.split('h');
      // Resolve hours + minutes format
      duration = hoursMins.length > 1 ? +hoursMins[0] * 60 + +hoursMins[1] : +hoursMins[0];
      return duration;
    } else {
      return null;
    }
  }
};

export const getTitlesOther = (el: HTMLElement): CSFDTitlesOther[] => {
  const namesNode = el.querySelectorAll('.film-names li');
  return namesNode.map((el) => {
    const country = el.querySelector('img.flag').attributes.alt;
    const title = el.textContent.trim().split('\n')[0];
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
  if (poster) {
    if (poster.classNames?.includes('empty-image')) {
      return null;
    } else {
      // Full sized image (not thumb)
      const imageThumb = poster.attributes.src.split('?')[0];
      const image = imageThumb.replace(/\/w140\//, '/w1080/');
      return addProtocol(image);
    }
  } else {
    return null;
  }
};

export const getDescriptions = (el: HTMLElement): string[] => {
  return el
    .querySelectorAll('.body--plots .plot-full p, .body--plots .plots .plots-item p')
    .map((movie) => movie.textContent?.trim().replace(/(\r\n|\n|\r|\t)/gm, ''));
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
  const element = creators.filter((elem) => elem.textContent.trim().includes(group))[0];
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
        title: btn.textContent.trim(),
        url: btn.attributes.href
      };
    });
  }
  return vods.length ? vods : [];
};

// Get box content
export const getBoxContent = (el: HTMLElement, box: string): HTMLElement => {
  const headers = el.querySelectorAll('section.box .box-header');
  return headers.find((header) => header.querySelector('h3').textContent.trim().includes(box))
    ?.parentNode;
};

export const getBoxMovies = (el: HTMLElement, boxName: CSFDBoxContent): CSFDMovieListItem[] => {
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

export const getPremieres = (el: HTMLElement): CSFDPremiere[] => {
  const premieresNode = el.querySelectorAll('.box-premieres li');
  const premiere: CSFDPremiere[] = [];
  for (const premiereNode of premieresNode) {
    const [date, ...company] = premiereNode.querySelector('p + span').attributes.title.split(' ');
    premiere.push({
      country: premiereNode.querySelector('.flag')?.attributes.title || null,
      format: premiereNode.querySelector('p').textContent.trim().split(' od')[0],
      date,
      company: company.join(' ')
    });
  }
  return premiere;
};

export const getTags = (el: HTMLElement): string[] => {
  const tagsRaw = el.querySelectorAll('.box-content a[href*="/podrobne-vyhledavani/?tag="]');
  return tagsRaw.map((tag) => tag.textContent);
};
