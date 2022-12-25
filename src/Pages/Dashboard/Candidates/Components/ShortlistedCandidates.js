import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React from 'react';
import ShortlistedCandidateRow from './ShortlistedCandidateRow';

const ShortlistedCandidates = () => {
    const { data: shortlistedCandidate = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/shortlistedCandidate');
            const data = await res.json();
            console.log(data)
            return data
        }
    })
    return (
        <div>
            <Table striped={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Applicant's Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Designation
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Address
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Phone
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Experience (y)
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Expected Salary
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        shortlistedCandidate?.map(candidate => <ShortlistedCandidateRow
                            key={candidate._id}
                            shortlistedCandidate={candidate}
                        />)
                    }


                </Table.Body>
            </Table>
        </div>
    );
};

export default ShortlistedCandidates;