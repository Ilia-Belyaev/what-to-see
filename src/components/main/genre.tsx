import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getGenre } from '../../store/slices/genre/selectors';
import { setGenre } from '../../store/slices/genre/genre';
import { FilmGenre } from '../../types/models';

type GenreProps = {
  genre: FilmGenre;
}

export default function Genre({genre}: GenreProps) {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getGenre);
  const handleClick = () => dispatch(setGenre(genre));

  return (
    <li className={cn('catalog__genres-item', {'catalog__genres-item--active': genre === currentGenre})} onClick={handleClick}>
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
}
