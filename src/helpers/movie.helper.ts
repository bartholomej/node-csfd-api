import { HTMLElement } from 'node-html-parser';
import type { CSFDColorRating, CSFDFilmTypes } from '../dto/global';
import type {
  CSFDBoxContent,
  CSFDCreatorGroups,
  CSFDCreatorGroupsEnglish,
  CSFDCreatorGroupsSlovak,
  CSFDCreators,
  CSFDGenres,
  CSFDMovieCreator,
  CSFDMovieListItem,
  CSFDParent,
  CSFDPremiere,
  CSFDSeriesChild,
  CSFDTitlesOther,
  CSFDVod,
  CSFDVodService,
  MovieJsonLd
} from '../dto/movie';
import type { CSFDOptions } from '../types';
import {
  addProtocol,
  getColor,
  parseDate,
  parseFilmType,
  parseISO8601Duration,
  parseIdFromUrl,
  parseLastIdFromUrl
} from './global.helper';

const CREATOR_LABELS: Record<
  string,
  Record<string, CSFDCreatorGroups | CSFDCreatorGroupsEnglish | CSFDCreatorGroupsSlovak>
> = {
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

/**
 * Maps language-specific movie creator group labels.
 * @param language - The language code (e.g., 'en', 'cs')
 * @param key - The key of the creator group (e.g., 'directors', 'writers')
 * @returns The localized label for the creator group
 */
export const getLocalizedCreatorLabel = (
  language: string | undefined,
  key:
    | 'directors'
    | 'writers'
    | 'cinematography'
    | 'music'
    | 'actors'
    | 'basedOn'
    | 'producers'
    | 'filmEditing'
    | 'costumeDesign'
    | 'productionDesign'
    | 'casting'
    | 'sound'
    | 'makeup'
): CSFDCreatorGroups | CSFDCreatorGroupsEnglish | CSFDCreatorGroupsSlovak => {
  const lang = language || 'cs'; // Default to Czech
  return (CREATOR_LABELS[lang] || CREATOR_LABELS['cs'])[key];
};

export const getMovieId = (el: HTMLElement): number => {
  const url = el.querySelector('.tabs .tab-nav-list a').attributes.href;
  return parseIdFromUrl(url);
};

export const getSeriesAndSeasonTitle = (
  el: HTMLElement
): { seriesName: string | null; seasonName: string | null } => {
  const titleElement = el.querySelector('h1');
  if (!titleElement) {
    return { seriesName: null, seasonName: null };
  }

  const fullText = titleElement.innerText.trim();

  // Check if there's a series part indicated by ' - '
  if (fullText.includes(' - ')) {
    const [seriesName, seasonName] = fullText.split(' - ').map((part) => part.trim());
    return { seriesName, seasonName };
  }

  // If no series part found, return just the name
  return { seriesName: fullText, seasonName: null };
};

export const getMovieTitle = (el: HTMLElement): string => {
  return el.querySelector('h1').innerText.split(`(`)[0].trim();
};

export const getMovieGenres = (el: HTMLElement): CSFDGenres[] => {
  const genresNode = el.querySelector('.genres');
  if (!genresNode) return [];
  return genresNode.childNodes
    .map((n) => n.textContent.trim())
    .filter((x) => x.length > 0) as CSFDGenres[];
};

export const getMovieOrigins = (el: HTMLElement): string[] => {
  const originNode = el.querySelector('.origin');
  if (!originNode) return [];
  const text = originNode.childNodes[0]?.text || '';
  return text
    .split('/')
    .map((x) => x.trim())
    .filter((x) => x);
};

export const getMovieColorRating = (bodyClasses: string[]): CSFDColorRating => {
  return getColor(bodyClasses[1]);
};

export const getMovieRating = (el: HTMLElement): number => {
  const ratingRaw = el.querySelector('.film-rating-average')?.textContent;
  const rating = ratingRaw?.replace(/%/g, '')?.trim();
  const ratingInt = parseInt(rating);

  if (Number.isInteger(ratingInt)) {
    return ratingInt;
  } else {
    return null;
  }
};

export const getMovieRatingCount = (el: HTMLElement): number => {
  const ratingCountRaw = el.querySelector('.ratings-list .counter')?.textContent;
  if (!ratingCountRaw) return null;
  const countString = ratingCountRaw.replace(/[^\d]/g, '');
  const ratingCount = parseInt(countString, 10);
  if (Number.isInteger(ratingCount)) {
    return ratingCount;
  } else {
    return null;
  }
};

export const getMovieYear = (jsonLd: MovieJsonLd | null): number => {
  if (jsonLd && jsonLd.dateCreated) {
    return +jsonLd.dateCreated;
  }
  return null;
};

export const getMovieDuration = (jsonLd: MovieJsonLd | null, el: HTMLElement): number => {
  if (jsonLd && jsonLd.duration) {
    try {
      return parseISO8601Duration(jsonLd.duration);
    } catch (e) {
      // ignore
    }
  }

  try {
    const originText = el.querySelector('.origin')?.textContent;
    if (originText) {
      const match = originText.match(/(?:(\d+)\s*h)?\s*(\d+)\s*min/);
      if (match) {
        const hours = parseInt(match[1] || '0', 10);
        const minutes = parseInt(match[2] || '0', 10);
        return hours * 60 + minutes;
      }
    }
  } catch (error) {
    return null;
  }
  return null;
};

export const getMovieTitlesOther = (el: HTMLElement): CSFDTitlesOther[] => {
  const namesNode = el.querySelectorAll('.film-names li');

  if (!namesNode.length) {
    return [];
  }

  const titlesOther = namesNode.map((el) => {
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

  return titlesOther.filter((x) => x);
};

export const getMoviePoster = (el: HTMLElement | null): string => {
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

export const getMovieRandomPhoto = (el: HTMLElement | null): string => {
  const imageNode = el.querySelector('.gallery-item picture img');
  const image = imageNode?.attributes?.src;
  if (image) {
    return image.replace(/\/w663\//, '/w1326/');
  } else {
    return null;
  }
};

export const getMovieTrivia = (el: HTMLElement | null): string[] => {
  const triviaNodes = el.querySelectorAll('.article-trivia ul li');
  if (triviaNodes?.length) {
    return triviaNodes.map((node) => node.textContent.trim().replace(/(\r\n|\n|\r|\t)/gm, ''));
  } else {
    return null;
  }
};

export const getMovieDescriptions = (el: HTMLElement): string[] => {
  return el
    .querySelectorAll('.body--plots .plot-full p, .body--plots .plots .plots-item p')
    .map((movie) => movie.textContent?.trim().replace(/(\r\n|\n|\r|\t)/gm, ''));
};

const parseMoviePeople = (el: HTMLElement): CSFDMovieCreator[] => {
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

// export const getMovieGroup = (el: HTMLElement, group: CSFDCreatorGroups | CSFDCreatorGroupsEnglish | CSFDCreatorGroupsSlovak): CSFDMovieCreator[] => {
//   const creators = el.querySelectorAll('.creators h4');
//   const element = creators.filter((elem) => elem.textContent.trim().includes(group))[0];
//   if (element?.parentNode) {
//     return parseMoviePeople(element.parentNode as HTMLElement);
//   } else {
//     return [];
//   }
// };

export const getMovieCreators = (el: HTMLElement, options?: CSFDOptions): CSFDCreators => {
  const creators: CSFDCreators = {
    directors: [],
    writers: [],
    cinematography: [],
    music: [],
    actors: [],
    basedOn: [],
    producers: [],
    filmEditing: [],
    costumeDesign: [],
    productionDesign: [],
    sound: []
  };

  const groups = el.querySelectorAll('.creators h4');

  const keys = [
    'directors',
    'writers',
    'cinematography',
    'music',
    'actors',
    'basedOn',
    'producers',
    'filmEditing',
    'costumeDesign',
    'productionDesign',
    'sound'
  ] as const;

  const localizedLabels = keys.map((key) => ({
    key,
    label: getLocalizedCreatorLabel(options?.language, key) as string
  }));

  for (const group of groups) {
    const text = group.textContent.trim();
    for (const { key, label } of localizedLabels) {
      if (text.includes(label)) {
        if (group.parentNode) {
          creators[key] = parseMoviePeople(group.parentNode as HTMLElement);
        }
        break;
      }
    }
  }

  return creators;
};

export const getSeasonsOrEpisodes = (el: HTMLElement): CSFDSeriesChild[] | null => {
  const childrenList = el.querySelector('.film-episodes-list');
  if (!childrenList) return null;

  const childrenNodes = childrenList.querySelectorAll('.film-title-inline');
  if (!childrenNodes?.length) return [];

  return childrenNodes.map((season) => {
    const nameContainer = season.querySelector('.film-title-name');
    const infoContainer = season.querySelector('.info');

    const href = nameContainer?.getAttribute('href');
    const url = href ? (href.startsWith('/') ? `https://www.csfd.cz${href}` : href) : null;

    return {
      id: parseLastIdFromUrl(href || ''),
      title: nameContainer?.textContent?.trim() || null,
      url,
      info: infoContainer?.textContent?.replace(/[{()}]/g, '').trim() || null
    };
  });
};

export const getEpisodeCode = (el: HTMLElement): string | null => {
  const filmHeaderName = el.querySelector('.film-header-name h1');
  if (!filmHeaderName) return null;

  const text = filmHeaderName.textContent?.trim() || '';
  const match = text.match(/\(([^)]+)\)/);
  const code = match ? match[1] : null;

  return code;
};

export const detectSeasonOrEpisodeListType = (el: HTMLElement) => {
  const episodesList = el.querySelector('.film-episodes-list');
  if (!episodesList) return null;

  const section = episodesList.closest('.updated-box') || episodesList.closest('section') || el;
  const headerText = section.querySelector('.updated-box-header h3')?.textContent?.trim() ?? '';

  if (headerText.includes('Série')) return 'seasons';
  if (headerText.includes('Epizody')) return 'episodes';
  return null;
};

export const getSeasonOrEpisodeParent = (el: HTMLElement): CSFDParent | null => {
  let parents = el.querySelectorAll('.film-series-content h2 a');
  if (parents.length === 0) parents = el.querySelectorAll('.film-header-name h1 a');
  if (parents.length === 0) return null;

  const [parentSeries, parentSeason] = parents;

  const seriesId = parseIdFromUrl(parentSeries?.getAttribute('href'));
  const seasonId = parseLastIdFromUrl(parentSeason?.getAttribute('href') || '');
  const seriesTitle = parentSeries?.textContent?.trim() || null;
  const seasonTitle = parentSeason?.textContent?.trim() || null;

  const series = seriesId && seriesTitle ? { id: seriesId, title: seriesTitle } : null;
  const season = seasonId && seasonTitle ? { id: seasonId, title: seasonTitle } : null;

  if (!series && !season) return null;

  return { series, season };
};

export const getMovieGroup = (
  el: HTMLElement,
  group: CSFDCreatorGroups | CSFDCreatorGroupsEnglish | CSFDCreatorGroupsSlovak
): CSFDMovieCreator[] => {
  const creators = el.querySelectorAll('.creators h4');
  const element = creators.find((elem) => elem.textContent.trim().includes(group as string));
  if (element?.parentNode) {
    return parseMoviePeople(element.parentNode as HTMLElement);
  } else {
    return [];
  }
};

export const getMovieType = (el: HTMLElement): CSFDFilmTypes => {
  const type = el.querySelector('.film-header-name .type');
  const text =
    type?.innerText
      ?.replace(/[{()}]/g, '')
      .split('\n')[0]
      .trim() || 'film';
  return parseFilmType(text);
};

export const getMovieVods = (el: HTMLElement | null): CSFDVod[] => {
  let vods: CSFDVod[] = [];
  if (el) {
    const buttonsVod = el.querySelectorAll('.box-film-vod .vod-badge-link');
    vods = buttonsVod.map((btn) => {
      return {
        title: btn.textContent.trim() as CSFDVodService,
        url: btn.attributes.href
      };
    });
  }
  return vods.length ? vods : [];
};

// Get box content
const getBoxContent = (el: HTMLElement, box: string): HTMLElement => {
  const headers = el.querySelectorAll('section .updated-box-header');
  return headers.find(
    (header) =>
      header.querySelector('h3')?.textContent.trim() === box ||
      header.querySelector('h2')?.textContent.trim() === box
  )?.parentNode;
};

export const getMovieBoxMovies = (
  el: HTMLElement,
  boxName: CSFDBoxContent
): CSFDMovieListItem[] => {
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

export const getMoviePremieres = (el: HTMLElement): CSFDPremiere[] => {
  const premiereNodes = el.querySelectorAll('.box-premieres li');
  const premiere: CSFDPremiere[] = [];
  for (const premiereNode of premiereNodes) {
    const title = premiereNode.querySelector('p + span').attributes.title;

    if (title) {
      const [dateRaw, ...company] = title?.split(' ');
      const date = parseDate(dateRaw);

      if (date) {
        premiere.push({
          country: premiereNode.querySelector('.flag')?.attributes.title || null,
          format: premiereNode.querySelector('p').textContent.trim()?.split(' od')[0],
          date,
          company: company.join(' ')
        });
      }
    }
  }
  return premiere;
};

export const getMovieTags = (el: HTMLElement): string[] => {
  const tagsNodes = el.querySelectorAll('.updated-box-content-tags a');
  return tagsNodes.map((tag) => tag.textContent.trim());
};
