// src/api/eventApi.js
import axiosInstance from "./axiosInstance";

// GET all events
export const getAllEvents = async () => {
  const response = await axiosInstance.get("/events");
  return response.data;
};

// GET single event
export const getEventById = async (id) => {
  const response = await axiosInstance.get(`/events/${id}`);
  return response.data;
};

// POST create event (with image)
export const createEvent = async (formData) => {
  const response = await axiosInstance.post("/events", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// PUT update event
export const updateEvent = async (id, formData) => {
  const response = await axiosInstance.put(`/events/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// DELETE event
export const deleteEvent = async (id) => {
  const response = await axiosInstance.delete(`/events/${id}`);
  return response.data;
};
