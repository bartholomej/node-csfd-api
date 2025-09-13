import { HTMLElement, parse } from 'node-html-parser';
import { CSFDCreator } from '../dto/creator';
import { fetchPage } from '../fetchers';
import { getCreatorBio, getCreatorBirthdayInfo, getCreatorFilms, getCreatorName, getCreatorPhoto } from '../helpers/creator.helper';
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
      name: getCreatorName(asideEl),
      birthday: getCreatorBirthdayInfo(asideEl)?.birthday,
      birthplace: getCreatorBirthdayInfo(asideEl)?.birthPlace,
      photo: getCreatorPhoto(asideEl),
      age: getCreatorBirthdayInfo(asideEl)?.age || null,
      bio: getCreatorBio(asideEl),
      films: getCreatorFilms(filmsNode)
    };
  }
}
