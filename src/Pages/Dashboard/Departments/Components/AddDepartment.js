import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";

const AddDepartment = ({ addUserModalVisibility, setAddUserModalVisibility }) => {
    const { register, handleSubmit } = useForm();

    const addDepartmentModalClose = () => {
        setAddUserModalVisibility(false);
    };
    const handleAddDepartment = (data) => {
        fetch('https://hr-management-server.vercel.app/department', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Department Added Successfully ')
                    console.log('Success:', data);
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (

        <Modal show={addUserModalVisibility} size='2xl' popup={true} onClose={addDepartmentModalClose}>
            <Modal.Header />
            <Modal.Body>
                <div className='px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
                    <h3 className='text-xl mb-4 font-medium text-gray-900 dark:text-white'>Add New Department</h3>
                    <form
                        onSubmit={handleSubmit(handleAddDepartment)}
                    >
                        <div className='grid grid-cols-1  gap-4'>

                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='department' value='Department name' />
                                </div>
                                <TextInput id='departmentName'
                                    {...register("departmentName", { required: true })}
                                    placeholder='Department name'
                                />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='department-head' value='Department Head' />
                                </div>
                                <TextInput
                                    {...register("departmentHeadName", { required: true })}
                                    id='department-head'
                                    placeholder='Department Head'
                                />
                            </div>
                        </div>
                        <div className='w-full mt-4 '>
                            <Button type='submit'

                            >Add Department</Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AddDepartment;