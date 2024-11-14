import { Navigate, Route, Routes } from 'react-router-dom';

import { LoadingModal } from '../components/molecules/loadingModal/LoadingModal';
import { AuthScreen } from '../components/organisms/authScreen/AuthScreen';
import { HomeScreen } from '../components/organisms/homeScreen/HomeScreen';
import { ProtectedRoute } from '../components/routing/protectedRoute/ProtectedRoute';
import { ROUTES } from '../constants/routes';
import { useAppSelector } from '../store/hooks';
import { GlobalStyles } from '../theme/globalStyles';

export const AppLayout = () => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <>
      <GlobalStyles />
      <LoadingModal open={isLoading} />
      <Routes>
        <Route path={ROUTES.AUTH} element={<AuthScreen />} />
        <Route
          path={ROUTES.HOME}
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={ROUTES.AUTH} replace />} />
      </Routes>
    </>
  );
};
