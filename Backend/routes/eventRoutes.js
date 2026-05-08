// routes/eventRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const { verifyToken } = require("../middleware/authMiddleware");
const { uploadEventImage } = require("../middleware/uploadMiddleware");

// GET /api/events — public
router.get("/", getAllEvents);

// GET /api/events/:id — public
router.get("/:id", getEventById);

// POST /api/events — protected + image upload
router.post("/", verifyToken, uploadEventImage, createEvent);

// PUT /api/events/:id — protected + image upload
router.put("/:id", verifyToken, uploadEventImage, updateEvent);

// DELETE /api/events/:id — protected
router.delete("/:id", verifyToken, deleteEvent);

module.exports = router;
