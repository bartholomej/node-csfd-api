import { HTMLElement, parse } from 'node-html-parser';
import { fetchPage } from '../fetchers';
import { CSFDCinema, CSFDCinemaPeriod } from '../interfaces/cinema.interface';
import { cinemasUrl } from '../vars';
import {
  getCinemaId,
  getCinemaUrl,
  getCoords,
  getGroupedFilmsByDate,
  parseCinema
} from './../helpers/cinema.helper';

export class CinemaScraper {
  private cinema: CSFDCinema[];

  public async cinemas(
    district: number = 1,
    period: CSFDCinemaPeriod = 'today'
  ): Promise<CSFDCinema[]> {
    const url = cinemasUrl(district, period);
    const response = await fetchPage(url);

    const cinemasHtml = parse(response);

    const contentNode = cinemasHtml.querySelectorAll('#snippet--cinemas section.box');

    this.buildCinemas(contentNode);
    return this.cinema;
  }

  private buildCinemas(contentNode: HTMLElement[]) {
    const cinemas: CSFDCinema[] = [];

    contentNode.map((x) => {
      const cinema: CSFDCinema = {
        id: getCinemaId(x),
        name: parseCinema(x)?.name,
        city: parseCinema(x)?.city,
        url: getCinemaUrl(x),
        coords: getCoords(x),
        screenings: getGroupedFilmsByDate(x)
      };
      cinemas.push(cinema);
    });

    this.cinema = cinemas;
  }
}
