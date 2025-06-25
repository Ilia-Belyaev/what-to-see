import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { getFavoriteFilms } from '../../store/slices/api-actions';
import MyList from '../../pages/my-list/my-list';

export const MyListHOC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getFavoriteFilms()).finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return;
  }

  return <MyList />;
};
