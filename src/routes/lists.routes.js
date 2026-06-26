const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/lists.controllers');

router.get('/getall', Controllers.getAll);

module.exports = router;