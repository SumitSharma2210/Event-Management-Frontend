import React from "react";

const EventCard = ({ event, onDelete, onEdit }) => {
  return (
    <div>
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleString()}</p>
      <button onClick={() => onEdit(event)}>Edit</button>
      <button onClick={() => onDelete(event._id)}>Delete</button>
    </div>
  );
};

export default EventCard;
