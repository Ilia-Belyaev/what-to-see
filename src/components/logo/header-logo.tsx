import { Link } from 'react-router-dom';
import { LOGO_WORDS } from '../../../constants';
import { logoMarkup } from '../../utils/utils';
import { useAppDispatch } from '../../hooks';
import { dropCurrentFilm } from '../../store/slices/current-film/actions';

export default function HeaderLogo() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(dropCurrentFilm());
  };

  return(
    <div className="logo">
      <Link to='/' className="logo__link" onClick={handleClick}>
        {LOGO_WORDS.map((word) => logoMarkup(word))}
      </Link>
    </div>
  );
}
