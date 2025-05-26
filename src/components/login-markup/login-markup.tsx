import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/slices/login/selectors';
import { AuthorizationStatus } from '../../../constants';
import LoginAuthMarkup from './login-auth-markup';

export default function LoginMarkup() {
  const auth = useAppSelector(getAuthStatus);

  return (auth === AuthorizationStatus.Auth) ? (
    <LoginAuthMarkup />
  ) : (
    <div className="user-block">
      <Link to='/login' className="user-block__link">Sign in</Link>
    </div>
  );
}
