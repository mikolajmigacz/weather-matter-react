import { useEffect } from 'react';

import { useAuth } from '../../../contexts';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setIsLoading } from '../../../store/slices/uiSlice';

export const HomeScreen = () => {
  const { logout } = useAuth();
  const userData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    const timer = setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome {userData.name || userData.login}!</h1>
      <p>Your favorite city: {userData.favoriteCity}</p>
      <p>Your user ID: {userData.userId}</p>
      <p>Your email: {userData.login}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
