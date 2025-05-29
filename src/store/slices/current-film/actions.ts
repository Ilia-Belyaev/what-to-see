import { createAction } from '@reduxjs/toolkit';
import { CurrentFilm } from '../../../types/models';

export const setCurrentFilm = createAction<CurrentFilm>('films/currentFilm');

export const dropCurrentFilm = createAction('films/currentFilm/drop');
