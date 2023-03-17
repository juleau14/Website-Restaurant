const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});


router.use('*', (req, res, next) => {
    res.redirect('/home');
    next();
});


module.exports = router;