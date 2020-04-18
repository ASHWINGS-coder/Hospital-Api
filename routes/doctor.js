const express = require('express');// importing package

const router = express.Router();// using router

// importing controllers
const doctorController = require('../controllers/doctorController');

// routes
router.post('/register',doctorController.Register);

router.post('/login',doctorController.Login);

// exporting routes
module.exports = router;