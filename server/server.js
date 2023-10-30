const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("connection established successfully");
})
.catch(err => console(err.message));
const app = express();

app.listen(4000,()=>{
    console.log("Server is listening on port 4000")
})