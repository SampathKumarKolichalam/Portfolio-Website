const express = require("express");
const Contact = require("../models/ContactMessage");
const verifyAdmin = require("../middleware/authMiddleware"); 

const router = express.Router();

// ✅ GET: Fetch all messages (Admin Protected)
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, messages });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ✅ POST: Submit Contact Form (Public, No Token Needed)
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    const newMessage = new Contact({ name, email, phone, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
