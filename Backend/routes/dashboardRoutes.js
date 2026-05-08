// routes/dashboardRoutes.js
const express = require("express");
const router = express.Router();
const { getDashboard } = require("../controllers/dashboardController");
const { verifyToken } = require("../middleware/authMiddleware");

// GET /api/dashboard — protected route
router.get("/", verifyToken, getDashboard);

module.exports = router;
