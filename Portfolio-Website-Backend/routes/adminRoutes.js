const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// @route  POST /api/admin/login
// @desc   Authenticate Admin
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "2h" });
    return res.json({ success: true, token });
  }

  res.status(401).json({ success: false, message: "Invalid Credentials" });
});

module.exports = router;
