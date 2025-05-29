import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { CurrentFilm } from '../../../types/models';
import { dropCurrentFilm, setCurrentFilm } from './actions';

export const currentFilm = createSlice({
  name: NameSpace.CurrentFilm,
  initialState: {
    film: {} as CurrentFilm,
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(setCurrentFilm, (state, action) => {
        state.film = action.payload;
      })
      .addCase(dropCurrentFilm, (state) => {
        state.film = {} as CurrentFilm;
      });
  }
});
