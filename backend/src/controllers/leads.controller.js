const { pool } = require('../config/db');

exports.createLead = async (req, res) => {
  const { email, phone, institution_name, institution_type, city, loan_book_size } = req.body;

  // Basic validation
  if (!institution_name || !institution_type || !city) {
    return res.status(400).json({ success: false, error: 'Required fields missing' });
  }

  try {
    const query = `
      INSERT INTO leads (email, phone, institution_name, institution_type, city, loan_book_size)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [email, phone, institution_name, institution_type, city, loan_book_size];
    
    const result = await pool.query(query, values);
    const newLead = result.rows[0];

    res.status(201).json({ success: true, lead: newLead });
  } catch (err) {
    console.error('Create Lead Error:', err);
    res.status(500).json({ success: false, error: 'Database failure' });
  }
};

exports.getLead = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM leads WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Lead not found' });
    }

    res.status(200).json({ success: true, lead: result.rows[0] });
  } catch (err) {
    console.error('Get Lead Error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
