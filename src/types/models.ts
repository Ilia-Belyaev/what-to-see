export type Film = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type Films = Film[];

export type CurrentFilm = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type SimilarFilms = CurrentFilm[];

export type PromoFilm = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type FavoriteFilm = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  released: number;
  isFavorite: boolean;
}

export type FavoriteFilms = FavoriteFilm[];

export type Review = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type Reviews = Review[]

export type UserReview = {
  comment: string;
  rating: number;
  filmId: string;
}

export type UserComment = {
  comment: string;
  rating: number;
}

export type User = {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
}

export type LoginData = {
  email: string;
  password: string;
}

export type FilmGenres = string[];

export type AuthStatus = 'AUTH' | 'UNKNOWN' | 'NO_AUTH';

export type LogoWord = {
  name: string;
  index: number;
}

export type AuthSlice = {
  authStatus: AuthStatus;
}


export type CurrentFilmId = string | undefined;

export type AuthData = {
  login: string | null;
  password: string | null;
}

export type FavoriteFilmData = {
  id: string;
  isFavorite: boolean;
}
