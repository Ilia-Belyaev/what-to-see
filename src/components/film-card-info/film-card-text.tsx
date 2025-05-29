import { ratingText, replaceArrayToString } from '../../utils/utils';

type FilmCardTextProps = {
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
}

export default function FilmCardText({rating, scoresCount, director, description, starring}: FilmCardTextProps) {
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
