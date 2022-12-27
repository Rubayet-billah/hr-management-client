import { Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const NAvbar = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className='bg-white border-b'>
      <div className='container mx-auto px-2'>
        <Navbar className='bg-transparent !px-0 !py-5' fluid={true} rounded={true}>
          <Navbar.Brand>
            <Link to="/">
              <span className='self-center whitespace-nowrap text-2xl font-bold dark:text-white'>
                <span className='bg-blue-500 text-white px-2 py-1 rounded'>Stuff</span> Deck
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='!items-center'>
            <Navbar.Link>
              <Link to='/'>Home</Link>
            </Navbar.Link>
            {
              user?.uid && <Navbar.Link>
                <Link to='/dashboard'>Dashboard</Link>
              </Navbar.Link>
            }

            <Navbar.Link>
              <Link to='/career'>Career</Link>
            </Navbar.Link>
            <Navbar.Link href='/'>
              <Link to='/'>About</Link>
            </Navbar.Link>
            <Navbar.Link href='/'>
              <Link to='/'>Services</Link>
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
