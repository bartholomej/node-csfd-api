import { HTMLElement } from 'node-html-parser';
import { CSFDColorRating, CSFDFilmTypes, CSFDStars } from '../dto/global';
import { CSFDColors } from '../dto/user-ratings';
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

  if (typeText.length > 1) {
    const text = typeText[1].text.trim();
    if (text.startsWith('(') && text.endsWith(')')) {
      return text.slice(1, -1) as CSFDFilmTypes;
    }
    return text as CSFDFilmTypes;
  }
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
  const icon = el.querySelector('.film-title-inline i.icon');
  const color = parseColor(icon?.classNames.split(' ').pop() as CSFDColors);
  return color;
};

export const getUserReviewDate = (el: HTMLElement): string => {
  return el.querySelector('.article-header-date-content .info time').text.trim();
};

export const getUserReviewUrl = (el: HTMLElement): string => {
  const url = el.querySelector('.film-title-name').attributes.href;
  return `https://www.csfd.cz${url}`;
};

export const getUserReviewText = (el: HTMLElement): string => {
  return el.querySelector('.comment').text.trim();
};

export const getUserReviewPoster = (el: HTMLElement): string => {
  const img = el.querySelector('.article-img img');
  const srcset = img?.attributes.srcset;

  if (srcset) {
    // Extract 3x version from srcset (e.g., "url 1x, url 2x, url 3x")
    const srcsetParts = srcset.split(',').map((s) => s.trim());
    const poster3x = srcsetParts.find((s) => s.endsWith('3x'));
    if (poster3x) {
      const url = poster3x.replace(/\s+3x$/, '').trim();
      return `https:${url}`;
    }
  }

  // Fallback to src if srcset not available
  const src = img?.attributes.src;
  return src ? `https:${src}` : null;
};
