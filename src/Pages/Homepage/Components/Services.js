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
        <section className='container mx-auto px-2 py-12'>
            <div className='grid grid-cols-2 items-center p-10 gap-16'>
                <div>
                    <h3 className='text-3xl font-bold mb-4'>Services One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis, eius quos temporibus veritatis ex officiis possimus consequatur placeat vel!</p>
                </div>
                <img className='w-full border' src={charts_dashboard} alt="" />
            </div>
            <div className='grid grid-cols-2 items-center p-10 gap-16'>
                <img className='w-full border' src={authorization} alt="" />
                <div>
                    <h3 className='text-3xl font-bold mb-4'>Services One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis, eius quos temporibus veritatis ex officiis possimus consequatur placeat vel!</p>
                </div>
            </div>
            <div className='grid grid-cols-2 items-center p-10 gap-16'>
                <div>
                    <h3 className='text-3xl font-bold mb-4'>Services One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis, eius quos temporibus veritatis ex officiis possimus consequatur placeat vel!</p>
                </div>
                <img className='w-full border' src={employee_management} alt="" />
            </div>
            <div className='grid grid-cols-2 items-center p-10 gap-16'>
                <img className='w-full border' src={event} alt="" />
                <div>
                    <h3 className='text-3xl font-bold mb-4'>Services One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis, eius quos temporibus veritatis ex officiis possimus consequatur placeat vel!</p>
                </div>
            </div>
            <div className='grid grid-cols-2 items-center p-10 gap-16'>
                <div>
                    <h3 className='text-3xl font-bold mb-4'>Services One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis, eius quos temporibus veritatis ex officiis possimus consequatur placeat vel!</p>
                </div>
                <img className='w-full border' src={job_portal} alt="" />
            </div>
            <div className='grid grid-cols-2 items-center p-10 gap-16'>
                <img className='w-full border' src={payroll} alt="" />
                <div>
                    <h3 className='text-3xl font-bold mb-4'>Services One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis, eius quos temporibus veritatis ex officiis possimus consequatur placeat vel!</p>
                </div>
            </div>
            <div className='grid grid-cols-2 items-center p-10 gap-16'>
                <div>
                    <h3 className='text-3xl font-bold mb-4'>Services One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis, eius quos temporibus veritatis ex officiis possimus consequatur placeat vel!</p>
                </div>
                <img className='w-full border' src={settings} alt="" />
            </div>
        </section>
    );
};

export default Services;