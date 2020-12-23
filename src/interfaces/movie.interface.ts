import { CSFDScreening } from './global';

export interface CSFDMovie extends CSFDScreening {
  rating: number | null;
  poster: string;
  otherTitles: CSFDOtherTitles[];
  origins: string[];
  descriptions: string[];
  genres: CSFDGenres[] | string[];
  creators: CSFDCreators;
  tags: string[];
}

export interface CSFDCreators {
  directors: CSFDCreator[];
  writers: CSFDCreator[];
  cinematography: CSFDCreator[];
  music: CSFDCreator[];
  actors: CSFDCreator[];
  basedOn: CSFDCreator[];
  producers: CSFDCreator[];
  filmEditing: CSFDCreator[];
  costumeDesign: CSFDCreator[];
  productionDesign: CSFDCreator[];
}

export interface CSFDOtherTitles {
  country: string;
  title: string;
}

export interface CSFDCreator {
  /**
   * CSFD person ID.
   *
   * You can always assemble url from ID like this:
   *
   * `https://www.csfd.cz/tvurce/${id}`
   */
  id: number;
  name: string;
  url: string;
}

export type CSFDGenres =
  | 'Akční'
  | 'Animovaný'
  | 'Dobrodružný'
  | 'Dokumentární'
  | 'Drama'
  | 'Experimentální'
  | 'Fantasy'
  | 'Film-Noir'
  | 'Historický'
  | 'Horor'
  | 'Hudební'
  | 'IMAX'
  | 'Katastrofický'
  | 'Komedie'
  | 'Krátkometrážní'
  | 'Krimi'
  | 'Loutkový'
  | 'Muzikál'
  | 'Mysteriózní'
  | 'Naučný'
  | 'Podobenství'
  | 'Poetický'
  | 'Pohádka'
  | 'Povídkový'
  | 'Psychologický'
  | 'Publicistický'
  | 'Reality-TV'
  | 'Road movie'
  | 'Rodinný'
  | 'Romantický'
  | 'Sci-Fi'
  | 'Soutěžní'
  | 'Sportovní'
  | 'Stand-up'
  | 'Talk-show'
  | 'Taneční'
  | 'Telenovela'
  | 'Thriller'
  | 'Válečný'
  | 'Western'
  | 'Zábavný'
  | 'Životopisný';

export type CSFDCreatorGroups =
  | 'Režie'
  | 'Scénář'
  | 'Kamera'
  | 'Hudba'
  | 'Hrají'
  | 'Produkce'
  | 'Střih'
  | 'Předloha'
  | 'Scénografie'
  | 'Kostýmy';
