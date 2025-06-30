import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { PromoFilm } from '../../../types/models';

const takePromoFilm = (state: Pick<State, NameSpace.Promo>) => state[NameSpace.Promo].promo;
const takeVideoPromoFilm = (state: Pick<State, NameSpace.Promo>) => state[NameSpace.Promo].promo.videoLink;

export const getPromoFilm = createSelector([takePromoFilm], (promo: PromoFilm) => promo);
export const getVideoPromoFilm = createSelector([takeVideoPromoFilm], (link: string) => link);
