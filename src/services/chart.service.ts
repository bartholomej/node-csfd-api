import { HTMLElement, parse } from 'node-html-parser';
import { CSFDChartCategory, CSFDChartConfig, CSFDChartItem, CSFDChartType } from '../dto/chart';
import { fetchPage } from '../fetchers';
import {
  getChartColorRating,
  getChartCount,
  getChartGenres,
  getChartItems,
  getChartOrigins,
  getChartPeople,
  getChartPosition,
  getChartPoster,
  getChartRating,
  getChartTitle,
  getChartUrl,
  getChartYear
} from '../helpers/chart.helper';
import { parseIdFromUrl } from '../helpers/global.helper';
import { CSFDLanguage, CSFDOptions } from '../types';
import { chartUrl, movieUrl } from '../vars';

const FIRST_PAGE = 99;
const CHART_LENGTH = 1000;
const PAGE_SIZE = 100;

export class ChartScraper {
  public async chart(
    type: CSFDChartType,
    category: CSFDChartCategory,
    config?: CSFDChartConfig,
    options?: CSFDOptions
  ): Promise<CSFDChartItem[]> {
    const limit = Math.min(config?.limit ?? FIRST_PAGE, CHART_LENGTH);
    const items: CSFDChartItem[] = [];

    // The first page holds places 1–99, every next one a hundred from ?from=100, the last 900–1000.
    // Past the end ČSFD serves the first page again, so each page has to start where it should.
    for (let from = 0; items.length < limit && from < CHART_LENGTH; from += PAGE_SIZE) {
      const url = chartUrl(type, category, from, { language: options?.language });
      const html = parse(await fetchPage(url, { ...options?.request }));
      const page = getChartItems(html).map((el) =>
        this.parseItem(el, type, category, options?.language)
      );
      if (!page.length || (from && page[0].position !== from)) break;
      items.push(...page);
    }

    return items.slice(0, limit);
  }

  private parseItem(
    el: HTMLElement,
    type: CSFDChartType,
    category: CSFDChartCategory,
    language?: CSFDLanguage
  ): CSFDChartItem {
    const id = parseIdFromUrl(getChartUrl(el));
    const count = getChartCount(el);
    const byFans = category === 'favorite';
    return {
      position: getChartPosition(el),
      id,
      title: getChartTitle(el),
      year: getChartYear(el),
      url: movieUrl(id, { language }),
      type: type === 'series' ? 'series' : 'film',
      colorRating: getChartColorRating(el),
      poster: getChartPoster(el),
      origins: getChartOrigins(el),
      genres: getChartGenres(el),
      creators: {
        directors: getChartPeople(el, 'directors'),
        actors: getChartPeople(el, 'actors')
      },
      rating: getChartRating(el),
      ratingCount: byFans ? null : count,
      fans: byFans ? count : null
    };
  }
}
