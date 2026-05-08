// middleware/uploadMiddleware.js
// Handles file uploads using multer for images and PDFs

const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ─── Storage Configuration ───────────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename: timestamp + random number + original extension
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

// ─── File Filter ──────────────────────────────────────────────────────────────
const fileFilter = (req, file, cb) => {
  const allowedImageTypes = ["image/jpeg", "image/png", "image/webp"];
  const allowedPdfTypes = ["application/pdf"];
  const allowedTypes = [...allowedImageTypes, ...allowedPdfTypes];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only JPG, PNG, WebP, and PDF files are allowed."
      ),
      false
    );
  }
};

// ─── Upload Instances ─────────────────────────────────────────────────────────

// For events: only image
const uploadEventImage = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
}).single("image");

// For journals: image + optional PDF
const uploadJournalFiles = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
}).fields([
  { name: "image", maxCount: 1 },
  { name: "pdf", maxCount: 1 },
]);

// ─── Error Handling Wrapper ───────────────────────────────────────────────────
const handleUploadError = (uploadFn) => (req, res, next) => {
  uploadFn(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        success: false,
        message: `Upload error: ${err.message}`,
      });
    } else if (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
    next();
  });
};

module.exports = {
  uploadEventImage: handleUploadError(uploadEventImage),
  uploadJournalFiles: handleUploadError(uploadJournalFiles),
};
