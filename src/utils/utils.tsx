import cn from 'classnames';
import { Film, FilmGenres, Films, LogoWord } from '../types/models';
import { ALL_GENRES, MINUTES_IN_HOUR, RATING_TRANSCRIPTION } from '../../constants';

export const logoMarkup = (word: LogoWord) => <span className={cn('logo__letter', {'logo__letter--1': word.index === 1}, {'logo__letter--2': word.index === 2}, {'logo__letter--3': word.index === 3},)} key={word.index}>{word.name}</span>;

export const convertDate = (date: string) => date.split('T')[0];

export const convertFullDate = (date: string) => {
  const month = new Date(date).toLocaleString('en-US', { month: 'long' });
  const year = new Date(date).getFullYear();
  const day = new Date(date).getDay();

  return `${month} ${day}, ${year}`;
};


export const sortingFilms = (films: Films, genre: string) => {
  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export const setFavoriteFilm = (favoriteFilms: Films, favoriteFilm: Film) => favoriteFilms.filter((film) => film.id !== favoriteFilm.id);

export const addNewFavoriteFilm = (favoriteFilms: Films, film: Film) => {
  const currentFilm = favoriteFilms.find((cinema) => cinema.id === film.id);
  const replacedFilm = {
    id: film.id,
    name: film.name,
    previewImage: film.previewImage,
    previewVideoLink: film.previewVideoLink,
    genre: film.genre,

  };

  if(!currentFilm) {
    return [...favoriteFilms, replacedFilm];
  }

  return favoriteFilms.filter((cinema) => cinema.id !== film.id);
};

export const ratingText = (rating: number) => {
  switch (true) {
    case rating > 0 && rating <= 3:
      return RATING_TRANSCRIPTION.Bad;
    case rating > 3 && rating <= 5:
      return RATING_TRANSCRIPTION.Normal;
    case rating > 5 && rating <= 8:
      return RATING_TRANSCRIPTION.Good;
    case rating > 8 && rating <= 10:
      return RATING_TRANSCRIPTION.VeryGood;
    case rating > 10:
      return RATING_TRANSCRIPTION.Awesome;
  }
};

export const replaceArrayToString = (array: string[]) => array.toString().replaceAll(',', ', ');

export const convertTime = (time: number) => {
  const hours = time % MINUTES_IN_HOUR;
  const minutes = time - hours;

  return `${hours}h ${minutes}m`;
};

export const setGenres = (films: Films) => {
  const genres = new Set();

  genres.add('All Genres');

  films.map((film) => genres.add(film.genre));

  return Array.from(genres) as FilmGenres;
};
