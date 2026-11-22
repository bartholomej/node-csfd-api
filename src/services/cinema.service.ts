import type { HTMLElement } from 'node-html-parser';
import { parse } from 'node-html-parser';
import type {
  CSFDCinema,
  CSFDCinemaConfig,
  CSFDCinemaPeriod,
  CSFDCinemaProgram
} from '../dto/cinema';
import { fetchPage } from '../fetchers';
import type { CSFDOptions } from '../types';
import { cinemasUrl } from '../vars';
import {
  getCinemaAddress,
  getCinemaCoords,
  getCinemaCsfdUrl,
  getCinemaId,
  getCinemaPhone,
  getCinemaSections,
  getCinemaTrending,
  getCinemaUrl,
  getGroupedFilmsByDate,
  parseCinema
} from './../helpers/cinema.helper';

export class CinemaScraper {
  public async cinemas(
    district: number = 1,
    period: CSFDCinemaPeriod = 'today',
    config?: CSFDCinemaConfig,
    options?: CSFDOptions
  ): Promise<CSFDCinemaProgram> {
    const url = cinemasUrl(district, period, { language: options?.language }, config?.films);
    const response = await fetchPage(url, { ...options?.request });
    const html = parse(response);

    return {
      cinemas: this.buildCinemas(getCinemaSections(html)),
      trending: getCinemaTrending(html)
    };
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
        csfdUrl: getCinemaCsfdUrl(x),
        address: getCinemaAddress(x),
        phone: getCinemaPhone(x),
        coords: getCinemaCoords(x),
        screenings: getGroupedFilmsByDate(x)
      };
      cinemas.push(cinema);
    });

    return cinemas;
  }
}
