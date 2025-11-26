import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page doesn't use Layout (has its own nav/footer) */}
        <Route path="/" element={<Home />} />

        {/* Other pages use Layout wrapper */}
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
