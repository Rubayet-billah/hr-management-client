import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React from 'react';
import ShortlistedCandidateRow from './ShortlistedCandidateRow';

const ShortlistedCandidates = ({ shortlistedCandidates }) => {

    // const { data: shortlistedCandidates = [], refetch: shorlistedRefetch } = useQuery({
    //     queryKey: [],
    //     queryFn: async () => {
    //         const res = await fetch('https://hr-management-server.vercel.app/shortlistedCandidate');
    //         const data = await res.json();
    //         console.log(data)
    //         setShortlistedCandidate(data)
    //         return data
    //     }
    // })


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
                        shortlistedCandidates?.map(shortlistedCandidate => <ShortlistedCandidateRow
                            key={shortlistedCandidate._id}
                            shortlistedCandidate={shortlistedCandidate}
                        />)
                    }


                </Table.Body>
            </Table>
        </div>
    );
};

export default ShortlistedCandidates;