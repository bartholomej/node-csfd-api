import { CSFDScreening } from './global';
import { CSFDSearchCreators } from './search';

export type CSFDChartType = 'movies' | 'series';

/** ČSFD's own charts: best and worst rated, most favourited and most controversial */
export type CSFDChartCategory = 'best' | 'worst' | 'favorite' | 'controversial';

export interface CSFDChartConfig {
  /**
   * How many places from the top. By default the first page, places 1–99, in one request; more
   * take a request per hundred. ČSFD's charts end at 1000.
   */
  limit?: number;
}

export interface CSFDChartItem extends CSFDScreening {
  /** Place in the chart, from 1 */
  position: number;
  poster: string | null;
  origins: string[];
  genres: string[];
  creators: CSFDSearchCreators;
  /** Average rating in %, to one decimal. Null in the favourite chart, which ranks by fans. */
  rating: number | null;
  ratingCount: number | null;
  /** Only in the favourite chart: people who count it among their favourites */
  fans: number | null;
}
