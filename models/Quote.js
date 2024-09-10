// /models/Quote.js
import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  stage: String,
  account: String,
  amount: Number,
  dateCreated: { type: Date, default: Date.now },
});

const Quote = mongoose.model("Quote", quoteSchema);
export default Quote;
