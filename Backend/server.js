// server.js
// Main entry point for MRI India Backend API

const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// ─── Import Routes ────────────────────────────────────────────────────────────
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const journalRoutes = require("./routes/journalRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── CORS Configuration ───────────────────────────────────────────────────────
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ─── Body Parsers ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Static Files (Uploaded Images & PDFs) ───────────────────────────────────
// Accessible at: http://localhost:5000/uploads/<filename>
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "MRI India Backend API is running.",
    version: "1.0.0",
  });
});

// ─── API Routes ───────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/events", eventRoutes);

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// ─── Global Error Handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    success: false,
    message: err.message || "Internal server error.",
  });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 MRI India Backend running on http://localhost:${PORT}`);
  console.log(`📁 Uploads served at http://localhost:${PORT}/uploads`);
  console.log(`🔐 Admin: ${process.env.ADMIN_EMAIL}\n`);
});
