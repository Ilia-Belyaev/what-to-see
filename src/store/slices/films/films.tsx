import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { Films } from '../../../types/models';
import { FILMS } from '../../../mock/mock';

export const films = createSlice({
  name: NameSpace.Films,
  initialState: {
    films: FILMS as Films,
    isFilmsLoaded: false,
    hasError: false,
  },
  reducers:{},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase()
  // }
});
