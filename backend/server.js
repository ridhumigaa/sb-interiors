const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB enquiry schema
const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    default: "",
    trim: true,
  },
  service: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  receivedAt: {
    type: Date,
    default: Date.now,
  },
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SB Interiors backend is running!",
    database: mongoose.connection.readyState === 1
      ? "connected"
      : "disconnected",
  });
});

// Save an enquiry to MongoDB
app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body || {};

    if (
      typeof name !== "string" || !name.trim() ||
      typeof email !== "string" || !email.trim() ||
      typeof service !== "string" || !service.trim() ||
      typeof message !== "string" || !message.trim() ||
      (phone != null && typeof phone !== "string")
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid name, email, service and message details.",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone: phone || "",
      service,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been saved successfully!",
      id: enquiry._id,
    });
  } catch (error) {
    console.error("Failed to save enquiry:", error.message);

    return res.status(500).json({
      success: false,
      message: "We could not save your enquiry. Please try again later.",
    });
  }
});

// Connect to MongoDB before starting the server
async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from the backend .env file.");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Atlas connected successfully!");

    app.listen(PORT, () => {
      console.log(`SB Interiors backend running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Backend startup failed:", error.message);
    process.exit(1);
  }
}

startServer();