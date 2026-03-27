const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI,
});

const connectPostgres = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL Connected...');
    
    // Create leads table if not exists
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS leads (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT,
        phone TEXT,
        institution_name TEXT,
        institution_type TEXT,
        city TEXT,
        loan_book_size TEXT,
        status TEXT DEFAULT 'new',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;
    await pool.query(createTableQuery);
  } catch (err) {
    console.error('PostgreSQL Connection Error:', err.message);
    process.exit(1);
  }
};

module.exports = { pool, connectPostgres };
