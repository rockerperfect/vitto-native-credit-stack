const express = require('express');
const router = express.Router();
const leadsController = require('../controllers/leads.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Protect creation route with JWT
router.post('/', authMiddleware, leadsController.createLead);
router.get('/:id', authMiddleware, leadsController.getLead);

module.exports = router;
