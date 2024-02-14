// EventCard.jsx

import './EventCard.css';
const EventCard = () => {
  return (
    <>
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </div>
    </>
  );
};

export default EventCard;
