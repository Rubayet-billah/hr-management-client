import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/data/reviews.json')
      .then((res) => res.json())
      .then((result) => setReviews(result));
  }, []);

  return (
    <div className='container mx-auto px-2 py-12'>
      <div className='text-center mb-8'>
        <h3 className='text-4xl font-bold mb-1'>What Our User Say About Us</h3>
        <p className='capitalize'>Some Of Our User Reviews.</p>
      </div>

      <div>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            480: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            992: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1280: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={36}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{ delay: 2000 }}
          grabCursor={true}
          modules={[Autoplay, Pagination]}
          className='mySwiper'
        >
          {reviews.map((review) => (
            <SwiperSlide className='mb-12 pt-10 pb-6 px-6 bg-gray-100 rounded-lg' key={review.id}>
              <div className=''>
                <p className='text-center'>{review.review}</p>
                <div className='mt-6 text-center'>
                  <p className='font-medium'>{review.fullName}</p>
                  <p className='text-sm text-gray-600'>{review.position}</p>
                </div>
                <p className='absolute top-1 left-2 text-7xl opacity-10'>🙶</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonial;
