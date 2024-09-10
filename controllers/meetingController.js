// /controllers/meetingController.js
import Meeting from "../models/Meeting.js";

export const getFilteredMeetings = async (req, res) => {
  try {
    const filters = {};

    if (req.query.salesperson) filters.salesperson = req.query.salesperson;
    if (req.query.locality) filters.locality = req.query.locality;
    if (req.query.checkInType) filters.checkInType = req.query.checkInType;

    const meetings = await Meeting.find(filters);
    res.json(meetings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
