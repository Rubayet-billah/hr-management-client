import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const DeleteModal = ({ setDeleteModalVisibility, deleteModalVisibility, deleteItem }) => {
    const deleteModalClose = () => {
        setDeleteModalVisibility(false);
    };

    const handleDelete = () => {
        // console.log(deleteEmployee);
    };

    return (
        <Modal show={deleteModalVisibility} size='md' popup={true} onClose={deleteModalClose}>
            <Modal.Header />
            <Modal.Body>
                <div className='text-center'>
                    <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                    <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                        Are you sure you want to delete {deleteItem}?
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
    );
};

export default DeleteModal;