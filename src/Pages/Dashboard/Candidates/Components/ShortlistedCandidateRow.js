import { Table } from 'flowbite-react';
import React, { useState } from 'react';
import { FiDelete } from 'react-icons/fi';
import { FaEnvelope } from 'react-icons/fa';

const ShortlistedCandidateRow = ({ shortlistedCandidate, setDeleteModalVisibility, setDeleteCandidate }) => {


    return (
        <Table.Row
            onClick={() => {
                // setCandidateDetailsModalVisibility(true);
                // setViewCandidateDetails(candidate);
            }}
            className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src={shortlistedCandidate.image} alt="Rounded avatar" /> */}
                <span className='text-base font-semibold'>{shortlistedCandidate.name}</span>
                <p className='text-gray-400'>{shortlistedCandidate.email}</p>
            </Table.Cell>
            <Table.Cell>
                {shortlistedCandidate.designation}
            </Table.Cell>
            <Table.Cell>
                {shortlistedCandidate.address}
            </Table.Cell>
            <Table.Cell>
                {shortlistedCandidate.phone}
            </Table.Cell>
            <Table.Cell>
                {shortlistedCandidate.experience}
            </Table.Cell>
            <Table.Cell>
                ${shortlistedCandidate.expectedSalary}
            </Table.Cell>
            <Table.Cell>
                <button onClick={() => { }} className='text-lg mr-3'>
                    <a href={`mailto:${shortlistedCandidate.email}`}><FaEnvelope /></a>
                </button>
                <button onClick={() => {
                    setDeleteCandidate(shortlistedCandidate);
                    setDeleteModalVisibility(true);
                }} className='text-lg text-red-600'>
                    <FiDelete />
                </button>
            </Table.Cell>
        </Table.Row>
    );
};

export default ShortlistedCandidateRow;