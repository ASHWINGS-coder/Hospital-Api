const express = require('express'); // using package

const router = express.Router(); // using routere

// importing controller
const reportController = require('../controllers/reportController');
// routes
router.get('/:status',reportController.reportsByStatus);
// exporting routes
module.exports = router;