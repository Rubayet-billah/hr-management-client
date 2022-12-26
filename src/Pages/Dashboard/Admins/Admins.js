import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Btn from '../../../components/Btn';
import { TextInput } from 'flowbite-react';
import AdminCard from './Components/AdminCard';
import AddAdminModal from './Components/AddAdminModal';
import DeleteModal from '../../../components/Modals/DeleteModal';
import ViewAdminModal from './Components/ViewAdminModal';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const Admins = () => {
    const { data: admins = [], refetch } = useQuery({
        queryKey: ['admins'],
        queryFn: () => fetch('http://localhost:5000/admins')
            .then(res => res.json())
    })

    const [addAdminModalVisibility, setAddAdminModalVisibility] = useState(false);

    const [viewModalVisibility, setViewModalVisibility] = useState(false);
    const [viewAdmin, setViewAdmin] = useState([]);

    const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
    const [deleteAdmin, setDeleteAdmin] = useState([]);

    const handleDelete = () => {
        fetch(`http://localhost:5000/admins/${deleteAdmin._id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    setDeleteModalVisibility(false);
                    toast.success(`${deleteAdmin.firstName} deleted`);
                    refetch();
                }
            });
    };

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
                    admins.length < 1
                        ? <h3>No Admin Found!</h3>
                        : admins.map(admin => <AdminCard
                            key={admin._id}
                            admin={admin}
                            setDeleteModalVisibility={setDeleteModalVisibility}
                            setDeleteAdmin={setDeleteAdmin}
                            setViewAdmin={setViewAdmin}
                            setViewModalVisibility={setViewModalVisibility}
                        ></AdminCard>)
                }
            </div>

            <AddAdminModal
                refetch={refetch}
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
                handleDelete={handleDelete}
                deleteItemName={deleteAdmin.firstName}
            />

        </section>
    );
};

export default Admins;