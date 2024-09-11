// /routes/accountRoutes.js
import express from 'express';
import { getFilteredAccounts } from '../controllers/accountController.js';

const router = express.Router();

router.get('/accounts', getFilteredAccounts); // Fetch accounts with dynamic filters

export default router;
