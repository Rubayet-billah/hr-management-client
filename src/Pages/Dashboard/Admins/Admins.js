import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Btn from '../../../components/Btn';
import { TextInput } from 'flowbite-react';
import AdminCard from './Components/AdminCard';
import AddAdminModal from './Components/AddAdminModal';
import DeleteModal from '../../../components/Modals/DeleteModal';
import ViewAdminModal from './Components/ViewAdminModal';

const Admins = () => {
    const [admins, setAdmins] = useState([]);
    const [addAdminModalVisibility, setAddAdminModalVisibility] = useState(false);

    const [viewModalVisibility, setViewModalVisibility] = useState(false);
    const [viewAdmin, setViewAdmin] = useState([]);

    const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
    const [deleteAdmin, setDeleteAdmin] = useState([]);

    useEffect(() => {
        fetch('/admins.json')
            .then((res) => res.json())
            .then((data) => setAdmins(data));
    }, []);

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
                <Btn onClick={() => setAddAdminModalVisibility(!addAdminModalVisibility)} color="blue" className="w-fit ml-auto px-4 flex items-center gap-2 ">Add New <FaPlus /></Btn>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    admins.map(admin => <AdminCard
                        key={admin._id}
                        data={admin}
                        setDeleteModalVisibility={setDeleteModalVisibility}
                        setDeleteAdmin={setDeleteAdmin}
                        setViewAdmin={setViewAdmin}
                        setViewModalVisibility={setViewModalVisibility}
                    ></AdminCard>)
                }
            </div>

            <AddAdminModal
                addAdminModalVisibility={addAdminModalVisibility}
                setAddAdminModalVisibility={setAddAdminModalVisibility}
            />

            <ViewAdminModal
                viewAdmin={viewAdmin}
                viewModalVisibility={viewModalVisibility}
                setViewModalVisibility={setViewModalVisibility}
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