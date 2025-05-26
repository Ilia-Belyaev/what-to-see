import { FilmGenres } from './src/types/models';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Error = '/*',
}

export const FILMS_COUNT = 10;

export enum GenreList {
  AllGenres = 'All genres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers',
}

export const GENRES_LIST = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
] as FilmGenres;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const LOGO_WORDS = [
  {
    name: 'W',
    index: 1,
  },
  {
    name: 'T',
    index: 2,
  },
  {
    name: 'W',
    index: 3,
  },
];

export const FILM_NAV_LIST = ['Overview', 'Details', 'Reviews'];

export enum FILM_NAV_VALUE {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum NameSpace {
  FilmNavInfo = 'FILM_NAV_INFO',
  Authorization = 'LOGIN',
  User = 'USER',
  Films = 'FILMS',
  Genre = 'GENRE',
}
