import { useFavoriteButton } from '../../hooks/favorite-button-hook';

export default function FavoriteButton() {
  const { onButtonClick, favoriteCount, isAuth } = useFavoriteButton();

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
      {isAuth && <span className="film-card__count">{favoriteCount}</span>}
    </button>
  );
}
