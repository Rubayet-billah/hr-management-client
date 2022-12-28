import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaEnvelope, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useUtils } from '../../contexts/UtilsProvider';

const DashboardNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { dashboardTitle } = useUtils();
    return (
        <div className='dashboard-nav text-center md:border-b border-white py-4'>
            <Navbar
                fluid={true}
                className="bg-inherit"
            >
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-primary dark:text-white">
                        {dashboardTitle || "Dashboard"}
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#" className='mt-[3px]'>
                        <button><FaEnvelope /></button>
                    </Navbar.Link>
                    <Navbar.Link href="#" className='mt-[3px]'>
                        <button><BsFillBellFill /></button>
                    </Navbar.Link>
                    <Navbar.Link href="#" className='mt-[3px]'>
                        <button><FaUser /></button>
                    </Navbar.Link>
                    <Navbar.Link href="#" className='mt-[3px]'>
                        <button onClick={logOut}>
                            <FaSignOutAlt />
                        </button>
                    </Navbar.Link>
                    <Navbar.Link>
                        {user?.email}
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default DashboardNavbar;