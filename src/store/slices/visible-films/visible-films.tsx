import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { Films } from '../../../types/models';

export const visibleFilms = createSlice({
  name: NameSpace.VisibleFilms,
  initialState: {
    films: [] as Films,
  },
  reducers:{
    setVisibleFilms: (state, action: PayloadAction<Films>) => {
      state.films = action.payload;
    },
  },
});

export const {setVisibleFilms} = visibleFilms.actions;
