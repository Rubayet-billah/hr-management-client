import { BiEdit } from 'react-icons/bi';
import { FiDelete } from 'react-icons/fi';
import { MdPreview } from 'react-icons/md';

const EmployeeRow = ({ employee }) => {
  const { fname, lname, image, email, phone, dept } = employee;
  return (
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
        <div>
          <button className='text-lg mr-2'>
            <MdPreview />
          </button>
          <button className='text-lg mr-2'>
            <BiEdit />
          </button>
          <button className='text-lg text-red-600'>
            <FiDelete />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default EmployeeRow;
