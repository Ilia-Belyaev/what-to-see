import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/slices/login/selectors';
import { AuthorizationStatus } from '../../../constants';
import { useState } from 'react';
import { getCurrentFilm } from '../../store/slices/current-film/selectors';

export default function ReviewButton() {
  const auth = useAppSelector(getAuthStatus);
  const currentFilm = useAppSelector(getCurrentFilm);
  const [redirect, setRedirect] = useState<'review' | 'login' | null>(null);

  const handleClick = () => {
    if (auth === AuthorizationStatus.Auth) {
      setRedirect('review');
    }

    if (auth === AuthorizationStatus.NoAuth) {
      setRedirect('login');
    }
  };

  if (redirect === 'review') {
    return <Navigate to={`/films/${currentFilm.id}/review`} />;
  }

  if (redirect === 'login') {
    return <Navigate to={'/login/'} />;
  }

  return <a className="btn film-card__button" onClick={handleClick}>Add review</a>;
}
