/** @format */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';

// import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
