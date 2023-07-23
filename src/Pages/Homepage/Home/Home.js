import React from 'react';
import Contact from '../Components/Contact';
import DevsTeam from '../Components/DevsTeam';
import Features from '../Components/Features';
import Hero from '../Components/Hero';
import HomeAccordion from '../Components/HomeAccordion';
import NewsLetter from '../Components/Newsletter';
import Partners from '../Components/Partners';
import Pricing from '../Components/Pricing';
import Services from '../Components/Services';
import Testimonial from '../Components/Testimonial';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HomeAccordion />
      <Services />
      <Testimonial />
      <Pricing />
      <Partners />
      <DevsTeam />
      <Contact />
      <NewsLetter />
    </main>
  );
};

export default Home;
