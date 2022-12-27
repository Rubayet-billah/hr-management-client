import { Button } from 'flowbite-react';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
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
      <DevsTeam />
      <Newsletter />
      <>

        <div className='grid lg:grid-cols-2 gap-8'>
          <div className='bg-gray-200 p-5 rounded-lg relative'>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-xl font-bold'>MERN Stack Developmer</h2>
                <p className='flex items-center gap-1'><AiFillHome className='w-5 h-5 text-gray-500' /> Work From Home</p>
              </div>
              <div className='mt-2'>
                <p className='font-medium'>STIPEND</p>
                <p>4,000-10,000 /month</p>
              </div>
            </div>
            <div className='mt-4'>
              <p className='font-medium'>START DATE</p>
              <p>Immediately</p>
            </div>
            <div className='absolute bottom-0 right-0 m-5'>
              <Button color="light">View Details</Button>
            </div>
          </div>
          <div className='bg-gray-200 p-5 rounded-lg relative'>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-xl font-bold'>MERN Stack Developmer</h2>
                <p className='flex items-center gap-1'><AiFillHome className='w-5 h-5 text-gray-500' /> Work From Home</p>
              </div>
              <div className='mt-2'>
                <p className='font-medium'>STIPEND</p>
                <p>4,000-10,000 /month</p>
              </div>
            </div>
            <div className='mt-4'>
              <p className='font-medium'>START DATE</p>
              <p>Immediately</p>
            </div>
            <div className='absolute bottom-0 right-0 m-5'>
              <Button color="light">View Details</Button>
            </div>
          </div>
        </div>

      </>
    </main>
  );
};

export default Home;
