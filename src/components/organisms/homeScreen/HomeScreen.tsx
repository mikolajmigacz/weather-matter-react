import { useAuth } from '../../../contexts';
import { useAppSelector } from '../../../store/hooks';

export const HomeScreen = () => {
  const { logout } = useAuth();
  const userData = useAppSelector((state) => state.user);

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
