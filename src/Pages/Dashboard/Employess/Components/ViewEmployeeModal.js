import { Modal } from 'flowbite-react';

const ViewEmployeeModal = ({ viewEmployee, viewModalVisibility, setViewModalVisibility }) => {
  return (
    <Modal show={viewModalVisibility} onClose={() => setViewModalVisibility(false)}>
      <Modal.Header>Employee Details</Modal.Header>
      <Modal.Body>
        <div className='space-y-6'>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            {viewEmployee.fname} {viewEmployee.lname}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ViewEmployeeModal;
