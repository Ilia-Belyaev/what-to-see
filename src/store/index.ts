import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { filmNavInfo } from './slices/film-nav-info/film-nav-info';
import { login } from './slices/login/login';
import { user } from './slices/user/user';
import { films } from './slices/films/films';
import { genre } from './slices/genre/genre';
import { visibleFilms } from './slices/visible-films/visible-films';
import { promoFilm } from './slices/promo-film/promo-film';
import { favoriteFilms } from './slices/favorite-films/favorite-films';
import { currentFilm } from './slices/current-film/current-film';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';

const api = createAPI();

export const createRootReducer = combineReducers({
  [NameSpace.FilmNavInfo]: filmNavInfo.reducer,
  [NameSpace.Authorization]: login.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Films]: films.reducer,
  [NameSpace.Genre]: genre.reducer,
  [NameSpace.VisibleFilms]: visibleFilms.reducer,
  [NameSpace.Promo]: promoFilm.reducer,
  [NameSpace.Favorite]: favoriteFilms.reducer,
  [NameSpace.CurrentFilm]: currentFilm.reducer,
});

export const store = configureStore({
  reducer: createRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect)
});
