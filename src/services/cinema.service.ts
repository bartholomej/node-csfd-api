import { HTMLElement, parse } from 'node-html-parser';
import { fetchPage } from '../fetchers';
import { CSFDCinema } from '../interfaces/cinema.interface';
import { cinemasUrl } from '../vars';
import {
  getCinemaUrl,
  getCoords,
  getGroupedFilmsByDate,
  parseCinema
} from './../helpers/cinema.helper';

export class CinemaScraper {
  private cinema: CSFDCinema[];

  public async cinemas(district: number): Promise<CSFDCinema[]> {
    const url = cinemasUrl(district, 'week');
    const response = await fetchPage(url);

    const cinemasHtml = parse(response);

    const contentNode = cinemasHtml.querySelectorAll('#snippet--cinemas section.box');

    this.buildCinemas(contentNode);
    return this.cinema;
  }

  private buildCinemas(contentNode: HTMLElement[]) {
    const cinemas: CSFDCinema[] = [];

    contentNode.map((x) => {
      const cinema = {
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
