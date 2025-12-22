import express from "express";
import { protectRoute } from "../middlewares/auth.js";
import { getStreamToken } from "../controllers/chat.js";

const router = express.Router();

router.get("/token", protectRoute, getStreamToken);

export default router;