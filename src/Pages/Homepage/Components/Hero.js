import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import one from '../../../assets/Banner/one.webp';
import two from '../../../assets/Banner/two.png';
import three from '../../../assets/Banner/three.png';

const Hero = () => {
  return (
    <section class='container mx-auto px-2'>
      <div class='grid py-8 lg:py-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 items-center min-h-[60vh]'>
        <div class='mr-auto lg:col-span-8'>
          <h1 class='max-w-2xl capitalize mb-4 text-3xl font-bold leading-none md:text-4xl xl:text-5xl dark:text-white'>
            The smart HR software for growing businesses!
          </h1>
          <p class='max-w-xl mb-6 text-gray-500 text-sm lg:mb-8 md:text-lg dark:text-gray-400'>
            Modernize your HR, Manage your hiring, Onboarding, Employee Data, and HR Workflows in one place.
          </p>
        </div>
        <div className='hidden lg:mt-0 lg:col-span-4 lg:flex'>
          <Swiper
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div>
                <img
                  className='w-full'
                  src={one}
                  alt='hero'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className='w-full'
                  src={two}
                  alt='hero'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className='w-full'
                  src={three}
                  alt='hero'
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section >
  );
};
export default Hero;
