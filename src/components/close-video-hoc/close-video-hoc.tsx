import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getPromoFilm } from '../../store/slices/promo-film/selectors';

export const CloseVideoHOC = () => {
  const {id} = useParams<{id: string}>();
  const promoFilm = useAppSelector(getPromoFilm);

  if (id === promoFilm.id) {
    return <Navigate to={'/'} />;
  }

  return <Navigate to={`/films/${id}`} />;
};
