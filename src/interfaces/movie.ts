import { CSFDScreening } from './global';

export interface CSFDMovie extends CSFDScreening {
  poster?: string;
  otherTitles?: OtherTitles[];
  origins?: string[];
  descriptions?: string[];
  directors?: CSFDCreators[];
  actors?: CSFDCreators[];
  basedOn?: CSFDCreators[];
  writers?: CSFDCreators[];
  music?: CSFDCreators[];
  producers?: CSFDCreators[];
  genres: string[]; // TODO listo of genres(?)
}

export interface OtherTitles {
  country: string;
  title: string;
}

export interface CSFDCreators {
  name: string;
  url: string;
}

export type CSFDCreatoreGroups =
  | 'Režie'
  | 'Scénář'
  | 'Kamera'
  | 'Hudba'
  | 'Hrají'
  | 'Producenti'
  | 'Střih'
  | 'Předloha'
  | 'Scénografie'
  | 'Kostýmy';
