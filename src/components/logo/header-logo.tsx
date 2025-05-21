import { Link } from 'react-router-dom';
import { LOGO_WORDS } from '../../../constants';
import { logoMarkup } from '../../utils/utils';

export default function HeaderLogo() {
  return(
    <div className="logo">
      <Link to='/' className="logo__link">
        {LOGO_WORDS.map((word) => logoMarkup(word))}
      </Link>
    </div>
  );
}
