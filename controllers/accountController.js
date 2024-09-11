// /controllers/accountController.js
import Account from '../models/Account.js';

// Fetch accounts with dynamic filters
export const getFilteredAccounts = async (req, res) => {
  try {
    const filters = {};

    // Add filters dynamically based on query parameters
    if (req.query.industry) {
      filters.industry = req.query.industry;
    }

    if (req.query.minDeals) {
      filters.numberOfDeals = { $gte: parseInt(req.query.minDeals) };
    }

    if (req.query.accountName) {
      filters.accountName = { $regex: req.query.accountName, $options: 'i' }; // Case-insensitive match
    }

    // Fetch accounts based on the dynamically built filters
    const accounts = await Account.find(filters);
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
