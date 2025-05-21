import { FILM_NAV_LIST } from '../../../constants';
import FilmCardNav from './film-card-nav';

export default function FilmNavList() {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {FILM_NAV_LIST.map((nav) => <FilmCardNav nav={nav} key={nav}/>)}
      </ul>
    </nav>
  );
}
