const express = require('express');
const router = express.Router();
const controller = require('../controllers/logController');

router.post('/', controller.createLog);
router.get('/', controller.getLogs);

module.exports = router;
