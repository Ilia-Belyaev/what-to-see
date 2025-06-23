import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { PromoFilm } from '../../../types/models';
import { setPromoFilm } from './actions';
import { fetchPromoFilmAction } from '../api-actions';

export const promoFilm = createSlice({
  name: NameSpace.Promo,
  initialState: {
    promo: {} as PromoFilm,
    isPromoLoaded: false,
    hasError: false,
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(setPromoFilm, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoLoaded = true;
        state.hasError = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.isPromoLoaded = false;
        state.promo = action.payload;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.hasError = true;
        state.isPromoLoaded = false;
      });
  }
});
