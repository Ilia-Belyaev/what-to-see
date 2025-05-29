import { createAsyncThunk } from '@reduxjs/toolkit';
import { Films, PromoFilm } from '../../types/models';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../../constants';
import { setAllGenres } from './genre/genre';

export const fetchFilmAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFilmAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>('/films');
    dispatch(setAllGenres(data));

    return data;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<PromoFilm, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchPromoFilmAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PromoFilm>(ApiRoute.PromoFilm);

    return data;
  }
);
