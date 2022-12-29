import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useUtils } from '../../../contexts/UtilsProvider';
import Chart from './Components/Chart';
import EmployeeRow from './Components/EmployeeRow';

const Payroll = () => {
  const { data: employees = [], refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/employees');
      const data = await res.json();
      return data;
    },
  });

  // Change title
  const { setDashboardTitle } = useUtils();
  setDashboardTitle('Payroll');

  return (
    <>
      <div className='min-h-screen'>
        <div className='h-80 bg-white mb-10'>
          <Chart employees={employees} />
        </div>
        <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Position
                </th>
                <th scope='col' className='py-3 px-6'>
                  No. of Absent
                </th>
                <th scope='col' className='py-3 px-6'>
                  Salary
                </th>
                <th scope='col' className='py-3 px-6'>
                  Deduction
                </th>
                <th scope='col' className='py-3 px-6'>
                  Net Payable
                </th>
                <th scope='col' className='py-3 px-6'>
                  Salary Process
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <EmployeeRow key={employee._id} employee={employee} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Payroll;
