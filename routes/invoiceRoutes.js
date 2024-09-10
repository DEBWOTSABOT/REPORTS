// /routes/invoiceRoutes.js
import express from "express";
import { getFilteredInvoices } from "../controllers/invoiceController.js";

const router = express.Router();
router.get("/invoices", getFilteredInvoices);
export default router;
