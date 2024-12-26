import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import darkGothicTheme from './theme'; // your custom theme

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkGothicTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);