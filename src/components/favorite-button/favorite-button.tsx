import { useState } from 'react';
import { AppRoute, AuthorizationStatus } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/slices/favorite-films/selectors';
import { getAuthStatus } from '../../store/slices/login/selectors';
import { Navigate } from 'react-router-dom';
import { setFavoritePromoFilm } from '../../store/slices/promo-film/actions';
import { getPromoFilm } from '../../store/slices/promo-film/selectors';
import { replaceFilm } from '../../store/slices/favorite-films/actions';

export default function FavoriteButton() {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const auth = useAppSelector(getAuthStatus);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const onButtonClick = () => {
    if (auth !== AuthorizationStatus.Auth) {
      setRedirectToLogin(true);

      return;
    }

    //dispatch в избранное на сервак api-actions
    dispatch(setFavoritePromoFilm());
    dispatch(replaceFilm(promoFilm));
    //
  };

  if (redirectToLogin) {
    return <Navigate to={AppRoute.Login} />;
  }

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      {auth === AuthorizationStatus.Auth ? <span className="film-card__count">{favoriteFilms.length}</span> : ''}
    </button>
  );
}
