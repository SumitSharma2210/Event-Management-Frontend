import axios from "axios";

const apiUrl = "https://event-management-backend-51us.onrender.com/api";

console.log("API URL being used:", apiUrl);

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${apiUrl}/events`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("API Response:", response);
    return response;
  } catch (err) {
    console.error("Error in fetchEvents:", err);
    throw err;
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/events/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (err) {
    console.error("Error in deleteEvent:", err);
    throw err;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${apiUrl}/events`, eventData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (err) {
    console.error("Error in createEvent:", err);
    throw err;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      email,
      password,
    });
    return response;
  } catch (err) {
    console.error("Error in login:", err);
    throw err;
  }
};

export const guestLogin = async () => {
  try {
    const response = await axios.post(`${apiUrl}/auth/guestLogin`);
    return response;
  } catch (err) {
    console.error("Error in guestLogin:", err);
    throw err;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/register`, {
      username,
      email,
      password,
    });
    return response;
  } catch (err) {
    console.error("Error in register:", err);
    throw err;
  }
};
