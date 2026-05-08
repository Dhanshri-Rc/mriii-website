// routes/journalRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllJournals,
  getJournalById,
  createJournal,
  updateJournal,
  deleteJournal,
} = require("../controllers/journalController");
const { verifyToken } = require("../middleware/authMiddleware");
const { uploadJournalFiles } = require("../middleware/uploadMiddleware");

// GET /api/journals — public (frontend journal listing page)
router.get("/", getAllJournals);

// GET /api/journals/:id — public
router.get("/:id", getJournalById);

// POST /api/journals — protected + file upload
router.post("/", verifyToken, uploadJournalFiles, createJournal);

// PUT /api/journals/:id — protected + file upload
router.put("/:id", verifyToken, uploadJournalFiles, updateJournal);

// DELETE /api/journals/:id — protected
router.delete("/:id", verifyToken, deleteJournal);

module.exports = router;
