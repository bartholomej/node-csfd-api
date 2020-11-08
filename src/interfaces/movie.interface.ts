import { CSFDScreening } from './global';

export interface CSFDMovie extends CSFDScreening {
  poster: string;
  otherTitles: CSFDOtherTitles[];
  origins: string[];
  descriptions: string[];
  directors: CSFDCreators[];
  actors: CSFDCreators[];
  basedOn: CSFDCreators[];
  writers: CSFDCreators[];
  music: CSFDCreators[];
  producers: CSFDCreators[];
  genres: CSFDGenres[] | string[];
}

export interface CSFDOtherTitles {
  country: string;
  title: string;
}

export interface CSFDCreators {
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
