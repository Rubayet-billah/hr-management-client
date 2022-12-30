import { Button, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useUtils } from '../../../contexts/UtilsProvider';
import { fetchEmployees } from '../../../features/employees/employeesSlice';
import AddEmployeeModal from './Components/AddEmployeeModal';
import DeleteEmployeeModal from './Components/DeleteEmployeeModal';
import EmployeeRow from './Components/EmployeeRow';
import EmployeeStatistics from './Components/EmployeeStatistics';
import UpdateEmployeeModal from './Components/UpdateEmployeeModal';
import ViewEmployeeModal from './Components/ViewEmployeeModal';

const Employees = () => {
  const [addUserModalVisibility, setAddUserModalVisibility] = useState(false);
  const [viewModalVisibility, setViewModalVisibility] = useState(false);
  const [updateModalVisibility, setUpdateModalVisibility] = useState(false);

  const [viewEmployee, setViewEmployee] = useState([]);

  const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
  const [deleteEmployee, setDeleteEmployee] = useState([]);
  const [updateEmployee, setUpdateEmployee] = useState([]);

  const [employeesData, setEmployeesData] = useState([]);

  const { employees } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  useEffect(() => {
    setEmployeesData(employees);
  }, [employees]);

  const addHandler = () => {
    setAddUserModalVisibility(true);
  };

  // Change title
  const { setDashboardTitle } = useUtils();
  setDashboardTitle('Employees');

  const handleSearch = (e) => {
    const searchString = e.target.searchString.value;
    e.preventDefault();
    const filterData = employees.filter((employeeData) =>
      employeeData.fullName.toLowerCase().includes(searchString.toLowerCase())
    );
    setEmployeesData(filterData);
  };

  const handleClean = (e) => {
    if (e.target.value === '') {
      setEmployeesData(employees);
    }
  };

  return (
    <>
      <div>
        <div className='flex flex-col md:flex-row justify-between mb-6 gap-y-4'>
          <form onSubmit={handleSearch} className='flex gap-4 w-full'>
            <TextInput
              onChange={handleClean}
              name='searchString'
              className='w-full md:!w-72'
              type='text'
              placeholder='Employee Name'
            />
            <Button type='submit'>Search</Button>
          </form>

          <button
            onClick={addHandler}
            type='button'
            className='shrink-0 flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
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
              {employeesData.map((employee) => (
                <EmployeeRow
                  key={employee._id}
                  employee={employee}
                  setViewModalVisibility={setViewModalVisibility}
                  setViewEmployee={setViewEmployee}
                  setDeleteEmployee={setDeleteEmployee}
                  setDeleteModalVisibility={setDeleteModalVisibility}
                  setUpdateModalVisibility={setUpdateModalVisibility}
                  setUpdateEmployee={setUpdateEmployee}
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
      <UpdateEmployeeModal
        updateModalVisibility={updateModalVisibility}
        setUpdateModalVisibility={setUpdateModalVisibility}
        updateEmployee={updateEmployee}
      />
    </>
  );
};

export default Employees;
