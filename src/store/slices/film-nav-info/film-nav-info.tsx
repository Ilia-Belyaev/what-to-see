import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { FILM_NAV_VALUE, NameSpace } from '../../../../constants';

export const filmNavInfo = createSlice({
  name: NameSpace.FilmNavInfo,
  initialState: {
    filmNavValue: FILM_NAV_VALUE.Overview,
  },
  reducers: {
    setFilmNavValue: (state, action: PayloadAction<FILM_NAV_VALUE>) => {
      state.filmNavValue = action.payload;
    },
  },
});

export const {setFilmNavValue} = filmNavInfo.actions;
