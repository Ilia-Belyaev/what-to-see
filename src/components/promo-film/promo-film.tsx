import { useAppSelector } from '../../hooks';
import { getPromoFilm } from '../../store/slices/promo-film/selectors';
import FavoriteButton from '../favorite-button/favorite-button';
import PlayButton from '../play-button/play-button';

export default function PromoFilm() {
  const promoFilm = useAppSelector(getPromoFilm);
  const {name, posterImage, genre, released, id} = promoFilm;

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={posterImage} alt={`${name}`} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <div className="film-card__buttons">
            <PlayButton id={id}/>
            <FavoriteButton />
          </div>
        </div>
      </div>
    </div>
  );
}
