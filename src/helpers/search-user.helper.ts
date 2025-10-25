import { HTMLElement, NodeType } from 'node-html-parser';
import { addProtocol } from './global.helper.js';

export const getUser = (el: HTMLElement): string => {
  return el.querySelector('.user-title-name').text;
};

export const getUserRealName = (el: HTMLElement): string => {
  const p = el.querySelector('.article-content p');
  if (!p) return null;

  const textNodes = p.childNodes.filter(n => n.nodeType === NodeType.TEXT_NODE && n.rawText.trim() !== '');
  const name = textNodes.length ? textNodes[0].rawText.trim() : null;

  return name;
};

export const getAvatar = (el: HTMLElement): string => {
  const image = el.querySelector('.article-img img').attributes.src;
  return addProtocol(image);
};

export const getUserUrl = (el: HTMLElement): string => {
  return el.querySelector('.user-title-name').attributes.href;
};
