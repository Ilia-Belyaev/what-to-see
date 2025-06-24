import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/slices/api-actions';
import { getAllFavoriteFilms } from '../../store/slices/favorite-films/selectors';
// import MyList from '../../pages/my-list/my-list';

export const MyListHOC = () => {
  const dispatch = useAppDispatch();
  // const [loading, setLoading] = useState(true);
  const favoriteFilms = useAppSelector(getAllFavoriteFilms);

  useEffect(() => {
    dispatch(getFavoriteFilms());

  },[dispatch]);

  useEffect(() => {
    if (favoriteFilms) {
      // setLoading(false);
    }
  }, [favoriteFilms]);

  // if (loading) {
  //   return;
  // }

  // return <MyList films={favoriteFilms}/>;
};
