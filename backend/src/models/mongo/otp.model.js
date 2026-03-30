const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  contact: {
    type: String,
    required: true,
    index: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // TTL: auto-delete after 10 minutes
  },
});

module.exports = mongoose.model('OTP', otpSchema);
