import { HTMLElement, parse } from 'node-html-parser';
import { CSFDCreator } from '../dto/creator';
import { fetchPage } from '../fetchers';
import { extractId } from '../helpers/global.helper';
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
  public async creator(creatorId: number | string, options?: CSFDOptions): Promise<CSFDCreator> {
    const id = extractId(creatorId);
    if (!id) {
      throw new Error('node-csfd-api: creatorId must be a valid number, string ID, or CSFD URL');
    }
    const url = creatorUrl(id, { language: options?.language });
    const response = await fetchPage(url, { ...options?.request });

    const creatorHtml = parse(response);

    const asideNode = creatorHtml.querySelector('.creator-about');
    const filmsNode = creatorHtml.querySelector('.creator-filmography');
    return this.buildCreator(id, asideNode, filmsNode);
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
