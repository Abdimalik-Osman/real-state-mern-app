const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require( 'cookie-parser');
dotenv.config();
const mongoose = require("mongoose");
const UserRoutes = require("./routes/user.route")
const AuthRoutes = require("./routes/auth.routes");
// connect to Mongodb 
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("connection established successfully");
})
.catch((err) =>{ console.error(err.message)});
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users",UserRoutes)
app.use("/api/auth",AuthRoutes)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Error";
    return res.status(statusCode).json({message,success:false,statusCode})
});
app.listen(4000,()=>{
    console.log("Server is listening on port 4000")
})