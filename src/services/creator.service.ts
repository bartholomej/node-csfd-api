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
import { CSFDOptions } from '../types';
import { creatorUrl } from '../vars';

export class CreatorScraper {
  public async creator(creatorId: number, options?: CSFDOptions): Promise<CSFDCreator> {
    const id = Number(creatorId);
    if (isNaN(id)) {
      throw new Error('node-csfd-api: creatorId must be a valid number');
    }
    const url = creatorUrl(id, { language: options?.language });
    const response = await fetchPage(url, { ...options?.request });

    const creatorHtml = parse(response);

    const asideNode = creatorHtml.querySelector('.creator-about');
    const filmsNode = creatorHtml.querySelector('.creator-filmography');
    return this.buildCreator(+creatorId, asideNode, filmsNode);
  }

  private buildCreator(id: number, asideEl: HTMLElement, filmsNode: HTMLElement): CSFDCreator {
    const birthdayInfo = getCreatorBirthdayInfo(asideEl);
    return {
      id,
      name: getCreatorName(asideEl),
      birthday: birthdayInfo?.birthday,
      birthplace: birthdayInfo?.birthPlace,
      photo: getCreatorPhoto(asideEl),
      age: birthdayInfo?.age || null,
      bio: getCreatorBio(asideEl),
      films: getCreatorFilms(filmsNode)
    };
  }
}
