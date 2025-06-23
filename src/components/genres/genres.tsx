import { useAppSelector } from '../../hooks';
import { getAllGenres } from '../../store/slices/genre/selectors';
import Genre from './genre';


export default function Genres() {
  const genres = useAppSelector(getAllGenres);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <Genre genre={genre} key={genre}/>)}
    </ul>
  );
}
