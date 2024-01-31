// Events.jsx

import{ useState } from 'react';
import EventCard from './EventCard';
import './Events.css';
import EventDetails from '../EventDetails';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Dummy data for events
  const eventsData = [
    { id: 1, title: 'Conference 2024', date: 'January 15, 2024', location: 'Convention Center' },
    { id: 2, title: 'Team Building Retreat', date: 'February 28, 2024', location: 'Mountain Resort' },
    { id: 3, title: 'Product Launch', date: 'March 10, 2024', location: 'Tech Hub Auditorium' },
  ];

  const handleEventClick = (eventId) => {
    const selected = eventsData.find(event => event.id === eventId);
    setSelectedEvent(selected);
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <div className="event-cards">
        {eventsData.map(event => (
          <EventCard key={event.id} event={event} onClick={() => handleEventClick(event.id)} />
        ))}
      </div>
      {selectedEvent && <EventDetails event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
};

export default Events;
