import React, { useState } from 'react';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';

const EmployeeRow = ({ employee, refetch }) => {
  const { fullName, role, department, email, salary, absent } = employee;
  const [isLoading, setIsLoading] = useState(false);

  const handleIncrementAbsent = (employee) => {
    setIsLoading(true);
    const { _id, absent } = employee;
    fetch(`http://localhost:5000/employees/absent/${_id}?action=increment&value=${absent}`, { method: 'PATCH' })
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        if (result.modifiedCount) {
          refetch();
        }
      });
  };

  const handleDecrementAbsent = (employee) => {
    setIsLoading(true);
    const { _id, absent } = employee;
    fetch(`http://localhost:5000/employees/absent/${_id}?action=decrement&value=${absent}`, { method: 'PATCH' })
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        if (result.modifiedCount) {
          refetch();
        }
      });
  };

  const handleProcessSalary = () => {
    console.log('Salary Processed');
  };

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <th scope='row' className='flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white'>
        <div>
          <div className='text-base font-semibold'>{fullName}</div>
          <div className='font-normal text-gray-500'>{email}</div>
        </div>
      </th>

      <td className='py-4 px-6 capitalize'>
        <p className='text-base text-gray-900'>{role}</p>
        <p>{department}</p>
      </td>

      <td className='py-4 px-6'>
        <div className='flex'>
          <button
            disabled={isLoading}
            onClick={() => handleDecrementAbsent(employee)}
            className='text-lg mr-2 disabled:cursor-not-allowed'
          >
            <BiMinusCircle />
          </button>
          <div>
            <p>{absent}</p>
          </div>
          <button
            disabled={isLoading}
            onClick={() => handleIncrementAbsent(employee)}
            className='text-lg ml-2 disabled:cursor-not-allowed'
          >
            <BiPlusCircle />
          </button>
        </div>
      </td>
      <td className='py-4 px-6'>{salary}</td>
      <td className='py-4 px-6'>{Math.ceil((salary / 30) * absent)}</td>
      <td className='py-4 px-6'>{salary - Math.ceil((salary / 30) * absent)}</td>
      <td className='py-4 px-6'>
        <div className='flex'>
          <button onClick={handleProcessSalary} className='btn bg-red-500 text-black py-2 px-3 rounded-md'>
            Process
          </button>
        </div>
      </td>
    </tr>
  );
};
export default EmployeeRow;
