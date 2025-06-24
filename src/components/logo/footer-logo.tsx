import { Link } from 'react-router-dom';
import { LOGO_WORDS } from '../../../constants';
import { logoMarkup } from '../../utils/utils';
import { dropCurrentFilm } from '../../store/slices/current-film/actions';
import { useAppDispatch } from '../../hooks';

export default function FooterLogo() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(dropCurrentFilm());
  };

  return(
    <footer className="page-footer">
      <div className="logo">
        <Link to='/' className="logo__link logo__link--light" onClick={handleClick}>
          {LOGO_WORDS.map((word) => logoMarkup(word))}
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
