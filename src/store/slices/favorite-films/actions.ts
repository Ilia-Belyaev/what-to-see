import { createAction } from '@reduxjs/toolkit';
import { Film, Films, PromoFilm } from '../../../types/models';


export const setFavoriteFilms = createAction<Films>('favoriteFilm/addFavorite');

export const removeFavoriteFilm = createAction<Film>('favoriteFilm/remove');

export const replaceFilm = createAction<PromoFilm>('favoriteFilm/addNewFavoriteFilm');
