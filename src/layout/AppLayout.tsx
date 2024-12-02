import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { LoadingModal } from '../components/molecules/loadingModal/LoadingModal';
import { AppDrawer } from '../components/organisms/appDrawer/AppDrawer';
import { ProtectedRoute } from '../components/routing/protectedRoute/ProtectedRoute';
import { ROUTES } from '../constants/routes';
import { AuthPage } from '../pages/auth/Auth';
import { HomePage } from '../pages/home/Home';
import { useAppSelector } from '../store/hooks';
import { GlobalStyles } from '../theme/globalStyles';

import { Container, Main } from './AppLayout.styles';

export const AppLayout = () => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const location = useLocation();
  const showDrawer = location.pathname !== ROUTES.AUTH;

  return (
    <>
      <GlobalStyles />
      <LoadingModal open={isLoading} />
      <Container>
        {showDrawer && <AppDrawer />}
        <Main>
          <Routes>
            <Route path={ROUTES.AUTH} element={<AuthPage />} />
            <Route
              path={ROUTES.HOME}
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to={ROUTES.AUTH} replace />} />
          </Routes>
        </Main>
      </Container>
    </>
  );
};
