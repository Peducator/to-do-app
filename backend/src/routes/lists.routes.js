const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/lists.controllers');
const authMiddleware = require('../middlewares/auth.middlewares');

router.get('/getall', authMiddleware, Controllers.getAll);
router.post('/create', authMiddleware, Controllers.createnew);
router.put('/update/:id', authMiddleware, Controllers.updatetodo);
router.delete('/delete/:id', authMiddleware, Controllers.deletetodo);

module.exports = router;