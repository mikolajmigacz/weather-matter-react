import { createTheme } from '@mui/material/styles';

import { AppColors } from '../constants';

export const theme = {
  colors: {
    ...AppColors,
  },
} as const;

export const muiTheme = createTheme({
  colors: theme.colors,
  palette: {
    primary: {
      main: theme.colors.teal,
    },
    background: {
      default: theme.colors.darkestGray,
      paper: theme.colors.darkGray,
    },
    text: {
      primary: theme.colors.lightestGray,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});
