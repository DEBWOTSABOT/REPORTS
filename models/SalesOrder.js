// /models/SalesOrder.js
import mongoose from "mongoose";

const salesOrderSchema = new mongoose.Schema({
  status: String,
  owner: String,
  account: String,
  totalAmount: Number,
  dateCreated: { type: Date, default: Date.now },
});

const SalesOrder = mongoose.model("SalesOrder", salesOrderSchema);
export default SalesOrder;
