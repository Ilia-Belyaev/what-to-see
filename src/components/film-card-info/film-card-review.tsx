import { Review } from '../../types/models';
import { convertDate, convertFullDate } from '../../utils/utils';

type FilmCardReviewProps = {
  review: Review;
}

export default function FilmCardReview({review}: FilmCardReviewProps) {
  const {date, user, comment, rating} = review;
  const convertedDate = convertDate(date);
  const convertedFullDate = convertFullDate(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={convertedDate}>{convertedFullDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}
