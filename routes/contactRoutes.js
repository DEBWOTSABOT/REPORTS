// /routes/contactRoutes.js
import express from 'express';
import { getFilteredContacts } from '../controllers/contactController.js';

const router = express.Router();

router.get('/contacts', getFilteredContacts); // Fetch contacts with dynamic filters

export default router;
