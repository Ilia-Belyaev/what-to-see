import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { CurrentFilm } from '../../../types/models';

const takeCurrentFilm = (state: Pick<State, NameSpace.CurrentFilm>) => state[NameSpace.CurrentFilm].film;
const takeVideoCurrentFilm = (state: Pick<State, NameSpace.CurrentFilm>) => state[NameSpace.CurrentFilm].film.videoLink;

export const getCurrentFilm = createSelector([takeCurrentFilm], (film: CurrentFilm) => film);
export const getVideoCurrentFilm = createSelector([takeVideoCurrentFilm], (link: string) => link);
