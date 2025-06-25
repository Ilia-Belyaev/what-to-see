import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../../../types/models';


export const setFavoriteFilms = createAction<Films>('favoriteFilm/addFavorite');

export const removeFavoriteFilm = createAction<Film>('favoriteFilm/remove');

export const setNewFavoriteFilm = createAction<Film>('favoriteFilm/addNewFavoriteFilm');
