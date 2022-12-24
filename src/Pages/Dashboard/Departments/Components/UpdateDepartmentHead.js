import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-hot-toast';

const UpdateDepartmentHead = ({
    setAddDepartmentHeadModalVisibility,
    addDepartmentHeadModalVisibility }) => {



    const addDepartmentHeadModalClose = () => {
        setAddDepartmentHeadModalVisibility(false);
    };

    const handleUpdateDepartmentHead = (e) => {
        e.preventDefault()
        toast.success('Department head added Successfully ')
    }

    return (
        <Modal show={addDepartmentHeadModalVisibility} size='xl' className='text-center' popup={true} onClose={addDepartmentHeadModalClose}>
            <Modal.Header />
            <Modal.Body>
                <div className='px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
                    <h3 className='text-xl mb-4 font-medium text-gray-900 dark:text-white'>Add New Department</h3>
                    <form onSubmit={handleUpdateDepartmentHead}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>

                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='department' value='Department name' />
                                </div>
                                <TextInput id='firstName' placeholder='Department name' required={true} />
                            </div>
                        </div>
                        <div className='w-full mt-4 '>
                            <Button type='submit'

                            >Update Department  Head</Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateDepartmentHead;