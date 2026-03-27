-- PostgreSQL Migration: Leads Table
-- Run this manually on your PostgreSQL database

CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  institution_name VARCHAR(255) NOT NULL,
  institution_type VARCHAR(50) CHECK (institution_type IN ('Bank', 'NBFC', 'MFI')) NOT NULL,
  city VARCHAR(100) NOT NULL,
  loan_book_size VARCHAR(50),
  email VARCHAR(255),
  phone VARCHAR(20),
  status VARCHAR(50) DEFAULT 'CREATED',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast lookup by email or phone
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
