import "./config/env.js";

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import chatRoutes from "./routes/chat.js";
import { connectDB } from "./lib/database.js";

const app = express();

/* ==================== DB CONNECT ==================== */
let isConnected = false;
const connectOnce = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};

/* ==================== MIDDLEWARE ==================== */
app.use(
  cors({
    origin: [
      "https://oansjgasd.netlify.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.options("*", cors()); // 🔥 REQUIRED for preflight

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ==================== ROUTES ==================== */
app.use("/api/auth", async (req, res, next) => {
  await connectOnce();
  next();
}, authRoutes);

app.use("/api/users", async (req, res, next) => {
  await connectOnce();
  next();
}, userRoutes);

app.use("/api/chat", async (req, res, next) => {
  await connectOnce();
  next();
}, chatRoutes);

/* ==================== EXPORT FOR VERCEL ==================== */
export default app;
