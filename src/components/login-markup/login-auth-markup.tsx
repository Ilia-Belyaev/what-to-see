import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getUsetData } from '../../store/slices/user/selectors';

export default function LoginAuthMarkup () {
  // const dispatch = useAppDispatch();
  // const handleClick = () => dispatch(logoutAction());//разлогиниться
  const user = useAppSelector(getUsetData);
  const {avatarUrl} = user;

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={'/mylist'} className="user-block__avatar">
          <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
        </Link>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>{/* onClick = {handleClick} */}
      </li>
    </ul>
  );
}
