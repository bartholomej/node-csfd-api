import { CSFDColorRating, CSFDFilmTypes } from '../dto/global';
import { CSFDColors } from '../dto/user-ratings';

const LANG_PREFIX_REGEX = /^[a-z]{2,3}$/;
const ISO8601_DURATION_REGEX =
  /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;

export const parseIdFromUrl = (url: string): number => {
  if (!url) return null;

  const parts = url.split('/');
  const idParts = parts.filter((p) => /^\d+-/.test(p));
  if (idParts.length > 0) {
    const idSlug = idParts[idParts.length - 1];
    return +idSlug.split('-')[0] || null;
  }

  // Fallback
  const hasLangPrefix = LANG_PREFIX_REGEX.test(parts[1]);
  const idSlug = parts[hasLangPrefix ? 3 : 2];
  const id = idSlug?.split('-')[0];
  return +id || null;
};

export const parseLastIdFromUrl = (url: string): number => {
  if (url) {
    const idSlug = url?.split('/')[3];
    const id = idSlug?.split('-')[0];
    return +id || null;
  } else {
    return null;
  }
};

export const getColor = (cls: string): CSFDColorRating => {
  switch (cls) {
    case 'page-lightgrey':
      return 'unknown';
    case 'page-red':
      return 'good';
    case 'page-blue':
      return 'average';
    case 'page-grey':
      return 'bad';
    default:
      return 'unknown';
  }
};

export const parseColor = (quality: CSFDColors): CSFDColorRating => {
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

const filmTypeMap: Record<string, CSFDFilmTypes> = {
  'TV film': 'tv-film',
  pořad: 'tv-show',
  seriál: 'series',
  'divadelní záznam': 'theatrical',
  koncert: 'concert',
  série: 'season',
  'studentský film': 'student-film',
  'amatérský film': 'amateur-film',
  'hudební videoklip': 'music-video',
  epizoda: 'episode',
  'video kompilace': 'video-compilation',
  film: 'film'
};

export const parseFilmType = (type: string): CSFDFilmTypes => {
  return filmTypeMap[type] || 'film';
};

export const addProtocol = (url: string): string => {
  return url.startsWith('//') ? 'https:' + url : url;
};

export const getDuration = (matches: RegExpMatchArray) => {
  return {
    sign: matches[1] === undefined ? '+' : '-',
    years: matches[2] === undefined ? 0 : matches[2],
    months: matches[3] === undefined ? 0 : matches[3],
    weeks: matches[4] === undefined ? 0 : matches[4],
    days: matches[5] === undefined ? 0 : matches[5],
    hours: matches[6] === undefined ? 0 : matches[6],
    minutes: matches[7] === undefined ? 0 : matches[7],
    seconds: matches[8] === undefined ? 0 : matches[8]
  };
};

export const parseISO8601Duration = (iso: string): number => {
  const matches = iso.match(ISO8601_DURATION_REGEX);

  const duration = getDuration(matches);

  return +duration.hours * 60 + +duration.minutes;
};

/**
 * Parses a date string into a standardized YYYY-MM-DD format.
 * Supports:
 * - D.M.YYYY
 * - DD.MM.YYYY
 * - D. M. YYYY
 * - MM/DD/YYYY
 * - YYYY
 */
export const parseDate = (date: string): string | null => {
  if (!date) return null;

  // Clean the input
  const cleanDate = date.trim();

  // Try parsing DD.MM.YYYY or D.M.YYYY with optional spaces
  const dateMatch = cleanDate.match(/^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})$/);
  if (dateMatch) {
    const day = dateMatch[1].padStart(2, '0');
    const month = dateMatch[2].padStart(2, '0');
    const year = dateMatch[3];
    return `${year}-${month}-${day}`;
  }

  // Try parsing MM/DD/YYYY
  const slashMatch = cleanDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slashMatch) {
    const month = slashMatch[1].padStart(2, '0');
    const day = slashMatch[2].padStart(2, '0');
    const year = slashMatch[3];
    return `${year}-${month}-${day}`;
  }

  // Try parsing YYYY
  const yearMatch = cleanDate.match(/^(\d{4})$/);
  if (yearMatch) {
    return `${yearMatch[1]}-01-01`;
  }

  return null;
};

// Sleep in loop
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
