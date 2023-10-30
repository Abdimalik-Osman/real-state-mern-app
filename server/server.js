const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const UserRouter = require("./routes/user.route")
// connect to Mongodb 
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("connection established successfully");
})
.catch((err) =>{ console.error(err.message)});
const app = express();


app.use("/api/users",UserRouter)
app.listen(4000,()=>{
    console.log("Server is listening on port 4000")
})