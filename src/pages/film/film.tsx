import { useParams } from 'react-router-dom';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import FilmCardInfo from '../../components/film-card-info/film-card-info';
import LoginMarkup from '../../components/login-markup/login-markup';
import FooterLogo from '../../components/logo/footer-logo';
import HeaderLogo from '../../components/logo/header-logo';
import ReviewButton from '../../components/review-button/review-button';
import { FAKE_CURRENT_FILMS } from '../../mock/mock';
import { CurrentFilm } from '../../types/models';

export default function Film() {
  const {id} = useParams<{id: string}>();
  const currentFilm = FAKE_CURRENT_FILMS.find((film) => film.id === id) as CurrentFilm;
  const {name, posterImage, backgroundImage, backgroundColor, videoLink, genre, released, isFavorite} = currentFilm;

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
          <FilmCardInfo />
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src={posterImage} alt={name} width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Aviator</a>
              </h3>
            </article>
          </div>
        </section>

        <FooterLogo />
      </div>
    </div>
  );
}
