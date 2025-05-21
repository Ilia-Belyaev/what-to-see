import { Link } from 'react-router-dom';

type FilmCardNavProps = {
  nav: string;
}

export default function FilmCardNav({nav}: FilmCardNavProps) {
  // const navMarkup = ;
  return (
    <li className="film-nav__item film-nav__item--active">
      <Link to='' className="film-nav__link">{nav}</Link>
    </li>
  );
}
