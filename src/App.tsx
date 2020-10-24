/** @format */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
