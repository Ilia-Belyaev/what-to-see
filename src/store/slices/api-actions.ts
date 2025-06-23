import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, CurrentFilm, CurrentFilmId, FavoriteFilm, FavoriteFilmData, FavoriteFilms, Films, PromoFilm, Review, Reviews, User, UserReview } from '../../types/models';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute, ErrorMessages } from '../../../constants';
import { setAllGenres } from './genre/genre';
import { dropUserData, setUserData } from './user/actions';
import { dropToken, saveToken } from '../../services/token';
import { redirectToRoute } from './action';
import { setFavoriteFilms, setNewFavoriteFilm } from './favorite-films/actions';
import { addUserReview } from './reviews/actions';

export const fetchFilmAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFilmAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(ApiRoute.Films);
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

export const getDataCurrentFilm = createAsyncThunk<CurrentFilm, CurrentFilmId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/getDataCurrentFilm',
  async (id, {extra: api, rejectWithValue}) => {
    if(!id) {
      return rejectWithValue(ErrorMessages.NoID);
    }

    try {
      const {data} = await api.get<CurrentFilm>(`${ApiRoute.Films}/${id}`);

      return data;
    } catch (error : unknown) {
      return rejectWithValue(error || ErrorMessages.FailLoadData);
    }
  }
);

export const getDataSimilarFilms = createAsyncThunk<Films, CurrentFilmId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/getDataSimilarFilm',
  async (id, {extra: api, rejectWithValue}) => {
    if(!id) {
      return rejectWithValue(ErrorMessages.NoID);
    }

    try {
      const {data} = await api.get<Films>(`${ApiRoute.Films}/${id}/similar`);

      return data;
    } catch (error : unknown) {
      return rejectWithValue(error || ErrorMessages.FailLoadData);
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<User>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setUserData(data));
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(fetchFilmAction());
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(dropUserData());
    dispatch(setFavoriteFilms([]));
    // dispatch(removeFavoriteFilm());
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(ApiRoute.Login);
  },
);

export const getUserData = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/getUserData',
  async (_arg, {dispatch, extra: api}) => {
    const data = (await api.get(ApiRoute.Login));
    dispatch(setUserData(data.data as User));
  },
);

export const getCurrentReviews = createAsyncThunk<Reviews, CurrentFilmId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/getReviews',
  async (id, {extra: api, rejectWithValue}) => {
    if(!id) {
      return rejectWithValue(ErrorMessages.NoID);
    }

    try {
      const {data} = await api.get<Reviews>(`/comments/${id}`);

      return data;
    } catch (error : unknown) {
      return rejectWithValue(error || ErrorMessages.FailLoadData);
    }
  }
);

export const sendUserReview = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'post/review',
  async({comment, rating, filmId}, {dispatch, extra: api}) => {
    if (!filmId) {
      return;
    }

    const {data} = await api.post<Review>(`/comments/${filmId}`, {comment, rating});
    dispatch(addUserReview(data));
  }
);

export const addFavoriteFilm = createAsyncThunk<FavoriteFilm, FavoriteFilmData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  '/setFavoriteFilm',
  async({id, isFavorite}, {dispatch, rejectWithValue, extra: api}) => {
    try {
      const {data} = await api.post<FavoriteFilm>(`/favorite/${id}/${Number(!isFavorite)}`);
      dispatch(setNewFavoriteFilm(data));

      return data;
    } catch (error : unknown) {
      return rejectWithValue(error || ErrorMessages.FailAddFavorite);
    }
  }
);

export const getFavoriteFilms = createAsyncThunk<FavoriteFilms, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFilmAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FavoriteFilms>(ApiRoute.Favorite);
    dispatch(setFavoriteFilms(data));

    return data;
  }
);
