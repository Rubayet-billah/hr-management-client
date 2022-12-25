import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";

const AddDepartment = ({ addUserModalVisibility, setAddUserModalVisibility }) => {


    const addDepartmentModalClose = () => {
        setAddUserModalVisibility(false);
    };
    const handleAddDepartment = (data) => {
        fetch('http://localhost:5000/department', {
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

        console.log(data)


    }

    const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);
    return (

        <Modal show={addUserModalVisibility} size='2xl' popup={true} onClose={addDepartmentModalClose}>
            <Modal.Header />
            <Modal.Body>
                <div className='px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
                    <h3 className='text-xl mb-4 font-medium text-gray-900 dark:text-white'>Add New Department</h3>
                    <form
                        onSubmit={handleSubmit(handleAddDepartment)}
                    // onSubmit={handleAddDepartment}
                    >
                        <div className='grid grid-cols-1  gap-4'>

                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='department' value='Department name' />
                                </div>
                                <TextInput id='departmentName'
                                    {...register("departmentName", { required: true })}
                                    placeholder='Department name'
                                    required={true}

                                />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='department-head' value='Department Head' />
                                </div>
                                <TextInput
                                    {...register("departmentHeadName", { required: true })}
                                    id='firstName'
                                    placeholder='Department Head'
                                    required={true} />
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