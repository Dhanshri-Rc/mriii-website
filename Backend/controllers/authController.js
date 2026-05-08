// controllers/authController.js
// Handles admin authentication with static credentials + JWT

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// ─── Login Controller ─────────────────────────────────────────────────────────
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // Validate against static admin credentials from .env
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminName = process.env.ADMIN_NAME || "Admin";

    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Build admin payload for JWT
    const adminPayload = {
      id: 1,
      name: adminName,
      email: adminEmail,
      role: "admin",
    };

    // Generate JWT token (expires in 7 days)
    const token = jwt.sign(adminPayload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      admin: adminPayload,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};

// ─── Verify Token / Get Admin Info ────────────────────────────────────────────
const getMe = async (req, res) => {
  try {
    // req.admin is set by verifyToken middleware
    return res.status(200).json({
      success: true,
      admin: req.admin,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

module.exports = { login, getMe };
