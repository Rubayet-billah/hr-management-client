import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
import GetDateModal from "./GetDateModal";
import { useQuery } from '@tanstack/react-query';

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

export default function Calender() {
    const { data: events = [], refetch } = useQuery({
        queryKey: ['events'],
        queryFn: () => fetch('http://localhost:5000/events')
            .then(res => res.json())
    })

    const [viewModalVisibility, setViewModalVisibility] = useState(false);
    const [eventDate, setEventDate] = useState(false);

    const handleDayClick = (info) => {
        setViewModalVisibility(true);
        setEventDate(info.dateStr);
    }

    const handleEventClick = (eventDate) => {
        console.log(eventDate);
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
        </div>
    );
}