import { useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/slices/current-film/selectors';
import { ratingText, replaceArrayToString } from '../../utils/utils';

export default function FilmCardText() {
  const currentFilm = useAppSelector(getCurrentFilm);
  const { description, rating, scoresCount, director, starring} = currentFilm;
  const ratingTranscription = ratingText(rating);

  return (
    <div>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingTranscription}</span>
          <span className="film-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        {description}
        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${ starring && replaceArrayToString(starring)}`}</strong></p>
      </div>
    </div>
  );
}
