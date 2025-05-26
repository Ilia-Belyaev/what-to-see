import { REVIEWS } from '../../mock/mock';
import FilmCardReview from './film-card-review';

export default function FilmCardReviews() {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {REVIEWS.slice(0, (REVIEWS.length) / 2).map((review) => <FilmCardReview review={review} key={review.id}/>)}
      </div>
      <div className="film-card__reviews-col">
        {REVIEWS.slice((REVIEWS.length) / 2, REVIEWS.length).map((review) => <FilmCardReview review={review} key={review.id}/>)}
      </div>
    </div>
  );
}
