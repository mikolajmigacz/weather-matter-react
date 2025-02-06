import { useEffect } from 'react';

import { useMediaQuery } from '@mui/material';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { LoadingModal } from '../components/molecules/loadingModal/LoadingModal';
import { AppDrawer } from '../components/organisms/appDrawer/AppDrawer';
import { ProtectedRoute } from '../components/routing/protectedRoute/ProtectedRoute';
import { ROUTES } from '../constants/routes';
import { AuthPage } from '../pages/auth/Auth';
import { CitiesPage } from '../pages/cities/Cities';
import { FavoriteCitiesPage } from '../pages/favoriteCities/FavoriteCities';
import { HomePage } from '../pages/home/Home';
import { MapPage } from '../pages/map/Map';
import { FlagsService } from '../services/flags/flags.service';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setIsMobile } from '../store/slices/uiSlice';
import { GlobalStyles } from '../theme/globalStyles';

import { Container, Main } from './AppLayout.styles';

export const AppLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const location = useLocation();
  const showDrawer = location.pathname !== ROUTES.AUTH;
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    FlagsService.setFlags();
  }, []);

  useEffect(() => {
    dispatch(setIsMobile(isMobile));
  }, [isMobile, dispatch]);

  return (
    <>
      <GlobalStyles />
      <LoadingModal open={isLoading} />
      <Container>
        {showDrawer && <AppDrawer />}
        <Main showDrawer={showDrawer} isMobile={isMobile}>
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
            <Route
              path={ROUTES.FAVORITE_CITIES}
              element={
                <ProtectedRoute>
                  <FavoriteCitiesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTES.CITIES}
              element={
                <ProtectedRoute>
                  <CitiesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTES.MAP}
              element={
                <ProtectedRoute>
                  <MapPage />
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
