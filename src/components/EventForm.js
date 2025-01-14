import React, { useState } from "react";
import { createEvent } from "../utils/api";

const EventForm = ({ onEventCreated }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const eventData = { name, description, date };
      const response = await createEvent(eventData);
      alert("Event created successfully!");
      setName("");
      setDescription("");
      setDate("");
      onEventCreated(response.data);
    } catch (err) {
      alert(err.response?.data?.error || "Failed to create event");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
