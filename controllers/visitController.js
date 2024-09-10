// /controllers/visitController.js
import Visit from "../models/Visit.js";

export const getFilteredVisits = async (req, res) => {
  try {
    const filters = {};

    if (req.query.lead) filters.lead = req.query.lead;
    if (req.query.region) filters.region = req.query.region;

    const visits = await Visit.find(filters);
    res.json(visits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
