import { HTMLElement, parse } from 'node-html-parser';
import { fetchPage } from '../fetchers';
import { getCreatorBio, getCreatorBirthdayInfo, getCreatorFilms, getCreatorName, getCreatorPhoto } from '../helpers/creator.helper';
import { CSFDCreator } from '../interfaces/creator.interface';
import { creatorUrl } from '../vars';

export class CreatorScraper {
  private person: CSFDCreator;

  public async creator(creatorId: number): Promise<CSFDCreator> {
    const id = Number(creatorId);
    if (isNaN(id)) {
      throw new Error('node-csfd-api: creatorId must be a valid number');
    }
    const url = creatorUrl(id);
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
