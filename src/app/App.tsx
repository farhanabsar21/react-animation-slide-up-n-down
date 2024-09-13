import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/common/NotFound';
import Home from '../components/pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
