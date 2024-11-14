import { Navigate } from 'react-router-dom';

import { useAuth } from '../../../contexts';
import { useAppSelector } from '../../../store/hooks';

import { ProtectedRouteProps } from './ProtectedRoute.types';

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const userData = useAppSelector((state) => state.user);

  if (loading) return null;

  if (!user || !userData.userId) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
