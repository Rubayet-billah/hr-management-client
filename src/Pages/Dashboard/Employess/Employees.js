import React, { useEffect, useState } from 'react';
import EmployeeRow from './Components/EmployeeRow';
import EmployeeStatistics from './Components/EmployeeStatistics';

import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { AiOutlinePlus } from 'react-icons/ai';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    fetch('/employees.json')
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const onClick = () => {
    setModalVisibility(true);
  };
  const onClose = () => {
    setModalVisibility(false);
  };

  return (
    <div className='py-6'>
      <div className='flex justify-end mb-6'>
        <button
          onClick={onClick}
          type='button'
          className='flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          <AiOutlinePlus className='mr-2 text-white' /> Add
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
              <EmployeeRow key={employee._id} employee={employee} />
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={modalVisibility} size='5xl' popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className='px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
            <h3 className='text-xl mb-4 font-medium text-gray-900 dark:text-white'>Add New Employee</h3>
            <form>
              <div className='grid grid-cols-4 gap-4'>
                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='firstName' value='First Name' />
                  </div>
                  <TextInput id='firstName' placeholder='First Name' required={true} />
                </div>
                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='lastName' value='Last Name' />
                  </div>
                  <TextInput id='LastName' placeholder='Last Name' required={true} />
                </div>
                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='phone' value='Phone Number' />
                  </div>
                  <TextInput id='phone' placeholder='Phone Number' required={true} />
                </div>
                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='email' value='Email' />
                  </div>
                  <TextInput type='email' id='email' placeholder='Email Address' required={true} />
                </div>

                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='joiningDate' value='Joining Date' />
                  </div>
                  <TextInput type='date' id='joiningDate' required={true} />
                </div>

                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='email' value='Position' />
                  </div>
                  <TextInput type='email' id='email' placeholder='Email Address' required={true} />
                </div>

                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='email' value='Department' />
                  </div>
                  <TextInput type='email' id='email' placeholder='Email Address' required={true} />
                </div>

                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='email' value='Salary' />
                  </div>
                  <TextInput type='number' id='email' placeholder='00.00' required={true} />
                </div>

                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='password' value='Your password' />
                  </div>
                  <TextInput id='password' type='password' required={true} />
                </div>
              </div>
              <div className='w-full mt-4'>
                <Button>Add Employee</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Employees;
