import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import hintImg from "../../assets/icons/hints.jpg";

const HintsModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const openHintsModal = () => {
    setTimeout(() => {
      setOpenModal(true);
    }, 2000);
  };

  const closeHintsModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    // Check if the user has seen the modal before (using a cookie or local storage)
    const hasSeenModal = localStorage.getItem("hasSeenModal");

    if (!hasSeenModal) {
      // If the user hasn't seen the modal, show it
      openHintsModal();
    }
  }, []);

  const handleGotItClick = () => {
    // Set a flag in local storage to indicate that the user has seen the modal
    localStorage.setItem("hasSeenModal", "true");
    closeHintsModal();
  };

  return (
    <>
      {/* The modal will automatically open on the first visit */}
      {/* Define the Hints Modal */}
      <Modal
        show={openModal}
        position="top-right" // Set the position to top-right
        onClose={closeHintsModal}
      >
        <Modal.Header>For A Better Experience</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 md:flex md:gap-8">
            <div className="max-w-[120px] mx-auto">
              <img src={hintImg} alt="Problem Solution Icon" />
            </div>
            <div>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Welcome to Staff deck! To get the most out of your experience,
                consider <span className="font-bold">Login</span> to access
                personalized features and data.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleGotItClick}>Got it</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HintsModal;
