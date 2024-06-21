import React from 'react';
import './App.scss';
import LandingPage from './components/landing page/LandingPage';
import Discover from './components/discover/Discover';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recommended from './components/recommended/Recommended';

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
      </Routes>
    </Router>
  );
};

export default App;



// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/discover" element={<Discover />} />
//       </Routes>
//     </Router>
//   );
// };

// use this for jumping to a different page