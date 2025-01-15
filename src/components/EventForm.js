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
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Create Event</h2>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="name"
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Event Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter event name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="description"
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Description:
        </label>
        <textarea
          id="description"
          placeholder="Enter event description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            resize: "none",
            height: "80px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="date"
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Event Date:
        </label>
        <input
          type="datetime-local"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Create New Event
      </button>
    </form>
  );
};

export default EventForm;
