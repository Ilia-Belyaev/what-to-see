import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserData } from '../../store/slices/user/selectors';
import { logoutAction } from '../../store/slices/api-actions';
import { dropCurrentFilm } from '../../store/slices/current-film/actions';

export default function LoginAuthMarkup () {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logoutAction());
  };
  const onLinkClick = () => {
    dispatch(dropCurrentFilm());
  };
  const user = useAppSelector(getUserData);
  const {avatarUrl} = user;

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={'/mylist'} className="user-block__avatar" onClick={onLinkClick}>
          <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
        </Link>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={handleClick}>Sign out</a>
      </li>
    </ul>
  );
}
