const express = require('express');
const AuthController = require("../controllers/auth.controller")
const router = express.Router();


//sign up
router.post('/signup',AuthController.SingUp )
module.exports = router