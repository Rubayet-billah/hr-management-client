import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const NAvbar = ({ logoHidden }) => {
  return (
    <Navbar className='!px-4 md:!px-7 !py-5' fluid={true} rounded={true}>
      <Navbar.Brand>
        {logoHidden ? null : (
          <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>HR Manager</span>
        )}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='!items-center'>
        <Navbar.Link>
          <Link to='/'>Home</Link>
        </Navbar.Link>

        <Navbar.Link>
          <Link to='/dashboard'>Dashboard</Link>
        </Navbar.Link>
        <Navbar.Link href='/'>
          <Link to='/login'>About</Link>
        </Navbar.Link>
        <Navbar.Link href='/'>
          <Link to='/login'>Services</Link>
        </Navbar.Link>

        <Navbar.Link href='/login'>
          <Link to='/login'>Login</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NAvbar;
