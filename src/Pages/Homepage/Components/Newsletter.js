import { Button } from 'flowbite-react';

const NewsLetter = () => {
  return (
    <section className='bg-white px-5 md:px-0 py-12'>
      <div className='container mx-auto px-2'>
        <div className='max-w-2xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Subscribe To Our Newsletter</h2>
            <p className='text-gray-600 mb-4'>
              Stay up-to-date with the latest news, events, and special offers from our company.
            </p>
          </div>
          <form className=''>
            <input
              className='text-center mb-6 border-0 border-b bg-transparent w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:ring-0 active:outline-none'
              type='email'
              placeholder='Your Email Address'
            />
            <Button className='rounded-sm mx-auto' type='submit'>
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
