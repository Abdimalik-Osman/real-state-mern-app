const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs');
const User = require("../models/userModel")

exports.SingUp = async(req,res)=>{
try {
    
    const user = await User.findOne({username: req.body.username});
    if(user?.email == req.body?.email || user?.username == req.body?.username){
        return res.status(400).json({message:"this username already exists",status:"fail"})
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
    return res.status(500).json({message: error.message,status:"failed"}); 
}
}