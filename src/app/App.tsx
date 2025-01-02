import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/common/NotFound';
import Home from '../components/pages/Home';
import Testimonials from '../components/pages/Testimonial';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
