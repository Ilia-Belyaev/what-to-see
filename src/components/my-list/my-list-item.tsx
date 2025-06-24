import { Link } from 'react-router-dom';
import { FavoriteFilm } from '../../types/models';

type MuListItemProps = {
  film: FavoriteFilm;
}
export default function MyListItem ({film}: MuListItemProps) {
  const {previewImage, name, id} = film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link" >{name}</Link>
      </h3>
    </article>
  );
}
