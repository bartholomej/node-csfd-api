import type { CSFDMovieListItem } from './movie';

export interface CSFDCinema {
  id: number;
  /** With the branch, e.g. "CineStar Praha - Anděl" */
  name: string;
  city: string;
  /** The cinema's website. ČSFD links it only for some cinemas, the others have an empty string. */
  url: string;
  /** The cinema's own program page on ČSFD */
  csfdUrl: string;
  /** Street address as ČSFD shows it, e.g. "Radlická 3179/1e, Praha" */
  address: string | null;
  phone: string | null;
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
  /** Start times ("HH:MM"), one per showing */
  showTimes: string[];
  /** The same showings, each with its link to buy tickets */
  showings: CSFDCinemaShowing[];
  /** A special hall (IMAX, 4DX, Gold Class…), null for a regular one */
  hall: CSFDCinemaHall | null;
}

export interface CSFDCinemaShowing {
  time: string;
  /**
   * The cinema's own ticket shop. Null when the showing has started or the cinema doesn't sell
   * tickets through ČSFD.
   */
  ticketUrl: string | null;
}

export interface CSFDCinemaHall {
  type: CSFDCinemaHallType;
  /** As ČSFD names it, e.g. "4DX sál" */
  name: string;
}

export type CSFDCinemaHallType =
  'imax' | '4dx' | 'dolby-atmos' | 'gold-class' | 'vip' | 'theatre-deluxe' | 'csfd' | string;

export type CSFDCinemaMeta = 'dubbing' | '3D' | 'subtitles' | string;

export type CSFDCinemaPeriod = 'today' | 'weekend' | 'week' | 'tomorrow' | 'month' | 'all';

export interface CSFDCinemaConfig {
  /** Only these films, by their ČSFD ids. ČSFD's own form takes up to five. */
  films?: number[];
}

/** ČSFD's "hottest in cinemas today" */
export interface CSFDCinemaTrendingFilm {
  /** Place in the list, from 1 */
  position: number;
  id: number;
  title: string;
  url: string;
  poster: string | null;
}

export interface CSFDCinemaProgram {
  cinemas: CSFDCinema[];
  /** The same films for every period and film filter: ČSFD ranks them for today only */
  trending: CSFDCinemaTrendingFilm[];
}
