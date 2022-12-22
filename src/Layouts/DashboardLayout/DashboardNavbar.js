import { Navbar } from 'flowbite-react';
import React from 'react';

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
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/dashboard">
                        Dashboard
                    </Navbar.Link>
                    <Navbar.Link href="/">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/login">
                        Login
                    </Navbar.Link>
                    <Navbar.Link href="/register">
                        Register
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default DashboardNavbar;