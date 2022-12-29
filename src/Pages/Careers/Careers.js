import { Button } from 'flowbite-react';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const jobs = [
  {
    _id: '2187',
    title: 'Back End Developer',
    salary: '4,000-10,000 /month',
    Description: `
            Backend Engineer | Europe | Fully Remote
            <br />
            <br />
            Plexus are working with a data focused Web3 observation platform that allows you to monitor your dAPP’s performance, data and smart contracts. They are securing funding early Q1 2023 and looking to build out their development team.
            <br />
            <br />
            Requirements:
            <br />
            – Proficiency with Node.js/Python + (Go & Rust interest is a bonus) – AWS Services<br />
            – Cloud products development<br />
            – Developed event driven architectures<br />
            <br />
            Responsibilities:
            <br />
            – Manage and develop data pipelines<br />
            – Design and deliver microservices<br />
            – Problem solving using observability tools<br />
            <br />
            Bonus:
            <br />
            – Knowledge of EVM based chains<br />
            – Experience with Elasticsearch Clusters<br />
            – Kafka<br />
            – On-Chain Data<br />
            <br />
            Benefits:
            <br />
            – Remote work<br />
            – Flexible working hours<br />
            – Team travel to conferences<br />
            – Team events/retreats<br />
            – Base Salary + Equity<br />
            <br />
            If you are interested or know someone who may be, please reach out with an updated CV
        `,
  },
  {
    _id: '2193',
    title: 'Senior Frontend Engineer',
    salary: '10,000-30,000 /month',
    Description: `
            Senior Frontend Engineer (Web3) – Fully Remote – Perm
            <br />
            <br />
            Plexus have recently partnered with an NFT analytics firm that are revolutionizing NFT analysis. Their on-chain products are providing much-needed market insights for NFT holders.
            <br />
            <br />
            They’re looking for a Senior Frontend Engineer to join the team:
            <br />
            – 3+ years’ frontend experience<br />
            – Start-up experience<br />
            – Experience building out react applications<br />
            – React, Next, Redux, Typescript, Styled Components<br />
            – Ethers.js/web3js experience<br />
            – Experience building scalable applications<br />
            – This role is open to web3-native candidates or web2 engineers with a passion for the space.<br />
            <br />
            This is a remote role open to US candidates, offering up to $170k + equity. Apply today to find out more!
        `,
  },
  {
    _id: '2199',
    title: 'MERN Developer',
    salary: '12,000-25,000 /month',
    Description: `
            MERN Developer (Web3) – Fully Remote – Perm
            <br />
            <br />
            Plexus have recently partnered with an NFT analytics firm that are revolutionizing NFT analysis. Their on-chain products are providing much-needed market insights for NFT holders.
            <br />
            <br />
            They’re looking for a MERN Developer to join the team:
            <br />
            – 3+ years’ frontend experience<br />
            – Start-up experience<br />
            – Experience building out react applications<br />
            – React, Next, Redux, Typescript, Styled Components<br />
            – Ethers.js/web3js experience<br />
            – Experience building scalable applications<br />
            – This role is open to web3-native candidates or web2 engineers with a passion for the space.<br />
            <br />
            This is a remote role open to US candidates, offering up to $170k + equity. Apply today to find out more!
        `,
  },
];

const Careers = () => {
  return (
    <section className='container mx-auto px-2 pt-10 pb-20'>
      <h1 className='text-3xl font-thin mb-10 bg-blue-100 p-5 rounded-lg'>Our openings</h1>
      <div className='grid lg:grid-cols-2 gap-8'>
        {jobs.map((job) => (
          <div key={job._id} className='bg-gray-200 p-5 rounded-lg relative'>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-xl font-bold'>{job.title}</h2>
                <p className='flex items-center gap-1'>
                  <AiFillHome className='w-5 h-5 text-gray-500' /> Work From Home
                </p>
              </div>
              <div className='mt-2'>
                <p className='font-medium'>STIPEND</p>
                <p>{job.salary}</p>
              </div>
            </div>
            <div className='mt-4'>
              <p className='font-medium'>START DATE</p>
              <p>Immediately</p>
            </div>
            <div className='absolute bottom-0 right-0 m-5'>
              <Link to={`/career`} state={{ job }} replace={true}>
                <Button color='light'>View Details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Careers;
