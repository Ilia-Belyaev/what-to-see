import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { FilmGenres, Films } from '../../../types/models';
import { setGenres } from '../../../utils/utils';

export const genre = createSlice({
  name: NameSpace.Genre,
  initialState: {
    currentGenre: 'All Genres',
    allGenres: [] as FilmGenres
  },
  reducers:{
    setGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = action.payload;
    },
    setAllGenres: (state, action: PayloadAction<Films>) => {
      state.allGenres = setGenres(action.payload);
    }
  },
});

export const {setGenre, setAllGenres} = genre.actions;
