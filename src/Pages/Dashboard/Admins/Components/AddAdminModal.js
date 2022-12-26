import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';
import { FaLock } from 'react-icons/fa';

const AddAdminModal = ({ addAdminModalVisibility, setAddAdminModalVisibility }) => {
    const addModalClose = () => {
        setAddAdminModalVisibility(false);
    };

    return (
        <Modal show={addAdminModalVisibility} size='5xl' popup={true} onClose={addModalClose}>
            <Modal.Header />
            <Modal.Body>
                <div className='px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
                    <h3 className='text-xl mb-4 font-medium text-gray-900 dark:text-white flex items-center gap-2'>Add New Admin <FaLock className='text-gray-700' /></h3>
                    <form>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='firstName' value='First Name' />
                                </div>
                                <TextInput id='firstName' placeholder='First Name' required={true} />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='lastName' value='Last Name' />
                                </div>
                                <TextInput id='LastName' placeholder='Last Name' required={true} />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='email' value='Email' />
                                </div>
                                <TextInput type='email' id='email' placeholder='Email Address' required={true} />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='phone' value='Phone Number' />
                                </div>
                                <TextInput id='phone' placeholder='Phone Number' required={true} />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='password' value='Password' />
                                </div>
                                <TextInput type='password' id='password' placeholder='Password' required={true} />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='repeat-password' value='Repeat Password' />
                                </div>
                                <TextInput type='password' id='repeat-password' placeholder='Repeat Password' required={true} />
                            </div>
                        </div>
                        <div className='w-full mt-4 '>
                            <Button type='submit'>Add Admin</Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};
export default AddAdminModal;
