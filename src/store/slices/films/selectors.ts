import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { Films } from '../../../types/models';

export const takeFilms = (state: Pick<State, NameSpace.Films>) => state[NameSpace.Films].films;

const takeErrorStatus = (state: Pick<State, NameSpace.Films>) => state[NameSpace.Films].hasError;

const takeLoadingStatus = (state: Pick<State, NameSpace.Films>) => state[NameSpace.Films].isFilmsLoaded;

export const getFilms = createSelector([takeFilms], (allFilms: Films) => allFilms);

export const getErrorStatus = createSelector([takeErrorStatus], (error: boolean) => error);

export const getLoadingStatus = createSelector([takeLoadingStatus], (status: boolean) => status);
