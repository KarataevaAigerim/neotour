import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Tour from './components/tour/Tour';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-input-2/lib/style.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:id" element={<Tour />} />
      </Routes>
    </Router>
  );
};

export default App;