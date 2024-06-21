import React from 'react';
import './App.scss';
import LandingPage from './components/landing page/LandingPage';
import Discover from './components/discover/Discover';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recommended from './components/recommended/Recommended';
import Tour from './components/tour/Tour';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <LandingPage />
              <Discover />
              <Recommended/>
            </>
          } 
        />
        <Route path="/tour" element={<Tour />} />
      </Routes>
    </Router>
  );
};

export default App;