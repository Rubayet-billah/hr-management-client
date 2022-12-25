import React from 'react';
import DevsTeam from '../Components/DevsTeam';
import Features from '../Components/Features';
import Hero from '../Components/Hero';
import HomeAccordion from '../Components/HomeAccordion';
import Newsletter from '../Components/Newsletter';

import Pricing from '../Components/Pricing';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HomeAccordion />
      <Pricing />
      <DevsTeam />
      <Newsletter />
    </main>
  );
};

export default Home;
