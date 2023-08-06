import React from 'react';
import charts_dashboard from "../../../assets/screenshots/charts_dashboard.PNG"
import authorization from "../../../assets/screenshots/authorization.PNG"
import employee_management from "../../../assets/screenshots/employee_management.PNG"
import event from "../../../assets/screenshots/event.PNG"
import job_portal from "../../../assets/screenshots/job_portal.PNG"
import payroll from "../../../assets/screenshots/payroll.PNG"
import settings from "../../../assets/screenshots/settings.PNG"

const Services = () => {
    return (
        <section className='container mx-auto px-5 md:px-0 py-12'>
            <div className='text-center mb-6'>
                <h2 className='text-4xl font-bold text-gray-800 mb-1'>Services</h2>
                <p className='text-gray-600'>Learn what you will get.</p>
            </div>

            <div className='grid grid-cols-2 items-center p-3 mb-10 md:mb-0 md:p-10 gap-5 md:gap-16'>
                <div>
                    <h3 className='text-xl md:text-3xl font-bold mb-4'>Dashboard Charts</h3>
                    <p className='text-xs md:text-base text-gray-500'>Real-time data insights, track company growth, evaluate statistics & performance effortlessly.</p>
                </div>
                <img className='w-full border' src={charts_dashboard} alt="" />
            </div>
            <div className='grid grid-cols-2 items-center p-3 mb-10 md:mb-0 md:p-10 gap-5 md:gap-16'>
                <img className='w-full border' src={employee_management} alt="" />
                <div>
                    <h3 className='text-xl md:text-3xl font-bold mb-4'>Employee Management</h3>
                    <p className='text-xs md:text-base text-gray-500'>Simplify HR tasks, streamline data, and boost productivity with seamless employee administration.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 items-center p-3 mb-10 md:mb-0 md:p-10 gap-5 md:gap-16'>
                <div>
                    <h3 className='text-xl md:text-3xl font-bold mb-4'>Job Portal</h3>
                    <p className='text-xs md:text-base text-gray-500'>Find the best talent quickly, manage hiring efficiently, and build your dream team effortlessly.</p>
                </div>
                <img className='w-full border' src={job_portal} alt="" />
            </div>
            <div className='grid grid-cols-2 items-center p-3 mb-10 md:mb-0 md:p-10 gap-5 md:gap-16'>
                <img className='w-full border' src={event} alt="" />
                <div>
                    <h3 className='text-xl md:text-3xl font-bold mb-4'>Event Management</h3>
                    <p className='text-xs md:text-base text-gray-500'>Plan, organize & execute successful events flawlessly, and keep track of every detail with ease.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 items-center p-3 mb-10 md:mb-0 md:p-10 gap-5 md:gap-16'>
                <div>
                    <h3 className='text-xl md:text-3xl font-bold mb-4'>Authorization</h3>
                    <p className='text-xs md:text-base text-gray-500'>Ensure top-notch security with admin authorization controls, protecting sensitive app data.</p>
                </div>
                <img className='w-full border' src={authorization} alt="" />
            </div>
            <div className='grid grid-cols-2 items-center p-3 mb-10 md:mb-0 md:p-10 gap-5 md:gap-16'>
                <img className='w-full border' src={payroll} alt="" />
                <div>
                    <h3 className='text-xl md:text-3xl font-bold mb-4'>Payroll System</h3>
                    <p className='text-xs md:text-base text-gray-500'>Automate payroll processing, calculate salaries accurately, and ensure timely payments for employees.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 items-center p-3 mb-10 md:mb-0 md:p-10 gap-5 md:gap-16'>
                <div>
                    <h3 className='text-xl md:text-3xl font-bold mb-4'>Settings</h3>
                    <p className='text-xs md:text-base text-gray-500'>Personalize app preferences to match your unique requirements, making the app truly yours.</p>
                </div>
                <img className='w-full border' src={settings} alt="" />
            </div>
        </section>
    );
};

export default Services;