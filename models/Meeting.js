// /models/Meeting.js
import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  salesperson: String,
  lead: String,
  account: String,
  locality: String,
  plannedDate: Date,
  realizedDate: Date,
  checkInType: String, // Lead, Account, Locality
});

const Meeting = mongoose.model("Meeting", meetingSchema);
export default Meeting;
