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

/** Stars in half steps. 0 is "odpad!" (trash). */
export type CSFDStars = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

export type CSFDFilmTypes =
  | 'film'
  | 'tv-film'
  | 'tv-show'
  | 'series'
  | 'theatrical'
  | 'concert'
  | 'season'
  | 'student-film'
  | 'amateur-film'
  | 'music-video'
  | 'episode'
  | 'video-compilation';
