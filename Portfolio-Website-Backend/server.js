require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes); // ✅ Public Contact Submission & Protected Admin Fetch
app.use("/api/admin", adminRoutes); // ✅ Admin Login Route

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
