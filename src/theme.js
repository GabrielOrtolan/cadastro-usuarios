// src/theme.js
import { createTheme } from '@mui/material/styles';

const temaPersonalizado = createTheme({
  palette: {
    mode: 'light', // ou 'dark' se preferir fundo escuro
    primary: {
      main: '#0d47a1' // azul escuro
    },
    secondary: {
      main: '#1565c0'
    },
    background: {
      default: '#f4f6f8'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  }
});

export default temaPersonalizado;
