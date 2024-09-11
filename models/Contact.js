// /models/Contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  contactName: String,
  email: String,
  phoneNumber: String,
  address: String,
  account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' }
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
