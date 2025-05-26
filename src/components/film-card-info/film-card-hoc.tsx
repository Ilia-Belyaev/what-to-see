import { FILM_NAV_VALUE } from '../../../constants';
import { useAppSelector } from '../../hooks';
import { getFilmNavValue } from '../../store/slices/film-nav-info/selectors';
import FilmCardDetails from './film-card-details';
import FilmCardReviews from './film-card-reviews';
import FilmCardText from './film-card-text';

export const FilmCardHOC = () => {
  const currentNav = useAppSelector(getFilmNavValue);

  switch (currentNav) {
    case FILM_NAV_VALUE.Overview:
      return <FilmCardText />;
    case FILM_NAV_VALUE.Details:
      return <FilmCardDetails />;
    case FILM_NAV_VALUE.Reviews:
      return <FilmCardReviews />;
    default:
      return <FilmCardText />;
  }
};
