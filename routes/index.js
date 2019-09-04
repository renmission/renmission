const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//nodemailer
var nodemailer = require('nodemailer');
var config = require('../config/config');
var transporter = nodemailer.createTransport(config.mailer);


router.get('/', (req, res) => {
    res.render('index', {
        title: 'Renato Mission - Backend Developer and Designer'
    });
});



module.exports = router;