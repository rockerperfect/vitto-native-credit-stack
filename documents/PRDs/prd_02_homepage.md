# PRD_02 — Homepage (React + Copy + UI States)

## 1. Objective

The homepage must establish Vitto as AI-native credit infrastructure within the first scroll. It should communicate:
- This is not retrofitted AI
- This is not a collection of vendors
- This is a unified decisioning system across the lending lifecycle

Primary conversion: **Book a Demo**
Secondary conversion: **Explore Platform**

---

## 2. Route Definition

- Route: `/`
- Page Component: `Home.jsx`

---

## 3. Component Architecture

```
Home.jsx
│
├── HeroSection
├── ProblemSection
├── SolutionSection
├── AILayerSection
├── BusinessImpactSection
├── SocialProofSection
├── CTABanner
└── Footer
```

All sections must be modular and reusable.

---

## 4. Section-by-Section Specification

### 4.1 HeroSection

#### Purpose
Establish positioning and drive immediate action.

#### Layout
- Left: Text
- Right: Dashboard mock (image or animated placeholder)

#### Copy
**Heading:**
AI-First Infrastructure for Modern Financial Services

**Sub-copy:**
Vitto is built as a unified decisioning system for Banks, NBFCs, and MFIs. It replaces fragmented LOS, LMS, and rule engines with a single architecture where data, models, and policy operate together.

**CTAs:**
- Primary: Book a Demo
- Secondary: Explore Platform

#### UI Requirements
- CTA hover: background transitions to darker red
- Button press: slight scale-down (0.98)
- Image: subtle floating animation (CSS keyframes)

#### Tailwind Classes (example)
```
bg-primary text-white flex items-center justify-between px-12 py-20
```

---

### 4.2 ProblemSection

#### Purpose
Define current industry inefficiencies.

#### Layout
- 4 cards (grid: 2x2 desktop, stacked mobile)

#### Cards
1. Fragmented Systems
   - LOS, LMS, and CRM operate in silos with no shared data layer

2. Non-AI Native Vendors
   - AI is layered on top of legacy systems without integration into decision flows

3. Reactive Collections
   - Collections rely on manual prioritization with no predictive intelligence

4. Static Rule Engines
   - Rules are fixed and do not adapt to portfolio behavior

#### UI Requirements
- Hover: card border turns accent color
- Elevation: shadow-lg on hover

---

### 4.3 SolutionSection

#### Purpose
Explain Vitto’s architecture-level solution.

#### Layout
- Left: Copy
- Right: Feature list

#### Copy
AI-native decisioning meets full stack operational automation.

Vitto integrates data ingestion, model inference, and rule execution into a single pipeline. Decisions are generated in real time, with full traceability to policy and data inputs.

#### Features
- Domain-trained Models
- Unified Architecture
- Explainability

#### UI Requirements
- Icons aligned left of text
- Hover: slight translate-x

---

### 4.4 AILayerSection

#### Purpose
Expose core modules driving decisioning.

#### Layout
- 6 cards (3x2 grid)

#### Modules
1. Data-Based Assessment
   - Aggregates bureau, banking, and behavioral data

2. ML Model
   - Risk scoring using supervised models trained on portfolio data

3. Rule Engine & Decisioning
   - Policy execution with deterministic outputs

4. Fraud Intelligence
   - Detects anomalies across identity, device, and transaction layers

5. Collection Intelligence
   - Predicts recovery probability and prioritizes accounts

6. Agentic AI Layer
   - Executes query resolution and workflow assistance via SLMs

#### UI Requirements
- Each card includes: title, description, "Explore"
- Hover: border + subtle glow

---

### 4.5 BusinessImpactSection

#### Purpose
Translate system into measurable outcomes.

#### Metrics
- Faster credit decisions — reduced turnaround from days to minutes
- Reduced portfolio risk — improved risk segmentation accuracy
- Increased recovery rates — optimized allocation of collection efforts
- Seamless integrations — pre-built connectors for core systems

#### UI Requirements
- 4 stat blocks
- Large numeric emphasis

---

### 4.6 SocialProofSection

#### Purpose
Establish trust and adoption.

#### Layout
- Partner logos row
- 2 testimonial cards

#### Testimonial Structure
- Quote
- Name
- Designation
- Institution

---

### 4.7 CTABanner

#### Purpose
Drive conversion at page end.

#### Layout
- Full width red background

#### Copy
Discover the key to grow your business

#### CTAs
- Book a Demo
- Learn More

#### UI Requirements
- Strong contrast text (white on red)

---

### 4.8 Footer

#### Layout
- 3 columns: Pages, Platform, Partners
- Newsletter input

#### Elements
- Logo
- Tagline
- Social links

---

## 5. State Management

- No global state required
- Local state for:
  - CTA loading
  - Newsletter input

---

## 6. API Integration

### Newsletter (Optional)
POST `/api/newsletter`

---

## 7. Responsiveness

- Mobile-first design
- Breakpoints:
  - md: grid adjustments
  - lg: full layout split

---

## 8. Accessibility

- Buttons must have aria-labels
- Contrast ratio ≥ WCAG AA

---

## 9. Performance

- Lazy load images
- Use React.memo for static sections

---

## 10. Deliverable Expectation

- Fully functional React page
- Clean component separation
- No placeholder lorem text

---

END OF PRD_02

