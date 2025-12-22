import "./config/env.js";

import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import chatRoutes from "./routes/chat.js";
import { connectDB } from "./lib/database.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});
