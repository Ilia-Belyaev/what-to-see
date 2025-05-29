import { FILM_NAV_VALUE } from '../../../constants';
import { useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/slices/current-film/selectors';
import { getFilmNavValue } from '../../store/slices/film-nav-info/selectors';
import FilmCardDetails from './film-card-details';
import FilmCardReviews from './film-card-reviews';
import FilmCardText from './film-card-text';

export const FilmCardHOC = () => {
  const currentNav = useAppSelector(getFilmNavValue);
  const currentFilm = useAppSelector(getCurrentFilm);
  const { description, rating, scoresCount, director, starring, runTime, genre, released} = currentFilm;

  switch (currentNav) {
    case FILM_NAV_VALUE.Overview:
      return <FilmCardText description={description} rating={rating} director={director} starring={starring} scoresCount={scoresCount}/>;
    case FILM_NAV_VALUE.Details:
      return <FilmCardDetails director={director} starring={starring} runTime={runTime} genre={genre} released={released}/>;
    case FILM_NAV_VALUE.Reviews:
      return <FilmCardReviews />;
    default:
      return <FilmCardText description={description} rating={rating} director={director} starring={starring} scoresCount={scoresCount}/>;
  }
};
