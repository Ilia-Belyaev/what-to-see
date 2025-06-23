import { createAction } from '@reduxjs/toolkit';
import { PromoFilm } from '../../../types/models';

export const setPromoFilm = createAction<PromoFilm>('/main/promo');
