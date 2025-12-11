const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  upiId: { type: String, required: true },
  payeeName: { type: String, required: true },
  amount: { type: Number, required: true },
  note: { type: String },
  qrRef: { type: String },
  paymentStatus: { type: String, enum: ['pending','paid','failed'], default: 'pending' },
  paymentTxnId: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
