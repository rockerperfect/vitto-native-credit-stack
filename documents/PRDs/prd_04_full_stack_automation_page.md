# PRD_04 — Full Stack Automation Page (Lending Lifecycle)

## 1. Objective

Demonstrate that Vitto is not a point solution but a **full-stack operational infrastructure** covering the entire lending lifecycle.

The page must:
- Show clear grouping of 29+ modules into 5 layers
- Establish logical flow from acquisition → underwriting → servicing → collections → CRM
- Reinforce that all layers are connected via a shared data and decisioning system

Primary conversion: **Book Demo**

---

## 2. Route Definition

- Route: `/lifecycle`
- Page Component: `Lifecycle.jsx`

---

## 3. Page Structure

```
Lifecycle.jsx
│
├── LifecycleHero
├── LifecycleFlowDiagram
├── LayerSection (Reusable ×5)
├── CrossLayerIntelligence
└── CTASection
```

---

## 4. LifecycleHero

### Purpose
Introduce full-stack automation positioning

### Copy
**Heading:**
Full-Stack Lending Automation, Structured as a Decision System

**Sub-copy:**
Vitto connects acquisition, underwriting, servicing, and collections into a single operational flow. Each layer shares data and decision outputs, eliminating system fragmentation.

---

## 5. LifecycleFlowDiagram

### Purpose
Visualize end-to-end flow

### Flow
Acquisition → Underwriting → Disbursement → LMS → Collections → Closure

### UI Requirement
- Horizontal flow diagram
- Each stage clickable → scrolls to layer section

---

## 6. Layer Architecture

### Design Principle
Each layer:
- Has a clear operational responsibility
- Contains 3–5 tightly grouped modules
- Feeds data into the next layer

---

## 7. Layer A — Customer Acquisition

### Icon
User / Funnel icon

### Purpose
Capture and qualify incoming demand

### Modules
- Lead Management
  - Multi-source ingestion (web, partners, APIs)
- Partner Onboarding
  - Enable DSAs, fintech partners
- Journey Orchestration
  - DIY / Assisted / Partner / Employee journeys
- Eligibility Pre-Check
  - Lightweight rule-based filtering before full underwriting

### Output
- Qualified lead + initial data payload

---

## 8. Layer B — Underwriting & LOS

### Icon
Shield / Document icon

### Purpose
Evaluate risk and execute loan origination

### Modules
- KYC (Individual + Entity)
  - Identity verification and compliance checks
- UCIC & Deduplication
  - Single customer identity resolution
- Document Fetch & Analyzer
  - OCR + structured extraction
- Rule Engine
  - Policy-based eligibility checks
- Underwriting Engine
  - Combines model score + rules
- E-Sign & Disbursement
  - Agreement execution + fund transfer

### Output
- Credit decision + disbursed loan

---

## 9. Layer C — Collections Intelligence

### Icon
Recovery / Graph icon

### Purpose
Optimize recovery and reduce delinquency

### Modules
- Case Allotment Engine
  - Assign accounts based on priority and geography
- PTP Capture
  - Promise-to-pay tracking
- Payment Gateway Integration
  - Direct payment links and reconciliation
- Omni-channel Communication
  - WhatsApp, SMS, AI calls
- Recovery Scoring
  - Predict probability of recovery

### Output
- Optimized recovery actions

---

## 10. Layer D — Loan Management System (LMS)

### Icon
Ledger icon

### Purpose
Manage active loan lifecycle

### Modules
- Ledger Creation
  - Loan account and repayment schedule
- Insurance Auto Deduct
  - Embedded insurance handling
- Loan Closure
  - Final settlement workflows
- Debt Tagging
  - Classification (NPA, restructuring, etc.)

### Output
- Updated loan state + financial records

---

## 11. Layer E — CRM & Communication

### Icon
Dashboard / Communication icon

### Purpose
Provide unified visibility and engagement

### Modules
- 360 Customer View
  - Consolidated profile across lifecycle
- Service Management
  - Ticketing and issue resolution
- Internal Hub
  - Team collaboration and notes
- Campaign Engine
  - Targeted outreach (cross-sell, reminders)
- Reporting & Analytics
  - Portfolio dashboards and insights

### Output
- Operational visibility + engagement actions

---

## 12. CrossLayerIntelligence

### Purpose
Explain how layers interact through shared intelligence

### Key Concepts
- Unified Data Layer
  - No duplication across systems
- Feedback Loops
  - Collections data feeds back into underwriting models
- Real-Time Decisioning
  - Actions triggered based on latest data

### Copy
Decisions are not isolated within a module. Every layer contributes to and consumes from a shared decisioning system.

---

## 13. CTASection

### Copy
Replace fragmented systems with a unified lending infrastructure.

### Buttons
- Book a Demo
- Explore Platform

---

## 14. UI/UX Requirements

- Each layer displayed as expandable card
- Hover: highlight border and icon
- Smooth scroll navigation between layers
- Sticky side navigation (desktop)

---

## 15. Data Requirements

### Frontend State
- Active layer
- Expanded module details

### Future API (Optional)
- GET /api/layers
- GET /api/modules

---

## 16. Evaluation Alignment

- Covers 5-layer grouping (15%)
- Demonstrates operational clarity
- Avoids raw listing of modules

---

END OF PRD_04

