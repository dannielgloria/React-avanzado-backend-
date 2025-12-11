const express = require('express');
const router  = express.Router();
const authController = require('../controllers/auth.controller');

// Ruta de ejemplo para el login ==> http://localhost:3000/auth/login
router.post('/login', authController.login);

// Ruta de ejemplo para el registro ==> http://localhost:3000/auth/register
router.post('/register', authController.register);

module.exports = router;