import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GENRES_LIST, NameSpace } from '../../../../constants';
import { FilmGenre } from '../../../types/models';

export const genre = createSlice({
  name: NameSpace.Genre,
  initialState: {
    genre: GENRES_LIST[0],
  },
  reducers:{
    setGenre: (state, action: PayloadAction<FilmGenre>) => {
      state.genre = action.payload;
    },
  },
});

export const {setGenre} = genre.actions;
