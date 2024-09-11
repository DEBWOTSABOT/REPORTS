// /controllers/contactController.js
import Contact from '../models/Contact.js';

// Fetch contacts with dynamic filters
export const getFilteredContacts = async (req, res) => {
  try {
    const filters = {};

    // Add filters dynamically based on query parameters
    if (req.query.contactName) {
      filters.contactName = { $regex: req.query.contactName, $options: 'i' }; // Case-insensitive match
    }

    if (req.query.email) {
      filters.email = { $regex: req.query.email, $options: 'i' }; // Case-insensitive match
    }

    if (req.query.phoneNumber) {
      filters.phoneNumber = req.query.phoneNumber;
    }

    if (req.query.address) {
      filters.address = { $regex: req.query.address, $options: 'i' }; // Case-insensitive match
    }

    // Fetch contacts based on the dynamically built filters
    const contacts = await Contact.find(filters);
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
