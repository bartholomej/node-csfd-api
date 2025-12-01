import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../dto/global';
import { Colors } from '../dto/user-ratings';
import { parseColor, parseIdFromUrl } from './global.helper';

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
  // Type can be in the second .info span (e.g., "(seriál)") // TODO need more tests
  const typeText = el.querySelectorAll('.film-title-info .info');

  return (typeText.length > 1 ? typeText[1].text.slice(1, -1) : 'film') as CSFDFilmTypes;
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
