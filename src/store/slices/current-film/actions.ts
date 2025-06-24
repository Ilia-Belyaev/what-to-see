import { createAction } from '@reduxjs/toolkit';

export const changeIsFavoriteCurrentFilm = createAction('films/currentFilm');

export const dropCurrentFilm = createAction('films/currentFilm/drop');
