import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { AuthScreen } from './components/organisms/authScreen/AuthScreen';
import { HomeScreen } from './components/organisms/homeScreen/HomeScreen';
import { ProtectedRoute } from './components/routing/ProtectedRoute';
import { ROUTES } from './constants/routes';
import { AuthProvider } from './contexts';
import { store } from './store/store';
import { GlobalStyles } from './theme/globalStyles';
import { muiTheme, theme } from './theme/mui-theme';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={theme}>
          <AuthProvider>
            <GlobalStyles />
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
          </AuthProvider>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);
