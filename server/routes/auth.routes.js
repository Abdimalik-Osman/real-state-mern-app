const express = require('express');
const AuthController = require("../controllers/auth.controller")
const router = express.Router();


//sign up
router.post('/signup',AuthController.SingUp )
// login
router.post('/login',AuthController.LogIn )
// google sign in
router.post('/google',AuthController.google )
module.exports = router