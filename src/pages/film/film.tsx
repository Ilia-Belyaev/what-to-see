import FavoriteButton from '../../components/favorite-button/favorite-button';
import LoginMarkup from '../../components/login-markup/login-markup';
import FooterLogo from '../../components/logo/footer-logo';
import HeaderLogo from '../../components/logo/header-logo';
import ReviewButton from '../../components/review-button/review-button';
import { NearFilmsMemo } from '../../components/near-films/near-films';
import { CurrentFilm, Films } from '../../types/models';
import { FilmCardInfoHOC } from '../../components/film-card-info/film-card-info-hoc';

type FilmProps = {
  film: CurrentFilm;
  similarFilms: Films;
}

export default function Film({film, similarFilms}: FilmProps) {

  const {name, backgroundImage, backgroundColor, genre, released} = film;//videoLink isFavorite

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <HeaderLogo />

            <LoginMarkup />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <FavoriteButton />
                <ReviewButton />
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top" style={{ backgroundColor: `${backgroundColor}` }}>
          <FilmCardInfoHOC />
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <NearFilmsMemo films={similarFilms}/>
        </section>

        <FooterLogo />
      </div>
    </div>
  );
}
