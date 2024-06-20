import React from 'react';
import './App.scss';
import LandingPage from './components/landing page/LandingPage';
import Discover from './components/discover/Discover';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
            </>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;

// import './App.scss';
// import LandingPage from './components/landing page/LandingPage';
// import Discover from './components/discover/Discover';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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

// export default App;

// use this for jumping to a different page