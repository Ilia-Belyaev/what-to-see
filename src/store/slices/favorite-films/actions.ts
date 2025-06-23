import { createAction } from '@reduxjs/toolkit';
import { FavoriteFilm, FavoriteFilms } from '../../../types/models';


export const setFavoriteFilms = createAction<FavoriteFilms>('favoriteFilm/addFavorite');

export const removeFavoriteFilm = createAction<FavoriteFilm>('favoriteFilm/remove');

export const setNewFavoriteFilm = createAction<FavoriteFilm>('favoriteFilm/addNewFavoriteFilm');
