import { Select, TextInput } from 'flowbite-react';
import React from 'react';
import Btn from '../../components/Btn';
import { useForm } from 'react-hook-form';
const Career = () => {
    const { register, handleSubmit } = useForm();

    const handleApplierForm = (data) => {
        console.log(data)
    }



    return (
        <div>
            <div className='col-span-12 lg:col-span-8 my-12'>
                <div className='bg-white rounded shadow p-5 mb-5'>
                    <p className='text-primary text-sm mb-4'>GENERAL SETTINGS</p>
                    <form
                        onSubmit={handleSubmit(handleApplierForm)}
                        className="flex flex-col gap-4">

                        <div className='grid lg:grid-cols-2 gap-2'>
                            <div>
                                <label htmlFor=""> full Name</label>
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
                                <label htmlFor="email">Email</label>
                                <TextInput id='email'
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="Email"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber">Phone</label>
                                <TextInput
                                    id='phoneNumber'
                                    {...register("phone", { required: true })}
                                    type="number"
                                    placeholder="Phone Number"
                                    sizing="sm"
                                />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-3 gap-4'>
                            <div>
                                <label htmlFor="apply-for">What position are you applying for?</label>
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
                                <label htmlFor="Job-type">Job Type </label>
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
                                <label htmlFor="experience">Experience</label>
                                <TextInput
                                    id='experience'
                                    {...register("experience", { required: true })}
                                    type="number"
                                    placeholder="Experience"
                                    sizing="sm"
                                />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="linkedIn">LinkedIn</label>
                                <TextInput
                                    id='linkedIn'
                                    {...register("linkedIn", { required: true })}
                                    type="text"
                                    placeholder="linkedIn Account Link"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="gitHub">GitHub</label>
                                <TextInput
                                    id='gitHub'
                                    {...register("gitHub", { required: true })}
                                    type="text"
                                    placeholder="GitHub Account Link"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="portfolio">Portfolio</label>
                                <TextInput
                                    id='portfolio'
                                    {...register("portfolio")}
                                    type="text"
                                    placeholder="Portfolio Link"
                                    sizing="sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="resumeUrl">ResumeUrl</label>
                                <TextInput
                                    id='resumeUrl'
                                    {...register("resumeUrl", { required: true })}
                                    type="text"
                                    placeholder="resumeUrl Link"
                                    sizing="sm"
                                />
                            </div>
                        </div>


                        <Btn type='submit' className="w-fit px-4" color="blue">Update</Btn>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Career;