import React from 'react';
import { BiBarChart } from 'react-icons/bi';

const CandidateStatistics = ({ candidates, showShortlistedCandidate, setShowShortlistedCandidates, refetch }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                <div onClick={() => {
                    setShowShortlistedCandidates(false);
                    refetch();
                }} className={`${showShortlistedCandidate ? '' : 'border-blue-600 border-b-4 '}bg-white hover:bg-gray-100 py-6 px-10 rounded-lg flex items-center justify-between cursor-pointer`}>
                    <div>
                        <p className='text-gray-500'>Total Candidates</p>
                        <p className='text-3xl font-medium text-gray-700'>{candidates.length}</p>
                    </div>
                    <BiBarChart className='text-5xl text-gray-700' />
                </div>
                <div onClick={() => {
                    setShowShortlistedCandidates(true);
                }} className={`${!showShortlistedCandidate ? '' : 'border-blue-600 border-b-4 '}bg-white hover:bg-gray-100 py-6 px-10 rounded-lg flex items-center justify-between cursor-pointer`}>
                    <div>
                        <p className='text-gray-500'>Shortlisted Candidate</p>
                        <p className='text-3xl font-medium text-gray-700'>2</p>
                    </div>
                    <BiBarChart className='text-5xl text-gray-700' />
                </div>
            </div>
        </div>
    );
};

export default CandidateStatistics;