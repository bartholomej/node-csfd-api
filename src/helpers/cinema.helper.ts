import type { HTMLElement } from 'node-html-parser';
import type {
  CSFDCinemaGroupedFilmsByDate,
  CSFDCinemaHall,
  CSFDCinemaMeta,
  CSFDCinemaMovie,
  CSFDCinemaShowing,
  CSFDCinemaTrendingFilm
} from '../dto/cinema';
import type { CSFDColorRating } from '../dto/global';
import type { CSFDColors } from '../dto/user-ratings';
import { addProtocol, parseColor, parseIdFromUrl } from './global.helper';

const TIME_PATTERN = /\d{1,2}:\d{2}/g;
const HALL_ICON_PREFIX = 'cinema-icon-';

const absoluteUrl = (href: string): string =>
  href.startsWith('/') ? `https://www.csfd.cz${href}` : href;

export const getCinemaSections = (html: HTMLElement): HTMLElement[] =>
  html.querySelectorAll('#snippet--cinemas section[id*="cinema-"]');

export const getCinemaColorRating = (el: HTMLElement | null): CSFDColorRating => {
  const classes: string[] = el?.classNames.split(' ') ?? [];
  const last = classes.length ? classes[classes.length - 1] : undefined;
  return last ? parseColor(last as CSFDColors) : 'unknown';
};

export const getCinemaId = (el: HTMLElement | null): number => {
  const id = el?.id?.split('-').at(-1);
  return +id;
};

export const getCinemaUrlId = (url: string | null | undefined): number | null => {
  if (!url) return null;
  return parseIdFromUrl(url);
};

export const getCinemaCoords = (el: HTMLElement | null): { lat: number; lng: number } | null => {
  if (!el) return null;
  const linkMapsEl = el.querySelector('a[href*="q="]');
  if (!linkMapsEl) return null;

  const linkMaps = linkMapsEl.getAttribute('href');
  const [_, latLng] = linkMaps.split('q=');

  const coords = latLng.split(',');
  if (coords.length !== 2) return null;

  const lat = Number(coords[0]);
  const lng = Number(coords[1]);
  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return { lat, lng };
  }
  return null;
};

/** The cinema's website, linked from its logo, which ČSFD shows only for some cinemas */
export const getCinemaUrl = (el: HTMLElement | null): string => {
  if (!el) return '';
  return el.querySelector('.cinema-logo a')?.attributes.href ?? '';
};

export const getCinemaCsfdUrl = (el: HTMLElement | null): string => {
  const href = el?.querySelector('header h2 a')?.attributes.href;
  return href ? absoluteUrl(href) : '';
};

export const getCinemaAddress = (el: HTMLElement | null): string | null =>
  el?.querySelector('header a[href*="q="]')?.text.trim() || null;

export const getCinemaPhone = (el: HTMLElement | null): string | null =>
  el?.querySelector('header .btn-phone')?.text.trim() || null;

/** "Praha - CineStar Praha - Anděl": the city, then the name with its branch */
export const parseCinema = (el: HTMLElement | null): { city: string; name: string } => {
  const title = el.querySelector('header h2').text.trim();
  const [city, ...name] = title.split(' - ');
  return { city, name: name.join(' - ') };
};

export const getGroupedFilmsByDate = (el: HTMLElement | null): CSFDCinemaGroupedFilmsByDate[] => {
  const divs = el.querySelectorAll(':scope > div');
  const getDatesAndFilms = divs
    .map((_, index) => index)
    .filter((index) => index % 2 === 0)
    .map((index) => {
      const [date, films] = divs.slice(index, index + 2);
      const dateText = date?.firstChild?.textContent?.trim() ?? null;
      return { date: dateText, films: getCinemaFilms('', films) };
    });

  return getDatesAndFilms;
};

/**
 * The program is a grid of hour columns, so one cell can hold two or three showings. Each time
 * that is still on sale is its own link to the cinema's ticket shop.
 */
export const getCinemaShowings = (filmNode: HTMLElement | null): CSFDCinemaShowing[] =>
  filmNode?.querySelectorAll('.td-time').flatMap((cell) => {
    const links = cell.querySelectorAll('a');
    if (links.length) {
      return links.flatMap((link) => {
        const time = link.text.match(TIME_PATTERN)?.[0];
        return time ? [{ time, ticketUrl: link.attributes.href || null }] : [];
      });
    }
    return (cell.text.match(TIME_PATTERN) ?? []).map((time): CSFDCinemaShowing => ({
      time,
      ticketUrl: null
    }));
  }) ?? [];

export const getCinemaHall = (filmNode: HTMLElement | null): CSFDCinemaHall | null => {
  const icon = filmNode?.querySelector('.name .cinema-icon');
  const type = icon?.classNames
    .split(' ')
    .find((name) => name.startsWith(HALL_ICON_PREFIX))
    ?.slice(HALL_ICON_PREFIX.length);
  if (!icon || !type) return null;
  return { type, name: icon.attributes['data-tippy-content']?.trim() || icon.text.trim() };
};

export const getCinemaFilms = (date: string, el: HTMLElement | null): CSFDCinemaMovie[] => {
  const filmNodes = el.querySelectorAll('.cinema-table tr');

  const films = filmNodes.map((filmNode) => {
    const url = filmNode.querySelector('td.name h3 a')?.attributes.href;
    const id = url ? getCinemaUrlId(url) : null;
    const title = filmNode.querySelector('.name h3')?.text.trim();
    const colorRating = getCinemaColorRating(filmNode.querySelector('.name .icon'));
    const showings = getCinemaShowings(filmNode);
    const meta = filmNode.querySelectorAll('.td-title span')?.map((x) => x.text.trim());

    return {
      id,
      title,
      url,
      colorRating,
      showTimes: showings.map((showing) => showing.time),
      showings,
      hall: getCinemaHall(filmNode),
      meta: parseMeta(meta)
    };
  });
  return films;
};

/** "T" and "D", with a comma after "D" when "3D" follows */
export const parseMeta = (meta: string[]): CSFDCinemaMeta[] => {
  const metaConvert: CSFDCinemaMeta[] = [];

  for (const element of meta) {
    const code = element.replace(/[\s,]+$/, '');
    if (code === 'T') {
      metaConvert.push('subtitles');
    } else if (code === 'D') {
      metaConvert.push('dubbing');
    } else {
      metaConvert.push(code);
    }
  }

  return metaConvert;
};

export const getCinemaTrending = (html: HTMLElement): CSFDCinemaTrendingFilm[] =>
  html.querySelectorAll('.poster-maintab-slider .poster-slider-item').flatMap((item) => {
    const link = item.querySelector('.poster-slider-link');
    const href = link?.attributes.href;
    const id = href ? parseIdFromUrl(href) : null;
    const position = Number(item.querySelector('.position')?.text.replace(/\D/g, ''));
    if (!href || !id || !position) return [];

    const img = item.querySelector('img');
    const src = img?.attributes.src;
    const poster =
      src && !img.classNames.includes('empty-image')
        ? addProtocol(src.replace(/\/cache\/resized\/w\d+(h\d+)?\//, '/cache/resized/w1080/'))
        : null;

    return [
      {
        position,
        id,
        title: link.attributes.title?.trim() || img?.attributes.alt?.trim() || '',
        url: absoluteUrl(href),
        poster
      }
    ];
  });
