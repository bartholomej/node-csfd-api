import { CSFDColorRating } from '../dto/global';
import { CSFDColors } from '../dto/user-ratings';

export const parseIdFromUrl = (url: string): number => {
  if (url) {
    const idSlug = url?.split('/')[2];
    const id = idSlug?.split('-')[0];
    return +id || null;
  } else {
    return null;
  }
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

export const addProtocol = (url: string): string => {
  return url.startsWith('//') ? 'https:' + url : url;
};

export const getDuration = (matches: any[]) => {
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
  const iso8601DurationRegex =
    /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;

  const matches = iso.match(iso8601DurationRegex);

  const duration = getDuration(matches);

  return +duration.minutes;
};

// Sleep in loop
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
