// ServiceCard.jsx

import './W.css';

function ServiceCard({ title, description, icon }) {
  return (
    <>
    
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    </>
  );
}

export default ServiceCard;
