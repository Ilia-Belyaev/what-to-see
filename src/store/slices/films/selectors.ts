import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { Films } from '../../../types/models';

export const takeFilms = (state: Pick<State, NameSpace.Films>) => state[NameSpace.Films].films;

export const getFilms = createSelector([takeFilms], (allFilms: Films) => allFilms);
