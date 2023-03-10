import { Button, Card, Modal } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { AiFillTool } from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';
import { MdEmail, MdPhone } from 'react-icons/md';
import defaultImg from '../../../../assets/icons/userImg.jpg'


const CandidateDetailsModal = ({
    viewCandidateDetails,
    candidateDetailsModalVisibility,
    setCandidateDetailsModalVisibility,
    refetch,
    shorlistedRefetch,
    setDeleteCandidate,
    setDeleteModalVisibility
}) => {
    const { name, image, phone, email, designation, address, skills, coverLetter, experience, resumeUrl } = viewCandidateDetails;


    const handleShortList = (shortListedCandidate) => {
        fetch('https://hr-management-server.vercel.app/shortlistedCandidate', {
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
                                <div className="max-h-[70vh] overflow-y-scroll">
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
                                                <p className='flex items-center'><MdEmail className='mr-2 text-xl' /> {email}</p>
                                                <p className='flex items-center'><MdPhone className='mr-2 text-xl' /> {phone || '01784589564'}</p>
                                                <p className='flex items-center'><IoLocation className='mr-2 md:mr-1 text-xl md:-translate-x-[2px]' /> {address}</p>
                                                <p className='flex items-center'><AiFillTool className='mr-2 text-xl' /> {experience}+ years</p>
                                                <div className='md:col-span-2'><span className='font-medium'>Skills</span> <br />
                                                    <p className='grid grid-cols-1 md:grid-cols-3'>
                                                        {
                                                            skills?.map((skill, idx) => <li key={idx}>{skill}</li>)
                                                        }
                                                    </p>
                                                </div>
                                                <p className='md:col-span-2'><span className='font-medium'>Cover Letter</span> <br />{coverLetter}</p>

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
                            color="failure"
                            onClick={() => {
                                setDeleteCandidate(viewCandidateDetails)
                                setDeleteModalVisibility(true)
                            }
                            }
                        >
                            Decline
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        </div >
    );
};

export default CandidateDetailsModal;