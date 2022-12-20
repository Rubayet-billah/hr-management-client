import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NAvbar from '../../Shared/Navbar/Navbar';
import { SlArrowRight } from 'react-icons/sl';
import { BsFillAlarmFill } from 'react-icons/bs';

const DashboardLayout = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-slate-100'>
            <div className={`${open ? 'w-72' : 'w-20'} duration-100 p-5 pt-8 bg-white h-screen fixed top-0 z-50`}>
                <div className={`absolute cursor-pointer right-0 translate-x-1/2 top-9 p-2 border-2 bg-red-700 text-white rounded-full ${open && 'rotate-180'} duration-300`}
                    onClick={() => setOpen(!open)}
                >
                    <SlArrowRight className='w-5 h-5' />
                </div>
                <div className='flex gap-x4 items-center'>
                    <div>
                        <BsFillAlarmFill className='w-5 h-5' />
                    </div>
                    <h1 className={`origin-left text-xl ${!open && 'scale-0'} duration-200`}>Staff Deck</h1>
                </div>
                <div className='flex gap-x4 items-center'>
                    <div>
                        <BsFillAlarmFill className='w-5 h-5' />
                    </div>
                    <h1 className={`origin-left text-xl ${!open && 'scale-0'} duration-200`}>Alarms</h1>
                </div>
            </div>
            <div className='p-7 flex-1 ml-20'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;