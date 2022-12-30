import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import DeleteModal from '../../../components/Modals/DeleteModal';
import Spinner from '../../../components/Spinner';
import { useUtils } from '../../../contexts/UtilsProvider';
import CandidateDetailsModal from './Components/CandidateDetailsModal';
import CandidateRow from './Components/CandidateRow';
import CandidateStatistics from './Components/CandidateStatistics';
import ShortlistedCandidates from './Components/ShortlistedCandidates';

const Candidates = () => {
    const { data: candidates = [], refetch, isLoading: candidatesLoading } = useQuery({
        queryKey: ['candidates'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/candidates');
            const data = await res.json();
            return data
        }
    })

    const { data: shortlistedCandidates = [], refetch: shorlistedRefetch, isLoading: shortlistedLoading } = useQuery({
        queryKey: ['shortlistedCandidate'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/shortlistedCandidate');
            const data = await res.json();
            return data
        }
    })

    // Change title
    const { setDashboardTitle } = useUtils();
    setDashboardTitle("Candidates");

    // To use tab toggle state
    const [showShortlistedCandidate, setShowShortlistedCandidates] = useState(false)
    // View candidate modal states
    const [candidateDetailsModalVisibility, setCandidateDetailsModalVisibility] = useState(false)
    const [viewCandidateDetails, setViewCandidateDetails] = useState({})
    // Delete candidate modal states
    const [deleteModalVisibility, setDeleteModalVisibility] = useState(false)
    const [deleteCandidate, setDeleteCandidate] = useState({})

    const handleCandidateDelete = () => {
        fetch(`http://localhost:5000/candidates/${deleteCandidate._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${deleteCandidate.name} deleted successfully.`)
                    setCandidateDetailsModalVisibility(false)
                    setDeleteModalVisibility(false)
                    refetch();
                }
            })
    }

    if (candidatesLoading || shortlistedLoading) {
        return <Spinner />
    }

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
                        Skills
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
            </Table> : <ShortlistedCandidates
                shortlistedCandidates={shortlistedCandidates}
                shorlistedRefetch={shorlistedRefetch}
            />
            }

            <DeleteModal
                deleteModalVisibility={deleteModalVisibility}
                setDeleteModalVisibility={setDeleteModalVisibility}
                handleDelete={handleCandidateDelete}
                deleteItemName={deleteCandidate.name}

            />

            <CandidateDetailsModal
                viewCandidateDetails={viewCandidateDetails}
                candidateDetailsModalVisibility={candidateDetailsModalVisibility}
                setCandidateDetailsModalVisibility={setCandidateDetailsModalVisibility}
                refetch={refetch}
                shorlistedRefetch={shorlistedRefetch}
                setDeleteCandidate={setDeleteCandidate}
                setDeleteModalVisibility={setDeleteModalVisibility}
            />
            <Toaster></Toaster>
        </div>
    );
};

export default Candidates;