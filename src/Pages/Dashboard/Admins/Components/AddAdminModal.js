import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const AddAdminModal = ({ addAdminModalVisibility, setAddAdminModalVisibility, refetch }) => {
    const [error, setError] = useState(null);
    const { createUser, setLoading, updateSecondaryAuth, secondaryAuthSignOut } = useContext(AuthContext);
    const addModalClose = () => {
        setAddAdminModalVisibility(false);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setError(null);
        const { firstName, lastName, email, phone, password, repeatPassword } = data;
        if (password !== repeatPassword) {
            setError("Password didn't match");
            return;
        }
        createUser(email, password)
            .then(result => {
                updateSecondaryAuth({ displayName: firstName + " " + lastName })
                    .then(() => {
                        secondaryAuthSignOut();
                        setAddAdminModalVisibility(false);
                        setLoading(false);
                        // SAVE ADMIN TO DB
                        fetch('http://localhost:5000/admins', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({
                                firstName, lastName, email, phone
                            })
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    refetch();
                                }
                            })
                    });
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })
        return
    };

    return (
        <Modal show={addAdminModalVisibility} size='5xl' popup={true} onClose={addModalClose}>
            <Modal.Header />
            <Modal.Body>
                <div className='px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
                    <h3 className='text-xl mb-4 font-medium text-gray-900 dark:text-white flex items-center gap-2'>Add New Admin <FaLock className='text-gray-700' /></h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='firstName' value='First Name' />
                                </div>
                                <TextInput {...register("firstName")} id='firstName' placeholder='First Name' required={true} />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='lastName' value='Last Name' />
                                </div>
                                <TextInput {...register("lastName")} id='lastName' placeholder='Last Name' required={true} />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='email' value='Email' />
                                </div>
                                <TextInput {...register("email")} type='email' id='email' placeholder='Email Address' required={true} />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='phone' value='Phone Number' />
                                </div>
                                <TextInput {...register("phone")} id='phone' placeholder='Phone Number' required={true} />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='password' value='Password' />
                                </div>
                                <TextInput {...register("password")} type='password' id='password' placeholder='Password' required={true} />
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='repeat-password' value='Repeat Password' />
                                </div>
                                <TextInput {...register("repeatPassword")} type='password' id='repeat-password' placeholder='Repeat Password' required={true} />
                            </div>
                        </div>
                        {
                            error && <p className="text-primary mt-2 text-sm">{error}</p>
                        }
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
