import { Modal } from 'flowbite-react';
import { AiOutlineClose } from 'react-icons/ai';

const ViewEmployeeModal = ({ viewEmployee, viewModalVisibility, setViewModalVisibility }) => {
  const {
    fullName,
    nid,
    maritalStatus,
    gender,
    role,
    department,
    salary,
    joiningDate,
    email,
    phone,
    presentAddress,
    permanentAddress,
  } = viewEmployee;

  const dateString = new Date(joiningDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Modal size='xl' show={viewModalVisibility} onClose={() => setViewModalVisibility(false)}>
      <div className='absolute top-3 right-3 p-1 cursor-pointer' onClick={() => setViewModalVisibility(false)}>
        <AiOutlineClose className='text-xl' />
      </div>
      <Modal.Body>
        <div className='space-y-6 p-3'>
          <div className='space-y-1'>
            <p className='text-lg font-medium border-b pb-1 mb-2'>Personal Info</p>
            <p className='text-base leading-relaxed text-gray-700 dark:text-gray-400'>
              <span className='font-medium'>Full Name:</span> {fullName}
            </p>
            <p className='text-base leading-relaxed text-gray-700 dark:text-gray-400'>
              <span className='font-medium'>NID:</span> {nid}
            </p>
            <p className='text-base capitalize leading-relaxed text-gray-700 dark:text-gray-400'>
              <span className='font-medium '>Marital Status:</span> {maritalStatus}
            </p>
            <p className='text-base capitalize leading-relaxed text-gray-700 dark:text-gray-400'>
              <span className='font-medium '>Gender:</span> {gender}
            </p>
          </div>

          <div className='space-y-1'>
            <p className='text-lg font-medium border-b pb-1 mb-2'>Job Info</p>
            <p className='text-base leading-relaxed capitalize text-gray-700 dark:text-gray-400'>
              <span className='font-medium'>Position:</span> {role}
            </p>
            <p className='text-base leading-relaxed capitalize text-gray-700 dark:text-gray-400'>
              <span className='font-medium'>Department:</span> {department}
            </p>
            <p className='text-base capitalize leading-relaxed text-gray-700 dark:text-gray-400'>
              <span className='font-medium '>Salary:</span> {salary}
            </p>
            <p className='text-base capitalize leading-relaxed text-gray-700 dark:text-gray-400'>
              <span className='font-medium '>Joining Date:</span> {dateString}
            </p>
          </div>

          <div className='space-y-1'>
            <p className='text-lg font-medium border-b pb-1 mb-2'>Contact Info</p>
            <p className='text-base leading-relaxed text-gray-700 dark:text-gray-400'>
              <span className='font-medium'>Email:</span> {email}
            </p>
            <p className='text-base leading-relaxed capitalize text-gray-700 dark:text-gray-400'>
              <span className='font-medium'>Phone:</span> {phone}
            </p>
            <p className='text-base capitalize leading-relaxed text-gray-700 dark:text-gray-400'>
              <span className='font-medium '>Present Address:</span> {presentAddress}
            </p>
            <p className='text-base capitalize leading-relaxed text-gray-700 dark:text-gray-400'>
              <span className='font-medium '>Permanent Address:</span> {permanentAddress}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ViewEmployeeModal;
