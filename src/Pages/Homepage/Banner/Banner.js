import React from 'react';
import img from '../../../assets/Banner/bannerhr.png'

const Banner = () => {
    return (
        <div>
            <img src={img}
                className='w-full'
                alt="" />
        </div>
    );
};

export default Banner;