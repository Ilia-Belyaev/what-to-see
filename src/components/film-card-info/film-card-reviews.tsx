import { REVIEWS_LENGTH } from '../../../constants';
import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/slices/reviews/selectors';
import FilmCardReview from './film-card-review';


export default function FilmCardReviews() {
  const reviews = useAppSelector(getReviews);

  return reviews.length > REVIEWS_LENGTH ? (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, (reviews.length) / 2).map((review) => <FilmCardReview review={review} key={review.id}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice((reviews.length) / 2, reviews.length).map((review) => <FilmCardReview review={review} key={review.id}/>)}
      </div>
    </div>
  ) : (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <FilmCardReview review={review} key={review.id}/>)}
      </div>
    </div>
  );
}
