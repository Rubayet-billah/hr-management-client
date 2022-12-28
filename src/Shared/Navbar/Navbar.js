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
          {/* <Navbar.Brand> */}
          <Link to="/">
            <span className='self-center whitespace-nowrap text-2xl font-bold dark:text-white'>
              <span className='bg-blue-500 text-white px-2 py-1 rounded'>Staff</span> Deck
            </span>
          </Link>
          {/* </Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse className='!items-center'>

            <Link to='/'>Home</Link>

            {
              user?.uid &&
              <Link to='/dashboard'>Dashboard</Link>

            }

            <Link to='/careers'>Careers</Link>


            <Link to='/'>About</Link>


            <Link to='/'>Services</Link>

            {
              !user &&
              <Link to='/login'>Login</Link>

            }
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NAvbar;
