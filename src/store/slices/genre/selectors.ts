import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { FilmGenre } from '../../../types/models';

export const takeGenre = (state: Pick<State, NameSpace.Genre>) => state[NameSpace.Genre].genre;

export const getGenre = createSelector([takeGenre], (genre: FilmGenre) => genre);
