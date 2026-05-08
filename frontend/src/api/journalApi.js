// src/api/journalApi.js
import axiosInstance from "./axiosInstance";

// GET all journals
export const getAllJournals = async () => {
  const response = await axiosInstance.get("/journals");
  return response.data;
};

// GET single journal
export const getJournalById = async (id) => {
  const response = await axiosInstance.get(`/journals/${id}`);
  return response.data;
};

// POST create journal (with image + optional pdf)
export const createJournal = async (formData) => {
  const response = await axiosInstance.post("/journals", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// PUT update journal
export const updateJournal = async (id, formData) => {
  const response = await axiosInstance.put(`/journals/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// DELETE journal
export const deleteJournal = async (id) => {
  const response = await axiosInstance.delete(`/journals/${id}`);
  return response.data;
};
