// ServicesPage.jsx

import ServiceCard from './ServiceCard';
import ServiceDetails from './ServiceDetails';
import ContactForm from './ContactForm';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <div className="services-page">
      <ServiceDetails />
      <div className="service-cards">
        <ServiceCard
          title="Event Planning"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          icon="📅"
        />
        <ServiceCard
          title="Venue Selection"
          description="Nullam eget quam at nunc feugiat luctus. Duis auctor posuere libero."
          icon="🏛️"
        />
        <ServiceCard
          title="Catering"
          description="Sed hendrerit velit auctor vel. Maecenas auctor posuere libero."
          icon="🍽️"
        />
      </div>
     
      {/* <ContactForm /> */}
    </div>
  );
}

export default ServicesPage;
