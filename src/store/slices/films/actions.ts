import { createAction } from '@reduxjs/toolkit';

export const addFavoriteFilm = createAction<string>('/films/addFavorite');
