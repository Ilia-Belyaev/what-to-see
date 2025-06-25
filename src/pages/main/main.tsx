import FilmCard from '../../components/film-card/film-card';
import Genres from '../../components/genres/genres';
import FooterLogo from '../../components/logo/footer-logo';
import { Films } from '../../types/models';
import { MainFilmCardMemo } from './main-film-card';

type MainProps = {
  films: Films;
  currentFilms: Films;
  onShowMore: () => void;
}

export default function Main({films, currentFilms, onShowMore} : MainProps) {
  const onButtonClick = () => {
    onShowMore();
  };
  const visibleButton = films.length !== currentFilms.length ? <button className="catalog__button" type="button" onClick={onButtonClick}>Show more</button> : '';

  return (
    <div>
      <MainFilmCardMemo />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres/>

          <div className="catalog__films-list">
            {currentFilms && currentFilms.map((film) => <FilmCard film={film} key={film.id}/>)}
          </div>

          <div className="catalog__more">
            {visibleButton}
          </div>
        </section>

        <FooterLogo />
      </div>
    </div>
  );
}
