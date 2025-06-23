import HeaderLogo from '../../components/logo/header-logo';
import PromoFilm from '../../components/promo-film/promo-film';
import { useAppSelector } from '../../hooks';
import { getPromoFilm } from '../../store/slices/promo-film/selectors';
import LoginMarkup from '../../components/login-markup/login-markup';
import { memo } from 'react';

export function MainFilmCard () {
  const promoFilm = useAppSelector(getPromoFilm);
  const {backgroundImage, name} = promoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <HeaderLogo />
        <LoginMarkup />
      </header>

      <PromoFilm/>
    </section>
  );
}

export const MainFilmCardMemo = memo(MainFilmCard);
