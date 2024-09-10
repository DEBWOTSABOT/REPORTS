// /controllers/invoiceController.js
import Invoice from "../models/Invoice.js";

export const getFilteredInvoices = async (req, res) => {
  try {
    const filters = {};

    if (req.query.status) filters.status = req.query.status;
    if (req.query.account) filters.account = req.query.account;

    const invoices = await Invoice.find(filters);
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
