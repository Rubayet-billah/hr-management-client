import { Table } from 'flowbite-react';
import React from 'react';

const CandidateRow = ({ candidate, setViewCandidateDetails, setCandidateDetailsModalVisibility }) => {


    return (
        <Table.Row
            onClick={() => {
                setCandidateDetailsModalVisibility(true);
                setViewCandidateDetails(candidate);
            }}
            className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className='flex items-center'>
                    <img className="w-10 h-10 rounded-full" src={candidate.image} alt="Rounded avatar" />
                    <span className='ml-2'>{candidate.name}</span>
                </div>
            </Table.Cell>
            <Table.Cell>
                {candidate.designation}
            </Table.Cell>
            <Table.Cell>
                {candidate.address}
            </Table.Cell>
            <Table.Cell>
                {candidate.phone}
            </Table.Cell>
            <Table.Cell>
                {candidate.experience}
            </Table.Cell>
            <Table.Cell>
                ${candidate.expectedSalary}
            </Table.Cell>
        </Table.Row>
    );
};

export default CandidateRow;