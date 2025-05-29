import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { FilmGenres } from '../../../types/models';

export const takeGenre = (state: Pick<State, NameSpace.Genre>) => state[NameSpace.Genre].currentGenre;

const takeAllGenres = (state: Pick<State, NameSpace.Genre>) => state[NameSpace.Genre].allGenres;

export const getGenre = createSelector([takeGenre], (genre: string) => genre);

export const getAllGenres = createSelector([takeAllGenres], (genres: FilmGenres) => genres);
