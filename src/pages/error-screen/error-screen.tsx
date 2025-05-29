import {useAppDispatch} from '../../hooks';
import '../error-screen/error-screen.css';
import Image from '../../img/lost_connection.png';
import { fetchFilmAction, fetchPromoFilmAction } from '../../store/slices/api-actions';

export default function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className='outer_error_container' data-testid='error-container'>
      <img className='error_image' src={Image}/>
      <p className="error__text">Не удалось загрузить предложения</p>
      <button
        onClick={() => {
          dispatch(fetchFilmAction());
          dispatch(fetchPromoFilmAction());
        }}
        className="replay replay--error"
        type="button"
      >
         Попробовать ещё раз
      </button>
    </div>
  );
}
