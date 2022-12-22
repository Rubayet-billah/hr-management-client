import React from 'react';
import Features from '../Components/Features';
import Hero from '../Components/Hero';
import HomeAccordion from '../Components/HomeAccordion';
import Pricing from '../Components/Pricing';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HomeAccordion />
      <Pricing />
    </main>
  );
};

export default Home;
