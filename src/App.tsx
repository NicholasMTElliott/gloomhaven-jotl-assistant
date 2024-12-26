import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GamePage } from './pages/GamePage';
import { RoundPage } from './pages/RoundPage';
import { TurnPage } from './pages/TurnPage';

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <BrowserRouter>
    <CssBaseline enableColorScheme />
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/round" element={<RoundPage />} />
        <Route path="/turn" element={<TurnPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
