import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import CandidateDetailsModal from './Components/CandidateDetailsModal';
import CandidateRow from './Components/CandidateRow';
import CandidateStatistics from './Components/CandidateStatistics';
import ShortlistedCandidates from './Components/ShortlistedCandidates';

const Candidates = () => {
    const { data: candidates = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/candidates');
            const data = await res.json();
            console.log(data)
            return data
        }
    })

    const [showShortlistedCandidate, setShowShortlistedCandidates] = useState(false)
    console.log(showShortlistedCandidate)

    const [candidateDetailsModalVisibility, setCandidateDetailsModalVisibility] = useState(false)
    const [viewCandidateDetails, setViewCandidateDetails] = useState({})

    return (
        <div>
            <section>
                <CandidateStatistics
                    candidates={candidates}
                    setShowShortlistedCandidates={setShowShortlistedCandidates}
                />
            </section>
            {!showShortlistedCandidate ? <Table striped={true}>
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
                        candidates?.map(candidate => <CandidateRow
                            key={candidate._id}
                            candidate={candidate}
                            setViewCandidateDetails={setViewCandidateDetails}
                            setCandidateDetailsModalVisibility={setCandidateDetailsModalVisibility}
                        ></CandidateRow>)
                    }


                </Table.Body>
            </Table> : <ShortlistedCandidates />
            }


            <CandidateDetailsModal
                viewCandidateDetails={viewCandidateDetails}
                candidateDetailsModalVisibility={candidateDetailsModalVisibility}
                setCandidateDetailsModalVisibility={setCandidateDetailsModalVisibility}
                refetch={refetch}
            />
            <Toaster></Toaster>
        </div>
    );
};

export default Candidates;