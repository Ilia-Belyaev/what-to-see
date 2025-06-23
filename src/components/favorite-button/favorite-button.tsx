import { useState } from 'react';
import { AppRoute, AuthorizationStatus } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/slices/favorite-films/selectors';
import { getAuthStatus } from '../../store/slices/login/selectors';
import { Navigate, useParams } from 'react-router-dom';
import { getPromoFilm } from '../../store/slices/promo-film/selectors';
// import { replaceFilm } from '../../store/slices/favorite-films/actions';
import { addFavoriteFilm } from '../../store/slices/api-actions';
import { getCurrentFilm } from '../../store/slices/current-film/selectors';
import { changeIsFavoriteCurrentFilm } from '../../store/slices/current-film/actions';

export default function FavoriteButton() {
  let {id} = useParams<string>();
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const currentFilm = useAppSelector(getCurrentFilm);
  let isFavorite = currentFilm.isFavorite;
  const auth = useAppSelector(getAuthStatus);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const onButtonClick = () => {
    if (auth !== AuthorizationStatus.Auth) {
      setRedirectToLogin(true);

      return;
    }

    if (!id) {
      id = promoFilm.id;
      isFavorite = promoFilm.isFavorite;
    }

    dispatch(addFavoriteFilm({id, isFavorite}));
    dispatch(changeIsFavoriteCurrentFilm());
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
