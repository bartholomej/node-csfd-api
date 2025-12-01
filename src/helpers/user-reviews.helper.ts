import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../dto/global';
import { Colors } from '../dto/user-ratings';
import { parseIdFromUrl } from './global.helper';

export const getUserReviewId = (el: HTMLElement): number => {
  const url = el.querySelector('.film-title-name').attributes.href;
  return parseIdFromUrl(url);
};

export const getUserReviewRating = (el: HTMLElement): CSFDStars => {
  const ratingText = el.querySelector('.star-rating .stars').classNames.split(' ').pop();

  const rating = ratingText.includes('stars-') ? +ratingText.split('-').pop() : 0;
  return rating as CSFDStars;
};

export const getUserReviewType = (el: HTMLElement): CSFDFilmTypes => {
  // Reviews might not have explicit type info in the same way as ratings table,
  // but let's try to find it if available or default to 'film'.
  // Looking at the HTML, the type info seems to be in the span with class 'info' inside .film-title-info, but it contains year.
  // The type might not be explicitly listed in the review list item in the same way.
  // Let's assume 'film' for now or check if there are other indicators.
  // In the provided HTML, there isn't a clear type indicator like in the ratings table (which had it in parentheses).
  // However, the filter form has types.
  // For now, we will default to 'film' or try to extract if possible.
  return 'film';
};

export const getUserReviewTitle = (el: HTMLElement): string => {
  return el.querySelector('.film-title-name').text;
};

export const getUserReviewYear = (el: HTMLElement): number => {
  const infoSpan = el.querySelector('.film-title-info .info');
  return infoSpan ? +infoSpan.text.replace(/[()]/g, '') : null;
};

export const getUserReviewColorRating = (el: HTMLElement): CSFDColorRating => {
  const icon = el.querySelector('.film-title-nooverflow .icon');
  const color = parseColor(icon?.classNames.split(' ').pop() as Colors);
  return color;
};

export const getUserReviewDate = (el: HTMLElement): string => {
  return el.querySelector('.header-right-info .info time').text.trim();
};

export const getUserReviewUrl = (el: HTMLElement): string => {
  const url = el.querySelector('.film-title-name').attributes.href;
  return `https://www.csfd.cz${url}`;
};

export const getUserReviewText = (el: HTMLElement): string => {
  return el.querySelector('.user-reviews-text .comment').text.trim();
};

const parseColor = (quality: Colors): CSFDColorRating => {
  switch (quality) {
    case 'lightgrey':
      return 'unknown';
    case 'red':
      return 'good';
    case 'blue':
      return 'average';
    case 'grey':
      return 'bad';
    default:
      return 'unknown';
  }
};

// Sleep in loop
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
