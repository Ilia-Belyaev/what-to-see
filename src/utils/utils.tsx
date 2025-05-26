import cn from 'classnames';
import { FilmGenre, Films, LogoWord } from '../types/models';
import { GenreList } from '../../constants';

export const logoMarkup = (word: LogoWord) => <span className={cn('logo__letter', {'logo__letter--1': word.index === 1}, {'logo__letter--2': word.index === 2}, {'logo__letter--3': word.index === 3},)} key={word.index}>{word.name}</span>;

export const convertDate = (date: string) => date.split('T')[0];

export const convertFullDate = (date: string) => {
  const month = new Date(date).toLocaleString('en-US', { month: 'long' });
  const year = new Date(date).getFullYear();
  const day = new Date(date).getDay();

  return `${month} ${day}, ${year}`;
};


export const sortingFilms = (films: Films, genre: FilmGenre) => {
  if (genre === GenreList.AllGenres) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

