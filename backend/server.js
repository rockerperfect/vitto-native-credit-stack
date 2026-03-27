require('dotenv').config();
const app = require('./src/app');
// const connectDB = require('./config/db');
// const connectMongo = require('./config/mongo');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Database connections will be initialized here once configured
    // await connectDB();
    // await connectMongo();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
