import { curveCardinal } from 'd3-shape';
import React, { useContext } from 'react';
import candidates from '../../assets/dashboard/candidates.png';
import employeesImg from '../../assets/dashboard/employees.png';
import holidays from '../../assets/dashboard/holidays.png';
import payroll from '../../assets/dashboard/payroll.png';

import { useQuery } from '@tanstack/react-query';
import { Progress } from 'flowbite-react';
import { FcDepartment } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Btn from '../../components/Btn';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useUtils } from '../../contexts/UtilsProvider';
import Departments from './Statistics/Departments';

const data = [
  {
    name: 'July',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Aug',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Sept',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Oct',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Nov',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Dec',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const cardinal = curveCardinal.tension(0.2);

const Dashboard = () => {
  // Change title
  const { setDashboardTitle } = useUtils();
  setDashboardTitle('Dashboard');

  const { user } = useContext(AuthContext);

  const { data: employees = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch('https://hr-management-server.vercel.app/employees');
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
      <h3 className='text-3xl'>Welcome {user?.displayName}!</h3>
      <small className='text-xs'>Measure How Fast You’re Growing Monthly Recurring Revenue. Learn More</small>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5'>
        <Link to='/dashboard/employees' className='bg-white rounded-lg shadow'>
          <div className='flex flex-col items-center hover:scale-110 duration-300 overflow-hidden p-8'>
            <img className='w-8 h-8' src={employeesImg} alt='Employees' />
            <p>Employees</p>
          </div>
        </Link>
        <Link to='/dashboard/departments' className='bg-white rounded-lg shadow'>
          <div className='flex flex-col items-center hover:scale-110 duration-300 overflow-hidden p-8'>
            <FcDepartment className='w-8 h-8 mb-1' />
            <p>Departments</p>
          </div>
        </Link>
        <Link to='/dashboard/candidates' className='bg-white rounded-lg shadow'>
          <div className='flex flex-col items-center hover:scale-110 duration-300 overflow-hidden p-8'>
            <img className='w-9 h-9' src={candidates} alt='Candidates' />
            <p>Candidates</p>
          </div>
        </Link>
        <Link to='/dashboard/payroll' className='bg-white rounded-lg shadow'>
          <div className='flex flex-col items-center hover:scale-110 duration-300 overflow-hidden p-8'>
            <img className='w-9 h-9' src={payroll} alt='Payroll' />
            <p>Payroll</p>
          </div>
        </Link>
        <Link to='/dashboard/holidays' className='bg-white rounded-lg shadow'>
          <div className='flex flex-col items-center hover:scale-110 duration-300 overflow-hidden p-8'>
            <img className='w-9 h-9' src={holidays} alt='Holidays' />
            <p>Holidays</p>
          </div>
        </Link>
      </div>

      <div className='grid grid-cols-12 mt-6 gap-5'>
        <div className='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-6 p-5 bg-white rounded-lg shadow'>
          <h3 className='font-medium text-left'>REVENUE</h3>
          <div className='w-full h-80 md:h-96'>
            <ResponsiveContainer width='100%' height='100%'>
              <ComposedChart
                data={data}
                margin={{
                  top: 30,
                  right: 15,
                  bottom: 15,
                  left: 5,
                }}
              >
                <CartesianGrid stroke='#f5f5f5' />
                <XAxis dataKey='name' label={{ position: 'insideBottomRight', offset: 0 }} scale='band' />
                <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
                <Bar dataKey='pv' barSize={20} fill='#413ea0' />
                <Line type='monotone' dataKey='uv' stroke='#ff7300' />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className='col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-3 bg-white rounded-lg p-5 text-center flex flex-col justify-between shadow'>
          <Departments />
        </div>
        <div className='col-span-12 sm:col-span-6 lg:col-span-3 bg-white rounded-lg p-5 flex flex-col justify-between shadow'>
          <h3 className='font-medium text-left mb-4'>MY BALANCE</h3>
          <div>
            <p className='text-sm'>Balance</p>
            <p className='text-2xl'>$20,508</p>
          </div>
          <ResponsiveContainer width='100%' height={100}>
            <AreaChart
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' fillOpacity={0.3} />
              <Area type={cardinal} dataKey='uv' stroke='#82ca9d' fill='#82ca9d' fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
          <div className='my-5'>
            <div>
              <Progress progress={90} label='Bank of America' labelPosition='outside' labelProgress={true} />
            </div>
            <div className='mt-3'>
              <Progress progress={60} label='RBC Bank' labelPosition='outside' labelProgress={true} color='red' />
            </div>
            <div className='mt-3'>
              <Progress progress={45} label='Frost Bank' labelPosition='outside' labelProgress={true} />
            </div>
          </div>
          <Btn color='red'>View More</Btn>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 mt-6 gap-5'>
        <div className='lg:col-span-4 bg-white rounded-lg p-5 shadow'>
          <h3 className='font-medium text-left mb-5'>EMPLOYEE STRUCTURE</h3>
          <ResponsiveContainer width='100%' height={300}>
            <ComposedChart
              layout='vertical'
              height={400}
              data={data}
              margin={{
                right: 20,
                left: 10,
              }}
            >
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis type='number' />
              <YAxis dataKey='name' type='category' scale='band' />
              <Bar dataKey='pv' barSize={20} fill='#413ea0' />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className='lg:col-span-4 bg-white rounded-lg p-5 text-center shadow'>
          <h3 className='font-medium text-left mb-10'>EMPLOYEE SATISFACTION</h3>
          <ResponsiveContainer width='100%' height={200}>
            <RadarChart outerRadius='80%' data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey='name' />
              <PolarRadiusAxis />
              <Radar name='Mike' dataKey='uv' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
          <h2 className='text-3xl mt-3'>
            124,301 <span className='text-sm'>+8.6%</span>
          </h2>
          <p className='text-xs'>Employee satisfaction is the key to growth.</p>
          <p className='text-xs mt-2 text-red-400'>Read more</p>
        </div>
        <div className='lg:col-span-4 bg-white rounded-lg p-5 shadow'>
          <h3 className='font-medium text-left mb-4'>PERFORMANCE</h3>
          <p className='text-sm my-4'>Measure How Fast You’re Growing Monthly Recurring Revenue. Learn More</p>
          <div className='my-5 py-5 border rounded-lg text-xs'>
            <div className='px-5'>
              <Progress progress={33} label='Bank of America' labelPosition='outside' labelProgress={true} />
            </div>
            <div className='mt-3 border-t px-5 pt-2'>
              <Progress progress={60} label='RBC Bank' labelPosition='outside' labelProgress={true} color='red' />
            </div>
            <div className='mt-3 border-t px-5 pt-2'>
              <Progress progress={45} label='Frost Bank' labelPosition='outside' labelProgress={true} />
            </div>
            <div className='mt-3 border-t px-5 pt-2'>
              <Progress progress={10} label='Frost Bank' labelPosition='outside' labelProgress={true} color='red' />
            </div>
            <div className='mt-3 border-t px-5 pt-2'>
              <Progress progress={75} label='Frost Bank' labelPosition='outside' labelProgress={true} />
            </div>
          </div>
        </div>
      </div>
      {/* table */}

      <div className='overflow-x-auto relative shadow-md sm:rounded-lg mt-6'>
        <div className='p-5 bg-white dark:bg-gray-900'>
          <h3 className='font-normal text-left'>New Employees</h3>
        </div>
        <table className='w-full text-xs text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='py-3 px-6 font-normal'>
                Name
              </th>
              <th scope='col' className='py-3 px-6 font-normal'>
                Position
              </th>
              <th scope='col' className='py-3 px-6 font-normal'>
                Joining Date
              </th>
              <th scope='col' className='py-3 px-6 font-normal'>
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee._id}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
              >
                <th scope='row' className='flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white'>
                  <img
                    className='w-10 h-10 rounded-full'
                    src='https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png'
                    alt=''
                  />
                  <div className='pl-3'>
                    <div className='text-sm font-thin'>{employee.fullName}</div>
                    <div className='font-normal text-gray-500'>{employee.email}</div>
                  </div>
                </th>
                <td className='py-4 px-6 capitalize'>
                  <p className='text-sm'>{employee.role}</p>
                  <p>{employee.department}</p>
                </td>
                <td className='py-4 px-6'>
                  <div className='flex items-center text-sm'>
                    {new Date(employee.joiningDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                </td>
                <td className='py-4 px-6 text-sm'>{employee.presentAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
