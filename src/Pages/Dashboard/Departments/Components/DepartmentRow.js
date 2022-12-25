import React from 'react';
import { MdPreview } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';

const DepartmentRow = ({
    departments,
    setViewDepartmentsDeleteModal,
    setDeletedDepartment,
    setAddDepartmentHeadModalVisibility

}) => {

    const { fname, lname, dept, totalEmployee } = departments;

    return (
        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <td className='py-4 px-6'>
                <div>
                    <p className='text-base text-gray-700'>{dept}</p>
                </div>
            </td>
            <td className='py-4 px-6'> {fname} {lname}</td>
            <td>
                {totalEmployee}
            </td>
            <td className='py-4 px-6'>
                <div className='flex'>
                    <button
                        onClick={() => {
                            setAddDepartmentHeadModalVisibility(departments)
                        }}
                        className='text-lg mr-2'>
                        <MdPreview />
                    </button>
                    <button
                        onClick={() => {
                            setViewDepartmentsDeleteModal(true)
                            setDeletedDepartment(departments)

                        }}
                        className='text-lg text-red-600'>
                        <BsTrash />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default DepartmentRow;