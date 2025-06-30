import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentReviews } from '../../store/slices/api-actions';
import { getReviews } from '../../store/slices/reviews/selectors';
import FilmCardInfo from './film-card-info';

export const FilmCardInfoHOC = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams<{id: string}>();
  const [reviews, setReviews] = useState(true);

  useEffect(() => {
    if (id) {
      dispatch(getCurrentReviews(id));
    }
  }, [id, dispatch]);

  const currentReviews = useAppSelector(getReviews);

  useEffect(() => {
    if (currentReviews.length) {
      setReviews(false);
    }
  }, [currentReviews]);

  if (reviews) {
    return;
  }

  return <FilmCardInfo />;
};
