require('dotenv').config();
const app = require('./src/app');
const { connectPostgres } = require('./src/config/db');
const connectMongo = require('./src/config/mongo');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Database connections initialized here
    await connectPostgres();
    await connectMongo();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
