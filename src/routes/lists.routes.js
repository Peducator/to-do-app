const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/lists.controllers');
const authMiddleware = require('../middlewares/auth.middlewares');

router.get('/getall', authMiddleware, Controllers.getAll);
router.post('/create', authMiddleware, Controllers.createnew);

module.exports = router;