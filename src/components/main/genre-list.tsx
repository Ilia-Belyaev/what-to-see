import { FilmGenres } from '../../types/models';
import Genre from './genre';

type GenreListProps = {
  genres: FilmGenres;
}

export default function GenreList({genres}: GenreListProps) {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <Genre genre={genre} key={genre}/>)}
    </ul>
  );
}
