// /routes/salesMetricsRoutes.js
import express from "express";
import { getFilteredSalesMetrics } from "../controllers/salesMetricsController.js";

const router = express.Router();
router.get("/sales-metrics", getFilteredSalesMetrics);
export default router;
