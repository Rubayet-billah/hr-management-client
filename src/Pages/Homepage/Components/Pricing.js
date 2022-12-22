import { Button } from 'flowbite-react';
import { BsCheckCircleFill } from 'react-icons/bs';

const Pricing = () => {
  return (
    <div className='container mx-auto px-2 py-12'>
      <h3 className='text-center text-3xl font-bold'>Our Pricing Plans</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-12'>
        <div className='shadow-lg bg-gray-100 p-10'>
          <div className=''>
            <h4 className='text-xl font-medium'>Startup</h4>
            <p className='text-3xl font-bold mt-6'>
              $49<span className='text-sm font-normal'>/month</span>
            </p>
          </div>

          <ul className='mt-8 text-center space-y-2'>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-blue-700' /> Admin Dashboard
            </li>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-blue-700' /> New Employee Hiring
            </li>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-gray-700' /> Event Management
            </li>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-gray-700' /> Department Management
            </li>
          </ul>

          <Button className='mt-8 w-full rounded-sm'>Get Started</Button>
        </div>
        <div className='shadow-lg bg-gray-100 p-10'>
          <div className=''>
            <h4 className='text-xl font-medium'>Standard</h4>
            <p className='text-3xl font-bold mt-6'>
              $79<span className='text-sm font-normal'>/month</span>
            </p>
          </div>

          <ul className='mt-8 text-center space-y-2'>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-blue-700' /> Admin Dashboard
            </li>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-blue-700' /> New Employee Hiring
            </li>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-blue-700' /> Event Management
            </li>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-gray-700' /> Department Management
            </li>
          </ul>

          <Button className='mt-8 w-full rounded-sm'>Get Started</Button>
        </div>
        <div className='shadow-lg bg-gray-100 p-10'>
          <div className=''>
            <h4 className='text-xl font-medium'>Enterprise</h4>
            <p className='text-3xl font-bold mt-6'>
              $99<span className='text-sm font-normal'>/month</span>
            </p>
          </div>

          <ul className='mt-8 text-center space-y-2'>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-blue-700' /> Admin Dashboard
            </li>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-blue-700' /> New Employee Hiring
            </li>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-blue-700' /> Event Management
            </li>
            <li className='flex items-center gap-2'>
              <BsCheckCircleFill className='text-blue-700' /> Department Management
            </li>
          </ul>

          <Button className='mt-8 w-full rounded-sm'>Get Started</Button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;