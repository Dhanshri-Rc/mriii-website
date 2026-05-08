// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { login, getMe } = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");

// POST /api/auth/login — public route
router.post("/login", login);

// GET /api/auth/me — protected route (verify token + return admin info)
router.get("/me", verifyToken, getMe);

module.exports = router;
