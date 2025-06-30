import { useState } from 'react';
import { Navigate } from 'react-router-dom';

type PlayButtonProps = {
  id: string;
}

export default function PlayButton ({id}:PlayButtonProps) {
  const [click, setClick] = useState(false);
  const handleClick = () => (
    setClick(true)
  );

  if (click) {
    return <Navigate to={`/player/${id}`} />;
  }

  return (
    <button className="btn btn--play film-card__button" type="button" onClick={handleClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}
