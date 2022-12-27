import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AiOutlinePlus } from 'react-icons/ai';
import { useUtils } from '../../../../contexts/UtilsProvider';
import Career from '../../../Career/Career';
import AddDepartment from './AddDepartment';
import DeleteDepartmentModal from './DeleteDepartmentModal';
import DepartmentRow from './DepartmentRow';
import DepartmentStatistics from './DepartmentStatistics';
import UpdateDepartmentHead from './UpdateDepartmentHead';


const Departments = () => {
    const [addUserModalVisibility, setAddUserModalVisibility] = useState(false);
    const [addDepartmentHeadModalVisibility, setAddDepartmentHeadModalVisibility] = useState(false);
    const [departments, setDepartments] = useState([])

    const [viewDepartmentsDeleteModal, setViewDepartmentsDeleteModal] = useState(false)
    const [deletedDepartment, setDeletedDepartment] = useState({})
    useEffect(() => {
        fetch('/Department.json')
            .then((res) => res.json())
            .then((data) => setDepartments(data));
    }, []);

    const handleAddDepartment = () => {
        setAddUserModalVisibility(true);
    }

    // Change title
    const { setDashboardTitle } = useUtils();
    setDashboardTitle("Departments");

    return (
        <>
            <div>
                <div className='flex justify-end mb-6'>
                    <button
                        onClick={handleAddDepartment}
                        type='button'
                        className='flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                    >
                        <AiOutlinePlus className='mr-2 text-white' /> Add Department
                    </button>
                </div>
                <DepartmentStatistics
                    departments={departments}
                ></DepartmentStatistics>

                <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='py-3 px-6'>
                                    DEPARTMENT NAME
                                </th>
                                <th scope='col' className='py-3 px-6'>
                                    DEPARTMENT HEAD
                                </th>

                                <th>
                                    TOTAL EMPLOYEE
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((departments, idx) => (
                                <DepartmentRow
                                    key={idx}
                                    departments={departments}
                                    setViewDepartmentsDeleteModal={setViewDepartmentsDeleteModal}
                                    setDeletedDepartment={setDeletedDepartment}
                                    setAddDepartmentHeadModalVisibility={setAddDepartmentHeadModalVisibility}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <AddDepartment
                addUserModalVisibility={addUserModalVisibility}
                setAddUserModalVisibility={setAddUserModalVisibility}
            />
            <UpdateDepartmentHead
                addDepartmentHeadModalVisibility={addDepartmentHeadModalVisibility}
                setAddDepartmentHeadModalVisibility={setAddDepartmentHeadModalVisibility}
            >

            </UpdateDepartmentHead>
            <DeleteDepartmentModal
                deletedDepartment={deletedDepartment}
                setViewDepartmentsDeleteModal={setViewDepartmentsDeleteModal}
                viewDepartmentsDeleteModal={viewDepartmentsDeleteModal}
            />
            <Toaster />
            <Career></Career>
        </>
    );
};

export default Departments;