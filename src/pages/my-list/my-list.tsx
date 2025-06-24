import FooterLogo from '../../components/logo/footer-logo';
import HeaderLogo from '../../components/logo/header-logo';
// import { FavoriteFilms } from '../../types/models';
// import MyListItem from '../../components/my-list/my-list-item';

// type MyListProps = {
//   films: FavoriteFilms;
// }

// export default function MyList({films}: MyListProps) {
export default function MyList() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {/* {films.map((film) => <MyListItem film={film} key={film.id}/>)} */}
        </div>
      </section>

      <FooterLogo />
    </div>
  );
}
