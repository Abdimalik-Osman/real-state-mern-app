const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs');
const User = require("../models/userModel");
const  errorHandler  = require('../utils/error');
const jwt = require("jsonwebtoken")
exports.SingUp = async(req,res,next)=>{
try {
    console.log("here")
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

// sign in 
exports.LogIn = async(req, res, next) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({ email: email})
        if(!user) return next(errorHandler(404,'User not found'));
        const validPassword = bcryptjs.compareSync(password, user.password);

        if (!validPassword) return next(errorHandler(404,"Invalid credentials"));
        // this line is used to leave the password field
        const {password:pass, ...rest} = user._doc; 
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET);

        res.cookie("access_token",token,{httpOnly: true }).json(rest);
    } catch (error) {
        next(errorHandler(500,error));
    }
}