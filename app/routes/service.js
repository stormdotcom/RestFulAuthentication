import express from "express";
import { getAllUser } from "../controllers/service.js";
import { verifyToken } from "../utils/middleware.js";

const router = express.Router();

router.get("/list-all", verifyToken, getAllUser);

export default router;