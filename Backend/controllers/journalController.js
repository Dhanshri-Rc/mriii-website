// controllers/journalController.js
// Full CRUD for journals with image + PDF upload support

const JournalModel = require("../models/journalModel");
const fs = require("fs");
const path = require("path");

// Helper: build public URL for uploaded file
const getFileUrl = (req, filename) => {
  if (!filename) return null;
  return `${req.protocol}://${req.get("host")}/uploads/${filename}`;
};

// Helper: delete file from disk
const deleteFile = (filename) => {
  if (!filename) return;
  const filePath = path.join(__dirname, "../uploads", filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

// ─── GET ALL JOURNALS ─────────────────────────────────────────────────────────
const getAllJournals = async (req, res) => {
  try {
    const journals = await JournalModel.getAll();
    return res.status(200).json({
      success: true,
      message: "Journals fetched successfully.",
      data: journals,
    });
  } catch (error) {
    console.error("Get journals error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

// ─── GET SINGLE JOURNAL ───────────────────────────────────────────────────────
const getJournalById = async (req, res) => {
  try {
    const { id } = req.params;
    const journal = await JournalModel.getById(id);

    if (!journal) {
      return res.status(404).json({ success: false, message: "Journal not found." });
    }

    return res.status(200).json({ success: true, data: journal });
  } catch (error) {
    console.error("Get journal error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

// ─── CREATE JOURNAL ───────────────────────────────────────────────────────────
const createJournal = async (req, res) => {
  try {
    const {
      title,
      description,
      author,
      publishDate,
      eissn,
      pissn,
      journalUrl,
      publisher,
      frequency,
      subjectArea,
      status,
    } = req.body;

    // Validate required fields
    if (!title || !eissn) {
      return res.status(400).json({
        success: false,
        message: "Title and eISSN are required.",
      });
    }

    // Get uploaded file names (if any)
    const imageFile = req.files?.image?.[0]?.filename || null;
    const pdfFile = req.files?.pdf?.[0]?.filename || null;

    const journalId = await JournalModel.create({
      title,
      description,
      image: imageFile,
      pdf: pdfFile,
      author,
      publishDate,
      eissn,
      pissn,
      journalUrl,
      publisher,
      frequency,
      subjectArea,
      status,
    });

    const newJournal = await JournalModel.getById(journalId);

    return res.status(201).json({
      success: true,
      message: "Journal created successfully.",
      data: newJournal,
    });
  } catch (error) {
    console.error("Create journal error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

// ─── UPDATE JOURNAL ───────────────────────────────────────────────────────────
const updateJournal = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await JournalModel.getById(id);

    if (!existing) {
      return res.status(404).json({ success: false, message: "Journal not found." });
    }

    const {
      title,
      description,
      author,
      publishDate,
      eissn,
      pissn,
      journalUrl,
      publisher,
      frequency,
      subjectArea,
      status,
    } = req.body;

    // Use new file if uploaded, otherwise keep existing
    let imageFile = existing.image;
    let pdfFile = existing.pdf;

    if (req.files?.image?.[0]) {
      deleteFile(existing.image); // Remove old image
      imageFile = req.files.image[0].filename;
    }

    if (req.files?.pdf?.[0]) {
      deleteFile(existing.pdf); // Remove old PDF
      pdfFile = req.files.pdf[0].filename;
    }

    await JournalModel.update(id, {
      title: title || existing.title,
      description: description ?? existing.description,
      image: imageFile,
      pdf: pdfFile,
      author: author ?? existing.author,
      publishDate: publishDate ?? existing.publishDate,
      eissn: eissn || existing.eissn,
      pissn: pissn ?? existing.pissn,
      journalUrl: journalUrl ?? existing.journalUrl,
      publisher: publisher ?? existing.publisher,
      frequency: frequency ?? existing.frequency,
      subjectArea: subjectArea ?? existing.subjectArea,
      status: status ?? existing.status,
    });

    const updatedJournal = await JournalModel.getById(id);

    return res.status(200).json({
      success: true,
      message: "Journal updated successfully.",
      data: updatedJournal,
    });
  } catch (error) {
    console.error("Update journal error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

// ─── DELETE JOURNAL ───────────────────────────────────────────────────────────
const deleteJournal = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await JournalModel.getById(id);

    if (!existing) {
      return res.status(404).json({ success: false, message: "Journal not found." });
    }

    // Delete associated files from disk
    deleteFile(existing.image);
    deleteFile(existing.pdf);

    await JournalModel.delete(id);

    return res.status(200).json({
      success: true,
      message: "Journal deleted successfully.",
    });
  } catch (error) {
    console.error("Delete journal error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

module.exports = {
  getAllJournals,
  getJournalById,
  createJournal,
  updateJournal,
  deleteJournal,
};
