// /controllers/salesOrderController.js
import SalesOrder from "../models/SalesOrder.js";

export const getFilteredSalesOrders = async (req, res) => {
  try {
    const filters = {};

    if (req.query.status) filters.status = req.query.status;
    if (req.query.owner) filters.owner = req.query.owner;
    if (req.query.account) filters.account = req.query.account;
    if (req.query.totalAmount)
      filters.totalAmount = { $gte: parseFloat(req.query.totalAmount) };

    const salesOrders = await SalesOrder.find(filters);
    res.json(salesOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
