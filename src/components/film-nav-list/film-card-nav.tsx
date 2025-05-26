import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmNavValue } from '../../store/slices/film-nav-info/selectors';
import cn from 'classnames';
import { setFilmNavValue } from '../../store/slices/film-nav-info/film-nav-info';
import { FILM_NAV_VALUE } from '../../../constants';

type FilmCardNavProps = {
  nav: string;
}

export default function FilmCardNav({nav}: FilmCardNavProps) {
  const dispatch = useAppDispatch();
  const filmNav = useAppSelector(getFilmNavValue);
  const handleClick = () => dispatch(setFilmNavValue(nav as FILM_NAV_VALUE));

  return (
    <li className={cn('film-nav__item', {'film-nav__item--active' : nav === filmNav})} onClick={handleClick}>
      <Link to='' className="film-nav__link">{nav}</Link>
    </li>
  );
}
