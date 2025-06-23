import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { CurrentFilm } from '../../../types/models';
// import { dropCurrentFilm, setCurrentFilm } from './actions';
import { getDataCurrentFilm } from '../api-actions';
import { changeIsFavoriteCurrentFilm } from './actions';

export const currentFilm = createSlice({
  name: NameSpace.CurrentFilm,
  initialState: {
    film: {} as CurrentFilm,
    isCurrentFilmLoaded: false,
    hasCurrentFilmError: false,
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(changeIsFavoriteCurrentFilm, (state) => {
        state.film.isFavorite = !state.film.isFavorite;
      })
      // .addCase(dropCurrentFilm, (state) => {
      //   state.film = {} as CurrentFilm;
      // })
      .addCase(getDataCurrentFilm.pending, (state) => {
        state.isCurrentFilmLoaded = true;
        state.hasCurrentFilmError = false;
      })
      .addCase(getDataCurrentFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.hasCurrentFilmError = false;
      })
      .addCase(getDataCurrentFilm.rejected, (state) => {
        state.isCurrentFilmLoaded = false;
        state.hasCurrentFilmError = true;
      });
  }
});
