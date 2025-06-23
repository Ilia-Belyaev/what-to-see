import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { FavoriteFilms } from '../../../types/models';
import { setNewFavoriteFilm, removeFavoriteFilm, setFavoriteFilms } from './actions';
import { addNewFavoriteFilm, setFavoriteFilm } from '../../../utils/utils';


export const favoriteFilms = createSlice({
  name: NameSpace.Favorite,
  initialState: {
    favoriteFilms: [] as FavoriteFilms,
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(setFavoriteFilms, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(removeFavoriteFilm, (state, action) => {
        state.favoriteFilms = setFavoriteFilm(state.favoriteFilms, action.payload);
      })
      .addCase(setNewFavoriteFilm, (state, action) => {
        state.favoriteFilms = addNewFavoriteFilm(state.favoriteFilms, action.payload);
      });
  }
});
