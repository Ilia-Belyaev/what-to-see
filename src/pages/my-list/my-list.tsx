import FooterLogo from '../../components/logo/footer-logo';
import HeaderLogo from '../../components/logo/header-logo';
import LoginAuthMarkup from '../../components/login-markup/login-auth-markup';
import FilmCard from '../../components/film-card/film-card';
import { useAppSelector } from '../../hooks';
import { getAllFavoriteFilms } from '../../store/slices/favorite-films/selectors';


export default function MyList() {
  const favoriteFilms = useAppSelector(getAllFavoriteFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <LoginAuthMarkup />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {favoriteFilms.map((film) => <FilmCard film={film} key={film.id}/>)}
        </div>
      </section>

      <FooterLogo />
    </div>
  );
}
