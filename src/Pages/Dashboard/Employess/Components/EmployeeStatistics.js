import { BiBarChart } from 'react-icons/bi';

const EmployeeStatistics = ({ employees }) => {
  const maleEmployees = employees.filter((employee) => employee.gender === 'male');

  return (
    <div className='grid grid-cols-3 gap-4 md:gap-8 mb-8'>
      <div className='bg-white py-3 md:py-6 px-4 md:px-10 rounded-lg flex items-center justify-between'>
        <div>
          <p className='text-gray-500'>
            Total <span className='hidden md:inline'>Employee</span>
          </p>
          <p className='text-3xl font-medium text-gray-700'>{employees.length}</p>
        </div>
        <BiBarChart className='text-5xl text-gray-700 hidden md:block' />
      </div>
      <div className='bg-white py-3 md:py-6 px-4 md:px-10 rounded-lg flex items-center justify-between'>
        <div>
          <p className='text-gray-500'>Male</p>
          <p className='text-3xl font-medium text-gray-700'>{maleEmployees.length}</p>
        </div>
        <BiBarChart className='text-5xl text-gray-700 hidden md:block' />
      </div>
      <div className='bg-white py-3 md:py-6 px-4 md:px-10 rounded-lg flex items-center justify-between'>
        <div>
          <p className='text-gray-500'>Female</p>
          <p className='text-3xl font-medium text-gray-700'>{employees.length - maleEmployees.length}</p>
        </div>
        <BiBarChart className='text-5xl text-gray-700 hidden md:block' />
      </div>
    </div>
  );
};
export default EmployeeStatistics;
