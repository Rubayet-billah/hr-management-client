import { Button, Modal } from 'flowbite-react';
import React from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const DeleteDepartmentModal = ({
    viewDepartmentsDeleteModal,
    setViewDepartmentsDeleteModal,
    deletedDepartment

}) => {
    return (
        <Modal show={viewDepartmentsDeleteModal} size='md' popup={true} onClose={() => {
            setViewDepartmentsDeleteModal(false)

        }}>
            <Modal.Header />
            <Modal.Body>
                <div className='text-center'>
                    <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                    <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                        Are you sure you want to delete {deletedDepartment.dept}?
                    </h3>
                    <div className='flex justify-center gap-4'>
                        <Button color='failure' onClick={() => { }}>
                            Yes, I'm Sure!
                        </Button>
                        <Button color='gray' onClick={() => { }}>
                            No, Cancel.
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default DeleteDepartmentModal;