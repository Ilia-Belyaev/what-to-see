import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { Films } from '../../../types/models';
import { fetchFilmAction } from '../api-actions';
// import { addFavoriteFilm } from './actions';

export const films = createSlice({
  name: NameSpace.Films,
  initialState: {
    films: [] as Films,
    isFilmsLoaded: false,
    hasError: false,
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmsLoaded = true;
        state.hasError = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.isFilmsLoaded = false;
        state.films = action.payload;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.hasError = true;
        state.isFilmsLoaded = false;
      });
  }
});
