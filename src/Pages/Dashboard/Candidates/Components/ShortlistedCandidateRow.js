import { Table } from 'flowbite-react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEnvelope } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import defaultImg from '../../../../assets/icons/userImg.jpg';

const ShortlistedCandidateRow = ({ shortlistedCandidate, setDeleteModalVisibility, setDeleteCandidate }) => {
  const [mailSend, setMailSend] = useState('');

  return (
    <Table.Row
      onClick={() => {
        // setCandidateDetailsModalVisibility(true);
        // setViewCandidateDetails(candidate);
      }}
      className='bg-white dark:border-gray-700 dark:bg-gray-800'
    >
      <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
        {/* <img className="w-10 h-10 rounded-full" src={shortlistedCandidate.image} alt="Rounded avatar" /> */}
        {/* <span className='text-base font-semibold'>{shortlistedCandidate.name}</span>
                <p className='text-gray-400'>{shortlistedCandidate.email}</p> */}
        <div className='flex items-center'>
          <img
            className='w-10 h-10 rounded-full'
            src={shortlistedCandidate?.image || defaultImg}
            alt='Rounded avatar'
          />
          <div className='ml-3'>
            <span className='text-base font-semibold'>{shortlistedCandidate.name}</span>
            <p className='text-gray-400'>{shortlistedCandidate.email}</p>
          </div>
        </div>
      </Table.Cell>
      <Table.Cell>{shortlistedCandidate.designation}</Table.Cell>
      <Table.Cell>{shortlistedCandidate.address}</Table.Cell>
      <Table.Cell>{shortlistedCandidate.experience}</Table.Cell>
      <Table.Cell>${shortlistedCandidate.expectedSalary}</Table.Cell>
      <Table.Cell>
        <button
          onClick={() => {
            setMailSend('text-green-500');
            toast.success('Email has been sent');
          }}
          className={`text-lg mr-3 ${mailSend}`}
        >
          <FaEnvelope />
        </button>
        <button
          onClick={() => {
            setDeleteCandidate(shortlistedCandidate);
            setDeleteModalVisibility(true);
          }}
          className='text-lg text-red-600'
        >
          <FiDelete />
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default ShortlistedCandidateRow;
