// /controllers/quoteController.js
import Quote from "../models/Quote.js";

export const getFilteredQuotes = async (req, res) => {
  try {
    const filters = {};

    if (req.query.stage) filters.stage = req.query.stage;
    if (req.query.account) filters.account = req.query.account;
    if (req.query.amount)
      filters.amount = { $gte: parseFloat(req.query.amount) };

    const quotes = await Quote.find(filters);
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
