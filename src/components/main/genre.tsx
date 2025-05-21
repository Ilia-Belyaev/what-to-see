import { FilmGenre } from '../../types/models';

type GenreProps = {
  genre: FilmGenre;
}

export default function Genre({genre}: GenreProps) {
  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
}
