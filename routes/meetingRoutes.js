// /routes/meetingRoutes.js
import express from "express";
import { getFilteredMeetings } from "../controllers/meetingController.js";

const router = express.Router();
router.get("/meetings", getFilteredMeetings);
export default router;
