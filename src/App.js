import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Quotes from './components/Quotes';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quotes />} />
    </Routes>
  </Router>
);

export default App;
