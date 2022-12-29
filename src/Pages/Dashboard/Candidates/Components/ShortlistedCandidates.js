import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import DeleteModal from '../../../../components/Modals/DeleteModal';
import ShortlistedCandidateRow from './ShortlistedCandidateRow';

const ShortlistedCandidates = ({ shortlistedCandidates, shorlistedRefetch }) => {
    const [deleteCandidate, setDeleteCandidate] = useState({})
    const [deleteModalVisibility, setDeleteModalVisibility] = useState(false)

    const handleDelete = () => {
        fetch(`http://localhost:5000/shortlistedCandidate/${deleteCandidate._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDeleteModalVisibility(false)
                    shorlistedRefetch()
                    toast.success('delete')
                }
            })
    }

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
                        Experience (y)
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Expected Salary
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Actions
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        shortlistedCandidates?.map(shortlistedCandidate => <ShortlistedCandidateRow
                            key={shortlistedCandidate._id}
                            shortlistedCandidate={shortlistedCandidate}
                            setDeleteModalVisibility={setDeleteModalVisibility}
                            setDeleteCandidate={setDeleteCandidate}
                        />)
                    }


                </Table.Body>
            </Table>
            <DeleteModal
                setDeleteModalVisibility={setDeleteModalVisibility}
                deleteModalVisibility={deleteModalVisibility}
                handleDelete={handleDelete}
                deleteItemName={deleteCandidate.name}
            />
        </div>
    );
};

export default ShortlistedCandidates;