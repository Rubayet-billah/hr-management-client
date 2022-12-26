import { Modal } from 'flowbite-react';

const ViewAdminModal = ({ viewAdmin, viewModalVisibility, setViewModalVisibility }) => {
  const { name } = viewAdmin;
  return (
    <Modal show={viewModalVisibility} onClose={() => setViewModalVisibility(false)}>
      <Modal.Header>Employee Details</Modal.Header>
      <Modal.Body>
        <div className='space-y-6'>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            {name}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ViewAdminModal;
