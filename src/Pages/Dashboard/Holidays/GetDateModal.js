import { Button, Label, Modal, TextInput } from 'flowbite-react';

const GetDateModal = ({ viewModalVisibility, setViewModalVisibility, eventDate, refetch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target?.event?.value;

        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                date: eventDate
            })
        })
            .then(res => res.json())
            .then(data => {
                setViewModalVisibility(false);
                refetch();
            });
    }

    return (
        <Modal show={viewModalVisibility} onClose={() => setViewModalVisibility(false)}>
            <Modal.Header>Add an event</Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className='mb-2 block'>
                            <Label htmlFor='event' value='Event Name' />
                        </div>
                        <TextInput id='event' placeholder='Event Name' required={true} />
                    </div>
                    <div className='w-full mt-4'>
                        <Button type='submit'>Add Event</Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};
export default GetDateModal;
