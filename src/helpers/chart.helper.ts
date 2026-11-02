import type { HTMLElement } from 'node-html-parser';
import { NodeType } from 'node-html-parser';
import type { CSFDColorRating } from '../dto/global';
import type { CSFDMovieCreator } from '../dto/movie';
import type { CSFDColors } from '../dto/user-ratings';
import { addProtocol, parseColor, parseIdFromUrl } from './global.helper';

const PEOPLE_LABELS: Record<'directors' | 'actors', RegExp> = {
  directors: /^(Režie|Réžia|Directed by)/,
  actors: /^(Hrají|Hrajú|Cast)/
};

const toNumber = (text: string | undefined): number | null => {
  const digits = text?.replace(/\D/g, '');
  return digits ? +digits : null;
};

export const getChartItems = (html: HTMLElement): HTMLElement[] =>
  html.querySelectorAll('.charts-article-list article');

export const getChartPosition = (el: HTMLElement): number | null =>
  toNumber(el.querySelector('.position')?.text);

export const getChartUrl = (el: HTMLElement): string | null =>
  el.querySelector('.film-title-name')?.attributes.href ?? null;

export const getChartTitle = (el: HTMLElement): string =>
  el.querySelector('.film-title-name')?.text.trim() ?? '';

export const getChartYear = (el: HTMLElement): number | null =>
  toNumber(el.querySelector('.film-title-info .info')?.text);

export const getChartPoster = (el: HTMLElement): string | null => {
  const img = el.querySelector('.article-img img');
  const src = img?.attributes.src;
  if (!src || img.classNames.includes('empty-image')) return null;
  // The thumbnail at the size the movie page gives
  return addProtocol(src.replace(/\/cache\/resized\/w\d+(h\d+)?\//, '/cache/resized/w1080/'));
};

export const getChartOrigins = (el: HTMLElement): string[] =>
  el
    .querySelector('.film-origins-genres .info-country')
    ?.text.split('/')
    .map((country) => country.trim())
    .filter(Boolean) ?? [];

// The genres are the bare text after the countries
export const getChartGenres = (el: HTMLElement): string[] => {
  const info = el.querySelector('.film-origins-genres .info');
  if (!info) return [];
  return info.childNodes
    .filter((node) => node.nodeType === NodeType.TEXT_NODE)
    .map((node) => node.text)
    .join('')
    .split(',')
    .map((genre) => genre.trim())
    .filter(Boolean);
};

export const getChartPeople = (
  el: HTMLElement,
  type: 'directors' | 'actors'
): CSFDMovieCreator[] => {
  const line = el
    .querySelectorAll('.film-creators')
    .find((p) => PEOPLE_LABELS[type].test(p.text.trim()));
  return (
    line?.querySelectorAll('a').map((person) => ({
      id: parseIdFromUrl(person.attributes.href),
      name: person.text.trim(),
      url: `https://www.csfd.cz${person.attributes.href}`
    })) ?? []
  );
};

/** In %, to one decimal: "95,4%" in Czech and Slovak, "95.4%" in English */
export const getChartRating = (el: HTMLElement): number | null => {
  const rating = parseFloat(el.querySelector('.rating-average')?.text.replace(',', '.') ?? '');
  return Number.isNaN(rating) ? null : rating;
};

export const getChartColorRating = (el: HTMLElement): CSFDColorRating =>
  parseColor(el.querySelector('.rating-average')?.classNames.split(' ').pop() as CSFDColors);

/** The number of ratings, or of fans in the favourite chart */
export const getChartCount = (el: HTMLElement): number | null =>
  toNumber(el.querySelector('.rating-total')?.text);
