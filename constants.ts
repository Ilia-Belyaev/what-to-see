export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Error = '/*',
}

export const FILMS_COUNT = 8;

export const ALL_GENRES = 'All Genres';

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
  VisibleFilms = 'VISIBLE_FILMS',
  Promo = 'PROMO_FILM',
  Favorite = 'FAVORITE',
  CurrentFilm = 'CURRENT_FILM',
}

export enum RATING_TRANSCRIPTION {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export const MINUTES_IN_HOUR = 60;

export enum ApiRoute {
  Films = '/films',
  PromoFilm = '/promo',
}
