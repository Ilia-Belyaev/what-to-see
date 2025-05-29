import { createSelector } from '@reduxjs/toolkit';
import { Films } from '../../types/models';
import { takeFilms } from './films/selectors';
import { takeGenre } from './genre/selectors';
import { sortingFilms } from '../../utils/utils';

export const getFilmsWithCurrentGenre = createSelector([takeFilms, takeGenre], (films: Films, genre: string) => sortingFilms(films, genre));
