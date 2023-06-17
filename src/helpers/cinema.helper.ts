import { CSFDCinemaMeta, CSFDCinemaMovie } from 'interfaces/cinema.interface';
import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating } from '../interfaces/global';
import { Colors } from '../interfaces/user-ratings.interface';
import { parseColor, parseIdFromUrl } from './global.helper';

export const getColorRating = (el: HTMLElement): CSFDColorRating => {
  return parseColor(el?.classNames.split(' ').pop() as Colors);
};

export const getId = (url: string): number => {
  if (url) {
    return parseIdFromUrl(url);
  }
  return null;
};

export const getName = (el: HTMLElement | null): string => {
  return el.querySelector('h1').innerText.trim();
};

export const getCoords = (el: HTMLElement | null): { lat: number; lng: number } => {
  const link = el
    ?.querySelector('.box-header img[alt="Google Maps"]')
    .closest('a')
    .getAttribute('href');
  const coords = link.split('q=')[1].split(',');
  const [lat, lng] = coords;
  return { lat: +lat, lng: +lng };
};

export const getCinemaUrl = (el: HTMLElement | null): string => {
  return el.querySelector('.box-header .cinema-logo a')?.attributes.href;
};

export const parseCinema = (el: HTMLElement | null): { city: string; name: string } => {
  const title = el.querySelector('.box-header h2').innerText.trim();
  const [city, name] = title.split(' - ');
  return { city, name };
};

export const getGroupedFilmsByDate = (el: HTMLElement | null): any => {
  const divs = el.querySelectorAll(':scope > div');
  const getDatesAndFilms = divs
    .map((_, index) => index)
    .filter((index) => index % 2 === 0)
    .map((index) => {
      const [date, films] = divs.slice(index, index + 2);
      const dateText = date?.innerText.trim();
      return { date: dateText, films: getFilms('', films) };
    });

  return getDatesAndFilms;
};

export const getFilms = (date: string, el: HTMLElement | null): CSFDCinemaMovie[] => {
  const filmNodes = el.querySelectorAll('.cinema-table tr');

  const films = filmNodes.map((filmNode) => {
    const url = filmNode.querySelector('td.name h3 a')?.attributes.href;
    const id = getId(url);
    const title = filmNode.querySelector('.name h3')?.text.trim();
    const colorRating = getColorRating(filmNode.querySelector('.name .icon'));
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
