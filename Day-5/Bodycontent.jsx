// BodyContent.jsx

import './BodyContent.css';

function BodyContent() {
  return (
    <div className="body-content">
      <section id="home">
        <h1>Welcome to the Corporate Event Management System</h1>
        <p>
          Plan and manage your corporate events with ease. From conferences to
          team-building activities, we have got you covered.
        </p>
      </section>
      <section id="events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>
            <strong>Event 1:</strong> [Description of Event 1]
          </li>
          <li>
            <strong>Event 2:</strong> [Description of Event 2]
          </li>
          <li>
            <strong>Event 3:</strong> [Description of Event 3]
          </li>
        </ul>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <p>
          We offer a range of services including event planning, venue
          selection, catering, and more. Let us make your corporate event
          memorable.
        </p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          Ready to plan your next corporate event? Contact us for customized
          solutions.
        </p>
      </section>
    </div>
  );
}

export default BodyContent;
