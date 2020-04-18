const express = require('express');// using package

const router = express.Router(); // using router

// routes
router.use('/doctors',require('./doctor'));

router.use('/patients',require('./patients'));

router.use("/reports", require("./reports"));

// exporting router
module.exports = router;