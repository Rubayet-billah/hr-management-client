import { BiBarChart } from 'react-icons/bi';

const EmployeeStatistics = ({ employees }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
      <div className='bg-white py-6 px-10 rounded-lg flex items-center justify-between'>
        <div>
          <p className='text-gray-500'>Total Employee</p>
          <p className='text-3xl font-medium text-gray-700'>{employees.length}</p>
        </div>
        <BiBarChart className='text-5xl text-gray-700' />
      </div>
      <div className='bg-white py-6 px-10 rounded-lg flex items-center justify-between'>
        <div>
          <p className='text-gray-500'>Male</p>
          <p className='text-3xl font-medium text-gray-700'>145</p>
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
export default EmployeeStatistics;
