import { Navbar } from 'flowbite-react';
import React from 'react';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';

const DashboardNavbar = () => {
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
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default DashboardNavbar;