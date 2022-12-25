import { Footer } from 'flowbite-react';
import React from 'react';

const FooterArea = () => {
  return (
    <Footer className='mt-12'>
      <div className='container mx-auto px-2'>
        {/* New footer should be here. */}
        <Footer.Divider className='!my-4' />
        <div className='text-center pb-4'>
          <Footer.Copyright href='#' by='Stuff Deck™' year={2022} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterArea;
