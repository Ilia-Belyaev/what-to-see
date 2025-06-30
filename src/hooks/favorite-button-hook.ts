import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { getAuthStatus } from '../store/slices/login/selectors';
import { getAllFavoriteFilms } from '../store/slices/favorite-films/selectors';
import { AuthorizationStatus, AppRoute } from '../../constants';
import { addFavoriteFilm } from '../store/slices/api-actions';
import { changeIsFavoriteCurrentFilm } from '../store/slices/current-film/actions';
import { getCurrentFilm } from '../store/slices/current-film/selectors';
import { setFavoritePromoFilm } from '../store/slices/promo-film/actions';
import { getPromoFilm } from '../store/slices/promo-film/selectors';

export function useFavoriteButton() {
  const dispatch = useAppDispatch();
  const { id: paramId } = useParams<string>();
  const navigate = useNavigate();

  const auth = useAppSelector(getAuthStatus);
  const favoriteFilms = useAppSelector(getAllFavoriteFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const currentFilm = useAppSelector(getCurrentFilm);

  const filmId = paramId ?? promoFilm.id;
  const isFavorite = paramId ? currentFilm.isFavorite : promoFilm.isFavorite;

  const onButtonClick = () => {
    if (auth !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    if (!paramId || paramId === promoFilm.id) {
      dispatch(setFavoritePromoFilm());
    }

    dispatch(addFavoriteFilm({ id: filmId, isFavorite }));
    dispatch(changeIsFavoriteCurrentFilm());
  };

  return {
    onButtonClick,
    favoriteCount: favoriteFilms.length,
    isAuth: auth === AuthorizationStatus.Auth,
  };
}
