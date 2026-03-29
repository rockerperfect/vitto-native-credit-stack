// API Configuration
// In development: Vite proxies '/api' to 'http://localhost:5000'
// In production: Vercel uses 'vercel.json' rewrites to bridge '/api' to the Render backend

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const API_ENDPOINTS = {
  SEND_OTP: `${API_BASE_URL}/api/auth/send-otp`,
  VERIFY_OTP: `${API_BASE_URL}/api/auth/verify-otp`,
  SUBMIT_LEAD: `${API_BASE_URL}/api/leads`,
};
