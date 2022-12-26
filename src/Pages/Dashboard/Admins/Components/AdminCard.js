import React from 'react';
import Btn from '../../../../components/Btn';
import { FaFacebookF, FaLinkedinIn, FaTrash } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';

const AdminCard = ({ setDeleteModalVisibility, setDeleteAdmin, setViewModalVisibility, setViewAdmin, data }) => {
    const { name, image, email } = data;
    const deleteModalOpen = () => {
        setDeleteModalVisibility(true);
        setDeleteAdmin(name);
    };
    const handleViewBtn = () => {
        setViewModalVisibility(true);
        setViewAdmin(data);
    }
    return (
        <div className="flex flex-col justify-center p-6 shadow-md rounded-xl px-12 bg-white relative">
            <img src={image} alt="" className="w-20 h-20 mx-auto rounded-full border p-1 aspect-square" />
            <div className="text-center">
                <div className="my-2">
                    <h2 className="font-semibold">{name}</h2>
                    <p className="text-sm">{email}</p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center text-gray-500">
                    <a href="#!"><FaLinkedinIn /></a>
                    <a href="#!"><FaFacebookF /></a>
                    <a href="#!"><AiOutlineTwitter /></a>
                    <a href="#!"><GoMarkGithub /></a>
                </div>
                <div className='flex gap-1 mt-4'>
                    <Btn onClick={handleViewBtn} className="text-gray-500 border border-gray-500">View Profile</Btn>
                    <Btn className="text-gray-500 border border-gray-500">Message</Btn>
                </div>
                <div className='text-center flex justify-center gap-6 divide-x mt-5'>
                    <div className='text-center'>
                        <span className='text-sm text-gray-500'>Project</span> <br />
                        <span className='font-medium'>07</span>
                    </div>
                    <div className='pl-6 text-center'>
                        <span className='text-sm text-gray-500'>Deal</span> <br />
                        <span className='font-medium'>$2,510</span>
                    </div>
                </div>
            </div>
            <button onClick={deleteModalOpen} className='absolute top-0 right-0 m-3 text-gray-400 hover:text-red-500'>
                <FaTrash />
            </button>
        </div>
    );
};

export default AdminCard;