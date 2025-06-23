import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { Films } from '../../../types/models';
import { getDataSimilarFilms } from '../api-actions';

export const similarFilms = createSlice({
  name: NameSpace.Similar,
  initialState: {
    films: [] as Films,
    hasError: false,
    isFilmsLoaded: false,
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(getDataSimilarFilms.pending, (state) => {
        state.isFilmsLoaded = true;
        state.hasError = false;
      })
      .addCase(getDataSimilarFilms.fulfilled, (state, action) => {
        state.isFilmsLoaded = false;
        state.films = action.payload;
      })
      .addCase(getDataSimilarFilms.rejected, (state) => {
        state.hasError = true;
        state.isFilmsLoaded = false;
      });
  }
});
