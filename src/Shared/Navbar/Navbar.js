import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const NAvbar = () => {
  return (
    <div className='bg-white border-b'>
      <div className='container mx-auto px-2'>
        <Navbar className='bg-transparent !px-0 !py-5' fluid={true} rounded={true}>
          <Navbar.Brand>
            <span className='self-center whitespace-nowrap text-2xl font-bold dark:text-white'>Stuff Deck</span>
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
      </div>
    </div>
  );
};

export default NAvbar;
