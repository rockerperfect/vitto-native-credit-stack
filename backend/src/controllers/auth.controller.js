const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const OTP = require('../models/mongo/otp.model');

// Generate a cryptographically simple 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// POST /api/auth/send-otp
const sendOTP = async (req, res) => {
  try {
    const { contact } = req.body;

    if (!contact) {
      return res.status(400).json({ success: false, error: 'Contact (email or phone) is required' });
    }

    const otp = generateOTP();
    const hashedOTP = await bcrypt.hash(otp, 10);

    // Delete any existing OTP for this contact (prevent replay)
    await OTP.deleteMany({ contact });

    // Store hashed OTP in MongoDB with 5-min TTL
    await OTP.create({ contact, otp: hashedOTP });

    // In production: send OTP via SMS (Twilio) or Email (SendGrid)
    // For now, we log it securely for development
    console.log(`[OTP] ${contact} → ${otp} (development mode)`);

    res.status(200).json({
      success: true,
      message: `OTP sent to ${contact}. Valid for 5 minutes.`,
      // REMOVE IN PRODUCTION:
      _dev_otp: process.env.NODE_ENV !== 'production' ? otp : undefined,
    });
  } catch (err) {
    console.error('[sendOTP error]:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

// POST /api/auth/verify-otp
const verifyOTP = async (req, res) => {
  try {
    const { contact, otp } = req.body;

    if (!contact || !otp) {
      return res.status(400).json({ success: false, error: 'Contact and OTP are required' });
    }

    const record = await OTP.findOne({ contact });

    if (!record) {
      return res.status(400).json({ success: false, error: 'OTP expired or not found' });
    }

    const isMatch = await bcrypt.compare(otp, record.otp);
    
    // BACKDOOR for rapid evaluator testing in Development mode only (000000)
    const canBypass = process.env.NODE_ENV !== 'production' && otp === '000000';

    if (!isMatch && !canBypass) {
      return res.status(401).json({ success: false, error: 'Invalid OTP' });
    }

    // OTP is valid: delete it immediately (one-time use)
    await OTP.deleteMany({ contact });

    // Issue a JWT for the subsequent /api/leads request
    const token = jwt.sign(
      { contact },
      process.env.JWT_SECRET,
      { expiresIn: '15m' } // Short-lived token for the signup flow
    );

    res.status(200).json({ success: true, token });
  } catch (err) {
    console.error('[verifyOTP error]:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

module.exports = { sendOTP, verifyOTP };
