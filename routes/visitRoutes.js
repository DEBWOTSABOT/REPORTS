// /routes/visitRoutes.js
import express from "express";
import { getFilteredVisits } from "../controllers/visitController.js";

const router = express.Router();
router.get("/visits", getFilteredVisits);
export default router;
