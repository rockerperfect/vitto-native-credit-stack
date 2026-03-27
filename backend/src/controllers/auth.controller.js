const OTP = require('../models/mongo/otp.model');
const jwt = require('jsonwebtoken');

// Generate 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

exports.sendOTP = async (req, res) => {
  const { contact } = req.body;

  if (!contact) {
    return res.status(400).json({ success: false, error: 'Contact detail is required' });
  }

  try {
    const otpCode = generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store OTP in MongoDB (Update if exists, or create new)
    await OTP.findOneAndUpdate(
      { contact },
      { otp: otpCode, expiresAt, createdAt: new Date() },
      { upsert: true, new: true }
    );

    // In a real app, we would send the OTP via Email/SMS here.
    // For this build, we'll log it and return a success message.
    console.log(` OTP for ${contact}: ${otpCode}`);

    res.status(200).json({ 
      success: true, 
      message: 'OTP sent successfully (Check server logs for demo purposes)' 
    });
  } catch (err) {
    console.error('Send OTP Error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

exports.verifyOTP = async (req, res) => {
  const { contact, otp } = req.body;

  if (!contact || !otp) {
    return res.status(400).json({ success: false, error: 'Contact and OTP are required' });
  }

  try {
    const otpRecord = await OTP.findOne({ contact, otp });

    if (!otpRecord) {
      return res.status(400).json({ success: false, error: 'Invalid or expired OTP' });
    }

    // Generate JWT
    const token = jwt.sign(
      { contact },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Remove OTP after verification
    await OTP.deleteOne({ _id: otpRecord._id });

    res.status(200).json({ success: true, token });
  } catch (err) {
    console.error('Verify OTP Error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
