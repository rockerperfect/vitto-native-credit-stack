const { pool } = require('../config/db');

// POST /api/leads  (JWT protected)
const createLead = async (req, res) => {
  try {
    const { institution_name, institution_type, city, loan_book_size, email, phone } = req.body;

    if (!institution_name || !institution_type || !city) {
      return res.status(400).json({ success: false, error: 'institution_name, institution_type, and city are required' });
    }

    const result = await pool.query(
      `INSERT INTO leads (institution_name, institution_type, city, loan_book_size, email, phone)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, institution_name, status, created_at`,
      [institution_name, institution_type, city, loan_book_size || null, email || null, phone || null]
    );

    const lead = result.rows[0];

    res.status(201).json({
      success: true,
      leadId: `LD-${lead.id}`,
      institution: lead.institution_name,
      status: lead.status,
      createdAt: lead.created_at,
    });
  } catch (err) {
    console.error('[createLead error]:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

// GET /api/leads/:id (JWT protected)
const getLead = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `SELECT id, institution_name, institution_type, city, loan_book_size, email, phone, status, created_at
       FROM leads WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Lead not found' });
    }

    res.status(200).json({ success: true, lead: result.rows[0] });
  } catch (err) {
    console.error('[getLead error]:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

module.exports = { createLead, getLead };
