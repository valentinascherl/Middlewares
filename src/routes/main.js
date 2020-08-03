// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const userLogs = require('../middlewares/userLogs');
const adminMiddleware = require('../middlewares/admin');

/* GET - home page. */
router.get('/', userLogs, mainController.root);
router.get('/admin', userLogs, mainController.admin)
router.post('/admin', adminMiddleware.admin, mainController.admin);

module.exports = router;
