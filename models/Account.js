// /models/Account.js
import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
  accountName: String,
  industry: String,
  numberOfDeals: Number,
});

const Account = mongoose.model('Account', accountSchema);
export default Account;
