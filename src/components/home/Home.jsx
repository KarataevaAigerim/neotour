import React from 'react';
import LandingPage from '../landing page/LandingPage';
import Discover from '../discover/Discover';
import Recommended from '../recommended/Recommended';

const Home = () => {
  return (
    <>
      <LandingPage />
      <Discover />
      <Recommended />
    </>
  );
};

export default Home;