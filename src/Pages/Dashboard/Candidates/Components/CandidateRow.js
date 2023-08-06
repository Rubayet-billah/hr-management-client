import { Table } from 'flowbite-react';
import React from 'react';
import defaultImg from '../../../../assets/icons/userImg.jpg'

const CandidateRow = ({
    candidate,
    setViewCandidateDetails,
    setCandidateDetailsModalVisibility,
}) => {

    return (
        <Table.Row
            onClick={() => {
                setCandidateDetailsModalVisibility(true);
                setViewCandidateDetails(candidate);
            }}
            className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer hover:bg-gray-100">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className='flex items-center'>
                    <img className="w-10 h-10 rounded-full" src={candidate?.image || defaultImg} alt="Rounded avatar" />
                    <div className='ml-3'>
                        <span className='text-base font-semibold'>{candidate.name}</span>
                        <p className='text-gray-400'>{candidate.email}</p>
                    </div>
                </div>
            </Table.Cell>
            <Table.Cell>
                {candidate.designation}
            </Table.Cell>
            <Table.Cell>
                {candidate.address}
            </Table.Cell>
            <Table.Cell>
                <div className='flex flex-wrap w-fit'>
                    {candidate?.skills?.slice(0, 3)?.map((skill, idx) => <span key={idx} className='p-1 bg-blue-400 text-white rounded-sm mr-1'>{skill} </span>)}
                </div>
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