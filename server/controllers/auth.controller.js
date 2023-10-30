const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs');
const User = require("../models/userModel");
const  errorHandler  = require('../utils/error');

exports.SingUp = async(req,res,next)=>{
try {
    
    const user = await User.findOne({username: req.body.username});
    if(user?.email == req.body?.email || user?.username == req.body?.username){
        next(errorHandler(400,"username or email already in uses"))
    }
    const hashedPassword = bcryptjs.hashSync(req.body.password,10);
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword
    });
    await newUser.save();
    res.status(201).json({message:"user registered successfully",status:"success"})
} catch (error) {
    next(errorHandler(500,error.message));
    // return res.status(500).json({message: error.message,status:"failed"}); 
}
}