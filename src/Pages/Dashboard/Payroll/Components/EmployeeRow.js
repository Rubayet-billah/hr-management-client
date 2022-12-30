import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useState } from 'react';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import defaultImg from '../../../../assets/icons/userImg.jpg';
import Pdf from '../../../../components/PdfFile/Pdf';
import { fetchEmployees } from '../../../../features/employees/employeesSlice';

const EmployeeRow = ({ employee }) => {
  const { fullName, role, department, email, salary, absent, image } = employee;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleIncrementAbsent = (employee) => {
    setIsLoading(true);
    const { _id, absent } = employee;
    fetch(`http://localhost:5000/employees/absent/${_id}?action=increment&value=${absent}`, { method: 'PATCH' })
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        if (result.modifiedCount) {
          dispatch(fetchEmployees());
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
          dispatch(fetchEmployees());
        }
      });
  };

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <th scope='row' className='flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white'>
        <div className='flex items-center'>
          <img className='w-10 h-10 rounded-full' src={image || defaultImg} alt='Rounded avatar' />
          <div className='ml-3'>
            <div className='text-base font-semibold'>{fullName}</div>
            <div className='font-normal text-gray-500'>{email}</div>
          </div>
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
          <PDFDownloadLink
            document={
              <Pdf
                fullName={fullName}
                role={role}
                department={department}
                salary={salary}
                absent={absent}
                deduction={Math.ceil((salary / 30) * absent)}
                netPayable={salary - Math.ceil((salary / 30) * absent)}
              />
            }
            fileName={`pay_slip_${fullName}`.toLowerCase()}
          >
            {({ loading }) =>
              loading ? (
                <button disabled className='bg-blue-700 text-white px-3 py-2 rounded-sm text-sm hover:bg-blue-800'>
                  Loading Document
                </button>
              ) : (
                <button className='bg-blue-700 text-white px-3 py-2 rounded-sm text-sm hover:bg-blue-800'>
                  Print Pay Slip
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </td>
    </tr>
  );
};
export default EmployeeRow;
