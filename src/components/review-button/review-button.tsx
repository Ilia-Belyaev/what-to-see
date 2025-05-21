import { Link } from 'react-router-dom';

export default function ReviewButton() {
  //проверка авторизации, если не авторизован, то кидать на логин
  return <Link to='/login'className="btn film-card__button">Add review</Link>;
  // return <Link to='/films/:id/review'className="btn film-card__button">Add review</Link>; // id поменять ещё
}
