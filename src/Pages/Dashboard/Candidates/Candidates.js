import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useUtils } from '../../../contexts/UtilsProvider';
import CandidateDetailsModal from './Components/CandidateDetailsModal';
import CandidateRow from './Components/CandidateRow';
import CandidateStatistics from './Components/CandidateStatistics';
import ShortlistedCandidates from './Components/ShortlistedCandidates';

const Candidates = () => {
    const { data: candidates = [], refetch } = useQuery({
        queryKey: ['candidates'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/candidates');
            const data = await res.json();
            return data
        }
    })

    const { data: shortlistedCandidates = [], refetch: shorlistedRefetch } = useQuery({
        queryKey: ['shortlistedCandidate'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/shortlistedCandidate');
            const data = await res.json();
            return data
        }
    })

    console.log('shortlisted', shortlistedCandidates)
    console.log('candidates', candidates)

    // To use tab toggle state
    const [showShortlistedCandidate, setShowShortlistedCandidates] = useState(false)
    // to set the quantity of all shortlisted candidate
    // const [shortlistedCandidates, setShortlistedCandidate] = useState([])

    const [candidateDetailsModalVisibility, setCandidateDetailsModalVisibility] = useState(false)
    const [viewCandidateDetails, setViewCandidateDetails] = useState({})

    // Change title
    const { setDashboardTitle } = useUtils();
    setDashboardTitle("Candidates");

    return (
        <div>
            <section>
                <CandidateStatistics
                    candidates={candidates}
                    shortlistedCandidates={shortlistedCandidates}
                    showShortlistedCandidate={showShortlistedCandidate}
                    setShowShortlistedCandidates={setShowShortlistedCandidates}
                    refetch={refetch}
                    shorlistedRefetch={shorlistedRefetch}
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
            </Table> : <ShortlistedCandidates shortlistedCandidates={shortlistedCandidates} />
            }


            <CandidateDetailsModal
                viewCandidateDetails={viewCandidateDetails}
                candidateDetailsModalVisibility={candidateDetailsModalVisibility}
                setCandidateDetailsModalVisibility={setCandidateDetailsModalVisibility}
                refetch={refetch}
                shorlistedRefetch={shorlistedRefetch}
            />
            <Toaster></Toaster>
        </div>
    );
};

export default Candidates;