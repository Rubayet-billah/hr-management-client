import { Progress, Select, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { SlCalender } from 'react-icons/sl';
import { TfiWorld } from 'react-icons/tfi';
import Btn from '../../../components/Btn';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useUtils } from '../../../contexts/UtilsProvider';
import avatar from '../../../assets/icons/avatar.png';

const Accounts = () => {
    // Change title
    const { setDashboardTitle } = useUtils();
    setDashboardTitle("Account Settings");

    const { user } = useContext(AuthContext);

    return (
        <section className='accounts grid grid-cols-12 gap-5 items-start'>
            <div className='col-span-12 lg:col-span-4 bg-white rounded shadow text-sm'>
                <div className='flex items-center gap-2 p-2 border-b'>
                    <div>
                        <img src={user?.photoURL || avatar} alt="Profile pic" className="w-16 h-16 mx-auto rounded" />
                    </div>
                    <div>
                        <p className='font-medium'>{user?.displayName}</p>
                        <p>Admin</p>
                    </div>
                </div>
                <div className='p-4 border-b'>
                    <p>Title:</p>
                    <p>FaceBook Inc.</p>
                </div>
                <div className='p-4 border-b'>
                    <p>Address:</p>
                    <p>44 Shirley Ave. IL 60185</p>
                </div>
                <div className='p-4 border-b'>
                    <p>Date:</p>
                    <p>07 Feb 2019</p>
                </div>
                <div className='p-4'>
                    <p className='mb-2'>Profile Complete:</p>
                    <Progress
                        progress={60}
                        labelProgress={true}
                        color="blue"
                    />
                </div>
            </div>
            <div className='col-span-12 lg:col-span-8'>
                <div className='bg-white rounded shadow p-5 mb-5'>
                    <p className='text-primary text-sm mb-4'>GENERAL SETTINGS</p>
                    <form className="flex flex-col gap-4">
                        <div className='grid grid-cols-3 gap-2'>
                            <Select
                                required={true}
                                sizing="sm"
                            >
                                <option>
                                    Select gender
                                </option>
                                <option>
                                    Male
                                </option>
                                <option>
                                    Female
                                </option>
                                <option>
                                    Other
                                </option>
                            </Select>
                            <TextInput
                                placeholder="Date of bith"
                                required={true}
                                addon={<SlCalender />}
                                sizing="sm"
                                id="rounded-l-0"
                            />
                            <TextInput
                                placeholder="Website"
                                required={true}
                                addon={<TfiWorld />}
                                sizing="sm"
                                id="rounded-l-0"
                            />
                        </div>
                        <div className='grid grid-cols-3 gap-2'>
                            <Select
                                required={true}
                                sizing="sm"
                            >
                                <option>
                                    Select country
                                </option>
                                <option>
                                    USA
                                </option>
                                <option>
                                    Bangladesh
                                </option>
                                <option>
                                    India
                                </option>
                            </Select>
                            <TextInput
                                placeholder="State/Province"
                                required={true}
                                sizing="sm"
                            />
                            <TextInput
                                placeholder="City"
                                required={true}
                                sizing="sm"
                            />
                        </div>
                        <div>
                            <Textarea
                                placeholder="Add a bio..."
                                required={true}
                                rows={4}
                                className="text-xs"
                            />
                        </div>
                        <Btn className="w-fit px-4" color="blue">Update</Btn>
                    </form>
                </div>
                <div className='bg-white rounded shadow p-5'>
                    <p className='text-primary text-sm mb-4'>ACCOUNT DATA</p>
                    <form className="flex flex-col gap-4">
                        <div className='grid grid-cols-3 gap-2'>
                            <TextInput
                                type="text"
                                required={true}
                                defaultValue={user?.displayName}
                                sizing="sm"
                            />
                            <TextInput
                                type="email"
                                placeholder="Email"
                                required={true}
                                sizing="sm"
                                defaultValue={user?.email}
                                disabled
                                className="bg-gray-200 rounded"
                            />
                            <TextInput
                                type="number"
                                placeholder="Phone Number"
                                required={true}
                                sizing="sm"
                            />
                        </div>
                        <div className='mt-3 border-t grid gap-3 pt-4'>
                            <h3 className='text-xs uppercase'>Change Password</h3>
                            <TextInput
                                type="password"
                                required={true}
                                placeholder="Current Password"
                                sizing="sm"
                            />
                            <TextInput
                                type="password"
                                placeholder="New Password"
                                required={true}
                                sizing="sm"
                            />
                            <TextInput
                                type="password"
                                placeholder="Confirm New Password"
                                required={true}
                                sizing="sm"
                            />
                        </div>
                        <Btn className="w-fit px-4" color="blue">Update</Btn>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Accounts;