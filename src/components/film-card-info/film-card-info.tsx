import { FILM_NAV_LIST } from '../../../constants';
import FilmCardNav from '../film-nav-list/film-card-nav';
import { FilmCardHOC } from './film-card-hoc';

export default function FilmCardInfo() {
  return (
    <div className="film-card__info">
      <div className="film-card__poster film-card__poster--big">
        <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
      </div>
      <div className="film-card__desc">
        <nav className="film-nav film-card__nav">
          <ul className="film-nav__list">
            {FILM_NAV_LIST.map((nav) => <FilmCardNav nav={nav} key={nav}/>)}
          </ul>
        </nav>
        <FilmCardHOC />
      </div>
    </div>
  );
}
