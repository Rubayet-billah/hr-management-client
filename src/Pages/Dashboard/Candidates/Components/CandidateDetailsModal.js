import { Button, Modal } from 'flowbite-react';
import React from 'react';

const CandidateDetailsModal = ({
    viewCandidateDetails,
    candidateDetailsModalVisibility,
    setCandidateDetailsModalVisibility
}) => {
    const { name } = viewCandidateDetails

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
                        {name}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onClick}>
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