const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// POST request to signup new user
router.post('/signup', authController.signup);

// POST request to signup new user
router.post('/login', authController.login);

module.exports = router;