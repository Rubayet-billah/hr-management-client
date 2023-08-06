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
          <Link to="/">
            <span className='self-center whitespace-nowrap text-2xl font-bold dark:text-white'>
              <span className='bg-blue-500 text-white px-2 py-1 rounded'>Staff</span> Deck
            </span>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className='flex flex-col bg-lime-100 md:bg-inherit mt-5 md:mt-0 pb-5 md:pb-0 !justify-center text-center !items-center'>
            <Link className='hover:text-blue-500 py-2' to='/'>Home</Link>
            {
              user?.uid &&
              <Link className='hover:text-blue-500 mt-4 md:mt-0 py-2' to='/dashboard'>Dashboard</Link>
            }
            <Link className='hover:text-blue-500 mt-4 md:mt-0 py-2' to='/careers'>Careers</Link>
            <Link className='hover:text-blue-500 mt-4 md:mt-0 py-2' to='/'>About</Link>
            <Link className='hover:text-blue-500 mt-4 md:mt-0 py-2' to='/'>Services</Link>
            {
              !user &&
              <Link className='bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 md:mt-0' to='/login'>Login</Link>
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NAvbar;
