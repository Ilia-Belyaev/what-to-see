import { useEffect } from 'react';
import { FILMS_COUNT } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmsWithCurrentGenre } from '../../store/slices/selectors';
import { getVisibleFilms } from '../../store/slices/visible-films/selectors';
import { setVisibleFilms } from '../../store/slices/visible-films/visible-films';
import Main from '../../pages/main/main';
import { dropCurrentFilm } from '../../store/slices/current-film/actions';

export const MainScreenHOC = () => {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilmsWithCurrentGenre);
  const visibleFilms = useAppSelector(getVisibleFilms);

  useEffect(() => {
    dispatch(setVisibleFilms(films.slice(0, FILMS_COUNT)));
  }, [films, dispatch]);

  useEffect(() => {
    dispatch(dropCurrentFilm());
  }, [dispatch]);


  const showMore = () => {
    const newCount = visibleFilms.length + FILMS_COUNT;
    dispatch(setVisibleFilms(films.slice(0, newCount)));
  };

  return <Main films={films} currentFilms={visibleFilms} onShowMore={showMore} />;
};
