import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Film from '../../pages/film/film';
import { getCurrentFilm } from '../../store/slices/current-film/selectors';
import { getDataCurrentFilm, getDataSimilarFilms } from '../../store/slices/api-actions';
import { useParams } from 'react-router-dom';
import { getSimilarFilms } from '../../store/slices/similar-films/selectors';

export const FilmHOC = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams<{id: string}>();
  const currentFilm = useAppSelector(getCurrentFilm);
  const similarFilms = useAppSelector(getSimilarFilms);

  useEffect(() => {
    if(id !== currentFilm.id) {
      dispatch(getDataCurrentFilm(id));
      dispatch(getDataSimilarFilms(id));
    }
  }, [id, dispatch, currentFilm.id]);

  return <Film film={currentFilm} similarFilms={similarFilms}/>;
};
