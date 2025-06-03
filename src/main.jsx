// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import temaPersonalizado from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={temaPersonalizado}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
