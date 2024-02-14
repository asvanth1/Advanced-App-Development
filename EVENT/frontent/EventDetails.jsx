// EventDetails.jsx
// import React from 'react';
import './EventDetails.css';

const EventDetails = ({ event, onClose }) => {
  return (
    <div className="event-details-overlay" onClick={onClose}>
      <div className="event-details">
        <h2>{event.title}</h2>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventDetails;
