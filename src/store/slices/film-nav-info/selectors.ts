import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';

const takeFilmNavValue = (state: Pick<State, NameSpace.FilmNavInfo>) => state[NameSpace.FilmNavInfo].filmNavValue;

export const getFilmNavValue = createSelector([takeFilmNavValue], (info: string) => info);
