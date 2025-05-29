import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { Films } from '../../../types/models';

const takeVisbleFilms = (state: Pick<State, NameSpace.VisibleFilms>) => state[NameSpace.VisibleFilms].films;

export const getVisibleFilms = createSelector([takeVisbleFilms], (films: Films) => films);
