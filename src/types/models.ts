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

export type Review = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type Reviews = Review[]

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

export type FilmGenre = 'All genres' | 'Comedies' | 'Crime' | 'Documentary' | 'Dramas' | 'Horror' | 'Kids & Family' | 'Romance' | 'Sci-Fi' | 'Thrillers';

export type FilmGenres = FilmGenre[];

export type AuthStatus = 'AUTH' | 'UNKNOWN' | 'NO_AUTH';

export type LogoWord = {
  name: string;
  index: number;
}
