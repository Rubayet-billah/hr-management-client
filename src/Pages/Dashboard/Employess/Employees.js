import React, { useEffect, useState } from 'react';
import EmployeeRow from './Components/EmployeeRow';
import EmployeeStatistics from './Components/EmployeeStatistics';

import { AiOutlinePlus } from 'react-icons/ai';
import AddEmployeeModal from './Components/AddEmployeeModal';
import DeleteEmployeeModal from './Components/DeleteEmployeeModal';
import ViewEmployeeModal from './Components/ViewEmployeeModal';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [addUserModalVisibility, setAddUserModalVisibility] = useState(false);

  const [viewModalVisibility, setViewModalVisibility] = useState(false);
  const [viewEmployee, setViewEmployee] = useState([]);

  const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
  const [deleteEmployee, setDeleteEmployee] = useState([]);

  useEffect(() => {
    fetch('/employees.json')
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const addHandler = () => {
    setAddUserModalVisibility(true);
  };

  return (
    <>
      <div className='min-h-screen'>
        <div className='flex justify-end mb-6'>
          <button
            onClick={addHandler}
            type='button'
            className='flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            <AiOutlinePlus className='mr-2 text-white' /> Add Employee
          </button>
        </div>

        <EmployeeStatistics employees={employees} />
        <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Phone
                </th>
                <th scope='col' className='py-3 px-6'>
                  Role
                </th>
                <th scope='col' className='py-3 px-6'>
                  Joining Date
                </th>
                <th scope='col' className='py-3 px-6'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <EmployeeRow
                  key={employee._id}
                  employee={employee}
                  setViewModalVisibility={setViewModalVisibility}
                  setViewEmployee={setViewEmployee}
                  setDeleteEmployee={setDeleteEmployee}
                  setDeleteModalVisibility={setDeleteModalVisibility}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddEmployeeModal
        addUserModalVisibility={addUserModalVisibility}
        setAddUserModalVisibility={setAddUserModalVisibility}
      />

      <ViewEmployeeModal
        viewEmployee={viewEmployee}
        viewModalVisibility={viewModalVisibility}
        setViewModalVisibility={setViewModalVisibility}
      />

      <DeleteEmployeeModal
        deleteModalVisibility={deleteModalVisibility}
        setDeleteModalVisibility={setDeleteModalVisibility}
        deleteEmployee={deleteEmployee}
      />
    </>
  );
};

export default Employees;
