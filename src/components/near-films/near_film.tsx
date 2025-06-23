import { useState } from 'react';
import { Film } from '../../types/models';
import { Navigate } from 'react-router-dom';

type NearFilmProps = {
  film: Film;
}

export default function NearFilm ({film}: NearFilmProps) {
  const [redirectToFilm, setRedirectToFilm] = useState(false);
  const {previewImage, name, id} = film;
  const handleClick = () => setRedirectToFilm(true);

  if(redirectToFilm) {
    return <Navigate to={{pathname:`/films/${id}`}} />;
  }

  return (
    <article className="small-film-card catalog__films-card" onClick={handleClick}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}
