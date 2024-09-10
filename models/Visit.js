// /models/Visit.js
import mongoose from "mongoose";

const visitSchema = new mongoose.Schema({
  lead: String,
  contact: String,
  prospect: String,
  pagesVisited: Number,
  region: String,
  dateCreated: { type: Date, default: Date.now },
});

const Visit = mongoose.model("Visit", visitSchema);
export default Visit;
