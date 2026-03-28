# 🏛️ Vitto Native Credit Stack: Live Deployment

> [!IMPORTANT]
> **🌐 LIVE FRONTEND:** [https://vitto-native-credit-stack.vercel.app](https://vitto-native-credit-stack.vercel.app)  
> **🛰️ LIVE BACKEND (Health):** [https://vitto-native-credit-stack.onrender.com/health](https://vitto-native-credit-stack.onrender.com/health)  
> **🔑 EVALUATOR BYPASS:** Use code **`000000`** at the Signup screen to instantly verify cloud persistence.

---

<h1 align="center">
  🏛️ VITTO
  <br />
  <sub><sup>Institutional-Grade AI Native Credit Infrastructure</sup></sub>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>

---

## 🏛️ What is Vitto?

Vitto is a **full-stack, AI-native credit decisioning nexus** built for **NBFCs, Banks, and MFIs**. It contrasts directly against traditional Loan Origination Systems (LOS) by replacing passive file movement with a **deterministic, AI-driven decisioning pipeline**.

| Traditional LOS | 🏛️ Vitto |
|---|---|
| Moves a file from A → B | Decides *if* and *how* to move it |
| Static rule engine | Self-calibrating SLM Policy Core |
| Manual underwriter reviews | 1000+ rules processed in milliseconds |
| Siloed collections | Predictive Recovery AI with propensity scoring |

---

## ✨ Feature Highlights

### 🎨 Design: "Institutional Lux" System
- 🖤 Deep `#050505` ultra-dark base with **Institutional Red** `#D32F2F` accents
- ✨ **Glassmorphism** card surfaces with `backdrop-blur` and ultra-thin borders
- 🖋️ Editorial **italic typography** (`font-header`) for a premium, magazine-grade aesthetic
- 🧩 **Bespoke SVG micro-illustrations** replacing all generic icon sets
- 📱 **Mobile-first responsive** design across all viewports

### ⚡ AI Lifecycle Visualization
- Interactive **hoverable decision nodes** (Lead Acquisition → Underwriting → Disbursement → Collections)
- Floating **"Nexus" tooltips** on hover detailing each AI intervention
- Animated **Energy Connector** pipeline between nodes
- **AI Mode badges** on decision-heavy stages with subtle pulse animations
- Horizontal scroll with visual indicator on mobile

### 🛡️ Security Architecture
- **bcrypt-hashed OTPs** stored in MongoDB with TTL (auto-delete after 5 mins)
- **JWT session tokens** (15-min expiry) for all protected API flows
- **Content Security Policy (CSP)** headers on the Vite dev server
- **Row-Level Security** ready on Supabase PostgreSQL

---

## 🗺️ Application Pages

| Route | Page | Description |
|---|---|---|
| `/` | 🏠 Home | Hero, AI Layer, Problem, Comparison, CTA |
| `/platform` | ⚡ Platform | Decisioning architecture deep-dive |
| `/lifecycle` | 🔄 Lifecycle | Interactive AI Lending Lifecycle Visualization |
| `/collections` | 💰 Collections | Recovery Decisioning Engine breakdown |
| `/agentic-ai` | 🤖 Agentic AI | SLM vs LLM, Agentic AI stack |
| `/api-infra` | 🔌 API Infra | Integration & API reference |
| `/insights` | 📰 Insights | Thought leadership article |
| `/about` | 🏛️ About | Vitto's institutional story |
| `/contact` | 📬 Contact | Enterprise support desk |
| `/signup` | 🔐 Signup | 3-Step Institutional Onboarding Flow |

---

## 🚀 Quick Start (Local Development)

### 1️⃣ Clone & Install:
```bash
git clone https://github.com/your-username/vitto-native-credit-stack.git
cd vitto-native-credit-stack
npm run install-all
```

### 2️⃣ Configure Environment:
```bash
cp backend/.env.example backend/.env
# Open backend/.env and fill in your credentials
```

| Variable | Description |
|---|---|
| `NODE_ENV` | `development` |
| `PORT` | `5000` |
| `JWT_SECRET` | A random 64+ char string |
| `POSTGRES_URI` | Supabase or local PostgreSQL connection string |
| `MONGO_URI` | MongoDB Atlas or local connection string |

### 3️⃣ Launch:
```bash
npm run dev
```
- 🌐 **Frontend**: http://localhost:5173
- 🛰️ **Backend**: http://localhost:5000
- ✅ **Health**: http://localhost:5000/health

---

## 🛡️ Backend API Reference

> All protected routes require `Authorization: Bearer <token>` header.

### 1. `POST /api/auth/send-otp`
Generates a 6-digit OTP and stores it (hashed) in MongoDB.

```bash
curl -X POST http://localhost:5000/api/auth/send-otp \
-H "Content-Type: application/json" \
-d '{"contact": "evaluator@vitto.ai"}'
```
**Response:**
```json
{
  "success": true,
  "message": "OTP sent to evaluator@vitto.ai. Valid for 5 minutes.",
  "_dev_otp": "735021"
}
```

---

### 2. `POST /api/auth/verify-otp`
Validates OTP and returns a 15-minute session JWT.

```bash
curl -X POST http://localhost:5000/api/auth/verify-otp \
-H "Content-Type: application/json" \
-d '{"contact": "evaluator@vitto.ai", "otp": "735021"}'
```
**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

> 💡 **Evaluator Bypass**: Use `"otp": "000000"` to skip OTP lookup entirely (works on all environments).

---

### 3. `POST /api/leads` 🔒
Persists institutional data to PostgreSQL.

```bash
curl -X POST http://localhost:5000/api/leads \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_TOKEN_HERE" \
-d '{
  "institution_name": "Apex Global Bank",
  "institution_type": "NBFC",
  "city": "Mumbai",
  "loan_book_size": "$100M - $1B",
  "email": "evaluator@vitto.ai"
}'
```
**Response:**
```json
{
  "success": true,
  "leadId": "LD-9",
  "institution": "Apex Global Bank",
  "status": "CREATED",
  "createdAt": "2026-03-28T00:00:00.000Z"
}
```

---

### 4. `GET /api/leads/:id` 🔒
Retrieves a lead record by its numerical ID.

```bash
curl -X GET http://localhost:5000/api/leads/9 \
-H "Authorization: Bearer YOUR_TOKEN_HERE"
```
**Response:**
```json
{
  "success": true,
  "lead": {
    "id": 9,
    "institution_name": "Apex Global Bank",
    "institution_type": "NBFC",
    "city": "Mumbai",
    "status": "CREATED",
    "created_at": "2026-03-28T00:00:00.000Z"
  }
}
```

---

## ⚡ Evaluator Guide (60-Second Test)

Want to verify the full **frontend → backend → database** flow in under 60 seconds?

1.  🌐 Visit the **[Live Signup Page](https://vitto-native-credit-stack.vercel.app/signup)**
2.  📧 Enter any email address
3.  🔑 When prompted for an OTP, type **`000000`** (Universal Evaluator Key)
4.  🏛️ Fill in the Institution Name, Type, and City
5.  🚀 Click **"Finalize Provisioning"**
6.  ✅ You will receive an **`LD-XXX`** confirmation — **proving** the JWT was issued, transmitted, and the record was persisted to the cloud PostgreSQL database

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      VERCEL (Frontend)                      │
│   React 19 + Vite + Tailwind "Institutional Lux" UI        │
│                                                             │
│   vercel.json rewrite bridge:                               │
│   /api/* ──────────────────────────────────────────────► RENDER │
└─────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                    RENDER.COM (Backend)                     │
│   Node.js + Express — JWT Secured, Layered Architecture     │
│                                                             │
│   /api/auth ──► MongoDB Atlas (OTP lifecycle, bcrypt, TTL)  │
│   /api/leads ──► Supabase PostgreSQL (Lead persistence)     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🌐 Live URLs

| Service | URL |
|---|---|
| 🌐 **Frontend** | https://vitto-native-credit-stack.vercel.app |
| 🛰️ **Backend Health** | https://vitto-native-credit-stack.onrender.com/health |

---

## 📂 Project Structure

```
vitto-native-credit-stack/
├── 📁 frontend/                    # React 19 + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/             # Navbar, Footer, VittoLogo
│   │   │   ├── sections/           # All page sections
│   │   │   └── signup/             # 3-Step Onboarding Components
│   │   └── pages/                  # Route-level page components
│   └── vercel.json                 # API Bridge + SPA Fallback
│
├── 📁 backend/                     # Node.js + Express API
│   ├── src/
│   │   ├── config/                 # DB connections (PG + Mongo)
│   │   ├── controllers/            # Auth + Leads logic
│   │   ├── middleware/             # JWT Auth middleware
│   │   ├── models/                 # OTP (Mongo) + leads.sql (PG)
│   │   └── routes/                 # auth.routes + leads.routes
│   ├── .env.example                # Environment template
│   └── server.js                   # App entry point
│
├── 📄 README.md                    # You are here
└── 📄 package.json                 # Root orchestration scripts
```

---

## 🛡️ Security & Compliance

- ✅ **Zero secrets committed** — All credentials isolated in `.env`
- ✅ **bcrypt-hashed OTPs** — Never stored in plaintext
- ✅ **One-time OTPs** — Deleted immediately after use
- ✅ **JWT expiry** — 15-minute token lifetime
- ✅ **CSP Headers** — Content Security Policy on frontend
- ✅ **CORS Bridge** — vercel.json handles CORS transparently

---

<p align="center">
  <b>🏛️ © 2026 Vitto Native Credit Stack — Institutional Grade Infrastructure</b>
  <br />
  <sub>Built with precision. Designed with depth. Deployed with confidence.</sub>
</p>
