import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating } from '../dto/global';
import {
  CSFDBoxContent,
  CSFDCreatorGroups,
  CSFDCreatorGroupsEnglish,
  CSFDCreatorGroupsSlovak,
  CSFDGenres,
  CSFDMovieCreator,
  CSFDMovieListItem,
  CSFDPremiere,
  CSFDTitlesOther,
  CSFDVod,
  CSFDVodService
} from '../dto/movie';
import { addProtocol, getColor, parseISO8601Duration, parseIdFromUrl } from './global.helper';

/**
 * Maps language-specific movie creator group labels.
 */
export const getLocalizedCreatorLabel = (
  language: string | undefined,
  key: 'directors' | 'writers' | 'cinematography' | 'music' | 'actors' | 'basedOn' | 'producers' | 'filmEditing' | 'costumeDesign' | 'productionDesign' | 'casting' | 'sound' | 'makeup'
): CSFDCreatorGroups | CSFDCreatorGroupsEnglish | CSFDCreatorGroupsSlovak => {
  const labels: Record<string, Record<string, CSFDCreatorGroups | CSFDCreatorGroupsEnglish | CSFDCreatorGroupsSlovak>> = {
    en: {
      directors: 'Directed by',
      writers: 'Screenplay',
      cinematography: 'Cinematography',
      music: 'Composer',
      actors: 'Cast',
      basedOn: 'Based on',
      producers: 'Produced by',
      filmEditing: 'Editing',
      costumeDesign: 'Costumes',
      productionDesign: 'Production design',
      casting: 'Casting',
      sound: 'Sound',
      makeup: 'Make-up'
    },
    cs: {
      directors: 'Režie',
      writers: 'Scénář',
      cinematography: 'Kamera',
      music: 'Hudba',
      actors: 'Hrají',
      basedOn: 'Předloha',
      producers: 'Produkce',
      filmEditing: 'Střih',
      costumeDesign: 'Kostýmy',
      productionDesign: 'Scénografie',
      casting: 'Casting',
      sound: 'Zvuk',
      makeup: 'Masky'
    },
    sk: {
      directors: 'Réžia',
      writers: 'Scenár',
      cinematography: 'Kamera',
      music: 'Hudba',
      actors: 'Hrajú',
      basedOn: 'Predloha',
      producers: 'Produkcia',
      filmEditing: 'Strih',
      costumeDesign: 'Kostýmy',
      productionDesign: 'Scénografia',
      casting: 'Casting',
      sound: 'Zvuk',
      makeup: 'Masky'
    }
  };

  const lang = language || 'cs';
  return (labels[lang] || labels['cs'])[key];
};

export const getMovieId = (el: HTMLElement): number => {
  const url = el.querySelector('.tabs .tab-nav-list a')?.attributes.href;
  return parseIdFromUrl(url);
};

export const getMovieTitle = (el: HTMLElement): string => {
  return el.querySelector('h1')?.innerText.split(`(`)[0].trim() || '';
};

export const getMovieGenres = (el: HTMLElement): CSFDGenres[] => {
  const genresRaw = el.querySelector('.genres')?.textContent;
  return (genresRaw?.split(' / ') as CSFDGenres[]) || [];
};

export const getMovieOrigins = (el: HTMLElement): string[] => {
  const originsRaw = el.querySelector('.origin')?.textContent;
  if (!originsRaw) return [];
  const origins = originsRaw.split(',')[0];
  return origins.split(' / ');
};

export const getMovieColorRating = (bodyClasses: string[]): CSFDColorRating => {
  return getColor(bodyClasses[1]);
};

export const getMovieRating = (el: HTMLElement): number | null => {
  const ratingRaw = el.querySelector('.film-rating-average')?.textContent;
  if (!ratingRaw) return null;
  const rating = parseInt(ratingRaw.replace(/%/g, '').trim());
  return isNaN(rating) ? null : rating;
};

export const getMovieRatingCount = (el: HTMLElement): number | null => {
  const ratingCountRaw = el.querySelector('.box-rating-container .counter')?.textContent;
  if (!ratingCountRaw) return null;
  const ratingCount = parseInt(ratingCountRaw.replace(/[(\s)]/g, ''));
  return isNaN(ratingCount) ? null : ratingCount;
};

export const getMovieYear = (el: string): number | null => {
  try {
    const jsonLd = JSON.parse(el);
    return +jsonLd.dateCreated || null;
  } catch (error) {
    return null;
  }
};

export const getMovieDuration = (jsonLdRaw: string, el: HTMLElement): number | null => {
  try {
    const jsonLd = JSON.parse(jsonLdRaw);
    return parseISO8601Duration(jsonLd.duration);
  } catch (error) {
    const origin = el.querySelector('.origin')?.innerText;
    if (!origin) return null;

    const timeString = origin.split(',');
    if (timeString.length > 2) {
      const timeString2 = timeString.pop().trim();
      const timeRaw = timeString2.split('(')[0].trim();
      const hoursMinsRaw = timeRaw.split('min')[0];
      const hoursMins = hoursMinsRaw.split('h');

      const hours = hoursMins.length > 1 ? +hoursMins[0] : 0;
      const minutes = hoursMins.length > 1 ? +hoursMins[1] : +hoursMins[0];

      return hours * 60 + minutes;
    }
    return null;
  }
};

export const getMovieTitlesOther = (el: HTMLElement): CSFDTitlesOther[] => {
  const namesNode = el.querySelectorAll('.film-names li');
  if (!namesNode.length) return [];

  return namesNode
    .map((item) => {
      const country = item.querySelector('img.flag')?.attributes.alt;
      const title = item.textContent.trim().split('\n')[0];
      if (country && title) {
        return { country, title };
      }
      return null;
    })
    .filter((x): x is CSFDTitlesOther => x !== null);
};

export const getMoviePoster = (el: HTMLElement | null): string | null => {
  if (!el) return null;
  const poster = el.querySelector('.film-posters img');

  if (poster && !poster.classNames?.includes('empty-image')) {
    const imageThumb = poster.attributes.src.split('?')[0];
    const image = imageThumb.replace(/\/w140\//, '/w1080/');
    return addProtocol(image);
  }
  return null;
};

export const getMovieRandomPhoto = (el: HTMLElement | null): string | null => {
  if (!el) return null;
  const imageNode = el.querySelector('.gallery-item picture img');
  const image = imageNode?.attributes?.src;
  if (image) {
    return addProtocol(image.replace(/\/w663\//, '/w1326/'));
  }
  return null;
};

export const getMovieTrivia = (el: HTMLElement | null): string[] | null => {
  if (!el) return null;
  const triviaNodes = el.querySelectorAll('.article-trivia ul li');
  if (triviaNodes.length) {
    return triviaNodes.map((node) => node.textContent.trim().replace(/(\r\n|\n|\r|\t)/gm, ''));
  }
  return null;
};

export const getMovieDescriptions = (el: HTMLElement): string[] => {
  return el
    .querySelectorAll('.body--plots .plot-full p, .body--plots .plots .plots-item p')
    .map((movie) => movie.textContent?.trim().replace(/(\r\n|\n|\r|\t)/gm, ''))
    .filter(Boolean);
};

const parseMoviePeople = (el: HTMLElement): CSFDMovieCreator[] => {
  const people = el.querySelectorAll('a');
  return people
    .filter((x) => x.classNames.length === 0)
    .map((person) => ({
      id: parseIdFromUrl(person.attributes.href) || 0,
      name: person.innerText.trim(),
      url: `https://www.csfd.cz${person.attributes.href}`
    }));
};

export const getMovieGroup = (
  el: HTMLElement,
  group: CSFDCreatorGroups | CSFDCreatorGroupsEnglish | CSFDCreatorGroupsSlovak
): CSFDMovieCreator[] => {
  const creators = el.querySelectorAll('.creators h4');
  const element = creators.find((elem) => elem.textContent.trim().includes(group));

  if (element?.parentNode) {
    return parseMoviePeople(element.parentNode as HTMLElement);
  }
  return [];
};

export const getMovieType = (el: HTMLElement): string => {
  const type = el.querySelector('.film-header-name .type');
  return type?.innerText?.replace(/[{()}]/g, '') || 'film';
};

export const getMovieVods = (el: HTMLElement | null): CSFDVod[] => {
  if (!el) return [];
  const buttons = el.querySelectorAll('.box-buttons .button');
  const buttonsVod = buttons.filter((x) => !x.classNames.includes('button-social'));

  return buttonsVod.map((btn) => ({
    title: btn.textContent.trim() as CSFDVodService,
    url: btn.attributes.href
  }));
};

const getBoxContent = (el: HTMLElement, box: string): HTMLElement | undefined => {
  const headers = el.querySelectorAll('section.box .box-header');
  return headers.find((header) => header.querySelector('h3')?.textContent.trim().includes(box))
    ?.parentNode as HTMLElement;
};

export const getMovieBoxMovies = (el: HTMLElement, boxName: CSFDBoxContent): CSFDMovieListItem[] => {
  const movieListItem: CSFDMovieListItem[] = [];
  const box = getBoxContent(el, boxName);

  const movieTitleNodes = box?.querySelectorAll('.article-header .film-title-name');
  if (movieTitleNodes?.length) {
    for (const item of movieTitleNodes) {
      const id = parseIdFromUrl(item.attributes.href);
      if (id) {
        movieListItem.push({
          id,
          title: item.textContent.trim(),
          url: `https://www.csfd.cz${item.attributes.href}`
        });
      }
    }
  }
  return movieListItem;
};

export const getMoviePremieres = (el: HTMLElement): CSFDPremiere[] => {
  const premiereNodes = el.querySelectorAll('.box-premieres li');
  const premiere: CSFDPremiere[] = [];

  for (const premiereNode of premiereNodes) {
    const title = premiereNode.querySelector('p + span')?.attributes.title;

    if (title) {
      const [date, ...company] = title.split(' ');
      premiere.push({
        country: premiereNode.querySelector('.flag')?.attributes.title || null,
        format: premiereNode.querySelector('p')?.textContent.trim()?.split(' od')[0] || '',
        date,
        company: company.join(' ')
      });
    }
  }
  return premiere;
};

export const getMovieTags = (el: HTMLElement): string[] => {
  const tagsRaw = el.querySelectorAll('.box-content a[href*="/tag/"]');
  return tagsRaw.map((tag) => tag.textContent);
};
