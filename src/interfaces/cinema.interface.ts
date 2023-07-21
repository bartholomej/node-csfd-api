import { CSFDMovieListItem } from './movie.interface';

export interface CSFDCinema {
  id: number;
  name: string;
  city: string;
  url: string;
  coords: { lat: number; lng: number };
  region?: string;
  screenings: CSFDCinemaGroupedFilmsByDate[];
}

export interface CSFDCinemaGroupedFilmsByDate {
  date: string;
  films: CSFDCinemaMovie[];
}

export interface CSFDCinemaMovie extends CSFDMovieListItem {
  meta: CSFDCinemaMeta[];
  showTimes: string[];
}

export type CSFDCinemaMeta = 'dubbing' | '3D' | 'subtitles' | string;

export type CSFDCinemaPeriod = 'today' | 'weekend' | 'week' | 'tomorrow' | 'month';
