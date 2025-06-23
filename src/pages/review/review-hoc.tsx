import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getDataCurrentFilm } from '../../store/slices/api-actions';
import { getCurrentFilm } from '../../store/slices/current-film/selectors';
import Review from './review';

export const ReviewHOC = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams<string>();
  const currentFilm = useAppSelector(getCurrentFilm);

  useEffect(() => {
    dispatch(getDataCurrentFilm(id));
  }, [dispatch, id]);

  if (!('id' in currentFilm)) {
    return;
  }

  return <Review film={currentFilm}/>;
};
