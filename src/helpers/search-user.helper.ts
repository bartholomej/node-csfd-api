import { HTMLElement, NodeType } from 'node-html-parser';
import { addProtocol } from './global.helper';

export const getUser = (el: HTMLElement): string => {
  return el.querySelector('.user-title-name').text;
};

export const getUserRealName = (el: HTMLElement): string => {
  const p = el.querySelector('.article-content p');
  if (!p) return null;

  for (let i = 0; i < p.childNodes.length; i++) {
    const n = p.childNodes[i];
    if (n.nodeType === NodeType.TEXT_NODE) {
      const text = n.rawText.trim();
      if (text !== '') return text;
    }
  }

  return null;
};

export const getAvatar = (el: HTMLElement): string => {
  const image = el.querySelector('.article-img img').attributes.src;
  return addProtocol(image);
};

export const getUserUrl = (el: HTMLElement): string => {
  return el.querySelector('.user-title-name').attributes.href;
};
