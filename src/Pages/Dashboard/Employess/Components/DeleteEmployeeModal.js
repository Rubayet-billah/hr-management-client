import { Button, Modal } from 'flowbite-react';
import { toast } from 'react-hot-toast';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { fetchEmployees } from '../../../../features/employees/employeesSlice';

const DeleteEmployeeModal = ({ setDeleteModalVisibility, deleteModalVisibility, deleteEmployee }) => {
  const deleteModalClose = () => {
    setDeleteModalVisibility(false);
  };

  const dispatch = useDispatch();

  const handleDelete = (employeeData) => {
    const id = employeeData._id;
    fetch(`https://hr-management-server.vercel.app/employees/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          deleteModalClose();
          dispatch(fetchEmployees());
          toast.success('Employee Deleted!');
        }
      });
  };

  return (
    <Modal show={deleteModalVisibility} size='md' popup={true} onClose={deleteModalClose}>
      <Modal.Header />
      <Modal.Body>
        <div className='text-center'>
          <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
          <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
            Are you sure you want to delete {deleteEmployee.fullName}?
          </h3>
          <div className='flex justify-center gap-4'>
            <Button color='failure' onClick={() => handleDelete(deleteEmployee)}>
              Yes, I'm Sure!
            </Button>
            <Button color='gray' onClick={deleteModalClose}>
              No, Cancel.
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default DeleteEmployeeModal;
