import { CSFDColorRating } from '../dto/global';
import { CSFDColors } from '../dto/user-ratings';

export const parseIdFromUrl = (url: string | undefined | null): number | null => {
  if (!url) return null;
  // Match first sequence of digits
  const match = url.match(/(\d+)/);
  if (match && match[1]) {
    return +match[1];
  }
  return null;
};

const COLOR_MAP: Record<string, CSFDColorRating> = {
  'lightgrey': 'unknown',
  'page-lightgrey': 'unknown',
  'red': 'good',
  'page-red': 'good',
  'blue': 'average',
  'page-blue': 'average',
  'grey': 'bad',
  'page-grey': 'bad'
};

export const getColor = (cls: string): CSFDColorRating => {
  return COLOR_MAP[cls] || 'unknown';
};

export const parseColor = (quality: CSFDColors): CSFDColorRating => {
  return COLOR_MAP[quality] || 'unknown';
};

export const addProtocol = (url: string): string => {
  return url.startsWith('//') ? 'https:' + url : url;
};

// Internal helper
const getDuration = (matches: RegExpMatchArray | null) => {
  if (!matches) {
    return { hours: 0, minutes: 0 };
  }
  return {
    hours: matches[6] ? +matches[6] : 0,
    minutes: matches[7] ? +matches[7] : 0
  };
};

export const parseISO8601Duration = (iso: string): number => {
  const iso8601DurationRegex =
    /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;

  const matches = iso.match(iso8601DurationRegex);
  const duration = getDuration(matches);

  return duration.hours * 60 + duration.minutes;
};

// Sleep in loop
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
