import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
import GetDateModal from "./GetDateModal";
import { useQuery } from '@tanstack/react-query';
import DeleteModal from "../../../components/Modals/DeleteModal";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

export default function Calendar() {
    const { data: events = [], refetch } = useQuery({
        queryKey: ['events'],
        queryFn: () => fetch('http://localhost:5000/events')
            .then(res => res.json())
    })

    const [viewModalVisibility, setViewModalVisibility] = useState(false);
    const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
    const [eventDate, setEventDate] = useState(false);
    const [deleteEvent, setDeleteEvent] = useState(null);

    const handleDayClick = (info) => {
        setViewModalVisibility(true);
        setEventDate(info.dateStr);
    }

    const handleEventClick = (eventDate) => {
        setDeleteModalVisibility(true);
        setDeleteEvent({
            _id: eventDate.event?._def?.extendedProps?._id,
            title: eventDate.event?._def.title
        })
    }

    const handleDelete = () => {
        fetch(`http://localhost:5000/events/${deleteEvent?._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDeleteModalVisibility(false);
                    refetch();
                }
            });
    }

    return (
        <div>
            <FullCalendar
                initialView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin]}
                events={events}
                selectable={true}
                dateClick={info => handleDayClick(info)}
                eventClick={eventDate => handleEventClick(eventDate)}
            />

            <GetDateModal
                viewModalVisibility={viewModalVisibility}
                setViewModalVisibility={setViewModalVisibility}
                eventDate={eventDate}
                refetch={refetch}
            />

            <DeleteModal
                setDeleteModalVisibility={setDeleteModalVisibility}
                deleteModalVisibility={deleteModalVisibility}
                handleDelete={handleDelete}
                deleteItemName={deleteEvent?.title}
            />
        </div>
    );
}