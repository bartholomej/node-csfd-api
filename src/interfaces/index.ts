export interface CSFDUserRatings {
  title: string;
  year: number;
  url: string;
  type?: CSFDFilmTypes;
  rating: number;
  date?: string; // TODO datetime
  quality: number;
}

export type CSFDFilmTypes =
  | 'film'
  | 'TV film'
  | 'TV pořad'
  | 'TV seriál'
  | 'divadelní záznam'
  | 'koncert'
  | 'série'
  | 'epizoda'
  | 'studentský film'
  | 'amatérský film'
  | 'hudební videoklip'
  | 'epizoda';
