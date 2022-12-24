import { Tooltip } from 'flowbite-react';
import React, { useState } from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FcDepartment } from 'react-icons/fc';
import { FiUsers } from 'react-icons/fi';
import { ImUserTie } from 'react-icons/im';
import { RiAdminLine } from 'react-icons/ri';
import { SlArrowRight } from 'react-icons/sl';
import { Link, Outlet } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-[#EDEFF3]'>
      <div
        className={`${open ? 'w-64 left-0' : 'w-20 -left-20 md:left-0'
          } duration-100 bg-white border-r h-screen fixed top-0 z-50`}
      >
        <div
          className={`absolute cursor-pointer right-0 translate-x-1/2 top-9 p-2 border-2 bg-red-700 text-white rounded-full ${open && 'rotate-180'
            } duration-300`}
          onClick={() => setOpen(!open)}
        >
          <SlArrowRight className='w-4 h-4' />
        </div>
        <div className='p-5 flex flex-col justify-between h-full'>
          <div>
            <Link to='/' onClick={() => setOpen(false)}>
              <div className={`flex items-center gap-3 ${open ? 'mt-4' : 'mt-1'} duration-100`}>
                <img className='w-10' src='https://img.icons8.com/color/48/null/dashboard-layout.png' alt='' />
                <h1 className={`origin-left ${!open && 'scale-0'} duration-100 text-2xl font-medium`}>Staff Deck</h1>
              </div>
            </Link>
            <div className='mt-8'>
              <Link
                to='/dashboard'
                onClick={() => setOpen(false)}
                className='flex items-center gap-3 hover:bg-gray-200 rounded-lg mb-3 p-2'
              >
                {open ? (
                  <AiOutlineDashboard className={`w-5 h-5`} />
                ) : (
                  <Tooltip content='Dashboard' placement='right' style='light'>
                    <AiOutlineDashboard className={`w-5 h-5`} />
                  </Tooltip>
                )}
                <h1 className={`origin-left ${!open && 'scale-0'} duration-200 font-medium`}>Dashboard</h1>
              </Link>
              <Link
                to='/dashboard/candidates'
                onClick={() => setOpen(false)}
                className='flex items-center gap-3 hover:bg-gray-200 rounded-lg mb-3 p-2'
              >
                {open ? (
                  <FiUsers className={`w-5 h-5`} />
                ) : (
                  <Tooltip content='Candidates' placement='right' style='light'>
                    <FiUsers className={`w-5 h-5`} />
                  </Tooltip>
                )}
                <h1 className={`origin-left ${!open && 'scale-0'} duration-200 font-medium`}>Users</h1>
              </Link>
              <Link
                to='/dashboard/departments'
                onClick={() => setOpen(false)}
                className='flex items-center gap-3 hover:bg-gray-200 rounded-lg mb-3 p-2'
              >
                {open ? (
                  <FcDepartment className={`w-5 h-5`} />
                ) : (
                  <Tooltip content='Departments' placement='right' style='light'>
                    <FcDepartment className={`w-5 h-5`} />
                  </Tooltip>
                )}
                <h1 className={`origin-left ${!open && 'scale-0'} duration-200 font-medium`}>Department</h1>
              </Link>
              <Link
                to='/dashboard/employees'
                onClick={() => setOpen(false)}
                className='flex items-center gap-3 hover:bg-gray-200 rounded-lg mb-3 p-2'
              >
                {open ? (
                  <ImUserTie className={`w-5 h-5 text-sky-500`} />
                ) : (
                  <Tooltip content='Employees' placement='right' style='light'>
                    <ImUserTie className={`w-5 h-5 text-sky-500`} />
                  </Tooltip>
                )}
                <h1 className={`origin-left ${!open && 'scale-0'} duration-200 font-medium`}>Employees</h1>
              </Link>
              <Link
                to='/dashboard/admins'
                onClick={() => setOpen(false)}
                className='flex items-center gap-3 hover:bg-gray-200 rounded-lg mb-3 p-2'
              >
                {open ? (
                  <RiAdminLine className={`w-5 h-5 text-green-500`} />
                ) : (
                  <Tooltip content='Admins' placement='right' style='light'>
                    <RiAdminLine className={`w-5 h-5 text-green-500`} />
                  </Tooltip>
                )}
                <h1 className={`origin-left ${!open && 'scale-0'} duration-200 font-medium`}>Admins</h1>
              </Link>
            </div>
          </div>
          <div>
            <Link className='flex items-center gap-3'>
              <img
                className='w-9'
                src='https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
                alt=''
              />
              <h1 className={`origin-left ${!open && 'scale-0'} duration-200 text-xs font-medium`}>Md Maruf Hossain</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className='md:ml-20'>
        <div className='px-4 md:px-7'>
          <DashboardNavbar />
        </div>
        <div className='p-4 md:p-7'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
