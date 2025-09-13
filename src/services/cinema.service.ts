import { HTMLElement, parse } from 'node-html-parser';
import { fetchPage } from '../fetchers';
import { CSFDCinema, CSFDCinemaPeriod } from '../interfaces/cinema.interface';
import { cinemasUrl } from '../vars';
import {
  getCinemaCoords,
  getCinemaId,
  getCinemaUrl,
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

    this.cinema = cinemas;
  }
}
