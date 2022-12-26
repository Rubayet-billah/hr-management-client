import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaEnvelope, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const DashboardNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='dashboard-nav text-center md:border-b border-white py-4'>
            <Navbar
                fluid={true}
                className="bg-inherit"
            >
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-primary dark:text-white">
                        Dashboard
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#">
                        <FaEnvelope />
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <BsFillBellFill />
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <FaUser />
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <button onClick={logOut}>
                            <FaSignOutAlt />
                        </button>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        {user?.email}
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default DashboardNavbar;