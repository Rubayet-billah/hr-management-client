import React from 'react';
import Contact from '../Components/Contact';
import DevsTeam from '../Components/DevsTeam';
import Features from '../Components/Features';
import Hero from '../Components/Hero';
import HomeAccordion from '../Components/HomeAccordion';
import Newsletter from '../Components/Newsletter';
import Pricing from '../Components/Pricing';
import Testimonial from '../Components/Testimonial';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HomeAccordion />
      <Testimonial />
      <Pricing />
      <Newsletter />
      <DevsTeam />
      <Contact />
    </main>
  );
};

export default Home;
