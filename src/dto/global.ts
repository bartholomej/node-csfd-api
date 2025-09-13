export interface CSFDScreening {
  id: number;
  title: string;
  year: number;
  url: string;
  type: CSFDFilmTypes;
  /**
   * Overall aggregated rating. (On the web usually represented by colors).
   *
   * 'unknown': unknown (gray color)
   *
   * 'good': 70% – 100 % (red color)
   *
   * 'average': 30% - 69% (blue color)
   *
   * 'bad': 0% - 29% (black color)
   */
  colorRating: CSFDColorRating;
}

export type CSFDColorRating = 'bad' | 'average' | 'good' | 'unknown';

export type CSFDStars = 0 | 1 | 2 | 3 | 4 | 5;

export type CSFDFilmTypes =
  | 'film'
  | 'TV film'
  | 'pořad'
  | 'seriál'
  | 'divadelní záznam'
  | 'koncert'
  | 'série'
  | 'studentský film'
  | 'amatérský film'
  | 'hudební videoklip'
  | 'epizoda';
