import { Link } from 'react-router-dom';
import { LOGO_WORDS } from '../../../constants';
import { logoMarkup } from '../../utils/utils';

export default function FooterLogo() {
  return(
    <footer className="page-footer">
      <div className="logo">
        <Link to='/' className="logo__link logo__link--light">
          {LOGO_WORDS.map((word) => logoMarkup(word))}
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
