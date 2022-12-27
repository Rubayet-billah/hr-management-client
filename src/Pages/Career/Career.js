import { Select, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
const Career = () => {
    const { register, handleSubmit } = useForm();
    const handleApplierForm = (data) => {
        fetch('http://localhost:5000/candidates', {
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
        <div>
            <div className='col-span-12 lg:col-span-8 my-12'>
                <div className='bg-white rounded shadow p-5 mb-5'>
                    <p className='text-primary text-center text-3xl font-semibold mb-4'>Job Application  Form</p>
                    <form
                        onSubmit={handleSubmit(handleApplierForm)}
                        className="flex flex-col gap-4">

                        <div className='grid lg:grid-cols-2 gap-2'>
                            <div>
                                <label className="text-bold" htmlFor="">Full Name</label>
                                <TextInput
                                    id="Name"
                                    {...register("name", { required: true })}
                                    type="text"
                                    placeholder="fullName"
                                    sizing="sm"
                                />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="text-bold" htmlFor="email">Email</label>
                                <TextInput id='email'
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="Email"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="phoneNumber">Phone</label>
                                <TextInput
                                    id='phoneNumber'
                                    {...register("phone", { required: true })}
                                    type="number"
                                    placeholder="Phone Number"
                                    sizing="sm"
                                />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="text-bold" htmlFor="address">Address</label>
                                <TextInput id='address'
                                    {...register("address", { required: true })}
                                    type="text"
                                    placeholder="Address"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="applyDate">ApplyDate</label>
                                <TextInput id='applyDate'
                                    {...register("applyDate", { required: true })}
                                    type="date"
                                    placeholder="applyDate"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="apply-for">What position are you applying for?</label>
                                <Select
                                    id='apply-for'
                                    {...register("designation", { required: true })}
                                    sizing="sm"
                                >
                                    <option>
                                        Select position
                                    </option>
                                    <option>
                                        Frontend Developer
                                    </option>
                                    <option>
                                        Backend Developer
                                    </option>
                                    <option>
                                        FullStack Developer
                                    </option>
                                    <option>
                                        Web Designer
                                    </option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="Job-type">Job Type </label>
                                <Select
                                    id='Job-type'
                                    {...register("jobType", { required: true })}
                                    sizing="sm"
                                >
                                    <option>
                                        Job Type
                                    </option>
                                    <option>
                                        Full Time
                                    </option>
                                    <option>
                                        Part Time
                                    </option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="experience">Experience</label>
                                <TextInput
                                    id='experience'
                                    {...register("experience", { required: true })}
                                    type="number"
                                    placeholder="Experience"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="expectedSalary">Expected Salary</label>
                                <TextInput
                                    id='expectedSalary'
                                    {...register("expectedSalary", { required: true })}
                                    type="number"
                                    placeholder="expectedSalary"
                                    sizing="sm"
                                />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="text-bold" htmlFor="linkedIn">LinkedIn</label>
                                <TextInput
                                    id='linkedIn'
                                    {...register("linkedIn", { required: true })}
                                    type="text"
                                    placeholder="linkedIn Account Link"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="gitHub">GitHub</label>
                                <TextInput
                                    id='gitHub'
                                    {...register("gitHub", { required: true })}
                                    type="text"
                                    placeholder="GitHub Account Link"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="portfolio">Portfolio</label>
                                <TextInput
                                    id='portfolio'
                                    {...register("portfolio")}
                                    type="text"
                                    placeholder="Portfolio Link"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label className="text-bold" htmlFor="resumeUrl">ResumeUrl</label>
                                <TextInput
                                    id='resumeUrl'
                                    {...register("resumeUrl", { required: true })}
                                    type="text"
                                    placeholder="resumeUrl Link"
                                    sizing="sm"
                                />
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='my-4'>
                                <h1>Why should we hire you?</h1>
                                <Textarea
                                    {...register("hiringReason")}
                                    placeholder="Add a Node..."
                                    rows={4}
                                    className="text-xs"
                                />
                            </div>
                            <div>
                                <h1>CoverLetter</h1>
                                <Textarea
                                    {...register("coverLetter", { required: true })}
                                    placeholder="Add a Cover Letter..."
                                    required={true}
                                    rows={4}
                                    className="text-xs"
                                />
                            </div>
                        </div>
                        <button type='submit' className='flex w-fit items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                            Apply
                        </button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Career;