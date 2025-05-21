import { Film } from '../../types/models';

type FilmCardProps = {
  film: Film;
}
export default function FilmCard ({film}: FilmCardProps) {
  const {previewImage, previewVideoLink, name} = film;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={previewVideoLink}>{name}</a>
      </h3>
    </article>
  );
}
