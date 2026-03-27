const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

const connectPostgres = async () => {
  try {
    const client = await pool.connect();
    console.log('[PostgreSQL] Connected successfully');
    client.release();
  } catch (err) {
    console.error('[PostgreSQL] Connection failed:', err.message);
    throw err;
  }
};

module.exports = { pool, connectPostgres };
