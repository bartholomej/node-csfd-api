import { HTMLElement } from 'node-html-parser';
import { addProtocol } from './global.helper';

export const getUser = (el: HTMLElement): string => {
  return el.querySelector('.user-title-name').text;
};

export const getUserRealName = (el: HTMLElement): string => {
  return el.querySelector('.user-real-name')?.text.trim() || null;
};

export const getAvatar = (el: HTMLElement): string => {
  const image = el.querySelector('.article-img img').attributes.src;
  return addProtocol(image);
};

export const getUserUrl = (el: HTMLElement): string => {
  return el.querySelector('.user-title-name').attributes.href;
};
