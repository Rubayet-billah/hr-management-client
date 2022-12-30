import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUtils } from '../../../contexts/UtilsProvider';
import { fetchEmployees } from '../../../features/employees/employeesSlice';
import Chart from './Components/Chart';
import EmployeeRow from './Components/EmployeeRow';

const Payroll = () => {
  // const { data: employees = [], refetch } = useQuery({
  //   queryKey: [],
  //   queryFn: async () => {
  //     const res = await fetch('https://hr-management-server.vercel.app/employees');
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const { employees } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

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
                  Designation
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
                <EmployeeRow key={employee._id} employee={employee} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Payroll;
