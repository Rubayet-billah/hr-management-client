import { Footer } from 'flowbite-react';
import React from 'react';

const FooterArea = () => {
  return (
    <Footer className='mt-12'>
      <div className='container mx-auto px-2'>
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
          <Footer.Brand
            href='https://flowbite.com'
            src='https://flowbite.com/docs/images/logo.svg'
            alt='Stuff Deck Logo'
            name='Stuff Deck'
          />
          <Footer.LinkGroup>
            <Footer.Link href='#'>About</Footer.Link>
            <Footer.Link href='#'>Privacy Policy</Footer.Link>
            <Footer.Link href='#'>Licensing</Footer.Link>
            <Footer.Link href='#'>Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className='!my-4' />
        <div className='text-center pb-4'>
          <Footer.Copyright href='#' by='Stuff Deck™' year={2022} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterArea;
