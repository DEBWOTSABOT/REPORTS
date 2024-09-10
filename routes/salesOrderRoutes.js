// /routes/salesOrderRoutes.js
import express from "express";
import { getFilteredSalesOrders } from "../controllers/salesOrderController.js";

const router = express.Router();
router.get("/sales-orders", getFilteredSalesOrders);
export default router;
