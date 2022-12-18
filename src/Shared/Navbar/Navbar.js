import { Navbar } from 'flowbite-react';
import React from 'react';

const NAvbar = () => {
    return (
        <div className='text-center'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        HR Manager
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

export default NAvbar;