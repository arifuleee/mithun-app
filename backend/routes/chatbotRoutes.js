// routes/chatbotRoutes.js

const express = require('express');
const { chat } = require('../controllers/chatbotController');
const router = express.Router();

router.post('/chat', chat);

module.exports = router;
