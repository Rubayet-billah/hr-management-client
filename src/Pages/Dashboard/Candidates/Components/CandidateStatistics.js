import React from 'react';
import { BiBarChart } from 'react-icons/bi';

const CandidateStatistics = ({ candidates, setShortlistedCandidates }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                <div className='bg-white py-6 px-10 rounded-lg flex items-center justify-between'>
                    <div>
                        <p className='text-gray-500'>Total Candidates</p>
                        <p className='text-3xl font-medium text-gray-700'>{candidates.length}</p>
                    </div>
                    <BiBarChart className='text-5xl text-gray-700' />
                </div>
                <div onClick={() => setShortlistedCandidates(true)} className='bg-white py-6 px-10 rounded-lg flex items-center justify-between'>
                    <div>
                        <p className='text-gray-500'>From Bangladesh</p>
                        <p className='text-3xl font-medium text-gray-700'>2</p>
                    </div>
                    <BiBarChart className='text-5xl text-gray-700' />
                </div>
                {/* <div className='bg-white py-6 px-10 rounded-lg flex items-center justify-between'>
                    <div>
                        <p className='text-gray-500'>From Outside</p>
                        <p className='text-3xl font-medium text-gray-700'>1</p>
                    </div>
                    <BiBarChart className='text-5xl text-gray-700' />
                </div> */}
            </div>
        </div>
    );
};

export default CandidateStatistics;