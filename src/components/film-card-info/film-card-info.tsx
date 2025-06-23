import { FILM_NAV_LIST } from '../../../constants';
import { useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/slices/current-film/selectors';
import FilmCardNav from '../film-nav-list/film-card-nav';
import { FilmCardHOC } from './film-card-hoc';

export default function FilmCardInfo() {
  const currentFilm = useAppSelector(getCurrentFilm);
  const {name, posterImage} = currentFilm;

  return (
    <div className="film-card__info">
      <div className="film-card__poster film-card__poster--big">
        <img src={posterImage} alt={name} width="218" height="327" />
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
