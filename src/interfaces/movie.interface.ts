import { CSFDScreening } from './global';

export interface CSFDMovie extends CSFDScreening {
  rating: number | null;
  poster: string;
  duration: number | string;
  titlesOther: CSFDTitlesOther[];
  origins: string[];
  descriptions: string[];
  genres: CSFDGenres[] | string[];
  creators: CSFDCreators;
  vod: CSFDVod[];
  tags: string[];
  premieres: CSFDPremiere[];
  related: CSFDMovieListItem[];
  similar: CSFDMovieListItem[];
}

export interface CSFDVod {
  title:
    | 'Netflix'
    | 'hbogo'
    | 'Primve Video'
    | 'Apple TV+'
    | 'ivysilani'
    | 'Aerovod'
    | 'o2tv'
    | 'Voyo'
    | 'FILMY ČESKY A ZADARMO'
    | 'VAPET'
    | 'VOREL FILM'
    | string;
  url: string;
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

export interface CSFDTitlesOther {
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

export interface CSFDMovieListItem {
  id: number;
  title: string;
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

export interface CSFDPremiere {
  country: string;
  format: string;
  date: string;
  company: string;
}

export type CSFDBoxContent = 'Související' | 'Podobné';
