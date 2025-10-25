import { HTMLElement } from 'node-html-parser';
import {
  CSFDCinemaGroupedFilmsByDate,
  CSFDCinemaMeta,
  CSFDCinemaMovie
} from '../dto/cinema';
import { CSFDColorRating } from '../dto/global';
import { Colors } from '../dto/user-ratings';
import { parseColor, parseIdFromUrl } from './global.helper.js';

export const getCinemaColorRating = (el: HTMLElement | null): CSFDColorRating => {
  const classes: string[] = el?.classNames.split(' ') ?? [];
  const last = classes.length ? classes[classes.length - 1] : undefined;
  return last ? parseColor(last as Colors) : 'unknown';
};

export const getCinemaId = (el: HTMLElement | null): number => {
  const id = el?.id?.split('-')[1];
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

export const getCinemaUrl = (el: HTMLElement | null): string => {
  if (!el) return '';
  return el.querySelector('a[title="Přejít na webovou stránku kina"]')?.attributes.href ?? '';
};

export const parseCinema = (el: HTMLElement | null): { city: string; name: string } => {
  const title = el.querySelector('.box-header h2').innerText.trim();
  const [city, name] = title.split(' - ');
  return { city, name };
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

export const getCinemaFilms = (date: string, el: HTMLElement | null): CSFDCinemaMovie[] => {
  const filmNodes = el.querySelectorAll('.cinema-table tr');

  const films = filmNodes.map((filmNode) => {
    const url = filmNode.querySelector('td.name h3 a')?.attributes.href;
    const id = url ? getCinemaUrlId(url) : null;
    const title = filmNode.querySelector('.name h3')?.text.trim();
    const colorRating = getCinemaColorRating(filmNode.querySelector('.name .icon'));
    const showTimes = filmNode.querySelectorAll('.td-time')?.map((x) => x.textContent.trim());
    const meta = filmNode.querySelectorAll('.td-title span')?.map((x) => x.text.trim());

    return {
      id,
      title,
      url,
      colorRating,
      showTimes,
      meta: parseMeta(meta)
    };
  });
  return films;
};

export const parseMeta = (meta: string[]): CSFDCinemaMeta[] => {
  const metaConvert: CSFDCinemaMeta[] = [];

  for (const element of meta) {
    if (element === 'T') {
      metaConvert.push('subtitles');
    } else if (element === 'D') {
      metaConvert.push('dubbing');
    } else {
      metaConvert.push(element);
    }
  }

  return metaConvert;
};
