import { createTheme } from '@mui/material/styles';

const colorTheme = createTheme({
  palette: {
    primary: {
      main: '#8C1D40', // Maroon
    },
    secondary: {
      main: '#FFC627', // Gold
    },
    background: {
      default: '#D9D9D9',  // neutral grey
    },
  },
});

export default colorTheme;