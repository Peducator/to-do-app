const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/auth.controllers');

router.post('/register', Controllers.register);
router.post('/login', Controllers.login);

module.exports = router;
