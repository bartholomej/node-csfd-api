import { CSFDMovieListItem } from './movie.interface';

export interface CSFDCinema {
  name: string;
  city: string;
  url: string;
  coords: { lat: number; lng: number };
  region?: string;
  screenings: CSFDCinemaMovie[];
}

export interface CSFDCinemaMovie extends CSFDMovieListItem {
  meta: CSFDCinemaMeta[];
  showTimes: string[];
}

export type CSFDCinemaMeta = 'dubbing' | '3D' | 'subtitles' | string;
