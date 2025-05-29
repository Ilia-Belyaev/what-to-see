import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { Films } from '../../../types/models';

const takeFavoriteFilms = (state: Pick<State, NameSpace.Favorite>) => state[NameSpace.Favorite].favoriteFilms;

export const getFavoriteFilms = createSelector([takeFavoriteFilms], (films: Films) => films);
