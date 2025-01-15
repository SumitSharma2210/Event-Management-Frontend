import React, { useEffect, useState } from "react";
import { fetchEvents, deleteEvent } from "../utils/api";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEvents = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to view events.");
        navigate("/login");
        return;
      }

      try {
        const response = await fetchEvents();
        setEvents(response.data);

        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        setUserRole(decodedToken.role);
      } catch (err) {
        console.error("Error:", err);
        alert(err.response?.data?.error || "Failed to fetch events");
      }
    };
    loadEvents();
  }, [navigate]);

  const handleEventCreated = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      setEvents(events.filter((event) => event._id !== id));
    } catch (err) {
      alert(err.response?.data?.error || "Failed to delete event");
    }
  };

  const handleEdit = (event) => {
    navigate(`/edit/${event._id}`);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Upcoming Events
      </h1>
      {userRole !== "guest" && (
        <div
          style={{
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
          }}
        >
          <EventForm onEventCreated={handleEventCreated} />
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event._id}
              style={{
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            >
              <EventCard
                event={event}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </div>
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              color: "#555",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            No events to display.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
