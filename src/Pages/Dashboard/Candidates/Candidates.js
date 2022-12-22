import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import CandidateDetailsModal from './Components/CandidateDetailsModal';
import CandidateRow from './Components/CandidateRow';

const Candidates = () => {
    const [candidates, setCandidates] = useState([]);
    const [candidateDetailsModalVisibility, setCandidateDetailsModalVisibility] = useState(false)
    console.log(candidateDetailsModalVisibility)


    useEffect(() => {
        fetch('/candidates.json')
            .then(res => res.json())
            .then(data => {
                setCandidates(data)
            })
    }, [])
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
                        Expected Salary
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Experience (y)
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        candidates?.map(candidate => <CandidateRow candidate={candidate}
                            setCandidateDetailsModalVisibility={setCandidateDetailsModalVisibility}
                        ></CandidateRow>)
                    }


                </Table.Body>
            </Table>

            <CandidateDetailsModal
                candidateDetailsModalVisibility={candidateDetailsModalVisibility}
                setCandidateDetailsModalVisibility={setCandidateDetailsModalVisibility}
            />
        </div>
    );
};

export default Candidates;