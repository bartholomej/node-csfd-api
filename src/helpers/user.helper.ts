import { HTMLElement } from 'node-html-parser';
import { addProtocol, parseDate, parseIdFromUrl } from './global.helper';

const collapse = (text: string | undefined): string | null =>
  text?.replace(/\s+/g, ' ').trim() || null;

const digits = (text: string | undefined): number | null => {
  const value = text?.replace(/\D/g, '');
  return value ? Number(value) : null;
};

export const getUserProfileUrl = (el: HTMLElement | null): string | null =>
  el?.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null;

export const getUserId = (el: HTMLElement | null): number | null => {
  const url = getUserProfileUrl(el);
  return url ? parseIdFromUrl(url) : null;
};

export const getUserNick = (el: HTMLElement | null): string | null =>
  collapse(el?.querySelector('.user-profile-header h1')?.text);

export const getUserAvatar = (el: HTMLElement | null): string | null => {
  const src = el?.querySelector('.user-profile-header img')?.getAttribute('src');
  return src ? addProtocol(src) : null;
};

export const getUserRealName = (el: HTMLElement | null): string | null =>
  collapse(el?.querySelector('.user-profile-content p strong')?.text);

// The first paragraph holds the real name in <strong>, then the place after a <br>.
export const getUserLocation = (el: HTMLElement | null): string | null => {
  const p = el?.querySelector('.user-profile-content p');
  if (!p) return null;
  const name = p.querySelector('strong')?.text ?? '';
  return collapse(p.text.replace(name, ''));
};

export const getUserAbout = (el: HTMLElement | null): string | null =>
  collapse(el?.querySelectorAll('.user-profile-content p')[1]?.text);

// "Na ČSFD od 15.03.2003" (English: 03/15/2003) comes before the last login, so the first date is
// the sign-up.
export const getUserMemberSince = (el: HTMLElement | null): string | null => {
  const date = el?.querySelector('.user-profile-footer')?.text.match(/\d{1,2}[./]\d{1,2}[./]\d{4}/);
  return date ? parseDate(date[0]) : null;
};

/** Fans and points, in that order, from the profile's fan club box. */
export const getUserFanclub = (
  el: HTMLElement | null
): { fans: number | null; points: number | null } => {
  const values = el?.querySelectorAll('.fans-box-mobile-count p strong') ?? [];
  return { fans: digits(values[0]?.text), points: digits(values[1]?.text) };
};

// The profile's sections in Czech, English and Slovak paths
const SECTION_PATHS = {
  ratings: ['hodnoceni', 'ratings', 'hodnotenia'],
  reviews: ['recenze', 'reviews', 'recenzie']
};

/** The total in the "(3 132)" of the box that links to the user's ratings or reviews. */
export const getUserSectionCount = (
  el: HTMLElement | null,
  section: keyof typeof SECTION_PATHS
): number | null => {
  const selector = SECTION_PATHS[section].map((path) => `a[href$="/${path}/"]`).join(', ');
  const header = el
    ?.querySelectorAll('.updated-box-header')
    .find((node) => node.querySelector(selector));
  return digits(header?.querySelector('h2 .count')?.text);
};
