import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Btn from '../../../components/Btn';
import { TextInput } from 'flowbite-react';
import AdminCard from './Components/AdminCard';
import AddAdminModal from './Components/AddAdminModal';
import DeleteModal from '../../../components/Modals/DeleteModal';

const Admins = () => {
    // const [admins, setAdmins] = useState([]);
    const [addAdminModalVisibility, setAddAdminModalVisibility] = useState(false);

    // const [viewModalVisibility, setViewModalVisibility] = useState(false);
    // const [viewEmployee, setViewEmployee] = useState([]);

    const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
    const [deleteAdmin, setDeleteAdmin] = useState([]);

    // useEffect(() => {
    //     fetch('/employees.json')
    //         .then((res) => res.json())
    //         .then((data) => setEmployees(data));
    // }, []);

    // const addHandler = () => {
    //     setAddUserModalVisibility(true);
    // };

    return (
        <section>
            <div className='bg-white mb-5 p-5 flex gap-5 rounded-lg'>
                <div className='w-2/6 flex gap-2'>
                    <TextInput
                        className='w-full'
                        type="search"
                        id='search'
                        placeholder="Search admin"
                        required={true}
                        sizing="sm"
                    />
                    <Btn color="blue" className="w-fit px-4">Search</Btn>
                </div>
                <div onClick={() => setAddAdminModalVisibility(!addAdminModalVisibility)} className="ml-auto">
                    <Btn color="blue" className="w-fit px-4 flex items-center gap-2">Add New <FaPlus /></Btn>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    [...Array(8).keys()].map(idx => <AdminCard
                        key={idx}
                        setDeleteModalVisibility={setDeleteModalVisibility}
                        setDeleteAdmin={setDeleteAdmin}
                    ></AdminCard>)
                }
            </div>

            <AddAdminModal
                addAdminModalVisibility={addAdminModalVisibility}
                setAddAdminModalVisibility={setAddAdminModalVisibility}
            />

            <DeleteModal
                deleteModalVisibility={deleteModalVisibility}
                setDeleteModalVisibility={setDeleteModalVisibility}
                deleteItem={deleteAdmin}
            />

        </section>
    );
};

export default Admins;