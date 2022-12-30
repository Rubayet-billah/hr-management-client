import { BiEdit } from 'react-icons/bi';
import { FiDelete } from 'react-icons/fi';
import { MdPreview } from 'react-icons/md';

const EmployeeRow = ({
  employee,
  setViewEmployee,
  setViewModalVisibility,
  setDeleteEmployee,
  setDeleteModalVisibility,
  setUpdateModalVisibility,
  setUpdateEmployee,
}) => {
  const { fullName, email, phone, department, role, joiningDate, image } = employee;

  const deleteModalOpen = (employee) => {
    setDeleteModalVisibility(true);
    setDeleteEmployee(employee);
  };

  const dateString = new Date(joiningDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <th scope='row' className='flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white'>
        <div className='flex items-center pl-3'>
          <img className="w-10 h-10 rounded-full" src={image || "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"} alt="Rounded avatar" />
          <div className='ml-3'>
            <div className='text-base font-semibold'>{fullName}</div>
            <div className='font-normal text-gray-500'>{email}</div>
          </div>
        </div>
      </th>
      <td className='py-4 px-6'>{phone}</td>
      <td className='py-4 px-6'>
        <div>
          <p className='text-base text-gray-700 capitalize'>{role}</p>
          <p className='capitalize'>{department}</p>
        </div>
      </td>
      <td className='py-4 px-6'>{dateString}</td>
      <td className='py-4 px-6'>
        <div className='flex'>
          <button className='text-lg mr-2'>
            <MdPreview
              onClick={() => {
                setViewModalVisibility(true);
                setViewEmployee(employee);
              }}
            />
          </button>
          <button className='text-lg mr-2'>
            <BiEdit
              onClick={() => {
                setUpdateModalVisibility(true);
                setUpdateEmployee(employee);
              }}
            />
          </button>
          <button onClick={() => deleteModalOpen(employee)} className='text-lg text-red-600'>
            <FiDelete />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default EmployeeRow;
