// /routes/quoteRoutes.js
import express from "express";
import { getFilteredQuotes } from "../controllers/quoteController.js";

const router = express.Router();
router.get("/quotes", getFilteredQuotes);
export default router;
