import { CSFDScreening } from './global';

export interface CSFDMovie extends CSFDScreening {
  rating: number | null;
  poster: string;
  photo: string;
  ratingCount: number | null;
  duration: number | string;
  titlesOther: CSFDTitlesOther[];
  origins: string[];
  descriptions: string[];
  trivia: string[];
  genres: CSFDGenres[] | string[];
  creators: CSFDCreators;
  vod: CSFDVod[];
  tags: string[];
  premieres: CSFDPremiere[];
  related: CSFDMovieListItem[];
  similar: CSFDMovieListItem[];
}

export type CSFDVodService =
  | 'Netflix'
  | 'hbogo'
  | 'Prime Video'
  | 'Apple TV+'
  | 'iTunes'
  | 'KVIFF.TV'
  | 'Edisonline'
  | 'o2tv'
  | 'SledovaniTV'
  | 'Starmax'
  | 'DAFilms'
  | 'FILMY ČESKY A ZADARMO'
  | 'Youtube Česká filmová klasika'
  | 'VAPET'
  | 'VOREL FILM'
  | 'ivysilani'
  | 'Google Play'
  | 'Voyo'
  | 'DVD';

export interface CSFDVod {
  title: CSFDVodService;
  url: string;
}

export interface CSFDCreators {
  directors: CSFDMovieCreator[];
  writers: CSFDMovieCreator[];
  cinematography: CSFDMovieCreator[];
  music: CSFDMovieCreator[];
  actors: CSFDMovieCreator[];
  basedOn: CSFDMovieCreator[];
  producers: CSFDMovieCreator[];
  filmEditing: CSFDMovieCreator[];
  costumeDesign: CSFDMovieCreator[];
  productionDesign: CSFDMovieCreator[];
}

export interface CSFDTitlesOther {
  country: string;
  title: string;
}

export interface CSFDMovieCreator {
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
