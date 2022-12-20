import React from 'react';
import hiringImg from '../../../assets/hiringImage/hiring.webp'

const HiringBanner = () => {
    return (
        <section className='lg:flex my-8'>
            <div className='lg:w-1/2'><img className='w-full' src={hiringImg} alt="" /></div>
            <div className='flex items-center justify-center lg:justify-start lg:pl-12 lg:w-1/2'>
                <div>
                    <h1 className='text-3xl md:text-5xl font-bold text-rose-500 my-6'>Come On and Join Us</h1>
                    <h3 className='text-xl md:text-3xl'>Requirements:</h3>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Quae possimus blanditiis odit!</li>
                    <li>Sunt incidunt tenetur enim?</li>
                    <li>Reprehenderit unde expedita vitae.</li>
                    <li>Quia atque deleniti explicabo.</li>
                </div>
            </div>
        </section>
    );
};

export default HiringBanner;