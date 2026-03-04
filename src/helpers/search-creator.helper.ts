import { HTMLElement } from 'node-html-parser';
import { addProtocol } from './global.helper';

export const getCreatorName = (el: HTMLElement): string => {
  return el.querySelector('.user-title').text.trim();
};

export const getCreatorImage = (el: HTMLElement): string => {
  const image = el.querySelector('img').attributes.src;
  return addProtocol(image);
};

export const getCreatorUrl = (el: HTMLElement): string => {
  return el.querySelector('.user-title a').attributes.href;
};
