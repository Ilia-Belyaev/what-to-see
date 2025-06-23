import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { Films } from '../../../types/models';

const takeSimilarFilms = (state: Pick<State, NameSpace.Similar>) => state[NameSpace.Similar].films;

export const getSimilarFilms = createSelector([takeSimilarFilms], (films: Films) => films);
