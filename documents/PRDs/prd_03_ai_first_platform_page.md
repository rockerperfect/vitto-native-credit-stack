# PRD_03 — AI-First Platform Page

## 1. Objective

Explain Vitto’s AI system as a **decisioning infrastructure**, not a feature layer. The page must demonstrate how data, models, rules, and agents interact to produce **policy-bound, explainable credit decisions**.

Primary conversion: **Explore Platform / Book Demo**

---

## 2. Route Definition

- Route: `/platform`
- Page Component: `Platform.jsx`

---

## 3. Page Structure

```
Platform.jsx
│
├── PlatformHero
├── DecisioningArchitecture
├── ModulesGrid
├── AgenticAISection
├── RAGPipelineSection
├── SLMvsLLMSection
└── CTASection
```

---

## 4. PlatformHero

### Purpose
Set the framing: Vitto is a **decision system built on data + models + policy**.

### Copy
**Heading:**
AI-First Decisioning Infrastructure for Lending

**Sub-copy:**
Vitto combines data ingestion, model inference, and rule execution into a single pipeline. Every decision is traceable to inputs, policy, and model outputs.

---

## 5. DecisioningArchitecture

### Purpose
Visually and textually explain system flow.

### Architecture Flow
1. Data Ingestion (bureau, banking, internal systems)
2. Feature Engineering
3. ML Model Inference
4. Rule Engine Execution
5. Decision Output (approve / reject / refer)
6. Downstream Action (LOS, LMS, collections)

### UI Requirement
- Horizontal pipeline diagram (React SVG)
- Each node clickable → reveals details

---

## 6. ModulesGrid (Core AI Modules)

### Layout
- 3x2 grid

### Modules

#### 6.1 Data-Based Assessment
- Aggregates bureau, bank statements, device, and behavioral signals
- Normalizes into structured feature store
- Supports real-time and batch ingestion

#### 6.2 ML Model
- Supervised learning models for risk scoring
- Versioned models with audit trails
- Feature importance tracking for explainability

#### 6.3 Rule Engine & Decisioning
- Deterministic policy execution
- Configurable rules (thresholds, eligibility)
- Combines model output + policy constraints

#### 6.4 Fraud Intelligence
- Device fingerprinting
- Identity consistency checks
- Transaction anomaly detection

#### 6.5 Collection Intelligence
- Recovery probability scoring
- Dynamic prioritization of accounts
- Strategy allocation (agent vs automated)

#### 6.6 Agentic AI Layer
- Executes query handling and workflow support
- Operates on internal knowledge + policy

---

## 7. AgenticAISection (Critical Section)

### Purpose
Explain how agents operate in BFSI constraints.

### Core Principle
Agents do not generate free-form responses. They operate within **retrieved policy context and structured outputs**.

### Agents

#### Borrower Agent
- Handles EMI queries, statements, payment status
- Pulls data from LMS + policy constraints

#### Field Agent
- Provides next-best-action for collections
- Uses recovery probability + customer history

#### Underwriter Agent
- Answers policy questions
- Provides justification for decisions

---

## 8. RAGPipelineSection

### Purpose
Explain retrieval-augmented decisioning.

### Pipeline
1. Query Input (user / system trigger)
2. Retrieval Layer
   - Credit policy documents
   - Underwriting rules
   - Historical decisions
3. Context Assembly
4. SLM Inference
5. Structured Output

### Key Constraints
- No direct generation without retrieval
- All outputs tied to source documents

### UI Requirement
- Step-by-step vertical flow diagram

---

## 9. SLM vs LLM Section

### Purpose
Differentiate Vitto from generic AI systems.

### Problem with Public LLMs
- No access to internal credit policy
- High hallucination risk
- Non-deterministic outputs
- No auditability

### SLM Approach (Vitto)
- Trained on domain-specific data (credit policies, decision logs)
- Smaller parameter size → controlled outputs
- Deterministic behavior
- Fully auditable inference

### Comparison Table

| Capability | Public LLM | Vitto SLM |
|-----------|------------|-----------|
| Policy Awareness | No | Yes |
| Hallucination Risk | High | Controlled |
| Explainability | Low | High |
| Determinism | No | Yes |
| Compliance Ready | No | Yes |

---

## 10. CTASection

### Copy
Explore how decisioning infrastructure replaces fragmented lending systems.

### Buttons
- Explore Platform
- Book a Demo

---

## 11. UI/UX Requirements

- Hover states on all module cards
- Expand/collapse for technical details
- Smooth transitions between sections
- Dark theme consistency

---

## 12. Data Requirements

### Frontend State
- Active module (for detail view)
- Diagram interaction state

### Backend (Optional for future)
- GET /api/modules
- GET /api/policies

---

## 13. Evaluation Alignment

- Demonstrates deep AI understanding (20%)
- Shows system-level thinking
- Explains SLM vs LLM clearly

---

END OF PRD_03

