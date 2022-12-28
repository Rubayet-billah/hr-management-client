import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import one from '../../../assets/Banner/one.webp';
import three from '../../../assets/Banner/three.png';
import two from '../../../assets/Banner/two.png';

const Hero = () => {
  const heroImages = [
    {
      id: 1,
      image: one,
    },
    {
      id: 2,
      image: two,
    },
    {
      id: 3,
      image: three,
    },
  ];

  return (
    <section className='container mx-auto px-2'>
      <div className='grid py-8 lg:py-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 items-center min-h-[60vh]'>
        <div className='mr-auto lg:col-span-8'>
          <h1 className='max-w-2xl capitalize mb-4 text-3xl font-bold leading-none md:text-4xl xl:text-5xl dark:text-white'>
            The smart HR software for growing businesses!
          </h1>
          <p className='max-w-xl mb-6 text-gray-500 text-sm lg:mb-8 md:text-lg dark:text-gray-400'>
            Modernize your HR, Manage your hiring, Onboarding, Employee Data, and HR Workflows in one place.
          </p>
        </div>
        <div className='hidden lg:mt-0 lg:col-span-4 lg:block'>
          <Swiper
            spaceBetween={0}
            loop={true}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            grabCursor={true}
            modules={[Autoplay]}
            className='mySwiper'
          >
            {heroImages.map((heroImage) => (
              <SwiperSlide key={heroImage.id}>
                <div>
                  <img className='w-full' src={heroImage.image} alt='hero' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Hero;
