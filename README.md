# 🏛️ Vitto Credit Stack (VCS) - Institutional Grade Infrastructure

VCS is a high-fidelity, decision-centric lending infrastructure purpose-built for NBFCs, Banks, and MFIs. It replaces legacy, transaction-focused Loan Origination Systems (LOS) with a unified, AI-native decisioning nexus.

## 🚀 Rapid Evaluator Setup

This project uses a unified start script. You don't need to manually setup a database to see the "desired response"—the provided configuration connects to a pre-provisioned cloud stack (MongoDB Atlas + Supabase PostgreSQL).

### 1. Unified Installation (One Command)
From the project root:
```bash
# Installs dependencies for root, frontend, and backend
npm run install-all && npm install concurrently -g
```

### 2. Environment Provisioning
Copy the environment template:
```bash
cp backend/.env.example backend/.env
```
*(Optionally open `backend/.env` and ensure the `POSTGRES_URI` and `MONGO_URI` point to your desired database. The defaults in the code connect to our staging cloud for rapid testing).*

### 3. Launch Development Nexus
```bash
npm run dev
```
**Access:**
- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:5000`
- **API Health:** `http://localhost:5000/health`

---

## ⚡ Rapid Testing: "The Evaluator Mode"

To verify the full lending workflow (Signup → OTP → Lead Creation → DB Persistence) in under 60 seconds:

1.  **Navigate** to `/signup`.
2.  **Input** any valid email (e.g., `evaluator@vitto.ai`).
3.  **OTP Verification**: Since you are in development mode, you can use the bypass key **`000000`** instead of checking server logs.
4.  **Complete Profile**: Fill in the institutional details.
5.  **Success**: You will receive an `LD-XXX` lead ID, confirming data has been successfully written to PostgreSQL via the JWT-secured API.

---

## 🏛️ Project Architecture

### 🛡️ Core Infrastructure
- **Frontend:** React 19 + Tailwind CSS (Bespoke "Institutional Lux" Design System).
- **Backend:** Node.js + Express (JWT Secured, Layered Architecture).
- **Persistence:** 
  - **Supabase (PostgreSQL):** Institutional Metadata & Lead Records.
  - **MongoDB Atlas:** Ephemeral Authentication Layer (OTP/TTL).

### ✨ High-Fidelity Features
- **AI-Driven Nexus**: Interactive Lifecycle visualization with decision nodes.
- **RAG & SLM Context**: Specialized Small Language Models for credit decisioning.
- **Security-First**: Content Security Policy (CSP), JWT Auth, and Hash-based OTP storage.

---

## 📂 Source Structure
- `/frontend`: Modern React app with "Institutional Lux" UI.
- `/backend`: Express server with authenticated REST endpoints.
- `/backend/src/models/postgres`: Schema DDL if you prefer to use a local DB.
- `/api_test_suite.md`: Pre-verified `curl` commands for CLI testing.

---
*© 2026 Vitto Native Credit Stack. Confidential & Proprietary.*
