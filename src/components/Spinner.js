import React from 'react';

const Spinner = () => {
    return (
        <h2 className='text-gray-700 text-2xl font-bold py-20 flex items-center justify-center animate-pulse'>
            L<div className='w-4 h-4 border-4 mt-1 border-blue-500 rounded-full border-dashed animate-spin'></div>ading...
        </h2>
    );
};

export default Spinner;