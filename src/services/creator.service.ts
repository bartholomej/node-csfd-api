import { HTMLElement, parse } from 'node-html-parser';
import { CSFDCreator } from '../dto/creator';
import { fetchPage } from '../fetchers';
import {
  getCreatorBio,
  getCreatorBirthdayInfo,
  getCreatorFilms,
  getCreatorName,
  getCreatorPhoto
} from '../helpers/creator.helper';
import { creatorUrl } from '../vars';

export class CreatorScraper {
  public async creator(creatorId: number, optionsRequest?: RequestInit): Promise<CSFDCreator> {
    const id = Number(creatorId);
    if (isNaN(id)) {
      throw new Error('node-csfd-api: creatorId must be a valid number');
    }
    const url = creatorUrl(id);
    const response = await fetchPage(url, { ...optionsRequest });

    const creatorHtml = parse(response);

    const asideNode = creatorHtml.querySelector('.creator-about');
    const filmsNode = creatorHtml.querySelector('.creator-filmography');
    return this.buildCreator(+creatorId, asideNode, filmsNode);
  }

  private buildCreator(id: number, asideEl: HTMLElement, filmsNode: HTMLElement): CSFDCreator {
    return {
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
