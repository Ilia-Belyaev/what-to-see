import { Route, Routes } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../../constants.ts';
import Login from '../../pages/login/login.tsx';
import Player from '../../pages/player/player.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { getAuthStatus } from '../../store/slices/login/selectors.ts';
import { MainScreenHOC } from '../main-screen-hoc/main-screen-hoc.tsx';
import { getErrorStatus, getLoadingStatus } from '../../store/slices/films/selectors.ts';
import ErrorScreen from '../../pages/error-screen/error-screen.tsx';
import Loading from '../../pages/loading/loading.tsx';
import { FilmHOC } from '../film-hoc/film-hoc.tsx';
import { ReviewHOC } from '../../pages/review/review-hoc.tsx';
import MyList from '../../pages/my-list/my-list.tsx';

export default function App() {
  const auth = useAppSelector(getAuthStatus);
  const hasError = useAppSelector(getErrorStatus);
  const isDataLoading = useAppSelector(getLoadingStatus);

  if(isDataLoading || auth === AuthorizationStatus.Unknown) {
    return <Loading />;
  }

  if (hasError) {
    return <ErrorScreen />;
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreenHOC />}
      />
      <Route
        path={AppRoute.Login}
        element={<Login />}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute authorizationStatus={auth}>
            <MyList />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Player}
        element={<Player />}
      />
      <Route
        path={AppRoute.Film}
        element={<FilmHOC />}
      />
      <Route
        path={AppRoute.AddReview}
        element={
          <PrivateRoute authorizationStatus={auth}>
            <ReviewHOC />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Error}
        element={<NotFoundScreen />}
      />
    </Routes>
  );
}
