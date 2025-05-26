import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { filmNavInfo } from './slices/film-nav-info-slice/film-nav-info-slice';

// const api = createAPI();

export const createRootReducer = combineReducers({
  [NameSpace.FilmNavInfo]: filmNavInfo.reducer,
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
