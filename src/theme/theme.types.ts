import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      darkestGray: string;
      darkGray: string;
      teal: string;
      lightestGray: string;
    };
  }

  interface ThemeOptions {
    colors: {
      darkestGray: string;
      darkGray: string;
      teal: string;
      lightestGray: string;
    };
  }
}
