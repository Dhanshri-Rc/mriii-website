// controllers/eventController.js
// Full CRUD for events with image upload support

const EventModel = require("../models/eventModel");
const fs = require("fs");
const path = require("path");

// Helper: delete file from disk
const deleteFile = (filename) => {
  if (!filename) return;
  const filePath = path.join(__dirname, "../uploads", filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

// ─── GET ALL EVENTS ───────────────────────────────────────────────────────────
const getAllEvents = async (req, res) => {
  try {
    const events = await EventModel.getAll();
    return res.status(200).json({
      success: true,
      message: "Events fetched successfully.",
      data: events,
    });
  } catch (error) {
    console.error("Get events error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

// ─── GET SINGLE EVENT ─────────────────────────────────────────────────────────
const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await EventModel.getById(id);

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found." });
    }

    return res.status(200).json({ success: true, data: event });
  } catch (error) {
    console.error("Get event error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

// ─── CREATE EVENT ─────────────────────────────────────────────────────────────
const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      location,
      organizer,
      eventType,
      category,
      shortDescription,
    } = req.body;

    // Validate required fields
    if (!title || !date) {
      return res.status(400).json({
        success: false,
        message: "Title and date are required.",
      });
    }

    const imageFile = req.file?.filename || null;

    const eventId = await EventModel.create({
      title,
      description,
      image: imageFile,
      date,
      location,
      organizer,
      eventType,
      category,
      shortDescription,
    });

    const newEvent = await EventModel.getById(eventId);

    return res.status(201).json({
      success: true,
      message: "Event created successfully.",
      data: newEvent,
    });
  } catch (error) {
    console.error("Create event error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

// ─── UPDATE EVENT ─────────────────────────────────────────────────────────────
const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await EventModel.getById(id);

    if (!existing) {
      return res.status(404).json({ success: false, message: "Event not found." });
    }

    const {
      title,
      description,
      date,
      location,
      organizer,
      eventType,
      category,
      shortDescription,
    } = req.body;

    // Use new image if uploaded, else keep existing
    let imageFile = existing.image;
    if (req.file) {
      deleteFile(existing.image);
      imageFile = req.file.filename;
    }

    await EventModel.update(id, {
      title: title || existing.title,
      description: description ?? existing.description,
      image: imageFile,
      date: date || existing.date,
      location: location ?? existing.location,
      organizer: organizer ?? existing.organizer,
      eventType: eventType ?? existing.eventType,
      category: category ?? existing.category,
      shortDescription: shortDescription ?? existing.shortDescription,
    });

    const updatedEvent = await EventModel.getById(id);

    return res.status(200).json({
      success: true,
      message: "Event updated successfully.",
      data: updatedEvent,
    });
  } catch (error) {
    console.error("Update event error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

// ─── DELETE EVENT ─────────────────────────────────────────────────────────────
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await EventModel.getById(id);

    if (!existing) {
      return res.status(404).json({ success: false, message: "Event not found." });
    }

    deleteFile(existing.image);
    await EventModel.delete(id);

    return res.status(200).json({
      success: true,
      message: "Event deleted successfully.",
    });
  } catch (error) {
    console.error("Delete event error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};
