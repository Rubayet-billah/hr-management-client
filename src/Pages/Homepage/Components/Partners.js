import React from 'react';

const Partners = () => {
  return (
    <div className='container mx-auto px-5 md:px-0 py-12'>
      <div className='text-center mb-8'>
        <h3 className='text-4xl font-bold mb-1'>Our Partners</h3>
        <p className='capitalize'>We are integrated with the below partners and more.</p>
      </div>

      <div className='flex flex-wrap justify-center lg:justify-between items-center gap-8'>
        <img
          className='w-36 grayscale hover:grayscale-0 hover:scale-110 duration-200'
          src='https://149362086.v2.pressablecdn.com/wp-content/uploads/2021/03/PapersOwl-200x49.png'
          alt=''
        />
        <img
          className='w-36 grayscale hover:grayscale-0 hover:scale-110 duration-200'
          src='https://149362086.v2.pressablecdn.com/wp-content/uploads/2021/07/Screen-Shot-2021-07-12-at-05.31.10-200x84.png'
          alt=''
        />
        <img
          className='w-36 grayscale hover:grayscale-0 hover:scale-110 duration-200'
          src='https://www.gethppy.com/wp-content/uploads/2015/08/SNlogo2.png'
          alt=''
        />
        <img
          className='w-36 grayscale hover:grayscale-0 hover:scale-110 duration-200'
          src='https://www.gethppy.com/wp-content/uploads/2015/08/mediaplanetlogo.png'
          alt=''
        />
        <img
          className='w-36 grayscale hover:grayscale-0 hover:scale-110 duration-200'
          src='https://gethppy.com/wp-content/uploads/2016/07/acknowledgement-works.png'
          alt=''
        />
        <img
          className='w-36 grayscale hover:grayscale-0 hover:scale-110 duration-200'
          src='https://149362086.v2.pressablecdn.com/wp-content/uploads/2021/11/logo_v3-200x60.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Partners;
