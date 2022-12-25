import { Button } from 'flowbite-react';
import { BsCheckCircleFill } from 'react-icons/bs';

const Pricing = () => {
  return (
    <div className='container mx-auto px-2 py-12'>
      <div className='text-center'>
        <h3 className='text-4xl font-bold mb-1'>Our Pricing Plans</h3>
        <p className='capitalize'>Every plan starts with a 14-day free trail. No Credit card Require.</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12'>
        <div className='shadow-lg bg-gray-100 p-10 md:p-6 rounded-lg'>
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

          <Button fullSized className='mt-8 rounded-sm'>
            Get Started
          </Button>
        </div>
        <div className='shadow-lg bg-gray-100 p-10 md:p-6 rounded-lg'>
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
        <div className='shadow-lg bg-gray-100 p-10 md:p-6 rounded-lg'>
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
