import { CSFDScreening } from './global';

export interface CSFDCreator {
  id: number;
  name: string;
  birthday: string;
  birthplace: string;
  photo: string;
  age: number | string;
  bio: string;
  films: CSFDCreatorScreening[];
}

export type CSFDCreatorScreening = Omit<CSFDScreening, 'url' | 'type'>;
