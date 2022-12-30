import { Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';

const Career = () => {
  const animatedComponents = makeAnimated();
  const skills = [
    { value: 'React', label: 'React' },
    { value: 'Redux', label: 'Redux' },
    { value: 'Node', label: 'Node' },
    { value: 'Express', label: 'Express' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Bootstrap', label: 'Bootstrap' },
    { value: 'TailwindCSS', label: 'TailwindCSS' },
    { value: 'Git', label: 'Git' },
    { value: 'GitHub', label: 'GitHub' },
  ];

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#F9FAFB',
      borderRadius: '0.125rem',
      paddingBlock: '0.125rem',
    }),
  };

  const location = useLocation();
  const job = location?.state?.job;
  const navigate = useNavigate();
  const { register, handleSubmit, control } = useForm();

  const handleApplierForm = (data) => {
    fetch('https://hr-management-server.vercel.app/candidates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, designation: job?.title }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Apply successfully done');
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <section>
      <div className='bg-gray-100'>
        <div className='container mx-auto px-2'>
          <div className='py-4 font-medium text-gray-600'>
            <Link to='/'>Home</Link> / <Link to='/careers'>Jobs</Link> / <span>{job?.title}</span>
          </div>
          <div className='py-16'>
            <h1 className='text-3xl font-bold'>{job?.title}</h1>
            <p className='text-lg mt-4'>{job?.salary}</p>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-2 py-12 grid grid-cols-1 lg:grid-cols-6 gap-12'>
        <div dangerouslySetInnerHTML={{ __html: job?.Description }} className='lg:col-span-4 text-lg' />
        <div className='lg:col-span-2'>
          <p className='text-3xl font-semibold mb-5 text-center'>Apply Now</p>
          <form onSubmit={handleSubmit(handleApplierForm)} className='flex flex-col gap-4'>
            <div className=''>
              <label className='text-bold' htmlFor=''>
                Full Name
              </label>
              <TextInput
                id='Name'
                {...register('name', { required: true })}
                type='text'
                placeholder='Full Name'
                style={{ borderRadius: '2px' }}
              />
            </div>
            <div>
              <label className='text-bold' htmlFor='email'>
                Email
              </label>
              <TextInput
                id='email'
                {...register('email', { required: true })}
                type='email'
                placeholder='Email'
                style={{ borderRadius: '2px' }}
              />
            </div>

            <div>
              <label className='text-bold' htmlFor='address'>
                Address
              </label>
              <TextInput
                id='address'
                {...register('address', { required: true })}
                type='text'
                placeholder='Your Address'
                style={{ borderRadius: '2px' }}
              />
            </div>

            <div>
              <label className='text-bold'>Skills</label>
              <Controller
                control={control}
                name='skills'
                render={({ field: { onChange, ref } }) => (
                  <ReactSelect
                    className='rounded-full'
                    components={animatedComponents}
                    inputRef={ref}
                    onChange={(val) => onChange(val.map((c) => c.value))}
                    options={skills}
                    isMulti
                    styles={colorStyles}
                  />
                )}
              />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div>
                <label className='text-bold' htmlFor='experience'>
                  Experience
                </label>
                <TextInput
                  id='experience'
                  {...register('experience', { required: true })}
                  type='number'
                  placeholder='Experience'
                  style={{ borderRadius: '2px' }}
                />
              </div>
              <div>
                <label className='text-bold' htmlFor='expectedSalary'>
                  Expected Salary
                </label>
                <TextInput
                  id='expectedSalary'
                  {...register('expectedSalary', { required: true })}
                  type='number'
                  placeholder='Amount'
                  style={{ borderRadius: '2px' }}
                />
              </div>
            </div>

            <div>
              <label className='text-bold' htmlFor='resumeUrl'>
                Resume Link
              </label>
              <TextInput
                id='resumeUrl'
                {...register('resumeUrl', { required: true })}
                type='text'
                placeholder='Resume Link'
                style={{ borderRadius: '2px' }}
              />
            </div>

            <div>
              <h1>Cover Letter</h1>
              <Textarea
                {...register('coverLetter', { required: true })}
                placeholder='Add a Cover Letter...'
                required={true}
                rows={4}
                style={{ borderRadius: '2px' }}
              />
            </div>
            <button
              type='submit'
              className='flex w-fit items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Apply
            </button>
          </form>
        </div>
      </div>

      <Toaster></Toaster>
    </section>
  );
};

export default Career;
