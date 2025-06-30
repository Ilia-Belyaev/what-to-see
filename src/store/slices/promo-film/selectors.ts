import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { PromoFilm } from '../../../types/models';

const takePromoFilm = (state: Pick<State, NameSpace.Promo>) => state[NameSpace.Promo].promo;

export const getPromoFilm = createSelector([takePromoFilm], (promo: PromoFilm) => promo);
