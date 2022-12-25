import React from 'react';
import { BiBarChart } from 'react-icons/bi';

const DepartmentStatistics = ({ departments }) => {

    const totalStaff = departments.reduce(
        (accumulator, currentValue) => accumulator + currentValue.totalEmployee,
        0,
    );
    return (
        <div className='block lg:grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 min-[220px]:hidden  '>
            <div className='bg-white py-6 px-10 rounded-lg flex items-center justify-between'>
                <div>
                    <p className='text-gray-500'>Total Employee</p>
                    <p className='text-3xl font-medium text-gray-700'>{totalStaff}</p>
                </div>
                <BiBarChart className='text-5xl text-gray-700' />
            </div>
            <div className='bg-white py-6 px-10 rounded-lg flex items-center justify-between'>
                <div>
                    <p className='text-gray-500'>Male</p>
                    <p className='text-3xl font-medium text-gray-700'>120</p>
                </div>
                <BiBarChart className='text-5xl text-gray-700' />
            </div>
            <div className='bg-white py-6 px-10 rounded-lg flex items-center justify-between'>
                <div>
                    <p className='text-gray-500'>Female</p>
                    <p className='text-3xl font-medium text-gray-700'>80</p>
                </div>
                <BiBarChart className='text-5xl text-gray-700' />
            </div>
        </div>
    );
};

export default DepartmentStatistics;