// importing package
const express = require('express');
const passport = require('passport');
const passportJWT = require('passport-jwt');

// using router
const router = express.Router();

// importing controller
const patitentController = require('../controllers/patitentController')

// routes
router.post('/register',/*passport.authenticate('jwt',{session:false}),*/patitentController.Register);

router.post("/:id/create_report",patitentController.createReport);

router.get("/:id/all_reports", patitentController.allReports);

// exporting routes
module.exports = router;