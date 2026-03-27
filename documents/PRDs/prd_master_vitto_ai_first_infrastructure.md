# PRD_MASTER — Vitto AI-Native BFSI Infrastructure

## 1. System Overview

Vitto is an AI-native digital credit infrastructure platform designed for Banks, NBFCs, and MFIs. It is not a SaaS layer or LOS replacement with AI added. The system is built around decisioning, data unification, and lifecycle automation.

The platform operates across the full lending lifecycle:
- Customer Acquisition
- Underwriting & Decisioning
- Loan Origination (LOS)
- Loan Management (LMS)
- Collections Intelligence
- CRM & Communication
- Agentic AI Layer

Core principle: Decisioning sits at the center. Every module feeds and consumes structured data for real-time credit decisions.

---

## 2. System Architecture (High-Level)

### Frontend Layer
- React.js (Functional Components)
- Tailwind CSS (Custom theme)
- Component-driven architecture

### Backend Layer
- Node.js + Express
- REST API design
- JWT-based session management

### Data Layer
- PostgreSQL → Lead + institutional data
- MongoDB → OTP sessions (TTL: 10 minutes)

### AI Layer (Conceptual)
- RAG pipelines over internal credit policies
- Domain-trained Small Language Models (SLMs)
- Rule Engine + ML hybrid decisioning

---

## 3. Core Platform Layers (5-Layer Automation Model)

### Layer A — Customer Acquisition
- Lead ingestion
- Partner onboarding
- Multi-channel onboarding (DIY / Assisted / Partner / Employee)

### Layer B — Underwriting & LOS
- KYC (Individual + Entity)
- UCIC + deduplication
- Document analyzer
- Rule engine
- Underwriting workflows
- E-sign + disbursement

### Layer C — Collections
- Case allotment
- PTP capture
- Payment gateway integration
- Omni-channel communication (WhatsApp, SMS, AI calls)

### Layer D — LMS
- Ledger management
- Insurance deduction
- Loan closure
- Debt tagging

### Layer E — CRM & Communication
- 360 customer view
- Ticketing / service workflows
- Campaigns
- Reporting + analytics

---

## 4. Website System Scope

This project builds the public-facing technical website for Vitto.

Pages include:
1. Homepage
2. AI-First Platform
3. Lending Lifecycle
4. Collections Intelligence
5. Agentic AI
6. API Infrastructure
7. About / Why Vitto
8. Contact / Demo
9. Self Sign-Up

The website is not marketing-focused. It is a technical product interface for decision-makers.

---

## 5. Folder Structure (Monorepo Recommended)

```
vitto-native-credit-stack/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── sections/
│   │   │   └── ui/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Platform.jsx
│   │   │   ├── Lifecycle.jsx
│   │   │   ├── Collections.jsx
│   │   │   ├── AgenticAI.jsx
│   │   │   ├── APIInfra.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Signup.jsx
│   │   ├── hooks/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   ├── styles/
│   │   └── App.jsx
│   │
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   │   ├── postgres/
│   │   │   └── mongo/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── mongo.js
│   │   └── env.js
│   │
│   ├── migrations/
│   ├── package.json
│   └── server.js
│
├── docs/
│   ├── PRDs/
│   └── diagrams/
│
└── README.md
```

---

## 6. Backend API Contracts

### Auth APIs
- POST /api/auth/send-otp
- POST /api/auth/verify-otp

### Lead APIs
- POST /api/leads
- GET /api/leads/:id

---

## 7. Data Models

### PostgreSQL — Leads Table

```
leads (
  id UUID PRIMARY KEY,
  email TEXT,
  phone TEXT,
  institution_name TEXT,
  institution_type TEXT,
  city TEXT,
  loan_book_size TEXT,
  created_at TIMESTAMP,
  status TEXT
)
```

### MongoDB — OTP Session

```
{
  contact: String,
  otp: String,
  expiresAt: Date (TTL index: 600 seconds)
}
```

---

## 8. AI Layer (Technical Positioning)

### RAG Pipeline
- Input: user query / agent request
- Retrieval: credit policy + underwriting rules
- Context assembly
- SLM inference

### Why SLM over LLM
- Lower hallucination risk
- Deterministic outputs
- Policy-bound reasoning

### Agents
- Borrower Agent → self-service
- Field Agent → assisted collections
- Underwriter Agent → policy lookup

---

## 9. UX Requirements

- Responsive (mobile + desktop)
- Hover states on all cards and CTAs
- Loading states for API calls
- Smooth scroll transitions

---

## 10. Evaluation Alignment

This PRD ensures:
- Clear sitemap foundation
- Deep AI architecture positioning
- 5-layer automation grouping

---

## 11. Constraints

- No marketing fluff
- No generic fintech copy
- All modules must map to real lending operations
- Every UI component must correspond to backend or conceptual system

---

END OF MASTER PRD

