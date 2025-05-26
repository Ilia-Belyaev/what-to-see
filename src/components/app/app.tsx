import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../../constants.ts';
import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Film from '../../pages/film/film.tsx';
import Review from '../../pages/review/review.tsx';
import MyList from '../../pages/my-list/my-list.tsx';
import Player from '../../pages/player/player.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { getAuthStatus } from '../../store/slices/login/selectors.ts';
// import ErrorScreen from '../../pages/error-screen/error-screen.tsx';

export default function App() {
  const auth = useAppSelector(getAuthStatus);

  // if (hasError) {
  //   return <ErrorScreen />
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
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
          element={<Film />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Review />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Error}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
