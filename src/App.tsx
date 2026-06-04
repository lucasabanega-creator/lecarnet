import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Guide from './pages/Guide';
import { architectureData, fragrancesData, cafesData } from './data/guides';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/architecture" element={<Guide content={architectureData} />} />
      <Route path="/fragrances" element={<Guide content={fragrancesData} />} />
      <Route path="/cafes" element={<Guide content={cafesData} />} />
    </Routes>
  );
}
