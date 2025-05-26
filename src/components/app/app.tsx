import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../../constants.ts';
import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Film from '../../pages/film/film.tsx';
import Review from '../../pages/review/review.tsx';
import MyList from '../../pages/my-list/my-list.tsx';
import Player from '../../pages/player/player.tsx';
import ErrorScreen from '../../pages/error-screen/error-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

export default function App() {
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
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
          element={<ErrorScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
