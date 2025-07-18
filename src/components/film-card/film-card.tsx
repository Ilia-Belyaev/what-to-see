import { useState } from 'react';
import { Film } from '../../types/models';
import { Navigate } from 'react-router-dom';

type FilmCardProps = {
  film: Film;
}
export default function FilmCard ({film}: FilmCardProps) {
  const {previewImage, previewVideoLink, name, id} = film;
  const [redirectToFilm, setRedirectToFilm] = useState(false);
  const [videoElement, setVideoElement] = useState(false);
  const onArticleClick = () => {
    setRedirectToFilm(true);
  };

  if(redirectToFilm) {
    return <Navigate to={`/films/${id}`} />;
  }

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={
        () => setVideoElement(true)
      }
      onMouseLeave={
        () => setVideoElement(false)
      }
      onClick={onArticleClick}
    >
      <div className="small-film-card__image">
        {videoElement ? <video src={previewVideoLink} width="280" height="175" autoPlay muted></video> : <img src={previewImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={previewVideoLink}>{name}</a>
      </h3>
    </article>
  );
}
