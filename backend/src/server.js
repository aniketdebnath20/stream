import "./config/env.js";

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import chatRoutes from "./routes/chat.js";
import { connectDB } from "./lib/database.js";

/* ==================== FIX __dirname ==================== */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ==================== APP SETUP ==================== */
const app = express();
const port = process.env.PORT || 5000;

/* ==================== MIDDLEWARE ==================== */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ==================== ROUTES ==================== */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

/* ==================== PRODUCTION FRONTEND ==================== */
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(frontendPath));

  app.get("/*", (req, res) => {
       res.sendFile(path.join(frontendPath, "index.html"));
  });
}

/* ==================== START SERVER ==================== */
app.listen(port, async () => {
  console.log(`🚀 Server running on port ${port}`);
  await connectDB();
});
