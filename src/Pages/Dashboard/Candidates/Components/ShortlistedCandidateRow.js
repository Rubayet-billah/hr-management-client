import { Button, Table } from 'flowbite-react';
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
            {/* <Table.Cell>
                {shortlistedCandidate.experience}
            </Table.Cell> */}
            <Table.Cell>
                ${shortlistedCandidate.expectedSalary}
            </Table.Cell>
            <Table.Cell>
                <Button>Call for Interview</Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default ShortlistedCandidateRow;