import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { AuthProvider } from '../contexts';
import { store } from '../store/store';
import { muiTheme, theme } from '../theme/mui-theme';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={theme}>
          <AuthProvider>{children}</AuthProvider>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);
