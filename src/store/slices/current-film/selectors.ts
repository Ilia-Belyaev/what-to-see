import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { CurrentFilm } from '../../../types/models';

const takeCurrentFilm = (state: Pick<State, NameSpace.CurrentFilm>) => state[NameSpace.CurrentFilm].film;

export const getCurrentFilm = createSelector([takeCurrentFilm], (film: CurrentFilm) => film);
