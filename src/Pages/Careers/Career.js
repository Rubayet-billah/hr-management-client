import { Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
const Career = () => {
    const location = useLocation();
    const job = location?.state?.job;

    const { register, handleSubmit } = useForm();
    const handleApplierForm = (data) => {
        fetch('https://hr-management-server.vercel.app/candidates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Apply successfully done')
                    console.log('Success:', data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        console.log('Success:', data);
    }

    return (
        <section>
            <div className='bg-gray-100 py-24'>
                <div className='container mx-auto px-2'>
                    <h1 className='text-3xl font-bold'>{job?.title}</h1>
                    <p className='text-lg mt-4'>{job?.salary}</p>
                </div>
            </div>
            <div className='container mx-auto px-2 py-12 grid grid-cols-1 lg:grid-cols-6 gap-12'>
                <div dangerouslySetInnerHTML={{ __html: job?.Description }} className='lg:col-span-4 text-lg' />
                <div className='lg:col-span-2'>
                    <p className='text-3xl font-semibold mb-4'>Apply for this role:</p>
                    <form onSubmit={handleSubmit(handleApplierForm)} className="flex flex-col gap-4">
                        <div className=''>
                            <label className="text-bold" htmlFor="">Full Name</label>
                            <TextInput
                                id="Name"
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Full Name"
                                style={{ borderRadius: '2px' }}
                            />
                        </div>
                        <div>
                            <label className="text-bold" htmlFor="email">Email</label>
                            <TextInput id='email'
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Email"
                                style={{ borderRadius: '2px' }}
                            />
                        </div>
                        <div>
                            <label className="text-bold" htmlFor="phoneNumber">Phone</label>
                            <TextInput
                                id='phoneNumber'
                                {...register("phone", { required: true })}
                                type="number"
                                placeholder="Phone Number"
                                style={{ borderRadius: '2px' }}
                            />
                        </div>
                        <div>
                            <label className="text-bold" htmlFor="experience">Experience</label>
                            <TextInput
                                id='experience'
                                {...register("experience", { required: true })}
                                type="number"
                                placeholder="Experience"
                                style={{ borderRadius: '2px' }}
                            />
                        </div>
                        <div>
                            <label className="text-bold" htmlFor="expectedSalary">Expected Salary</label>
                            <TextInput
                                id='expectedSalary'
                                {...register("expectedSalary", { required: true })}
                                type="number"
                                placeholder="Expected Salary"
                                style={{ borderRadius: '2px' }}
                            />
                        </div>
                        <div className='grid sm:grid-cols-2 gap-4'>
                            <div>
                                <label className="text-bold" htmlFor="linkedIn">LinkedIn</label>
                                <TextInput
                                    id='linkedIn'
                                    {...register("linkedIn", { required: true })}
                                    type="text"
                                    placeholder="LinkedIn Account Link"
                                    style={{ borderRadius: '2px' }}
                                />
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="gitHub">GitHub</label>
                                <TextInput
                                    id='gitHub'
                                    {...register("gitHub", { required: true })}
                                    type="text"
                                    placeholder="GitHub Account Link"
                                    style={{ borderRadius: '2px' }}
                                />
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="portfolio">Portfolio</label>
                                <TextInput
                                    id='portfolio'
                                    {...register("portfolio")}
                                    type="text"
                                    placeholder="Portfolio Link"
                                    style={{ borderRadius: '2px' }}
                                />
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="resumeUrl">ResumeUrl</label>
                                <TextInput
                                    id='resumeUrl'
                                    {...register("resumeUrl", { required: true })}
                                    type="text"
                                    placeholder="Resume Link"
                                    style={{ borderRadius: '2px' }}
                                />
                            </div>
                        </div>
                        <div>
                            <h1>Why should we hire you?</h1>
                            <Textarea
                                {...register("hiringReason")}
                                placeholder="Add a Node..."
                                rows={4}
                                style={{ borderRadius: '2px' }}
                            />
                        </div>
                        <div>
                            <h1>CoverLetter</h1>
                            <Textarea
                                {...register("coverLetter", { required: true })}
                                placeholder="Add a Cover Letter..."
                                required={true}
                                rows={4}
                                style={{ borderRadius: '2px' }}
                            />
                        </div>
                        <button type='submit' className='flex w-fit items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                            Apply
                        </button>
                    </form>
                </div>
            </div >
        </section >
    );
};

export default Career;