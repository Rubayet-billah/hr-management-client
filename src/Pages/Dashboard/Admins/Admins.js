import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPlus } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import Btn from '../../../components/Btn';
import { TextInput } from 'flowbite-react';

const Admins = () => {
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
                <Btn color="blue" className="w-fit px-4 ml-auto flex items-center gap-2">Add New <FaPlus /></Btn>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    [...Array(8).keys()].map((admin, idx) => (
                        <div key={idx} className="flex flex-col justify-center p-6 shadow-md rounded-xl px-12 bg-white">
                            <img src="https://media.licdn.com/dms/image/C5603AQHtyb_sj3wslA/profile-displayphoto-shrink_800_800/0/1663162296906?e=1677110400&v=beta&t=bcuOvt-ePwvXWj7C6PPhDRCdjuVA7qwpDXABJuCoIhc" alt="" className="w-20 h-20 mx-auto rounded-full border p-1 aspect-square" />
                            <div className="text-center">
                                <div className="my-2">
                                    <h2 className="font-semibold">Abdullah Al Habib</h2>
                                    <p className="text-sm">jason-porter@info.com</p>
                                </div>
                                <div className="flex justify-center pt-2 space-x-4 align-center text-gray-500">
                                    <a href="#!"><FaLinkedinIn /></a>
                                    <a href="#!"><FaFacebookF /></a>
                                    <a href="#!"><AiOutlineTwitter /></a>
                                    <a href="#!"><GoMarkGithub /></a>
                                </div>
                                <div className='flex gap-1 mt-4'>
                                    <Btn className="text-gray-500 border border-gray-500">View Profile</Btn>
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
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Admins;