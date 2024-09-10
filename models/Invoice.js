// /models/Invoice.js
import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  status: String,
  account: String,
  amount: Number,
  dateCreated: { type: Date, default: Date.now },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);
export default Invoice;
