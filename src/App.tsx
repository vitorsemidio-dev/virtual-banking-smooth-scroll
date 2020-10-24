/** @format */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';

import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
