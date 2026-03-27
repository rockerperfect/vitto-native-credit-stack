const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
  contact: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: true,
    index: { expires: 0 } // TTL index using the expiresAt field
  }
});

module.exports = mongoose.model('OTP', OTPSchema);
