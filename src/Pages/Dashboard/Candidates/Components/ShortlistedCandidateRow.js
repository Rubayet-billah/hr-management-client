import { Table } from 'flowbite-react';
import React from 'react';

const ShortlistedCandidateRow = ({ shortlistedCandidate }) => {
    return (
        <Table.Row
            onClick={() => {
                // setCandidateDetailsModalVisibility(true);
                // setViewCandidateDetails(candidate);
            }}
            className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className='flex items-center'>
                    <img className="w-10 h-10 rounded-full" src={shortlistedCandidate.image} alt="Rounded avatar" />
                    <span className='ml-2'>{shortlistedCandidate.name}</span>
                </div>
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
        </Table.Row>
    );
};

export default ShortlistedCandidateRow;