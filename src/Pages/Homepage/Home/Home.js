import React from 'react';
import Contact from '../Components/Contact';
import DevsTeam from '../Components/DevsTeam';
import Features from '../Components/Features';
import Hero from '../Components/Hero';
import HomeAccordion from '../Components/HomeAccordion';
import Partners from '../Components/Partners';
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
      {/* <Newsletter /> */}
      <Partners />
      <DevsTeam />
      <Contact />
    </main>
  );
};

export default Home;
