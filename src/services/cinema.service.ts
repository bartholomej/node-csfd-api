import { HTMLElement, parse } from 'node-html-parser';
import { CSFDCinema, CSFDCinemaPeriod } from '../dto/cinema';
import { fetchPage } from '../fetchers';
import { CSFDOptions } from '../types';
import { cinemasUrl } from '../vars';
import {
  getCinemaCoords,
  getCinemaId,
  getCinemaUrl,
  getGroupedFilmsByDate,
  parseCinema
} from './../helpers/cinema.helper';

export class CinemaScraper {
  public async cinemas(
    district: number = 1,
    period: CSFDCinemaPeriod = 'today',
    options?: CSFDOptions
  ): Promise<CSFDCinema[]> {
    const url = cinemasUrl(district, period, { language: options?.language });
    const response = await fetchPage(url, { ...options?.request });
    const cinemasHtml = parse(response);

    const contentNode = cinemasHtml.querySelectorAll('#snippet--cinemas section[id*="cinema-"]');

    return this.buildCinemas(contentNode);
  }

  private buildCinemas(contentNode: HTMLElement[]): CSFDCinema[] {
    const cinemas: CSFDCinema[] = [];

    contentNode.forEach((x) => {
      const cinemaInfo = parseCinema(x);
      const cinema: CSFDCinema = {
        id: getCinemaId(x),
        name: cinemaInfo?.name,
        city: cinemaInfo?.city,
        url: getCinemaUrl(x),
        coords: getCinemaCoords(x),
        screenings: getGroupedFilmsByDate(x)
      };
      cinemas.push(cinema);
    });

    return cinemas;
  }
}
