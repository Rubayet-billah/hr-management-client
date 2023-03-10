import React, { useContext, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Btn from '../../../components/Btn';
import { TextInput } from 'flowbite-react';
import AdminCard from './Components/AdminCard';
import AddAdminModal from './Components/AddAdminModal';
import DeleteModal from '../../../components/Modals/DeleteModal';
import ViewAdminModal from './Components/ViewAdminModal';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useUtils } from '../../../contexts/UtilsProvider';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useRole from '../../../hooks/useRole/useRole';

const Admins = () => {
    const { data: admins = [], refetch } = useQuery({
        queryKey: ['admins'],
        queryFn: () => fetch('https://hr-management-server.vercel.app/admins')
            .then(res => res.json())
    })

    const { user, loading } = useContext(AuthContext)

    const [role] = useRole(user.email, loading)

    const [addAdminModalVisibility, setAddAdminModalVisibility] = useState(false);

    const [viewModalVisibility, setViewModalVisibility] = useState(false);
    const [viewAdmin, setViewAdmin] = useState([]);

    const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
    const [deleteAdmin, setDeleteAdmin] = useState([]);

    const handleDelete = () => {
        if (role) {
            fetch(`https://hr-management-server.vercel.app/admins/${deleteAdmin._id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        setDeleteModalVisibility(false);
                        toast.success(`${deleteAdmin.firstName} deleted`);
                        refetch();
                        fetch(`https://hr-management-server.vercel.app/firebase/deleteUser/${deleteAdmin.email}`)
                            .then((res) => res.json())
                            .then(data => { })
                    }
                });
        } else {
            toast.error('Access denied')
        }
    };

    // Change title
    const { setDashboardTitle } = useUtils();
    setDashboardTitle("Admins");

    return (
        <section>
            <div className='bg-white mb-5 p-5 flex gap-5 rounded-lg'>
                <div className='hidden sm:flex w-3/6 lg:w-2/6 gap-2'>
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
                <Btn onClick={() => setAddAdminModalVisibility(!addAdminModalVisibility)} color={`${role ? 'blue' : 'gray'}`} className="w-fit ml-auto px-4 flex items-center gap-2" disabled={!role}>Add New <FaPlus /></Btn>
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