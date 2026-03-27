# PRD_05 — Self Sign-Up Flow (Frontend + Backend)

## 1. Objective

Enable institutions (Banks, NBFCs, MFIs) to onboard onto Vitto via a structured, validated, and secure flow.

This flow must:
- Capture verified contact details (OTP-based)
- Collect organization metadata
- Persist lead data reliably
- Maintain session integrity using short-lived OTP storage

Primary conversion: **Completed Sign-Up (Qualified Lead Created)**

---

## 2. Flow Overview

### Step 1 — Contact Verification
- Input: Email or Phone
- OTP sent
- OTP verified

### Step 2 — Organization Details
- Institution Name
- Institution Type (Bank / NBFC / MFI)
- City
- Loan Book Size

### Step 3 — Confirmation
- Success screen
- Message: "Our team will reach out within 24 hours"

---

## 3. Frontend Architecture

### Route
- `/signup`

### Component Structure

```
Signup.jsx
│
├── Step1Contact
├── Step2Organization
├── Step3Confirmation
```

---

## 4. Step 1 — Contact Verification

### Fields
- email (optional)
- phone (optional)

At least one required.

### Actions
- Send OTP
- Verify OTP

### UI States
- Idle
- Sending OTP (loading spinner)
- OTP Sent
- Verifying OTP
- Verified
- Error (invalid OTP / expired)

### Validation
- Email format
- Phone: 10 digits
- At least one required

---

## 5. Step 2 — Organization Details

### Fields
- institution_name (required)
- institution_type (dropdown: Bank / NBFC / MFI)
- city (required)
- loan_book_size (range or dropdown)

### Validation
- All fields required

### UI States
- Idle
- Submitting (loading)
- Success
- Error

---

## 6. Step 3 — Confirmation

### UI
- Success message
- No inputs

---

## 7. State Management

### Local State
- step (1,2,3)
- contact
- otp
- verified (boolean)
- formData

---

## 8. API Integration

### 8.1 Send OTP

POST `/api/auth/send-otp`

#### Request
```
{
  "contact": "email_or_phone"
}
```

#### Response
```
{
  "success": true,
  "message": "OTP sent"
}
```

---

### 8.2 Verify OTP

POST `/api/auth/verify-otp`

#### Request
```
{
  "contact": "email_or_phone",
  "otp": "123456"
}
```

#### Response
```
{
  "success": true,
  "token": "jwt_token"
}
```

---

### 8.3 Create Lead

POST `/api/leads`

#### Headers
Authorization: Bearer <token>

#### Request
```
{
  "email": "",
  "phone": "",
  "institution_name": "",
  "institution_type": "",
  "city": "",
  "loan_book_size": ""
}
```

#### Response
```
{
  "success": true,
  "id": "lead_id"
}
```

---

### 8.4 Get Lead

GET `/api/leads/:id`

---

## 9. Backend Architecture

### Structure

```
backend/src/
├── routes/
│   ├── auth.routes.js
│   └── leads.routes.js
├── controllers/
│   ├── auth.controller.js
│   └── leads.controller.js
├── models/
│   ├── mongo/otp.model.js
│   └── postgres/lead.model.js
├── middleware/
│   └── auth.middleware.js
```

---

## 10. MongoDB (OTP Session)

### Schema

```
{
  contact: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date
}
```

### TTL Index

```
expiresAt: { expireAfterSeconds: 600 }
```

---

## 11. PostgreSQL (Leads)

### Table

```
leads (
  id UUID PRIMARY KEY,
  email TEXT,
  phone TEXT,
  institution_name TEXT,
  institution_type TEXT,
  city TEXT,
  loan_book_size TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  status TEXT DEFAULT 'new'
)
```

---

## 12. Controller Logic

### Send OTP
- Generate 6-digit OTP
- Store in MongoDB
- Return success

### Verify OTP
- Match contact + OTP
- Check expiry
- Generate JWT

### Create Lead
- Validate token
- Insert into PostgreSQL

---

## 13. Middleware

### Auth Middleware
- Extract JWT
- Verify token
- Attach user context

---

## 14. Error Handling

### Cases
- Invalid OTP
- Expired OTP
- Missing fields
- DB failure

### Response Format

```
{
  "success": false,
  "error": "message"
}
```

---

## 15. UI/UX Requirements

- Step progress indicator
- Disabled buttons during API calls
- Inline validation errors
- Smooth transitions between steps

---

## 16. Security Considerations

- OTP expiry (10 min)
- JWT expiry
- Input sanitization

---

## 17. Testing (cURL)

### Send OTP
```
curl -X POST http://localhost:5000/api/auth/send-otp \
-H "Content-Type: application/json" \
-d '{"contact":"test@example.com"}'
```

### Verify OTP
```
curl -X POST http://localhost:5000/api/auth/verify-otp \
-H "Content-Type: application/json" \
-d '{"contact":"test@example.com","otp":"123456"}'
```

---

## 18. Evaluation Alignment

- Backend API completeness (10%)
- Functional signup flow
- Proper DB usage (Postgres + Mongo TTL)

---

END OF PRD_05

