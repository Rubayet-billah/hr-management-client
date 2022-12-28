import { Button, Card, Modal } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const CandidateDetailsModal = ({
    viewCandidateDetails,
    candidateDetailsModalVisibility,
    setCandidateDetailsModalVisibility,
    refetch,
    shorlistedRefetch
}) => {
    const { name, image, phone, email, designation, address, expectedSalary, coverLetter, experience, resumeUrl } = viewCandidateDetails;

    const defaultImg = "https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?s=170667a&w=0&k=20&c=pbUvoKhdnGQ8IdDFqHYRm-m5zf51Ta6QUHERf9EU5FU=";

    const handleShortList = (shortListedCandidate) => {
        fetch('http://localhost:5000/shortlistedCandidate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(shortListedCandidate)
        }).then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    setCandidateDetailsModalVisibility(false)
                    toast.success(`${shortListedCandidate.name} Shortlisted Successfully`)
                    refetch();
                    shorlistedRefetch();
                }
            })
    }
    const onClick = () => {

    };
    return (
        <div>
            <React.Fragment>
                <Modal
                    show={candidateDetailsModalVisibility}
                    onClose={() => setCandidateDetailsModalVisibility(false)}
                >
                    <Modal.Header>
                        Applicant Information
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                <div className="">
                                    <Card className='border-0 shadow-none'>
                                        <div className="flex flex-col items-center pb-10">
                                            <img
                                                className="mb-3 h-48 w-48 rounded-full shadow-lg"
                                                src={image ? image : defaultImg}
                                                alt="applicant"
                                            />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                                {name}
                                            </h5>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {designation}
                                            </span>
                                            <div className="my-4 grid md:grid-cols-2 gap-x-5 gap-y-3 lg:mt-6 w-full">
                                                <p>Email: {email}</p>
                                                <p>Phone: {phone}</p>
                                                <p>Address: {address}</p>
                                                <p>Experience: {experience}+ years</p>
                                                <p className='md:col-span-2'>Cover Letter: {coverLetter}</p>

                                            </div>
                                            <a href={resumeUrl} target='_blank' rel="noreferrer">
                                                <Button>View Resume</Button>
                                            </a>
                                        </div>
                                    </Card>
                                </div>
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => handleShortList(viewCandidateDetails)}>
                            Shortlist
                        </Button>
                        <Button
                            color="gray"
                            onClick={onClick}
                        >
                            Decline
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        </div>
    );
};

export default CandidateDetailsModal;