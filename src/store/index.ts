import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { filmNavInfo } from './slices/film-nav-info/film-nav-info';
import { login } from './slices/login/login';
import { user } from './slices/user/user';
import { films } from './slices/films/films';
import { genre } from './slices/genre/genre';

// const api = createAPI();

export const createRootReducer = combineReducers({
  [NameSpace.FilmNavInfo]: filmNavInfo.reducer,
  [NameSpace.Authorization]: login.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Films]: films.reducer,
  [NameSpace.Genre]: genre.reducer,
});

export const store = configureStore({
  reducer: createRootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: api,
  //     }
  //   }).concat(redirect)
});
