import { useAppSelector } from '../../hooks';
import Player from '../../pages/player/player';
import { getVideoCurrentFilm } from '../../store/slices/current-film/selectors';
import { getVideoPromoFilm } from '../../store/slices/promo-film/selectors';

export const PlayerHOC = () => {
  const currentFilmLink = useAppSelector(getVideoCurrentFilm);
  const promoFilmLink = useAppSelector(getVideoPromoFilm);

  if (currentFilmLink) {
    return <Player link={currentFilmLink} />;
  }

  return <Player link={promoFilmLink} />;
};
