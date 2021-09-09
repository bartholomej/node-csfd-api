import { HTMLElement, parse } from 'node-html-parser';
import { fetchPage } from '../fetchers';
import { getBio, getBirthdayInfo, getFilms, getName, getPhoto } from '../helpers/creator.helper';
import { CSFDCreator } from '../interfaces/creator.interface';
import { creatorUrl } from '../vars';

export class CreatorScraper {
  private person: CSFDCreator;

  public async creator(creatorId: number): Promise<CSFDCreator> {
    const url = creatorUrl(+creatorId);
    const response = await fetchPage(url);

    const creatorHtml = parse(response);

    const asideNode = creatorHtml.querySelector('.creator-about');
    const filmsNode = creatorHtml.querySelector('.creator-filmography');
    this.buildCreator(+creatorId, asideNode, filmsNode);
    return this.person;
  }

  private buildCreator(id: number, asideEl: HTMLElement, filmsNode: HTMLElement) {
    this.person = {
      id,
      name: getName(asideEl),
      birthday: getBirthdayInfo(asideEl)?.birthday,
      birthplace: getBirthdayInfo(asideEl)?.birthPlace,
      photo: getPhoto(asideEl),
      age: getBirthdayInfo(asideEl)?.age || null,
      bio: getBio(asideEl),
      films: getFilms(filmsNode)
    };
  }
}
