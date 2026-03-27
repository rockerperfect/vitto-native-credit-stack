const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Vitto API Infrastructure is running' });
});

const authRoutes = require('./routes/auth.routes');
const leadRoutes = require('./routes/leads.routes');

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);

module.exports = app;
