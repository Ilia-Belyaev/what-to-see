import HeaderLogo from '../../components/logo/header-logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserData } from '../../store/slices/user/selectors';
import { useState } from 'react';
import { sendUserReview } from '../../store/slices/api-actions';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH } from '../../../constants';
import { Navigate } from 'react-router-dom';
import { CurrentFilm } from '../../types/models';

type ReviewProps = {
  film: CurrentFilm;
}

export default function Review({film}:ReviewProps) {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [rating, setRating] = useState('');
  const {name, id, posterImage, backgroundImage, backgroundColor} = film;
  const {avatarUrl} = userData;

  if (redirect) {
    return <Navigate to={`/films/${id}`}/>;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(sendUserReview(
      {
        comment: text,
        rating: Number(rating),
        filmId: id,
      }
    ));

    setRating('');
    setText('');
    setIsButtonDisabled(true);
    setRedirect(true);
  };

  const handleChange = (userText: string) => {
    setText(userText);

    if(userText.length > MIN_REVIEW_LENGTH && rating) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  return (
    <section className="film-card film-card--full" style={{backgroundColor:`${backgroundColor}`}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <HeaderLogo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src={avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" method="post" onSubmit={handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={(evt) => setRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={(evt) => setRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={(evt) => setRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={(evt) => setRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={(evt) => setRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={(evt) => setRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={(evt) => setRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={(evt) => setRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={(evt) => setRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={(evt) => setRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" minLength={MIN_REVIEW_LENGTH} maxLength={MAX_REVIEW_LENGTH} id="review-text" placeholder="Review text" onChange={(evt) => handleChange(evt.target.value)}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isButtonDisabled}>Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}
