import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { FiDelete } from 'react-icons/fi';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { MdPreview } from 'react-icons/md';

const EmployeeRow = ({ employee }) => {
  const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
  const [deleteEmployee, setDeleteEmployee] = useState([]);
  const { fname, lname, image, email, phone, dept } = employee;

  const deleteModalClose = () => {
    setDeleteModalVisibility(false);
  };

  const deleteModalOpen = (employee) => {
    setDeleteModalVisibility(true);
    setDeleteEmployee(employee);
  };

  const handleDelete = () => {
    console.log(deleteEmployee);
  };

  return (
    <>
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        <th scope='row' className='flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white'>
          <img className='w-10 h-10 rounded-full' src={image} alt='Jese' />
          <div className='pl-3'>
            <div className='text-base font-semibold'>
              {fname} {lname}
            </div>
            <div className='font-normal text-gray-500'>{email}</div>
          </div>
        </th>
        <td className='py-4 px-6'>{phone}</td>
        <td className='py-4 px-6'>
          <div>
            <p className='text-base text-gray-700'>Web Developer</p>
            <p>{dept}</p>
          </div>
        </td>
        <td className='py-4 px-6'>10 Jan, 2023</td>
        <td className='py-4 px-6'>
          <div className='flex'>
            <button className='text-lg mr-2'>
              <MdPreview />
            </button>
            <button className='text-lg mr-2'>
              <BiEdit />
            </button>
            <button onClick={() => deleteModalOpen(employee)} className='text-lg text-red-600'>
              <FiDelete />
            </button>
          </div>
        </td>
      </tr>
      <Modal show={deleteModalVisibility} size='md' popup={true} onClose={deleteModalClose}>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete {deleteEmployee.fname} {deleteEmployee.lname}?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDelete}>
                Yes, I'm Sure!
              </Button>
              <Button color='gray' onClick={deleteModalClose}>
                No, Cancel.
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default EmployeeRow;
