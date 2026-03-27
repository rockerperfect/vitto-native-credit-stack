require('dotenv').config();
const app = require('./src/app');
const { connectPostgres } = require('./src/config/db');
const connectMongo = require('./src/config/mongo');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  let pgPool;
  try {
    // Attempt connections
    await connectPostgres().catch(e => console.error('❌ PG ERROR:', e.message));
    await connectMongo().catch(e => console.error('❌ MONGO ERROR:', e.message));
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Fatal crash during startup:', error);
    process.exit(1);
  }
};

startServer();
