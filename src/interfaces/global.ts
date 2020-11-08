export interface CSFDScreening {
  title: string;
  year: number;
  url: string;
  type: CSFDFilmTypes;
  /**
   * Overall aggregated rating. (On the web usually represented by colors).
   *
   * 0: unknown (gray color)
   *
   * 1: 70% – 100 % (red color)
   *
   * 2: 30% - 69% (blue color)
   *
   * 3: 0% - 29% (black color)
   */
  overallRating: CSFDFilmOverallRating;
}

export type CSFDFilmOverallRating = 0 | 1 | 2 | 3;

export type CSFDStars = 0 | 1 | 2 | 3 | 4 | 5;

export type CSFDFilmTypes =
  | 'film'
  | 'TV film'
  | 'TV pořad'
  | 'TV seriál'
  | 'divadelní záznam'
  | 'koncert'
  | 'série'
  | 'studentský film'
  | 'amatérský film'
  | 'hudební videoklip'
  | 'epizoda';
