import { useAppSelector } from '../../hooks';
import { getPromoFilm } from '../../store/slices/promo-film/selectors';
import FavoriteButton from '../favorite-button/favorite-button';

export default function PromoFilm() {
  const promoFilm = useAppSelector(getPromoFilm);
  const {name, posterImage, genre, released, videoLink} = promoFilm;

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
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={videoLink}></use>
              </svg>
              <span>Play</span>
            </button>
            <FavoriteButton />
          </div>
        </div>
      </div>
    </div>
  );
}
