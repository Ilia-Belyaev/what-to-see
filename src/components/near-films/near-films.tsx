import { memo } from 'react';
import { Films } from '../../types/models';
import NearFilm from './near_film';

type SimilarFilmsProps = {
  films: Films;
}

export function NearFilms ({films}: SimilarFilmsProps) {

  return (
    <div className="catalog__films-list">
      {films.map((film) => <NearFilm film={film} key={film.id}/>)}
    </div>
  );
}

export const NearFilmsMemo = memo(NearFilms, (prevProps, nextProps) => prevProps.films === nextProps.films);
